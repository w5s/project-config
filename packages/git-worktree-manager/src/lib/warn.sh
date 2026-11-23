# shellcheck shell=bash
warn() {
  printf '%s: warning: %s\n' "$PROGRAM" "$*" >&2
}
