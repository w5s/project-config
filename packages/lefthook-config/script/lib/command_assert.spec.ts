import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync } from './testing.js';

describe('command_assert', () => {
  it('succeeds when the command is on PATH', () => {
    const result = sourceEnvAndRunSync('command_assert true', {
      env: restrictedPathEnv,
    });

    expect(result.status).toBe(0);
  });

  it('fails with a package-prefixed message when the command is missing', () => {
    const result = sourceEnvAndRunSync('command_assert commitlint', {
      cwd: '/tmp',
      env: restrictedPathEnv,
    });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain(
      'Error: [@w5s/lefthook-config] commitlint not found in PATH',
    );
  });

  it('includes an optional fixer message on a second line', () => {
    const result = sourceEnvAndRunSync(
      'command_assert commitlint "Install @commitlint/cli in this project."',
      { cwd: '/tmp', env: restrictedPathEnv },
    );

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('Install @commitlint/cli');
  });
});
