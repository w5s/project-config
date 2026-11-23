# shellcheck shell=bash
die() {
  printf '%s: error: %s\n' "$PROGRAM" "$*" >&2
  exit 1
}
