/**
 * Project common scripts
 */
export const ProjectScript = {
  Build: 'build',
  Clean: 'clean',
  CodeAnalysis: 'code-analysis',
  Coverage: 'coverage',
  Develop: 'develop',
  Docs: 'docs',
  Format: 'format',
  Install: 'install',
  Lint: 'lint',
  Prepare: 'prepare',
  Release: 'release',
  Rescue: 'rescue',
  Spellcheck: 'spellcheck',
  Test: 'test',
  Validate: 'validate',
} as const;
export type ProjectScript = (typeof ProjectScript)[keyof typeof ProjectScript];
