#!/usr/bin/env bash
# Integration tests for git-worktree-manager. Run with: bash test/git-worktree-manager.test.sh
set -eu

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
BIN=$SCRIPT_DIR/../bin/git-worktree-manager
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

export HOME="$TMP/home"
export GIT_CONFIG_NOSYSTEM=1
export GIT_AUTHOR_NAME=test GIT_AUTHOR_EMAIL=test@example.com
export GIT_COMMITTER_NAME=test GIT_COMMITTER_EMAIL=test@example.com
mkdir -p "$HOME"
unset GIT_WORKTREE_MANAGER_PARENT_DIR GIT_WORKTREE_MANAGER_ENV_PATTERNS GIT_WORKTREE_MANAGER_ENV_EXCLUDES

FAILURES=0
CASE_NUMBER=0

fail() {
  printf '  FAIL: %s\n' "$*" >&2
  FAILURES=$((FAILURES + 1))
}

assert_file() {
  [ -f "$1" ] || fail "expected file $1"
}

assert_no_file() {
  [ ! -e "$1" ] || fail "unexpected file $1"
}

assert_contains() {
  case $1 in
    *"$2"*) ;;
    *) fail "expected output to contain '$2', got: $1" ;;
  esac
}

assert_equal() {
  [ "$1" = "$2" ] || fail "expected '$2', got '$1'"
}

# Creates a repository whose main branch is pushed to a bare origin.
# Sets REPO to the main worktree path. Worktrees are created next to it.
new_repo() {
  CASE_NUMBER=$((CASE_NUMBER + 1))
  BASE="$TMP/case$CASE_NUMBER"
  mkdir -p "$BASE"
  git init -q --bare "$BASE/origin.git"
  REPO=$BASE/main
  git init -q -b main "$REPO"
  git -C "$REPO" remote add origin "$BASE/origin.git"
  mkdir -p "$REPO/packages/app" "$REPO/node_modules/dep"
  printf '{}\n' > "$REPO/package.json"
  printf '{}\n' > "$REPO/packages/app/package.json"
  printf '{}\n' > "$REPO/node_modules/dep/package.json"
  printf '.env*\n' > "$REPO/.gitignore"
  git -C "$REPO" add . && git -C "$REPO" commit -q -m init
  git -C "$REPO" push -q -u origin main
  printf 'ROOT=1\n' > "$REPO/.env"
  printf 'LOCAL=1\n' > "$REPO/.env.local"
  printf 'EXAMPLE=1\n' > "$REPO/.env.example"
  printf 'APP=1\n' > "$REPO/packages/app/.env.development"
  printf 'DEP=1\n' > "$REPO/node_modules/dep/.env"
}

run_in() {
  (cd "$1" && shift && "$BIN" "$@")
}

test_add_copies_env_files() {
  new_repo
  local base=$BASE
  run_in "$REPO" add --branchName=feature >/dev/null
  local wt=$base/feature
  assert_equal "$(git -C "$wt" branch --show-current)" feature
  assert_file "$wt/.env"
  assert_file "$wt/.env.local"
  assert_file "$wt/packages/app/.env.development"
  assert_no_file "$wt/.env.example"
  assert_no_file "$wt/node_modules/dep/.env"
}

test_add_refuses_checked_out_branch() {
  new_repo
  if run_in "$REPO" add --branchName=main --dirName=other >/dev/null 2>&1; then
    fail "add should refuse a branch already checked out in the main worktree"
  fi
}

test_config_file_and_env_precedence() {
  new_repo
  local base=$BASE
  mkdir -p "$base/wt"
  printf '[worktree-manager]\n\tparentDir = %s\n\tenvPatterns = .env.local\n' "$base/wt" > "$REPO/.git-worktree-manager"
  run_in "$REPO" add --branchName=from-config >/dev/null
  assert_file "$base/wt/from-config/.env.local"
  assert_no_file "$base/wt/from-config/.env"

  mkdir -p "$base/env"
  GIT_WORKTREE_MANAGER_ENV_PATTERNS=.env GIT_WORKTREE_MANAGER_PARENT_DIR="$base/env" \
    run_in "$REPO" add --branchName=from-env >/dev/null
  assert_file "$base/env/from-env/.env"
  assert_no_file "$base/env/from-env/.env.local"
  rm "$REPO/.git-worktree-manager"
}

test_remove_safety_checks() {
  new_repo
  local base=$BASE
  run_in "$REPO" add --branchName=gone >/dev/null
  local wt=$base/gone
  printf 'x\n' > "$wt/untracked.txt"
  if run_in "$REPO" remove --dirName=gone >/dev/null 2>&1; then
    fail "remove should refuse a dirty worktree"
  fi
  rm "$wt/untracked.txt"

  git -C "$wt" commit -q --allow-empty -m local-change
  if run_in "$REPO" remove --dirName=gone >/dev/null 2>&1; then
    fail "remove should refuse a worktree with unpushed commits"
  fi
  git -C "$wt" push -q -u origin gone

  run_in "$REPO" remove --dirName=gone >/dev/null
  assert_no_file "$wt"
}

test_rename_and_switch() {
  new_repo
  local base=$BASE
  run_in "$REPO" add --branchName=feature >/dev/null
  run_in "$REPO" rename --oldDirName=feature --newDirName=renamed >/dev/null
  assert_no_file "$base/feature"
  assert_equal "$(git -C "$base/renamed" branch --show-current)" feature
  git -C "$base/renamed" status >/dev/null

  run_in "$REPO" switch --fromDirName=renamed --branchName=other >/dev/null
  assert_no_file "$base/renamed"
  assert_equal "$(git -C "$base/other" branch --show-current)" other
  git -C "$REPO" worktree list | grep -q "$base/other" || fail "switched worktree not registered"
}

test_sync_env_all_updates_worktrees() {
  new_repo
  local base=$BASE
  run_in "$REPO" add --branchName=feature >/dev/null
  printf 'ROOT=2\n' > "$REPO/.env"
  run_in "$REPO" sync-env --all >/dev/null
  assert_equal "$(cat "$base/feature/.env")" "ROOT=2"
}

test_list_and_find() {
  new_repo
  local base=$BASE
  run_in "$REPO" add --branchName=other >/dev/null
  printf 'x\n' > "$base/other/untracked.txt"
  local output
  output=$(run_in "$REPO" list --sort)
  assert_contains "$output" "[main]"
  assert_contains "$output" "[dirty:1]"
  assert_contains "$output" "[no-upstream]"
  output=$(run_in "$REPO" find --search=OTHER)
  assert_contains "$output" "$base/other"
  if run_in "$REPO" find --search=does-not-exist >/dev/null 2>&1; then
    fail "find should fail when nothing matches"
  fi
}

test_add_copies_env_files
test_add_refuses_checked_out_branch
test_config_file_and_env_precedence
test_remove_safety_checks
test_rename_and_switch
test_sync_env_all_updates_worktrees
test_list_and_find

if [ "$FAILURES" -gt 0 ]; then
  printf '%s assertion(s) failed\n' "$FAILURES" >&2
  exit 1
fi
printf 'All git-worktree-manager tests passed\n'
