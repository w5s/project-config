# shellcheck shell=bash
cmd_list() {
  require_repo
  if has_flag plain "$@"; then
    git -C "$MAIN_ROOT" worktree list
    return 0
  fi
  local sort_wanted=false rows="" first_dirty="" first_unpushed=""
  local path ref branch name issues rank line dirty unpushed
  if has_flag sort "$@"; then
    sort_wanted=true
  fi

  while IFS=$'\t' read -r path ref; do
    [ -n "$path" ] || continue
    name=${path##*/}
    issues=""
    if [ ! -d "$path" ]; then
      issues=" [missing directory — run \`$PROGRAM remove --dir=$name\`]"
    else
      dirty=$(git -C "$path" status --porcelain | wc -l | tr -d ' ')
      unpushed=$(git -C "$path" rev-list HEAD --not --remotes | wc -l | tr -d ' ')
      if [ "$dirty" -gt 0 ]; then
        issues="$issues [dirty:$dirty]"
        [ -n "$first_dirty" ] || first_dirty=$path
      fi
      if [ "$unpushed" -gt 0 ]; then
        issues="$issues [unpushed:$unpushed]"
        [ -n "$first_unpushed" ] || first_unpushed=$path
      fi
      if ! git -C "$path" rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
        issues="$issues [no-upstream]"
      fi
    fi

    branch=${ref#refs/heads/}
    [ -n "$ref" ] || branch="(detached)"
    line="$path  $branch"
    if [ "$path" = "$MAIN_ROOT" ]; then
      line="$line [main]"
      rank=0
    elif [ -z "$issues" ]; then
      rank=1
    else
      rank=2
    fi
    [ "$sort_wanted" = true ] || rank=0
    rows="$rows$rank"$'\t'"$line$issues"$'\n'
  done < <(git -C "$MAIN_ROOT" worktree list --porcelain | awk '
    /^worktree / { path = substr($0, 10) }
    /^branch /   { branch = substr($0, 8) }
    /^$/         { print path "\t" branch; branch = "" }
  ')

  printf '%s' "$rows" | sort -s -k1,1n | cut -f2-
  if [ -n "$first_dirty" ] || [ -n "$first_unpushed" ]; then
    printf '\nTips:\n'
    [ -z "$first_dirty" ] || printf '  inspect dirty changes:    git -C "%s" status --short\n' "$first_dirty"
    [ -z "$first_unpushed" ] || printf '  inspect unpushed commits: git -C "%s" log HEAD --not --remotes --oneline\n' "$first_unpushed"
  fi
}
