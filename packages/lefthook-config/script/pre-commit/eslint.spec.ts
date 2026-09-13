import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, runShellSync, withTempDirSync } from '../lib/testing.js';

const eslintScript = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'eslint.sh',
);

function writeEslintStub(binDir: string) {
  mkdirSync(binDir, { recursive: true });
  const stubPath = path.join(binDir, 'eslint');
  writeFileSync(stubPath, '#!/usr/bin/env bash\necho "eslint stub ran" "$@"\n');
  chmodSync(stubPath, 0o755);
  return stubPath;
}

describe('eslint.sh', () => {
  it('exits successfully when LEFTHOOK_ESLINT_ENABLED is falsy', () => {
    const result = runShellSync([eslintScript, 'src/index.ts'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_ESLINT_ENABLED: 'false',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain(
      'Info: [@w5s/lefthook-config] eslint disabled via LEFTHOOK_ESLINT_ENABLED',
    );
  });

  it('suppresses info output when LEFTHOOK_LOG_LEVEL is warn or higher', () => {
    const result = runShellSync([eslintScript, 'src/index.ts'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_ESLINT_ENABLED: 'false',
        LEFTHOOK_LOG_LEVEL: 'warn',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('');
    expect(result.stderr).toBe('');
  });

  it('warns and exits successfully when no eslint configuration is present', () => {
    withTempDirSync((tempDir) => {
      const result = runShellSync([eslintScript, 'src/index.ts'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
      expect(result.stderr).toContain(
        'Warning: [@w5s/lefthook-config] (skip) no configuration found',
      );
    });
  });

  it('fails with a helpful message when eslint is missing but config exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'eslint.config.js'), 'export default [];\n');

      const result = runShellSync([eslintScript, 'src/index.ts'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain(
        'Error: [@w5s/lefthook-config] eslint not found in PATH',
      );
      expect(result.stderr).toContain('Install eslint');
    });
  });

  it('exits successfully when enabled with config but no staged files', () => {
    withTempDirSync((tempDir) => {
      const binDir = path.join(tempDir, 'bin');
      writeEslintStub(binDir);
      writeFileSync(path.join(tempDir, 'eslint.config.js'), 'export default [];\n');

      const result = runShellSync([eslintScript], {
        cwd: tempDir,
        env: {
          ...restrictedPathEnv,
          PATH: `${binDir}:/usr/bin:/bin`,
        },
      });

      expect(result.status).toBe(0);
      expect(result.stdout).toContain(
        'Info: [@w5s/lefthook-config] (skip) no staged files to lint',
      );
    });
  });
});
