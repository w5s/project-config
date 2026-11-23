# shellcheck shell=bash
# Sets OPT_VALUE to the value of --<name>=<value>, or to an empty string.
opt() {
  local name=$1 arg
  shift
  OPT_VALUE=""
  for arg in "$@"; do
    case $arg in
      "--$name="*) OPT_VALUE=${arg#"--$name="} ;;
    esac
  done
}
