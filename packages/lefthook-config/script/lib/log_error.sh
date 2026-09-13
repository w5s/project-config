#!/usr/bin/env bash

# log_error - Write an error message to stderr with a package prefix.
#
# Usage:
#   log_error "something went wrong"
#   log_error "missing dependency"$'\n'"Install @commitlint/cli in this project."
#
# Arguments:
#   message  Message printed to stderr (required)
log_error() {
  local message="${1:?message is required}"

  log_enabled error || return 0

  _log_write "Error" "${message}" >&2
}
