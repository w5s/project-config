#!/usr/bin/env bash
set -euo pipefail

# shellcheck source=../env.sh
source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../env.sh"

commit_msg_file="${1:?commit message file path is required}"

if is_falsy "${LEFTHOOK_COMMITLINT_ENABLED:-true}"; then
  log_info "commitlint disabled via LEFTHOOK_COMMITLINT_ENABLED"
  exit 0
fi

if ! commitlint_config_present; then
  log_warn "no commitlint configuration found; skipping"
  exit 0
fi

command_assert commitlint "Install @commitlint/cli in this project."

exec commitlint --edit "$commit_msg_file"
