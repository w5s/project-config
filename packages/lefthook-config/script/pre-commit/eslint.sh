#!/usr/bin/env bash
set -euo pipefail

# shellcheck source=../env.sh
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../env.sh"

if is_falsy "${LEFTHOOK_ESLINT_ENABLED:-true}"; then
  log info "eslint disabled via LEFTHOOK_ESLINT_ENABLED"
  exit 0
fi

if ! eslint_config_present; then
  log warn "(skip) no configuration found"
  exit 0
fi

command_assert eslint "Install eslint in this project."

if [[ $# -eq 0 ]]; then
  log info "(skip) no staged files to lint"
  exit 0
fi

exec eslint -- "$@"
