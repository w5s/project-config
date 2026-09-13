#!/usr/bin/env bash
# Shared environment for @w5s/lefthook-config hook scripts.
# Source from hook scripts via: source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/../env.sh"

_env_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

LEFTHOOK_CONFIG_PACKAGE="@w5s/lefthook-config"
export LEFTHOOK_CONFIG_PACKAGE

# Disable corepack download prompt
COREPACK_ENABLE_DOWNLOAD_PROMPT=${COREPACK_ENABLE_DOWNLOAD_PROMPT:-"0"}
export COREPACK_ENABLE_DOWNLOAD_PROMPT

# Prepend project-local binaries so hook scripts can call tools by name.
if [[ -d "./node_modules/.bin" ]]; then
  PATH="./node_modules/.bin:${PATH}"
  export PATH
fi

# Load one function per file from lib/.
if [[ -d "${_env_dir}/lib" ]]; then
  for _lib_file in "${_env_dir}"/lib/*.sh; do
    [[ -f "$_lib_file" ]] || continue
    # shellcheck source=/dev/null
    source "$_lib_file"
  done
fi

unset _env_dir _lib_file
