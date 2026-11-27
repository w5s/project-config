# git-worktree-manager command reference

Resolution, `init`, and the common workflows are in `SKILL.md`. This file lists
every command and flag; `"$WT" help` prints the same from the CLI itself.

## Commands

| Command | Does |
|---------|------|
| `add --branch=<b> [--dir=<d>]` | Create a worktree in `<root>/<d>` and sync env files. `<d>` and `<b>` default to each other. Refuses a branch or path already in use. |
| `list [--plain] [--sort]` | List worktrees with status markers. `--sort` puts main first, then clean ones. |
| `find --search=<text>` | Filter `list` by substring (case-insensitive). |
| `remove --dir=<d>` | Remove a worktree with no uncommitted or unpushed changes. Keeps the branch. |
| `move --old-dir=<d> --new-dir=<d>` | Move a clean, pushed worktree. |
| `checkout --from-dir=<d> --branch=<b> [--to-dir=<d>]` | Switch a clean, pushed worktree to `<b>` and move it. |
| `sync (--to=<d> \| --all)` | Re-copy `syncInclude` files from the main worktree. |
| `cleanup [flags]` | Remove worktrees under the root that are no longer needed (below). |
| `init` | Write `.gitworktrees` with commented defaults and gitignore the root. Refuses to overwrite. |

## `cleanup` flags

A clean worktree is removed when its branch is merged into the base (merge,
fast-forward, rebase, or squash), or matches one of the opt-in rules below.
Missing directories are pruned. Never removed: the main worktree, the current
directory, locked, protected, detached, dirty, or mid-operation worktrees.

| Flag | Effect |
|------|--------|
| `--dry-run` | Print the plan only. |
| `--yes` | Skip the prompt. Required outside a terminal. |
| `--include-gone` | Also remove worktrees whose remote branch was deleted. |
| `--older-than=<days>` | Also remove fully pushed worktrees inactive that long. |
| `--min-age=<days>` | Keep worktrees younger than this (default 1, `0` disables). |
| `--delete-branch` | Delete branches proven merged after removing their worktree. |
| `--base=<ref>` | Comparison base. Default: `baseBranch`, else origin's default branch. |
| `--no-fetch` | Skip the `git fetch --prune` that runs first. |

## `.gitworktrees` keys (`[worktree-manager]`)

`GIT_WORKTREE_MANAGER_*` environment variables override these.

| Key | Default |
|-----|---------|
| `root` | `.worktrees` |
| `syncInclude` | `.env .env.*` |
| `syncExclude` | `.env.template .env.example .env.sample` |
| `autoFetch` | `true` |
| `protectedBranches` | `main master develop` |
| `baseBranch` | origin's default branch |
