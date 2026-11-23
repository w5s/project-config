# shellcheck shell=bash
cmd_checkout() {
  require_repo
  local from branch to from_path to_path checked_out
  opt from-dir "$@"
  from=$OPT_VALUE
  opt branch "$@"
  branch=$OPT_VALUE
  opt to-dir "$@"
  to=$OPT_VALUE
  [ -n "$from" ] && [ -n "$branch" ] || die "--from-dir and --branch are required"
  to=${to:-$branch}

  resolve_worktree_path "$from"
  from_path=$WT_PATH
  [ -d "$from_path" ] || die "worktree directory not found: $from_path"
  require_removable "$from_path"
  checked_out=$(branch_worktree "$branch")
  [ -z "$checked_out" ] || die "branch '$branch' is already checked out at: $checked_out"
  resolve_worktree_path "$to"
  to_path=$WT_PATH
  if [ "$to_path" != "$from_path" ] && [ -e "$to_path" ]; then
    die "path already exists: $to_path"
  fi

  if ref_exists "refs/heads/$branch"; then
    git -C "$from_path" checkout --quiet "$branch"
  elif ref_exists "refs/remotes/origin/$branch"; then
    git -C "$from_path" checkout --quiet --track -b "$branch" "origin/$branch"
  else
    git -C "$from_path" checkout --quiet -b "$branch"
  fi

  if [ "$to_path" != "$from_path" ]; then
    mv "$from_path" "$to_path"
    git -C "$MAIN_ROOT" worktree repair "$to_path"
  fi
  printf 'Checked out worktree %s to branch %s at %s\n' "$from_path" "$branch" "$to_path"
}
