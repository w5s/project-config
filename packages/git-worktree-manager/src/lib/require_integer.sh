# shellcheck shell=bash
# Dies unless <value> is empty or a non-negative integer.
require_integer() {
  case $2 in
    *[!0-9]*) die "--$1 must be a non-negative integer, got '$2'" ;;
  esac
}
