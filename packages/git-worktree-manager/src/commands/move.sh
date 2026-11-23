# shellcheck shell=bash
cmd_move() {
  require_repo
  local old new old_path new_path
  opt old-dir "$@"
  old=$OPT_VALUE
  opt new-dir "$@"
  new=$OPT_VALUE
  [ -n "$old" ] && [ -n "$new" ] || die "--old-dir and --new-dir are required"
  resolve_worktree_path "$old"
  old_path=$WT_PATH
  [ -d "$old_path" ] || die "worktree directory not found: $old_path"
  require_removable "$old_path"
  resolve_worktree_path "$new"
  new_path=$WT_PATH
  [ ! -e "$new_path" ] || die "path already exists: $new_path"
  mv "$old_path" "$new_path"
  git -C "$MAIN_ROOT" worktree repair "$new_path"
  printf 'Moved worktree %s -> %s\n' "$old_path" "$new_path"
}
