# shellcheck shell=bash
# Returns 0 when <branch> is listed in protectedBranches or is the base branch.
is_protected() {
  local protected
  for protected in $PROTECTED_BRANCHES; do
    if [ "$1" = "$protected" ]; then
      return 0
    fi
  done
  [ "$1" = "$BASE_REF" ] || [ "origin/$1" = "$BASE_REF" ]
}
