# shellcheck shell=bash
# Prints the path of the worktree that has <branch> checked out, if any.
branch_worktree() {
  git -C "$MAIN_ROOT" worktree list --porcelain | awk -v ref="branch refs/heads/$1" '
    /^worktree / { path = substr($0, 10) }
    $0 == ref { print path; exit }
  '
}
