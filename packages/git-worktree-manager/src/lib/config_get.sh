# shellcheck shell=bash
# Sets CFG_VALUE to the values of worktree-manager.<key> (space-separated).
# Returns 1 when the key is absent. Dies when the configuration file is invalid.
config_get() {
  local key=$1 out rc=0
  CFG_VALUE=""
  [ -f "$CONFIG_FILE" ] || return 1
  out=$(git config --file "$CONFIG_FILE" --get-all "worktree-manager.$key") || rc=$?
  if [ "$rc" -eq 1 ]; then
    return 1
  fi
  [ "$rc" -eq 0 ] || die "invalid configuration file: $CONFIG_FILE"
  CFG_VALUE=$(printf '%s\n' "$out" | paste -sd ' ' -)
}
