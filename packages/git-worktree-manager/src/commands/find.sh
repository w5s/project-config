# shellcheck shell=bash
cmd_find() {
  require_repo
  local search matches
  opt search "$@"
  search=$OPT_VALUE
  if [ -z "$search" ]; then
    git -C "$MAIN_ROOT" worktree list
    return 0
  fi
  matches=$(git -C "$MAIN_ROOT" worktree list | grep -i -F -- "$search" || true)
  [ -n "$matches" ] || die "no worktree found matching: $search"
  printf '%s\n' "$matches"
}
