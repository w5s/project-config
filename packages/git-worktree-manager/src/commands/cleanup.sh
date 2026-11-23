# shellcheck shell=bash
cmd_cleanup() {
  require_repo
  local dry_run=false assume_yes=false delete_branch=false fetch_wanted=true
  local root_abs path ref locked display plan="" removals="" count=0 answer
  local branch reason deletable removed=0 failures=0 prune_missing=false inside
  has_flag dry-run "$@" && dry_run=true
  has_flag yes "$@" && assume_yes=true
  has_flag delete-branch "$@" && delete_branch=true
  has_flag no-fetch "$@" && fetch_wanted=false
  INCLUDE_GONE=false
  has_flag include-gone "$@" && INCLUDE_GONE=true
  opt min-age "$@"
  MIN_AGE=${OPT_VALUE:-$DEFAULT_MIN_AGE}
  require_integer min-age "$MIN_AGE"
  opt older-than "$@"
  OLDER_THAN=$OPT_VALUE
  require_integer older-than "$OLDER_THAN"
  opt base "$@"

  if [ "$fetch_wanted" = true ] && [ "$AUTO_FETCH" = true ] && ! git -C "$MAIN_ROOT" fetch --prune --quiet; then
    warn "git fetch failed; continuing with local refs"
  fi
  resolve_base "$OPT_VALUE"
  CWD=$(pwd -P)
  NOW=$(date +%s)
  worktrees_root_path
  root_abs=$(abs_path "$WORKTREES_ABS")
  root_abs=${root_abs:-$WORKTREES_ABS}

  while IFS=$'\t' read -r path ref locked; do
    [ -n "$path" ] || continue
    [ "$path" != "$MAIN_ROOT" ] || continue
    # Worktrees outside the root are not managed here. Missing directories are always stale.
    inside=false
    case $path in
      "$root_abs"/*) inside=true ;;
    esac
    if [ "$inside" = false ] && [ -d "$path" ]; then
      continue
    fi
    evaluate_worktree "$path" "$ref" "$locked"
    display=${path#"$MAIN_ROOT"/}
    plan="$plan$(printf '  %-7s %s  (%s)' "$ACTION" "$display" "$REASON")"$'\n'
    if [ "$ACTION" = remove ]; then
      removals="$removals$path"$'\t'"${ref#refs/heads/}"$'\t'"$REASON"$'\t'"$DELETABLE"$'\n'
      count=$((count + 1))
    fi
  done < <(git -C "$MAIN_ROOT" worktree list --porcelain | awk '
    /^worktree / { path = substr($0, 10) }
    /^branch /   { branch = substr($0, 8) }
    /^locked/    { locked = 1 }
    /^$/         { print path "\t" branch "\t" locked; branch = ""; locked = 0 }
  ')

  printf 'Base: %s\n' "$BASE_REF"
  if [ -z "$plan" ]; then
    printf 'Nothing to clean up\n'
    return 0
  fi
  printf '%s' "$plan"
  if [ "$count" -eq 0 ]; then
    printf 'Nothing to clean up\n'
    return 0
  fi
  if [ "$dry_run" = true ]; then
    printf 'Dry run: %s worktree(s) would be removed\n' "$count"
    return 0
  fi

  if [ "$assume_yes" != true ]; then
    [ -t 0 ] || die "refusing to remove worktrees without --yes when not running in a terminal (use --dry-run to preview)"
    printf 'Remove %s worktree(s)? [y/N] ' "$count"
    read -r answer || answer=""
    case $answer in
      y | Y | yes | YES) ;;
      *)
        printf 'Aborted\n'
        return 0
        ;;
    esac
  fi

  while IFS=$'\t' read -r path branch reason deletable; do
    [ -n "$path" ] || continue
    if [ ! -d "$path" ]; then
      prune_missing=true
      removed=$((removed + 1))
      continue
    fi
    if git -C "$MAIN_ROOT" worktree remove "$path" </dev/null; then
      printf 'Removed worktree %s (%s)\n' "$path" "$reason"
      removed=$((removed + 1))
      if [ "$delete_branch" = true ] && [ "$deletable" = true ]; then
        if git -C "$MAIN_ROOT" branch -D "$branch" >/dev/null </dev/null; then
          printf 'Deleted branch %s\n' "$branch"
        else
          warn "could not delete branch: $branch"
        fi
      fi
    else
      warn "could not remove worktree: $path"
      failures=$((failures + 1))
    fi
  done <<< "$removals"
  if [ "$prune_missing" = true ]; then
    git -C "$MAIN_ROOT" worktree prune
    printf 'Pruned missing worktrees\n'
  fi
  printf 'Cleaned up %s worktree(s)\n' "$removed"
  [ "$failures" -eq 0 ]
}
