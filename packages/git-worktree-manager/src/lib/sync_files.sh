# shellcheck shell=bash
# Copies files from every directory under <src> (skipping node_modules and .git)
# to the same relative location under <dst>. Only top-level files of each directory are copied.
sync_files() {
  local src=$1 dst=$2 dirs dir rel pattern file name target_dir
  worktrees_root_path
  dirs=$(find "$src" \( -name node_modules -o -name .git \) -prune -o -type d -print)
  while IFS= read -r dir; do
    [ -n "$dir" ] || continue
    case $dir in
      "$WORKTREES_ABS" | "$WORKTREES_ABS"/*) continue ;;
    esac
    rel=${dir#"$src"}
    rel=${rel#/}
    for pattern in $SYNC_INCLUDE; do
      while IFS= read -r file; do
        name=${file##*/}
        if is_excluded "$name"; then
          continue
        fi
        target_dir=$dst${rel:+/$rel}
        mkdir -p "$target_dir"
        cp "$file" "$target_dir/$name"
        printf '  synced %s\n' "${rel:+$rel/}$name"
      done < <(find "$dir" -maxdepth 1 -type f -name "$pattern")
    done
  done < <(printf '%s\n' "$dirs")
}
