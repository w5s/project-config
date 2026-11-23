# @w5s/git-worktree-manager

Bash CLI to manage git worktrees. It is a port of [git-worktree-utils](https://www.npmjs.com/package/git-worktree-utils).

## Requirements

- `git` 2.30 or newer (for `git worktree repair`). `cleanup` also uses `git merge-tree --write-tree` (2.38+) to detect squash merges, and falls back to patch comparison on older versions.
- `bash`
- [`shellcheck`](https://www.shellcheck.net/) to run the lint script

## Usage

```sh
git-worktree-manager <command> [options]
# or, from git:
git worktree-manager <command> [options]
```

| Command | Description |
| --- | --- |
| `add --branch=<branch> [--dir=<dir>]` | Create a worktree in `<root>/<dir>` and sync files. `<dir>` defaults to the branch name and vice versa. |
| `list [--plain] [--sort]` | List worktrees with markers: `[main]`, `[dirty:N]`, `[unpushed:N]`, `[no-upstream]`, `[missing directory]`. `--plain` prints raw `git worktree list`. `--sort` puts the main worktree first, then clean ones. |
| `find --search=<text>` | List worktrees whose line contains `<text>` (case-insensitive). |
| `remove --dir=<dir>` | Remove a worktree without uncommitted or unpushed changes. The branch is kept. |
| `move --old-dir=<dir> --new-dir=<dir>` | Move a worktree directory. The worktree must be clean and pushed. |
| `checkout --from-dir=<dir> --branch=<branch> [--to-dir=<dir>]` | Check out `<branch>` in an existing worktree and move it to `<to-dir>` (default: `<branch>`). The worktree must be clean and pushed. |
| `sync (--to=<dir> \| --all)` | Copy files matching `syncInclude` from the main worktree into one or all other worktrees. |
| `cleanup [--dry-run] [--yes] [--base=<ref>] [--min-age=<days>] [--include-gone] [--older-than=<days>] [--delete-branch] [--no-fetch]` | Remove worktrees that are no longer needed. See [Cleanup](#cleanup). |
| `init` | Create `.gitworktrees` in the main worktree, with every setting commented out at its default value, and add the worktrees root to the main worktree `.gitignore` unless it is already listed. Refuses to overwrite an existing file. |
| `help` | Show the usage text. |

Safety rules: the main worktree is never removed, moved or checked out. A worktree with uncommitted changes or unpushed commits is refused by `remove`, `move` and `checkout`. `add` refuses a branch that is already checked out in another worktree.

`add` runs `git fetch` first when `autoFetch` is enabled. If the branch exists locally, it is checked out. If it exists only on `origin`, a tracking branch is created. Otherwise a new branch is created from the main worktree's `HEAD`.

### Cleanup

`cleanup` removes the worktrees under `root` whose work is done. It prints a plan, asks for confirmation, then removes them with `git worktree remove` (never forced).

```text
Base: origin/main
  remove  .worktrees/feat-a      (merged)
  remove  .worktrees/feat-b      (squash-merged)
  remove  .worktrees/old-spike   (missing directory)
  keep    .worktrees/wip         (uncommitted changes)
Remove 3 worktree(s)? [y/N]
```

A worktree is removed when it is clean and its branch is:

| Reason | Detection | Default |
| --- | --- | --- |
| `merged` | `HEAD` is an ancestor of the base (merge commit or fast-forward). | on |
| `rebase-merged` | Every commit of the branch has an equivalent patch in the base (`git cherry`). | on |
| `squash-merged` | Merging the branch into the base would not change the base tree (`git merge-tree`, git 2.38+), or the whole branch diff has an equivalent patch in the base. | on |
| `missing directory` | The directory no longer exists. The worktree is pruned. | on |
| `upstream gone` | The upstream branch was deleted on the remote (after `git fetch --prune`). It may also mean a pull request closed without merging, so it is opt-in. | `--include-gone` |
| `inactive for N day(s)` | The last commit is older than N days and every commit is pushed. | `--older-than=<days>` |

The base is, in order: `--base`, the `baseBranch` setting, `origin`'s default branch, then `origin/main`, `origin/master`, `main` or `master`. It is compared as a remote ref, so a stale local `main` does not matter. `git fetch --prune` runs first unless `--no-fetch` is passed or `autoFetch` is `false`.

A worktree is never removed when it is the main worktree, the current directory, locked, on a detached `HEAD`, on a protected branch (`protectedBranches`, plus the base), dirty (untracked files included), in the middle of a rebase, merge, cherry-pick, revert or bisect, or younger than `--min-age` days (default `1`, `0` disables). The age guard matters because a branch just created from the base looks merged. Worktrees outside `root` are ignored, except that missing directories are always pruned.

Removing a worktree keeps its branch. `--delete-branch` also deletes the branch, only when it is `merged`, `rebase-merged` or `squash-merged`. Remote branches are never deleted. Files ignored by git that live in the worktree, such as a hand-edited `.env`, are lost with it.

Without a terminal, `cleanup` refuses to remove anything unless `--yes` is passed. `--dry-run` only prints the plan. The exit code is non-zero when a removal failed.

### File syncing

`add` and `sync` copy files from the main worktree. They search every directory under the main worktree (skipping `node_modules` and `.git`). In each directory, the top-level files matching `syncInclude` are copied to the same relative location in the target worktree, except those listed in `syncExclude`.

## Configuration

The configuration file is `.gitworktrees`, at the root of the main worktree (the folder that contains `.git`). It uses git config syntax and is read with `git config --file`, so it accepts the same format as `.gitconfig` and `.gitmodules`. `root` is resolved relative to that same root:

```ini
[worktree-manager]
    root = .worktrees
    syncInclude = .env .env.*
    syncExclude = .env.template .env.example .env.sample
    autoFetch = true
    protectedBranches = main master develop
    baseBranch =
```

`git-worktree-manager init` generates this file with every setting disabled, so the defaults apply until you change them. Two kinds of comments are used:

- `##` lines are explanations.
- A single `#` disables a setting that is shown with its default value. Remove the `#` to override it.

```ini
[worktree-manager]
    ## Directory where worktrees are created, relative to the main worktree.
    #root = .worktrees
```

Multi-value keys can be repeated as in any git config file. Their values are joined with spaces.

| Config key | Environment variable | Default | Description |
| --- | --- | --- | --- |
| `root` | `GIT_WORKTREE_MANAGER_ROOT` | `.worktrees` | Directory where worktrees are created. Relative paths are resolved from the main worktree. Created on first use. |
| `syncInclude` | `GIT_WORKTREE_MANAGER_SYNC_INCLUDE` | `.env .env.*` | Filename patterns of files to sync. |
| `syncExclude` | `GIT_WORKTREE_MANAGER_SYNC_EXCLUDE` | `.env.template .env.example .env.sample` | Filenames never synced. |
| `autoFetch` | `GIT_WORKTREE_MANAGER_AUTO_FETCH` | `true` | Run `git fetch` before `add` and `cleanup`. Accepts `true` or `false`. |
| `protectedBranches` | `GIT_WORKTREE_MANAGER_PROTECTED_BRANCHES` | `main master develop` | Branches whose worktrees `cleanup` never removes. |
| `baseBranch` | `GIT_WORKTREE_MANAGER_BASE_BRANCH` | _(empty)_ | Ref that `cleanup` compares worktrees to. Empty means `origin`'s default branch. |

Environment variables take a space-separated list for the multi-value settings.

The default `.worktrees` folder lives inside the main worktree, so it must be ignored to keep it out of `git status`. `init` does this for you: it appends the worktrees root to the `.gitignore` of the main worktree (creating the file if needed) and changes nothing when an equivalent entry (`.worktrees`, `.worktrees/`, `/.worktrees` or `/.worktrees/`) is already present. A root outside the main worktree is not added.

```gitignore
/.worktrees/
```

The entry uses the root in effect when `init` runs: `GIT_WORKTREE_MANAGER_ROOT` if set, otherwise the default. If you later set a different `root` in the configuration file, add that folder to `.gitignore` yourself.

## Development

```sh
pnpm run test   # runs test/git-worktree-manager.test.sh against temporary repositories
pnpm run lint   # runs shellcheck
```
