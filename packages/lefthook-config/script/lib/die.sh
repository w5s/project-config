#!/usr/bin/env bash

# die - Write a message to stderr and exit.
#
# Usage:
#   die "something went wrong"
#   die "missing dependency"$'\n'"Install @commitlint/cli in this project."
#   die "invalid configuration" 2
#
# Arguments:
#   message  Message printed to stderr (required)
#   status   Exit status (optional, default: 1)
die() {
  local message="${1:?message is required}"
  local status="${2:-1}"

  log error "$message"
  exit "$status"
}
