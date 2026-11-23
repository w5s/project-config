# shellcheck shell=bash
# Appends /<root>/ to the .gitignore of the main worktree. Nothing is
# changed when the file already has an equivalent entry (with or without a
# leading or trailing slash).
ensure_gitignored() {
  local rel entry line gitignore=$MAIN_ROOT/.gitignore
  rel=$(worktrees_root_relative)
  if [ -z "$rel" ]; then
    printf 'Skipped .gitignore: worktrees root is outside the main worktree (%s)\n' "$ROOT"
    return 0
  fi
  entry=/$rel/
  if [ -f "$gitignore" ]; then
    while IFS= read -r line || [ -n "$line" ]; do
      line=${line%"${line##*[![:space:]]}"}
      case $line in
        "$rel" | "$rel/" | "/$rel" | "/$rel/")
          printf '%s is already in %s\n' "$line" "$gitignore"
          return 0
          ;;
      esac
    done < "$gitignore"
    # Keep the last existing entry on its own line.
    if [ -s "$gitignore" ] && [ -n "$(tail -c 1 "$gitignore")" ]; then
      printf '\n' >> "$gitignore"
    fi
  fi
  printf '%s\n' "$entry" >> "$gitignore"
  printf 'Added %s to %s\n' "$entry" "$gitignore"
}
