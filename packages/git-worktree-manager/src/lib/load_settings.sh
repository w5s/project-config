# shellcheck shell=bash
load_settings() {
  resolve_setting "${GIT_WORKTREE_MANAGER_ROOT:-}" root "$DEFAULT_ROOT"
  ROOT=$SETTING_VALUE
  resolve_setting "${GIT_WORKTREE_MANAGER_SYNC_INCLUDE:-}" syncInclude "$DEFAULT_SYNC_INCLUDE"
  SYNC_INCLUDE=$SETTING_VALUE
  resolve_setting "${GIT_WORKTREE_MANAGER_SYNC_EXCLUDE:-}" syncExclude "$DEFAULT_SYNC_EXCLUDE"
  SYNC_EXCLUDE=$SETTING_VALUE
  resolve_setting "${GIT_WORKTREE_MANAGER_AUTO_FETCH:-}" autoFetch "$DEFAULT_AUTO_FETCH"
  AUTO_FETCH=$SETTING_VALUE
  case $AUTO_FETCH in
    true | false) ;;
    *) die "autoFetch must be 'true' or 'false', got '$AUTO_FETCH'" ;;
  esac
  resolve_setting "${GIT_WORKTREE_MANAGER_PROTECTED_BRANCHES:-}" protectedBranches "$DEFAULT_PROTECTED_BRANCHES"
  PROTECTED_BRANCHES=$SETTING_VALUE
  resolve_setting "${GIT_WORKTREE_MANAGER_BASE_BRANCH:-}" baseBranch "$DEFAULT_BASE_BRANCH"
  BASE_BRANCH=$SETTING_VALUE
}
