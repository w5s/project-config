# git-worktree-manager: resolution and usage

This skill drives the `git-worktree-manager` CLI (a Bash port of
git-worktree-utils). This file covers how to find it, how to establish the
project configuration, and the handful of commands the skill needs. The CLI's
own `help` output and its README document the full surface.

## 1. Resolve the binary

Find the binary once and keep it in `$WT`. Prefer a project-local install, then
a global one, then the copy vendored with this skill. Resolving in this order
means the project's own version wins when it exists, and the skill still works in
a repo that never installed the tool.

```bash
repo_root=$(git rev-parse --show-toplevel)
if [ -x "$repo_root/node_modules/.bin/git-worktree-manager" ]; then
  WT="$repo_root/node_modules/.bin/git-worktree-manager"
elif command -v git-worktree-manager >/dev/null 2>&1; then
  WT="git-worktree-manager"
else
  # Vendored copy shipped with this skill (always present). Resolve it relative
  # to this reference file's skill directory.
  WT="<skill-dir>/scripts/git-worktree-manager"
fi
```

`<skill-dir>` is the `using-git-worktrees` directory that contains this
`references/` folder. Use its absolute path so the binary resolves regardless of
the current working directory.

The tool is also reachable as the git subcommand `git worktree-manager <command>`
when it is on `PATH`; `$WT <command>` works in every case, so prefer it.

## 2. Establish the method (`.gitworktrees`)

`.gitworktrees` at the repo root records how the project manages worktrees. It is
git-config syntax, read with `git config --file`. Its presence is the signal that
the method is established; its `worktree-manager.root` key says where worktrees
live (default `.worktrees`).

```bash
if [ ! -f "$repo_root/.gitworktrees" ]; then
  "$WT" init    # writes .gitworktrees and adds the worktrees root to .gitignore
fi
```

Run `init` only when the file is absent — it refuses to overwrite an existing
one, on purpose. After `init`, the configuration is captured in the repo, so
every later run (and every teammate) resolves worktrees the same way.

You rarely need to parse the file yourself, but if you want the root:

```bash
root=$(git config --file "$repo_root/.gitworktrees" --get worktree-manager.root || echo .worktrees)
```

## 3. Create or reuse a worktree (`add`)

```bash
"$WT" add --branch=<branch> [--dir=<dir>]
```

- `--branch` is the branch to work on. `--dir` is the directory name under the
  worktrees root; it defaults to the branch name (and vice versa), so usually
  pass only `--branch`.
- Behavior: if the branch exists locally it is checked out; if it exists only on
  `origin` a tracking branch is created; otherwise a new branch is created from
  the main worktree's `HEAD`. Env files are copied in afterward.
- `add` refuses a branch already checked out in another worktree, and refuses an
  existing target path — both are signals to reuse the existing worktree rather
  than force a new one.

`add` prints `Created worktree <path> on branch <branch>` on success. Capture the
path and `cd` into it:

```bash
out=$("$WT" add --branch="$branch")
printf '%s\n' "$out"
path=$(printf '%s\n' "$out" | sed -n 's/^Created worktree \(.*\) on branch .*/\1/p')
cd "$path"
```

If the branch is brand new, `add` also prints a tip to publish it with
`git push -u origin <branch>`; surface that to the user when relevant.

## 4. Inspect and finish (as needed)

- `"$WT" list [--sort]` — worktrees with status markers (`[main]`, `[dirty:N]`,
  `[unpushed:N]`, `[no-upstream]`, `[missing directory]`). Use it to find a path
  or confirm state.
- `"$WT" find --search=<text>` — filter the list by substring.
- `"$WT" remove --dir=<dir>` — remove a clean, pushed worktree (keeps the branch).
- `"$WT" cleanup [--dry-run]` — remove worktrees whose branches are merged /
  squash-merged / gone. Prints a plan and asks before removing. Good for
  tidying up after the work lands.
- `"$WT" sync --all` — re-copy env files from the main worktree into the others.

## 5. Sandbox / permission failures

If any command exits with a permission error (a sandbox denial, typically on
`git worktree add`), do not retry around it. Tell the user the sandbox blocked
worktree creation and that you are continuing in the current directory, then run
Step 2 (setup) and Step 3 (baseline) in place.
