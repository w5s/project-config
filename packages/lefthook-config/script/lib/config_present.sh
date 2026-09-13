#!/usr/bin/env bash

# config_present - Return whether tool configuration exists at cwd (cosmiconfig-style).
#
# Usage:
#   if config_present --app commitlint; then ...
#   if config_present --app eslint --package-config eslintConfig; then ...
#   if config_present --app eslint --ext "json,js,cjs,mjs,yml,yaml"; then ...
#
# Options:
#   --app NAME              Tool/module name (required). Looks for .{NAME}rc,
#                           .{NAME}rc.{ext}, and {NAME}.config.{ext}.
#   --package-config KEY    package.json key to check (optional). Defaults to
#                           the same value as --app.
#   --ext LIST              Comma-separated file extensions (optional). Default:
#                           json,yaml,yml,js,cjs,mjs,ts,cts,mts
#
# Exit status:
#   0 when a matching config file or package.json key exists
#   1 otherwise
#
# Notes:
#   package.json key detection uses jq when available; if jq is missing the
#   package.json check is skipped (file-based configs still work).
config_present() {
  local app=""
  local package_config=""
  local ext_list="json,yaml,yml,js,cjs,mjs,ts,cts,mts"
  local config_file
  local extension
  local -a extensions

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --app)
        app="${2:?--app requires a value}"
        shift 2
        ;;
      --package-config)
        package_config="${2:?--package-config requires a value}"
        shift 2
        ;;
      --ext)
        ext_list="${2:?--ext requires a value}"
        shift 2
        ;;
      *)
        die "config_present: unknown argument: $1"
        ;;
    esac
  done

  [[ -n "$app" ]] || die "config_present: --app is required"
  [[ -n "$package_config" ]] || package_config="$app"

  if [[ -f ".${app}rc" ]]; then
    return 0
  fi

  IFS=',' read -r -a extensions <<< "$ext_list"
  for extension in "${extensions[@]}"; do
    # Trim surrounding whitespace from each extension token.
    extension="${extension#"${extension%%[![:space:]]*}"}"
    extension="${extension%"${extension##*[![:space:]]}"}"
    [[ -n "$extension" ]] || continue

    config_file=".${app}rc.${extension}"
    if [[ -f "$config_file" ]]; then
      return 0
    fi

    config_file="${app}.config.${extension}"
    if [[ -f "$config_file" ]]; then
      return 0
    fi
  done

  if [[ -f package.json ]] && command -v jq >/dev/null 2>&1; then
    jq -e --arg key "$package_config" '.[$key]' package.json >/dev/null 2>&1 && return 0
  fi

  return 1
}
