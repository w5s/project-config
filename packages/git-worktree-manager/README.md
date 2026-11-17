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
| `add --branch=<branch> [--dir=<dir>]` | Create a worktree in `<parentDir>/<dir>` and copy env files. `<dir>` defaults to the branch name and vice versa. |
| `list [--plain] [--sort]` | List worktrees with markers: `[main]`, `[dirty:N]`, `[unpushed:N]`, `[no-upstream]`, `[missing directory]`. `--plain` prints raw `git worktree list`. `--sort` puts the main worktree first, then clean ones. |
| `find --search=<text>` | List worktrees whose line contains `<text>` (case-insensitive). |
| `remove --dir=<dir>` | Remove a worktree without uncommitted or unpushed changes. The branch is kept. |
| `rename --old-dir=<dir> --new-dir=<dir>` | Rename a worktree directory. The worktree must be clean and pushed. |
| `switch --from-dir=<dir> --branch=<branch> [--to-dir=<dir>]` | Check out `<branch>` in an existing worktree and move it to `<to-dir>` (default: `<branch>`). The worktree must be clean and pushed. |
| `sync-env (--to=<dir> \| --all)` | Copy env files from the main worktree into one or all other worktrees. |
| `help` | Show the usage text. |

Safety rules: the main worktree is never removed, renamed or switched. A worktree with uncommitted changes or unpushed commits is refused by `remove`, `rename` and `switch`. `add` refuses a branch that is already checked out in another worktree.

`add` runs `git fetch` first when `autoFetch` is enabled. If the branch exists locally, it is checked out. If it exists only on `origin`, a tracking branch is created. Otherwise a new branch is created from the main worktree's `HEAD`.

### Env file copying

`add` and `sync-env` copy env files from the main worktree. They search every directory under the main worktree (skipping `node_modules` and `.git`). In each directory, the top-level files matching `envPatterns` are copied to the same relative location in the target worktree, except those listed in `envExcludes`.

## Configuration

The configuration file is `.git-worktree-manager`, at the root of the main worktree (the folder that contains `.git`). It uses git config syntax and is read with `git config --file`, so it accepts the same format as `.gitconfig` and `.gitmodules`. `parentDir` is resolved relative to that same root:

```ini
[worktree-manager]
    parentDir = ..
    envPatterns = .env .env.*
    envExcludes = .env.template .env.example .env.sample
    autoFetch = true
```

Multi-value keys can be repeated as in any git config file. Their values are joined with spaces.

| Config key | Environment variable | Default | Description |
| --- | --- | --- | --- |
| `parentDir` | `GIT_WORKTREE_MANAGER_PARENT_DIR` | `..` | Directory where worktrees are created. Relative paths are resolved from the main worktree. |
| `envPatterns` | `GIT_WORKTREE_MANAGER_ENV_PATTERNS` | `.env .env.*` | Filename patterns of env files to copy. |
| `envExcludes` | `GIT_WORKTREE_MANAGER_ENV_EXCLUDES` | `.env.template .env.example .env.sample` | Filenames never copied. |
| `autoFetch` | `GIT_WORKTREE_MANAGER_AUTO_FETCH` | `true` | Run `git fetch` before `add`. Accepts `true` or `false`. |

Environment variables take a space-separated list for the multi-value settings.

## Development

```sh
pnpm run test   # runs test/git-worktree-manager.test.sh against temporary repositories
pnpm run lint   # runs shellcheck
```
