# shellcheck shell=bash
# Sets WORKTREES_ABS to the worktrees root as an absolute path. The path need not exist.
worktrees_root_path() {
  case $ROOT in
    /*) WORKTREES_ABS=$ROOT ;;
    *) WORKTREES_ABS=$MAIN_ROOT/$ROOT ;;
  esac
}
