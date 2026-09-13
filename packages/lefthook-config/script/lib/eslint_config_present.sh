#!/usr/bin/env bash

# eslint_config_present - Return whether eslint configuration exists at cwd.
#
# Usage:
#   if eslint_config_present; then ...
#
# Exit status:
#   0 when a known eslint config file or package.json eslintConfig key exists
#   1 otherwise
#
# Notes:
#   Detects both legacy .eslintrc* / package.json eslintConfig and flat
#   eslint.config.* files via config_present. The package.json key is
#   eslintConfig (not eslint), so --package-config overrides the default.
eslint_config_present() {
  config_present --app eslint --package-config eslintConfig
}
