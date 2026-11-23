# shellcheck shell=bash
# Sets MAIN_ROOT, CONFIG_FILE and the settings. Must run before any other repository command.
require_repo() {
  local first
  git rev-parse --git-dir >/dev/null 2>&1 || die "not inside a git repository"
  first=$(git worktree list --porcelain | sed -n '1s/^worktree //p')
  MAIN_ROOT=$(abs_path "$first")
  [ -n "$MAIN_ROOT" ] || die "cannot resolve the main worktree"
  CONFIG_FILE="$MAIN_ROOT/$CONFIG_FILE_NAME"
  load_settings
}
