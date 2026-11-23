# shellcheck shell=bash
# Decides what to do with the worktree at <path> on <ref> (empty when detached).
# Sets ACTION (remove or keep), REASON and DELETABLE (true when the branch is proven merged).
evaluate_worktree() {
  local path=$1 ref=$2 locked=$3 branch git_dir marker mtime commit_time
  ACTION=keep
  DELETABLE=false
  branch=${ref#refs/heads/}
  if [ "$locked" = 1 ]; then
    REASON=locked
    return 0
  fi
  if [ ! -d "$path" ]; then
    ACTION=remove
    REASON="missing directory"
    return 0
  fi
  case $CWD in
    "$path" | "$path"/*)
      REASON="current directory"
      return 0
      ;;
  esac
  if [ -z "$ref" ]; then
    REASON="detached HEAD"
    return 0
  fi
  if is_protected "$branch"; then
    REASON="protected branch"
    return 0
  fi
  if [ -n "$(git -C "$path" status --porcelain)" ]; then
    REASON="uncommitted changes"
    return 0
  fi
  git_dir=$(git -C "$path" rev-parse --absolute-git-dir)
  for marker in rebase-merge rebase-apply MERGE_HEAD CHERRY_PICK_HEAD REVERT_HEAD BISECT_LOG; do
    if [ -e "$git_dir/$marker" ]; then
      REASON="operation in progress"
      return 0
    fi
  done
  # A branch that was just created from the base looks merged: leave it alone for a while.
  if [ "$MIN_AGE" -gt 0 ]; then
    mtime=$(file_mtime "$git_dir/gitdir")
    if [ $((NOW - mtime)) -lt $((MIN_AGE * 86400)) ]; then
      REASON="younger than $MIN_AGE day(s)"
      return 0
    fi
  fi

  if integration_reason "$path"; then
    ACTION=remove
    DELETABLE=true
    return 0
  fi
  if [ "$INCLUDE_GONE" = true ] \
    && [ "$(git -C "$MAIN_ROOT" for-each-ref --format='%(upstream:track)' "refs/heads/$branch")" = "[gone]" ]; then
    ACTION=remove
    REASON="upstream gone"
    return 0
  fi
  if [ -n "$OLDER_THAN" ]; then
    commit_time=$(git -C "$path" log -1 --format=%ct)
    if [ $((NOW - commit_time)) -ge $((OLDER_THAN * 86400)) ] \
      && [ -z "$(git -C "$path" rev-list HEAD --not --remotes)" ]; then
      ACTION=remove
      REASON="inactive for $OLDER_THAN day(s)"
      return 0
    fi
  fi
  REASON="not merged"
}
