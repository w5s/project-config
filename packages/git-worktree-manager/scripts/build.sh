#!/usr/bin/env bash
#
# Bundles src/main.sh and the modules it sources into the standalone
# bin/git-worktree-manager. Usage: bash scripts/build.sh [--check]
# --check fails when the committed bin differs from a fresh build.
set -eu

PACKAGE_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
SRC=$PACKAGE_DIR/src
OUT=$PACKAGE_DIR/bin/git-worktree-manager

die() {
  printf 'build: error: %s\n' "$*" >&2
  exit 1
}

# Prints <file> without the shellcheck directives that only make sense in src/.
print_module() {
  [ -f "$1" ] || die "module not found: $1"
  awk '!/^# shellcheck (shell|source-path)=/' "$1"
}

# Inline the modules sourced by src/main.sh, separated by a blank line.
# shellcheck disable=SC2016 # '$SRC_DIR' is matched literally
bundle() {
  local line module previous=""
  while IFS= read -r line || [ -n "$line" ]; do
    case $line in
      *'# @bundle:remove') ;;
      '# shellcheck source-path='*) ;;
      '. "$SRC_DIR/'*'"')
        module=${line#'. "$SRC_DIR/'}
        module=${module%'"'}
        [ -z "$previous" ] || printf '\n'
        print_module "$SRC/$module"
        previous=$module
        ;;
      *)
        printf '%s\n' "$line"
        previous=$line
        ;;
    esac
  done < "$SRC/main.sh"
}

tmp=$(mktemp)
trap 'rm -f "$tmp"' EXIT
bundle > "$tmp"
bash -n "$tmp" || die "bundled script has syntax errors"

if [ "${1:-}" = --check ]; then
  cmp -s "$tmp" "$OUT" || die "$OUT is out of date, run: pnpm run build"
  printf 'build: %s is up to date\n' "$OUT"
  exit 0
fi

mkdir -p "$(dirname "$OUT")"
cp "$tmp" "$OUT"
chmod +x "$OUT"
printf 'build: wrote %s\n' "$OUT"
