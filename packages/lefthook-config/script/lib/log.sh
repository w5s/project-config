#!/usr/bin/env bash

# log - Write a leveled, package-prefixed message to stdout or stderr.
#
# Usage:
#   log debug "resolved commitlint config at commitlint.config.js"
#   log info "commitlint disabled via LEFTHOOK_COMMITLINT_ENABLED"
#   log warn "no commitlint configuration found; skipping"
#   log error "something went wrong"
#
# Arguments:
#   level    Log level: debug, info, warn, error (required)
#   message  Message printed to stdout (debug/info) or stderr (warn/error) (required)
log() {
  local level="${1:?level is required}"
  local message="${2:?message is required}"
  local normalized
  local label

  log_enabled "$level" || return 0

  normalized="$(printf '%s' "$level" | tr '[:upper:]' '[:lower:]')"

  case "$normalized" in
    debug)
      label="Debug"
      ;;
    info)
      label="Info"
      ;;
    warn | warning)
      label="Warning"
      ;;
    error)
      label="Error"
      ;;
    *)
      label="$level"
      ;;
  esac

  case "$normalized" in
    warn | warning | error)
      _log_write "$label" "$message" >&2
      ;;
    *)
      _log_write "$label" "$message"
      ;;
  esac
}
