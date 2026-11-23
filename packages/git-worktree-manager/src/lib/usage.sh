# shellcheck shell=bash
usage() {
  cat <<EOF
Usage: $PROGRAM <command> [options]

Commands:
  add --branch=<branch> [--dir=<dir>]
      Create a worktree for <branch> in <root>/<dir> and sync files.
      <dir> defaults to <branch> and <branch> defaults to <dir>.
  list [--plain] [--sort]
      List worktrees with status markers: [main], [dirty:N], [unpushed:N],
      [no-upstream] and [missing directory]. --plain prints git's raw output.
      --sort lists the main worktree first, then clean worktrees.
  find --search=<text>
      List worktrees whose line contains <text> (case-insensitive).
  remove --dir=<dir>
      Remove a worktree that has no uncommitted or unpushed changes.
  move --old-dir=<dir> --new-dir=<dir>
      Move a worktree directory. Requires a clean, fully pushed worktree.
  checkout --from-dir=<dir> --branch=<branch> [--to-dir=<dir>]
      Check out <branch> in an existing worktree and move it to <to-dir>
      (defaults to <branch>). Requires a clean, fully pushed worktree.
  sync (--to=<dir> | --all)
      Copy files matching syncInclude from the main worktree into one or all other worktrees.
  cleanup [--dry-run] [--yes] [--base=<ref>] [--min-age=<days>] [--include-gone]
          [--older-than=<days>] [--delete-branch] [--no-fetch]
      Remove worktrees under <root> that are no longer needed. A worktree is
      removed when it is clean and its branch is:
        - merged into the base (merge commit, fast-forward, rebase or squash), or
        - gone from the remote, with --include-gone, or
        - inactive for <days> days and fully pushed, with --older-than.
      Worktrees whose directory is missing are pruned. The main worktree, the
      current directory, locked worktrees, protected branches, detached HEADs,
      operations in progress and worktrees younger than --min-age days
      (default $DEFAULT_MIN_AGE, 0 disables) are never removed.
      The base defaults to origin's default branch. Branches are kept unless
      --delete-branch is given (only for branches proven merged).
      --dry-run prints the plan only. --yes skips the confirmation prompt,
      which is required when not running in a terminal.
  init
      Create $CONFIG_FILE_NAME in the main worktree with the default settings
      (commented out) and add the worktrees root to the main worktree .gitignore
      unless it is already listed. Refuses to overwrite an existing file.
  help
      Show this help.

Configuration precedence: environment variables > $CONFIG_FILE_NAME > defaults.
The configuration file lives in the main worktree and uses git config syntax:

  [worktree-manager]
    root = .worktrees
    syncInclude = .env .env.*
    syncExclude = .env.template .env.example .env.sample
    autoFetch = true
    protectedBranches = main master develop
    baseBranch =

Environment variables:
  GIT_WORKTREE_MANAGER_ROOT              root (relative to the main worktree)
  GIT_WORKTREE_MANAGER_SYNC_INCLUDE      syncInclude (space-separated)
  GIT_WORKTREE_MANAGER_SYNC_EXCLUDE      syncExclude (space-separated)
  GIT_WORKTREE_MANAGER_AUTO_FETCH        autoFetch (true or false)
  GIT_WORKTREE_MANAGER_PROTECTED_BRANCHES  protectedBranches (space-separated)
  GIT_WORKTREE_MANAGER_BASE_BRANCH       baseBranch (default: origin's default branch)
EOF
}
