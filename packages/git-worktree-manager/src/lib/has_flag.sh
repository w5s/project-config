# shellcheck shell=bash
# Returns 0 when the bare flag --<name> is present.
has_flag() {
  local name=$1 arg
  shift
  for arg in "$@"; do
    if [ "$arg" = "--$name" ]; then
      return 0
    fi
  done
  return 1
}
