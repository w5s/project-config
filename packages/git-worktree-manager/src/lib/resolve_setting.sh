# shellcheck shell=bash
# resolve_setting <env value> <config key> <default>: sets SETTING_VALUE.
resolve_setting() {
  if [ -n "$1" ]; then
    SETTING_VALUE=$1
  elif config_get "$2"; then
    SETTING_VALUE=$CFG_VALUE
  else
    SETTING_VALUE=$3
  fi
}
