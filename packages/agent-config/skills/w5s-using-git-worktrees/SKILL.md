---
name: w5s-using-git-worktrees
description: Use when starting feature work, a bugfix, or executing an implementation plan that should stay isolated from your current branch and uncommitted changes, or whenever worktrees or parallel branches come up. Creates the isolated worktree with git-worktree-manager (resolved from node_modules, then PATH, then a vendored copy) and establishes the project's .gitworktrees configuration on first use.
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

## Overview

Make work happen in an isolated workspace so the user's current branch and
uncommitted changes are never disturbed. This skill always creates that
workspace with **git-worktree-manager**, a small Bash CLI that owns worktree
placement, branch handling, env-file syncing, and cleanup. Leaning on one tool
keeps every worktree consistent and reproducible instead of hand-rolling
`git worktree add` differently each time.

**Core principle:** respect isolation that already exists, resolve the one tool,
let it do the work, and surface problems loudly instead of silently degrading.

**Announce at start:** "I'm using the w5s-using-git-worktrees skill to set up an
isolated workspace."

## How this skill creates worktrees

Two ideas drive everything below; the mechanics live in
`references/git-worktree-manager.md` — read it when you reach Step 1.

**Resolving the tool.** Find the `git-worktree-manager` binary in this order and
use the first that exists:

1. the repo's `node_modules/.bin/git-worktree-manager` (a project dependency),
2. your `PATH` (`git-worktree-manager`, or the `git worktree-manager` subcommand),
3. the copy vendored with this skill at `scripts/git-worktree-manager`.

The vendored copy is always present, so the tool is always runnable — there is
no "tool missing" dead end, and therefore no reason to fall back to raw git.

**Establishing the method.** The file `.gitworktrees` at the repo root is the
record of how this project manages worktrees (it is git-config syntax, read by
the tool). If it exists, the method is already established — just use the tool,
which reads its `root` and other settings from that file. If it does not exist,
run `git-worktree-manager init` once to establish and record the configuration;
that writes `.gitworktrees` and adds the worktrees root to `.gitignore`, so the
decision is captured in the repo and the next run behaves identically.

**When the environment blocks you.** If a sandbox denies worktree creation (a
permission error), say so plainly and continue working in the current directory.
Never try to escalate or route around the sandbox — report it and let the user
decide.

## Step 0: Detect existing isolation

**Before creating anything, check whether you are already in an isolated
workspace.** Some harnesses (and the user) may have already put you in a linked
worktree; creating another on top is the most common mistake.

```bash
GIT_DIR=$(cd "$(git rev-parse --git-dir)" 2>/dev/null && pwd -P)
GIT_COMMON=$(cd "$(git rev-parse --git-common-dir)" 2>/dev/null && pwd -P)
BRANCH=$(git branch --show-current)
```

`GIT_DIR != GIT_COMMON` means you are in a linked worktree — *or* in a submodule,
which looks identical. Rule out the submodule case first:

```bash
# Prints a path only inside a submodule → treat as a normal repo, not a worktree.
git rev-parse --show-superproject-working-tree 2>/dev/null
```

**If `GIT_DIR != GIT_COMMON` and not a submodule:** you are already isolated.
Skip to Step 2. Report: "Already in an isolated workspace at `<path>` on branch
`<branch>`." If HEAD is detached, note that a branch will be needed at finish
time.

**If `GIT_DIR == GIT_COMMON` (or in a submodule):** you are in a normal checkout.
If the user has not already asked for a worktree, get consent before creating one
— it mutates their repo (a new branch, a new directory, a `.gitignore` entry):

> "Would you like me to set up an isolated worktree? It keeps your current branch
> and uncommitted changes untouched."

If the user declines, work in place and skip to Step 2.

## Step 1: Create the isolated workspace

Read `references/git-worktree-manager.md` and follow it. In short:

1. **Resolve the binary** into `$WT` using the order above.
2. **Ensure the method is established:** if `.gitworktrees` is absent at the repo
   root, run `"$WT" init`.
3. **Create (or reuse) the worktree** for the branch with `"$WT" add`, then `cd`
   into the path it reports. The tool places it under the configured `root`,
   creates or checks out the branch, and syncs env files for you.

If `add` fails because the sandbox blocked it, apply the "environment blocks you"
rule above: report it and work in place.

## Step 2: Project setup

Install dependencies so the workspace can build and test. Auto-detect the
ecosystem:

```bash
[ -f package.json ]       && { [ -f pnpm-lock.yaml ] && pnpm install || { [ -f yarn.lock ] && yarn || npm install; }; }
[ -f Cargo.toml ]         && cargo build
[ -f requirements.txt ]   && pip install -r requirements.txt
[ -f pyproject.toml ]     && { command -v poetry >/dev/null && poetry install || pip install -e .; }
[ -f go.mod ]             && go mod download
```

Skip any that do not apply. (git-worktree-manager already copies `.env`-style
files into the new worktree, so local secrets are in place.)

## Step 3: Verify a clean baseline

Run the project's tests so later failures are attributable to your changes, not a
pre-existing broken state:

```bash
# Pick the project-appropriate command, e.g.:
pnpm test   # or: npm test / cargo test / pytest / go test ./...
```

- **Tests pass:** report ready.
- **Tests fail:** report the failures and ask whether to proceed or investigate
  first. A dirty baseline is the user's call, not yours.

## Report

```text
Worktree ready at <full-path> (git-worktree-manager via <node_modules|PATH|vendored>)
Baseline: <N passing, 0 failing | tests skipped: reason>
Ready to implement <feature-name>
```

## Quick reference

| Situation | Action |
|-----------|--------|
| Already in a linked worktree | Skip creation (Step 0) |
| In a submodule | Treat as a normal repo (Step 0 guard) |
| `git-worktree-manager` in node_modules/PATH | Use it |
| Not installed anywhere | Use the vendored `scripts/git-worktree-manager` |
| `.gitworktrees` present | Method established — just `add` |
| `.gitworktrees` absent | `init` first to establish and record it |
| `add`/`init` hits a permission error | Sandbox blocked it — report and work in place |
| No recognizable manifest | Skip dependency install |
| Baseline tests fail | Report + ask before proceeding |

## Common rationalizations

| Excuse | Reality |
|--------|---------|
| "Obviously not in a worktree — no need to check" | Harness-created isolation and submodules both fool the eye. The Step 0 commands settle it in one line. |
| "I'll just use `git worktree add` directly" | Raw git skips the project's `root`, env-file syncing, and cleanup semantics, so worktrees drift apart. The tool is always available (vendored), so there is no reason to bypass it. |
| "The tool isn't installed, I'll fall back to plain git" | There is no missing-tool case: the vendored copy runs the same code offline. Use it instead of improvising. |
| "I'll set up `.gitworktrees` by hand" | `init` writes it correctly and gitignores the root. Running it is the capture step — do that instead of guessing the format. |
| "The sandbox error is probably flaky, retry harder" | A permission denial is the environment's decision. Report it and work in place; never try to route around a sandbox. |
| "Baseline tests can wait" | A dirty baseline makes every later failure ambiguous. Run them now; proceeding past failures is the user's call. |
