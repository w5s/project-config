const { commitlint } = require('../core/commitlint');
const { hasGit } = require('../core/git');

/**
 *
 * @param {{
 *   commitLintPreset?: string
 * }} config
 */
function createCommitLint({ commitLintPreset: commitLintPresetDefault }) {
  /**
   *
   * @param {{
   *   commitLintPreset: string
   * }} parameters
   */
  function task({ commitLintPreset }) {
    const gitPresent = hasGit();

    commitlint({
      preset: commitLintPreset,
      state: gitPresent ? 'present' : 'absent',
    });
  }

  task.description = 'Setup CommitLint';
  task.parameters = {
    commitLintPreset: {
      default: commitLintPresetDefault,
      message: 'Enter CommitLint preset name',
      type: 'input',
    },
  };

  return task;
}

module.exports = createCommitLint({
  commitLintPreset: '@w5s/commitlint-config',
});
