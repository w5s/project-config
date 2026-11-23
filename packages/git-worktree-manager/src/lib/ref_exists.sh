# shellcheck shell=bash
ref_exists() {
  git -C "$MAIN_ROOT" show-ref --verify --quiet "$1"
}
