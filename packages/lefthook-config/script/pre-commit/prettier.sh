#!/usr/bin/env bash
set -euo pipefail

# shellcheck source=../env.sh
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../env.sh"

if is_falsy "${LEFTHOOK_PRETTIER_ENABLED:-true}"; then
  log_info "prettier disabled via LEFTHOOK_PRETTIER_ENABLED"
  exit 0
fi

if ! prettier_config_present; then
  log_info "(skip) no configuration found"
  exit 0
fi

command_assert prettier "Install prettier in this project."

if [[ $# -eq 0 ]]; then
  log_info "(skip) no staged files to check"
  exit 0
fi

exec prettier --check -- "$@"
