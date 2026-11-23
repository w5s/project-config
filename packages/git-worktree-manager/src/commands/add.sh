# shellcheck shell=bash
cmd_add() {
  require_repo
  local branch dir target checked_out new_branch=false
  opt branch "$@"
  branch=$OPT_VALUE
  opt dir "$@"
  dir=$OPT_VALUE
  [ -n "$branch$dir" ] || die "--branch or --dir is required"
  branch=${branch:-$dir}
  dir=${dir:-$branch}

  resolve_worktree_path "$dir"
  target=$WT_PATH
  [ ! -e "$target" ] || die "path already exists: $target"
  checked_out=$(branch_worktree "$branch")
  [ -z "$checked_out" ] || die "branch '$branch' is already checked out at: $checked_out"

  if [ "$AUTO_FETCH" = true ] && ! git -C "$MAIN_ROOT" fetch --quiet; then
    warn "git fetch failed; continuing with local refs"
  fi

  if ref_exists "refs/heads/$branch"; then
    git -C "$MAIN_ROOT" worktree add "$target" "$branch"
  elif ref_exists "refs/remotes/origin/$branch"; then
    git -C "$MAIN_ROOT" worktree add --track -b "$branch" "$target" "origin/$branch"
  else
    git -C "$MAIN_ROOT" worktree add -b "$branch" "$target"
    new_branch=true
  fi

  sync_files "$MAIN_ROOT" "$target"
  printf 'Created worktree %s on branch %s\n' "$target" "$branch"
  if [ "$new_branch" = true ]; then
    printf 'Tip: publish the branch with: git -C "%s" push -u origin %s\n' "$target" "$branch"
  fi
}
