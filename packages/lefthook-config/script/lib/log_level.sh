#!/usr/bin/env bash

# log_level_rank - Return numeric rank for a log level name.
#
# Usage:
#   rank="$(log_level_rank info)"
#
# Arguments:
#   level  Log level name (debug, info, warn, error; case-insensitive)
#
# Output:
#   Rank on stdout: debug=0, info=1, warn=2, error=3, unknown=-1
log_level_rank() {
  local level="${1-}"
  local normalized

  normalized="$(printf '%s' "$level" | tr '[:upper:]' '[:lower:]')"

  case "$normalized" in
    debug)
      printf '%s' 0
      ;;
    info)
      printf '%s' 1
      ;;
    warn | warning)
      printf '%s' 2
      ;;
    error)
      printf '%s' 3
      ;;
    *)
      printf '%s' -1
      ;;
  esac
}

# log_enabled - Return whether a message at the given level should be emitted.
#
# Usage:
#   log_enabled info || return 0
#
# Arguments:
#   level  Message log level (required)
#
# Exit status:
#   0 when message severity is >= LEFTHOOK_LOG_LEVEL (default: info)
#   1 otherwise
log_enabled() {
  local message_level="${1:?level is required}"
  local configured_level="${LEFTHOOK_LOG_LEVEL:-info}"
  local message_rank
  local configured_rank

  message_rank="$(log_level_rank "$message_level")"
  configured_rank="$(log_level_rank "$configured_level")"

  if [[ "$configured_rank" == "-1" ]]; then
    configured_rank="$(log_level_rank info)"
  fi

  if [[ "$message_rank" == "-1" ]]; then
    return 1
  fi

  if (( message_rank >= configured_rank )); then
    return 0
  fi

  return 1
}
