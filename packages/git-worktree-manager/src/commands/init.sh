# shellcheck shell=bash
cmd_init() {
  require_repo
  [ ! -e "$CONFIG_FILE" ] || die "configuration file already exists: $CONFIG_FILE"
  # '##' lines explain a setting. A single '#' disables a setting that is shown
  # with its default value: remove the '#' to override that default.
  cat > "$CONFIG_FILE" <<EOF
## git-worktree-manager configuration.
## Environment variables (GIT_WORKTREE_MANAGER_*) take precedence over these values.
##
## Lines starting with '##' are comments.
## Lines starting with a single '#' are settings set to their default value:
## remove the '#' to override the default.
[worktree-manager]
	## Directory where worktrees are created, relative to the main worktree.
	# root = $DEFAULT_ROOT

	## Space-separated patterns of files synced into worktrees.
	# syncInclude = $DEFAULT_SYNC_INCLUDE

	## Space-separated patterns of files that are never synced.
	# syncExclude = $DEFAULT_SYNC_EXCLUDE

	## Run git fetch before add: true or false.
	# autoFetch = $DEFAULT_AUTO_FETCH

	## Space-separated branches whose worktrees cleanup never removes.
	# protectedBranches = $DEFAULT_PROTECTED_BRANCHES

	## Ref that cleanup compares worktrees to. Empty: origin's default branch.
	# baseBranch = $DEFAULT_BASE_BRANCH
EOF
  printf 'Created %s\n' "$CONFIG_FILE"
  ensure_gitignored
}
