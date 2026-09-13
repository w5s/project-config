#!/usr/bin/env bash

# prettier_config_present - Return whether prettier configuration exists at cwd.
#
# Usage:
#   if prettier_config_present; then ...
#
# Exit status:
#   0 when a known prettier config file or package.json prettier key exists
#   1 otherwise
#
# Notes:
#   Detects .prettierrc*, prettier.config.*, and a prettier key in package.json
#   via config_present. Extra extensions include json5 and toml for Prettier's
#   supported config file formats.
prettier_config_present() {
  config_present --app prettier --ext "json,json5,yaml,yml,toml,js,cjs,mjs,ts,cts,mts"
}
