# shellcheck shell=bash
# Prints the worktrees root relative to the main worktree, normalized (no leading
# "./", no trailing "/"). Prints nothing when it is not strictly inside the main worktree.
worktrees_root_relative() {
  local rel=$ROOT
  case $rel in
    "$MAIN_ROOT"/*) rel=${rel#"$MAIN_ROOT"/} ;;
    /*) return 0 ;;
  esac
  while :; do
    case $rel in
      ./*) rel=${rel#./} ;;
      */) rel=${rel%/} ;;
      *) break ;;
    esac
  done
  case $rel in
    "" | . | .. | ../* | */.. | */../*) return 0 ;;
  esac
  printf '%s\n' "$rel"
}
