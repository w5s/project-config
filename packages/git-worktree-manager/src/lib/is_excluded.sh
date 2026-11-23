# shellcheck shell=bash
# Returns 0 when <name> matches one of the syncExclude entries.
is_excluded() {
  local excluded
  for excluded in $SYNC_EXCLUDE; do
    if [ "$1" = "$excluded" ]; then
      return 0
    fi
  done
  return 1
}
