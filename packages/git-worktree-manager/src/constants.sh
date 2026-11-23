# shellcheck shell=bash
PROGRAM=git-worktree-manager
CONFIG_FILE_NAME=.gitworktrees

# Default settings. Used by load_settings and written (commented out) by init.
DEFAULT_ROOT=.worktrees
DEFAULT_SYNC_INCLUDE=".env .env.*"
DEFAULT_SYNC_EXCLUDE=".env.template .env.example .env.sample"
DEFAULT_AUTO_FETCH=true
DEFAULT_PROTECTED_BRANCHES="main master develop"
DEFAULT_BASE_BRANCH=""
DEFAULT_MIN_AGE=1
