#!/usr/bin/env bash

# commitlint_config_present - Return whether commitlint configuration exists at cwd.
#
# Usage:
#   if commitlint_config_present; then ...
#
# Exit status:
#   0 when a known commitlint config file or package.json commitlint key exists
#   1 otherwise
commitlint_config_present() {
  config_present --app commitlint
}
