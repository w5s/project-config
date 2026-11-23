# shellcheck shell=bash
# Returns 0 and sets REASON when the HEAD of the worktree at <path> is already
# integrated into BASE_REF: merged, squash-merged or rebase-merged.
integration_reason() {
  local path=$1 base_tree merged_tree merge_base probe cherry
  if git -C "$path" merge-base --is-ancestor HEAD "$BASE_REF"; then
    REASON=merged
    return 0
  fi
  # Rebase merge: every commit of the branch has an equivalent patch in the base.
  cherry=$(git -C "$path" cherry "$BASE_REF" HEAD 2>/dev/null || true)
  if [ -n "$cherry" ] && ! printf '%s\n' "$cherry" | grep -q '^+'; then
    REASON=rebase-merged
    return 0
  fi
  # Squash merge: merging the branch into the base would not change the base tree.
  # Needs git 2.38; older versions fall through to the patch-id check below.
  base_tree=$(git -C "$path" rev-parse "$BASE_REF^{tree}")
  if merged_tree=$(git -C "$path" merge-tree --write-tree "$BASE_REF" HEAD 2>/dev/null) \
    && [ "$merged_tree" = "$base_tree" ]; then
    REASON=squash-merged
    return 0
  fi
  # Squash merge when the base touched the same files: the whole branch diff, as a
  # single commit, has an equivalent patch in the base.
  if merge_base=$(git -C "$path" merge-base "$BASE_REF" HEAD 2>/dev/null) \
    && probe=$(GIT_AUTHOR_NAME=probe GIT_AUTHOR_EMAIL=probe@localhost \
      GIT_COMMITTER_NAME=probe GIT_COMMITTER_EMAIL=probe@localhost \
      git -C "$path" commit-tree "HEAD^{tree}" -p "$merge_base" -m probe 2>/dev/null); then
    cherry=$(git -C "$path" cherry "$BASE_REF" "$probe")
    case $cherry in
      -*)
        REASON=squash-merged
        return 0
        ;;
    esac
  fi
  return 1
}
