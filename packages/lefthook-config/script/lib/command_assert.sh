#!/usr/bin/env bash

# command_assert - Ensure a CLI is available on PATH.
#
# Usage:
#   command_assert commitlint
#   command_assert commitlint "Install @commitlint/cli in this project."
#
# Arguments:
#   command_name    CLI name to look up on PATH (required)
#   fixer_message   Optional hint printed on a second line when missing
command_assert() {
  local command_name="${1:?command name is required}"
  local fixer_message="${2:-}"
  local message

  command -v "$command_name" >/dev/null 2>&1 && return 0

  message="${command_name} not found in PATH"
  if [[ -n "$fixer_message" ]]; then
    message="${message}"$'\n'"${fixer_message}"
  fi

  die "$message"
}
