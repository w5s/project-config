# shellcheck shell=bash
cmd_sync() {
  require_repo
  local target_name target
  if has_flag all "$@"; then
    while IFS= read -r target; do
      [ "$target" != "$MAIN_ROOT" ] || continue
      if [ ! -d "$target" ]; then
        warn "skipping missing directory: $target"
        continue
      fi
      printf 'Syncing files to %s\n' "$target"
      sync_files "$MAIN_ROOT" "$target"
    done < <(git -C "$MAIN_ROOT" worktree list --porcelain | sed -n 's/^worktree //p')
    return 0
  fi
  opt to "$@"
  target_name=$OPT_VALUE
  [ -n "$target_name" ] || die "either --to=<dir> or --all is required"
  resolve_worktree_path "$target_name"
  target=$WT_PATH
  [ -d "$target" ] || die "worktree directory not found: $target"
  [ "$target" != "$MAIN_ROOT" ] || die "refusing to sync into the main worktree"
  sync_files "$MAIN_ROOT" "$target"
}
