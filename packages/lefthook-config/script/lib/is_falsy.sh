#!/usr/bin/env bash

# is_falsy - Return whether an environment-style value is falsy.
#
# Usage:
#   if is_falsy "${LEFTHOOK_COMMITLINT_ENABLED:-true}"; then ...
#
# Arguments:
#   value  Value to test (required)
#
# Exit status:
#   0 when the value is falsy (empty, 0, false, no, off, n, disabled; case-insensitive)
#   1 otherwise
is_falsy() {
  local value="${1-}"
  local normalized

  if [[ -z "$value" ]]; then
    return 0
  fi

  normalized="$(printf '%s' "$value" | tr '[:upper:]' '[:lower:]')"

  case "$normalized" in
    0 | false | no | off | n | disabled)
      return 0
      ;;
    *)
      return 1
      ;;
  esac
}
