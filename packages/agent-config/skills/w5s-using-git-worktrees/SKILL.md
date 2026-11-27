---
name: w5s-using-git-worktrees
description: Use whenever git worktrees come up (create, list, remove, clean up), or before feature work, a bugfix, or a plan that should stay isolated from the current branch and uncommitted changes. Runs every worktree operation through git-worktree-manager, never raw `git worktree`.
license: MIT
compatibility: Requires a Git repository and shell access. Uses the git-worktree-manager CLI, resolved from the repo, PATH, or a vendored copy bundled with this skill.
metadata:
  author: Julien Polo <julien.polo@gmail.com>
  version: 1.0.0-alpha.1
  repository: https://github.com/w5s/project-config
  package: '@w5s/agent-config'
  category: development
  tags: git, worktrees, isolation, branching
---

# Using Git Worktrees

Every worktree operation goes through **git-worktree-manager**, a Bash CLI that
owns placement, branches, env-file syncing, and safe removal. Never run
`git worktree add`, `remove`, or `prune` directly: raw git skips the project's
config and the tool's safety checks.

- Creating a workspace: Steps 0–4.
- Listing, removing, or cleaning up: [Managing existing worktrees](#managing-existing-worktrees).

Announce: "I'm using the w5s-using-git-worktrees skill."

## Resolve the tool

The first that exists wins. The vendored copy always exists, so never fall back
to raw git.

```bash
WT="$(git rev-parse --show-toplevel)/node_modules/.bin/git-worktree-manager"
[ -x "$WT" ] || WT=$(command -v git-worktree-manager) || WT="<skill-dir>/scripts/git-worktree-manager"
```

`<skill-dir>` is this skill's absolute path.

If any command fails with a permission error, the sandbox blocked it: say so and
continue in the current directory. Never retry around a sandbox.

## Step 0: Detect existing isolation

Harnesses often start you in a linked worktree; creating another on top is the
most common mistake.

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" && pwd -P)
SUPER=$(git rev-parse --show-superproject-working-tree)  # non-empty only in a submodule
```

- **`GIT_DIR != GIT_COMMON` and `SUPER` empty:** already isolated. Report the
  path and `git branch --show-current` (flag a detached HEAD), then go to Step 2.
- **Otherwise** (normal checkout or submodule): unless the user asked for a
  worktree, ask first, since it adds a branch, a directory, and a `.gitignore`
  entry. If they decline, work in place from Step 2.

## Step 1: Create the worktree

```bash
[ -f "$(git rev-parse --show-toplevel)/.gitworktrees" ] || "$WT" init   # records the config, gitignores the root
"$WT" add --branch=<branch>   # prints: Created worktree <path> on branch <branch>
cd <path>
```

- `.gitworktrees` (git-config syntax) is the project's recorded setup. Never
  write it by hand; `init` refuses to overwrite it.
- `add` checks out the branch if it exists locally or on `origin`, else creates
  it from `HEAD`, then copies `.env` files. If the branch or path is already in
  use, reuse that worktree. Relay the `git push -u` tip it prints for new branches.

## Step 2: Install dependencies

```bash
[ -f package.json ]     && { [ -f pnpm-lock.yaml ] && pnpm install || { [ -f yarn.lock ] && yarn || npm install; }; }
[ -f Cargo.toml ]       && cargo build
[ -f requirements.txt ] && pip install -r requirements.txt
[ -f pyproject.toml ]   && { command -v poetry >/dev/null && poetry install || pip install -e .; }
[ -f go.mod ]           && go mod download
```

## Step 3: Verify a clean baseline

Run the project's tests (`pnpm test`, `cargo test`, `pytest`, …) so later
failures are attributable to your changes. If they fail, report and ask whether
to proceed: a dirty baseline is the user's call.

## Step 4: Report

```text
Worktree ready at <full-path> (git-worktree-manager via <node_modules|PATH|vendored>)
Baseline: <N passing, 0 failing | tests skipped: reason>
Ready to implement <feature-name>
```

## Managing existing worktrees

The tool only touches worktrees under the configured root and refuses dirty,
unpushed, locked, or protected ones.

- **Inspect:** `"$WT" list` shows `[dirty:N]`, `[unpushed:N]`, `[no-upstream]`,
  and `[missing directory]` markers.
- **Remove one:** `"$WT" remove --dir=<dir>` (relative to the root; keeps the branch).
- **Clean up:** preview, get the user's approval, then apply.

  ```bash
  "$WT" cleanup --dry-run --include-gone   # remove/keep plan, one reason per worktree
  "$WT" cleanup --yes --include-gone
  ```

  - `--yes` is required: agent shells are not terminals, so without it
    `cleanup` exits instead of prompting.
  - `--include-gone` adds worktrees whose remote branch was deleted (the usual
    state after a merged PR). Without it, only branches merged into the base go.
  - Worktrees under a day old are kept. Pass `--min-age=0` or `--delete-branch`
    only when the user asks.

If the plan keeps a worktree the user wants gone, relay the tool's reason
(`uncommitted changes`, `not merged`, …) and let them decide. Never force it
with raw git.

All commands and flags: `references/git-worktree-manager.md`.
