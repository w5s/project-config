# shellcheck shell=bash
# Sets WT_PATH to the absolute path of <root>/<dir>, creating the root when missing.
resolve_worktree_path() {
  local root
  [ -n "$1" ] || die "a directory name is required"
  worktrees_root_path
  mkdir -p "$WORKTREES_ABS" || die "cannot create worktrees root: $WORKTREES_ABS"
  root=$(abs_path "$WORKTREES_ABS")
  WT_PATH=$root/$1
}
