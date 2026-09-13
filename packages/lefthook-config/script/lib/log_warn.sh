#!/usr/bin/env bash

# log_warn - Write a warning message to stderr with a package prefix.
#
# Usage:
#   log_warn "no commitlint configuration found; skipping"
#
# Arguments:
#   message  Message printed to stderr (required)
log_warn() {
  local message="${1:?message is required}"

  log_enabled warn || return 0

  _log_write "Warning" "${message}" >&2
}
