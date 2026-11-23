# shellcheck shell=bash
# Dies unless the worktree at <path> can be removed, moved or checked out safely.
require_removable() {
  [ "$1" != "$MAIN_ROOT" ] || die "refusing to modify the main worktree: $1"
  [ -z "$(git -C "$1" status --porcelain)" ] || die "worktree has uncommitted changes: $1"
  [ -z "$(git -C "$1" rev-list HEAD --not --remotes)" ] || die "worktree has unpushed commits: $1"
}
