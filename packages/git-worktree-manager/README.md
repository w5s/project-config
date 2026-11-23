# @w5s/git-worktree-manager

Bash CLI to manage git worktrees. It is a port of [git-worktree-utils](https://www.npmjs.com/package/git-worktree-utils).

## Requirements

- `git` 2.30 or newer (for `git worktree repair`)
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
| `add --branch=<branch> [--dir=<dir>]` | Create a worktree in `<worktreesRoot>/<dir>` and sync files. `<dir>` defaults to the branch name and vice versa. |
| `list [--plain] [--sort]` | List worktrees with markers: `[main]`, `[dirty:N]`, `[unpushed:N]`, `[no-upstream]`, `[missing directory]`. `--plain` prints raw `git worktree list`. `--sort` puts the main worktree first, then clean ones. |
| `find --search=<text>` | List worktrees whose line contains `<text>` (case-insensitive). |
| `remove --dir=<dir>` | Remove a worktree without uncommitted or unpushed changes. The branch is kept. |
| `move --old-dir=<dir> --new-dir=<dir>` | Move a worktree directory. The worktree must be clean and pushed. |
| `checkout --from-dir=<dir> --branch=<branch> [--to-dir=<dir>]` | Check out `<branch>` in an existing worktree and move it to `<to-dir>` (default: `<branch>`). The worktree must be clean and pushed. |
| `sync (--to=<dir> \| --all)` | Copy files matching `syncInclude` from the main worktree into one or all other worktrees. |
| `init` | Create `.gitworktrees` in the main worktree, with every setting commented out at its default value, and add the worktrees root to the main worktree `.gitignore` unless it is already listed. Refuses to overwrite an existing file. |
| `help` | Show the usage text. |

Safety rules: the main worktree is never removed, moved or checked out. A worktree with uncommitted changes or unpushed commits is refused by `remove`, `move` and `checkout`. `add` refuses a branch that is already checked out in another worktree.

`add` runs `git fetch` first when `autoFetch` is enabled. If the branch exists locally, it is checked out. If it exists only on `origin`, a tracking branch is created. Otherwise a new branch is created from the main worktree's `HEAD`.

### File syncing

`add` and `sync` copy files from the main worktree. They search every directory under the main worktree (skipping `node_modules` and `.git`). In each directory, the top-level files matching `syncInclude` are copied to the same relative location in the target worktree, except those listed in `syncExclude`.

## Configuration

The configuration file is `.gitworktrees`, at the root of the main worktree (the folder that contains `.git`). It uses git config syntax and is read with `git config --file`, so it accepts the same format as `.gitconfig` and `.gitmodules`. `worktreesRoot` is resolved relative to that same root:

```ini
[worktree-manager]
    worktreesRoot = .worktrees
    syncInclude = .env .env.*
    syncExclude = .env.template .env.example .env.sample
    autoFetch = true
```

`git-worktree-manager init` generates this file with every setting disabled, so the defaults apply until you change them. Two kinds of comments are used:

- `##` lines are explanations.
- A single `#` disables a setting that is shown with its default value. Remove the `#` to override it.

```ini
[worktree-manager]
    ## Directory where worktrees are created, relative to the main worktree.
    #worktreesRoot = .worktrees
```

Multi-value keys can be repeated as in any git config file. Their values are joined with spaces.

| Config key | Environment variable | Default | Description |
| --- | --- | --- | --- |
| `worktreesRoot` | `GIT_WORKTREE_MANAGER_WORKTREES_ROOT` | `.worktrees` | Directory where worktrees are created. Relative paths are resolved from the main worktree. Created on first use. |
| `syncInclude` | `GIT_WORKTREE_MANAGER_SYNC_INCLUDE` | `.env .env.*` | Filename patterns of files to sync. |
| `syncExclude` | `GIT_WORKTREE_MANAGER_SYNC_EXCLUDE` | `.env.template .env.example .env.sample` | Filenames never synced. |
| `autoFetch` | `GIT_WORKTREE_MANAGER_AUTO_FETCH` | `true` | Run `git fetch` before `add`. Accepts `true` or `false`. |

Environment variables take a space-separated list for the multi-value settings.

The default `.worktrees` folder lives inside the main worktree, so it must be ignored to keep it out of `git status`. `init` does this for you: it appends the worktrees root to the `.gitignore` of the main worktree (creating the file if needed) and changes nothing when an equivalent entry (`.worktrees`, `.worktrees/`, `/.worktrees` or `/.worktrees/`) is already present. A root outside the main worktree is not added.

```gitignore
/.worktrees/
```

The entry uses the root in effect when `init` runs: `GIT_WORKTREE_MANAGER_WORKTREES_ROOT` if set, otherwise the default. If you later set a different `worktreesRoot` in the configuration file, add that folder to `.gitignore` yourself.

## Development

```sh
pnpm run test   # runs test/git-worktree-manager.test.sh against temporary repositories
pnpm run lint   # runs shellcheck
```
