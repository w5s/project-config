# shellcheck shell=bash
cmd_remove() {
  require_repo
  local dir
  opt dir "$@"
  dir=$OPT_VALUE
  [ -n "$dir" ] || die "--dir is required"
  resolve_worktree_path "$dir"
  [ -d "$WT_PATH" ] || die "worktree directory not found: $WT_PATH"
  require_removable "$WT_PATH"
  git -C "$MAIN_ROOT" worktree remove "$WT_PATH"
  printf 'Removed worktree %s\n' "$WT_PATH"
}
