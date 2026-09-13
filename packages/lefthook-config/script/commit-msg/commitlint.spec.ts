import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, runShellSync, withTempDirSync } from '../lib/testing.js';

const commitlintScript = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'commitlint.sh',
);

describe('commitlint.sh', () => {
  it('exits successfully when LEFTHOOK_COMMITLINT_ENABLED is falsy', () => {
    const result = runShellSync([commitlintScript, '/tmp/commit-msg'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_COMMITLINT_ENABLED: 'false',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain(
      'Info: [@w5s/lefthook-config] commitlint disabled via LEFTHOOK_COMMITLINT_ENABLED',
    );
  });

  it('suppresses info output when LEFTHOOK_LOG_LEVEL is warn or higher', () => {
    const result = runShellSync([commitlintScript, '/tmp/commit-msg'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_COMMITLINT_ENABLED: 'false',
        LEFTHOOK_LOG_LEVEL: 'warn',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('');
    expect(result.stderr).toBe('');
  });

  it('warns and exits successfully when no commitlint configuration is present', () => {
    withTempDirSync((tempDir) => {
      const result = runShellSync([commitlintScript, '/tmp/commit-msg'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
      expect(result.stderr).toContain(
        'Warning: [@w5s/lefthook-config] no commitlint configuration found; skipping',
      );
    });
  });

  it('fails with a helpful message when commitlint is missing but config exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'commitlint.config.js'), 'export default {};\n');

      const result = runShellSync([commitlintScript, '/tmp/commit-msg'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain(
        'Error: [@w5s/lefthook-config] commitlint not found in PATH',
      );
      expect(result.stderr).toContain('Install @commitlint/cli');
    });
  });
});
