#!/usr/bin/env bash
#
# git-worktree-manager: create, list, move and remove git worktrees.
# Port of git-worktree-utils (https://www.npmjs.com/package/git-worktree-utils).
#
# Configuration is read from environment variables and from a git-config
# formatted file named .gitworktrees at the root of the main worktree.
#
# bin/git-worktree-manager is generated from src/ by scripts/build.sh: edit src/.
# shellcheck source-path=SCRIPTDIR
set -eu
set -f # never let shell globbing expand configured patterns

SRC_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd) # @bundle:remove
. "$SRC_DIR/constants.sh"

. "$SRC_DIR/lib/die.sh"
. "$SRC_DIR/lib/warn.sh"
. "$SRC_DIR/lib/usage.sh"
. "$SRC_DIR/lib/opt.sh"
. "$SRC_DIR/lib/has_flag.sh"
. "$SRC_DIR/lib/config_get.sh"
. "$SRC_DIR/lib/resolve_setting.sh"
. "$SRC_DIR/lib/load_settings.sh"
. "$SRC_DIR/lib/abs_path.sh"
. "$SRC_DIR/lib/require_repo.sh"
. "$SRC_DIR/lib/worktrees_root_path.sh"
. "$SRC_DIR/lib/resolve_worktree_path.sh"
. "$SRC_DIR/lib/ref_exists.sh"
. "$SRC_DIR/lib/branch_worktree.sh"
. "$SRC_DIR/lib/require_removable.sh"
. "$SRC_DIR/lib/is_excluded.sh"
. "$SRC_DIR/lib/sync_files.sh"
. "$SRC_DIR/lib/file_mtime.sh"
. "$SRC_DIR/lib/require_integer.sh"
. "$SRC_DIR/lib/resolve_base.sh"
. "$SRC_DIR/lib/is_protected.sh"
. "$SRC_DIR/lib/integration_reason.sh"
. "$SRC_DIR/lib/evaluate_worktree.sh"
. "$SRC_DIR/lib/worktrees_root_relative.sh"
. "$SRC_DIR/lib/ensure_gitignored.sh"

. "$SRC_DIR/commands/add.sh"
. "$SRC_DIR/commands/list.sh"
. "$SRC_DIR/commands/find.sh"
. "$SRC_DIR/commands/remove.sh"
. "$SRC_DIR/commands/move.sh"
. "$SRC_DIR/commands/checkout.sh"
. "$SRC_DIR/commands/sync.sh"
. "$SRC_DIR/commands/cleanup.sh"
. "$SRC_DIR/commands/init.sh"

main() {
  local command=${1:-help}
  if [ "$#" -gt 0 ]; then
    shift
  fi
  case $command in
    add) cmd_add "$@" ;;
    list) cmd_list "$@" ;;
    find) cmd_find "$@" ;;
    remove) cmd_remove "$@" ;;
    move) cmd_move "$@" ;;
    checkout) cmd_checkout "$@" ;;
    sync) cmd_sync "$@" ;;
    cleanup) cmd_cleanup "$@" ;;
    init) cmd_init "$@" ;;
    help | -h | --help) usage ;;
    *)
      usage >&2
      die "unknown command: $command"
      ;;
  esac
}

main "$@"
