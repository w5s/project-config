# shellcheck shell=bash
# Prints the absolute physical path of a directory, or nothing if it does not exist.
abs_path() {
  (cd "$1" 2>/dev/null && pwd -P) || true
}
