# shellcheck shell=bash
# Prints the modification time of <file> in epoch seconds, or 0 when unavailable.
# GNU stat is tried first: BSD "stat -f" would succeed on Linux with another meaning.
file_mtime() {
  stat -c %Y "$1" 2>/dev/null || stat -f %m "$1" 2>/dev/null || printf '0\n'
}
