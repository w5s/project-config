#!/usr/bin/env bash

# log_debug - Write a debug message to stderr with a package prefix.
#
# Usage:
#   log_debug "resolved commitlint config at commitlint.config.js"
#
# Arguments:
#   message  Message printed to stderr (required)
log_debug() {
  local message="${1:?message is required}"

  log_enabled debug || return 0

  _log_write "Debug" "${message}"
}
