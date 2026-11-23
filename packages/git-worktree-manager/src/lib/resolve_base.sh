# shellcheck shell=bash
# Sets BASE_REF to the ref worktrees are compared to: <requested>, baseBranch,
# origin's default branch, then the usual branch names. Dies when none exists.
resolve_base() {
  local candidate=${1:-$BASE_BRANCH}
  if [ -n "$candidate" ]; then
    git -C "$MAIN_ROOT" rev-parse --verify --quiet "$candidate^{commit}" >/dev/null || die "base ref not found: $candidate"
    BASE_REF=$candidate
    return 0
  fi
  candidate=$(git -C "$MAIN_ROOT" symbolic-ref --quiet --short refs/remotes/origin/HEAD 2>/dev/null || true)
  if [ -z "$candidate" ]; then
    for candidate in origin/main origin/master main master; do
      if git -C "$MAIN_ROOT" rev-parse --verify --quiet "$candidate^{commit}" >/dev/null; then
        break
      fi
      candidate=""
    done
  fi
  [ -n "$candidate" ] || die "cannot determine the base branch; use --base=<ref>"
  BASE_REF=$candidate
}
