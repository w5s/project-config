#!/usr/bin/env bash

# log_info - Write an informational message to stdout with a package prefix.
#
# Usage:
#   log_info "commitlint disabled via LEFTHOOK_COMMITLINT_ENABLED"
#
# Arguments:
#   message  Message printed to stdout (required)
log_info() {
  local message="${1:?message is required}"

  log_enabled info || return 0

  _log_write "Info" "${message}"
}
