import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, runShellSync, withTempDirSync } from '../lib/testing.js';

const prettierScript = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'prettier.sh',
);

function writePrettierStub(binDir: string) {
  mkdirSync(binDir, { recursive: true });
  const stubPath = path.join(binDir, 'prettier');
  writeFileSync(stubPath, '#!/usr/bin/env bash\necho "prettier stub ran" "$@"\n');
  chmodSync(stubPath, 0o755);
  return stubPath;
}

describe('prettier.sh', () => {
  it('exits successfully when LEFTHOOK_PRETTIER_ENABLED is falsy', () => {
    const result = runShellSync([prettierScript, 'src/index.ts'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_PRETTIER_ENABLED: 'false',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain(
      'Info: [@w5s/lefthook-config] prettier disabled via LEFTHOOK_PRETTIER_ENABLED',
    );
  });

  it('suppresses info output when LEFTHOOK_LOG_LEVEL is warn or higher', () => {
    const result = runShellSync([prettierScript, 'src/index.ts'], {
      cwd: '/tmp',
      env: {
        ...restrictedPathEnv,
        LEFTHOOK_LOG_LEVEL: 'warn',
        LEFTHOOK_PRETTIER_ENABLED: 'false',
      },
    });

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('');
    expect(result.stderr).toBe('');
  });

  it('warns and exits successfully when no prettier configuration is present', () => {
    withTempDirSync((tempDir) => {
      const result = runShellSync([prettierScript, 'src/index.ts'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
      expect(result.stdout).toContain(
        'Info: [@w5s/lefthook-config] (skip) no configuration found',
      );
    });
  });

  it('fails with a helpful message when prettier is missing but config exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'prettier.config.js'), 'export default {};\n');

      const result = runShellSync([prettierScript, 'src/index.ts'], {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).not.toBe(0);
      expect(result.stderr).toContain(
        'Error: [@w5s/lefthook-config] prettier not found in PATH',
      );
      expect(result.stderr).toContain('Install prettier');
    });
  });

  it('exits successfully when enabled with config but no staged files', () => {
    withTempDirSync((tempDir) => {
      const binDir = path.join(tempDir, 'bin');
      writePrettierStub(binDir);
      writeFileSync(path.join(tempDir, 'prettier.config.js'), 'export default {};\n');

      const result = runShellSync([prettierScript], {
        cwd: tempDir,
        env: {
          ...restrictedPathEnv,
          PATH: `${binDir}:/usr/bin:/bin`,
        },
      });

      expect(result.status).toBe(0);
      expect(result.stdout).toContain(
        'Info: [@w5s/lefthook-config] (skip) no staged files to check',
      );
    });
  });

  it('runs prettier --check on staged files when enabled with config', () => {
    withTempDirSync((tempDir) => {
      const binDir = path.join(tempDir, 'bin');
      writePrettierStub(binDir);
      writeFileSync(path.join(tempDir, 'prettier.config.js'), 'export default {};\n');

      const result = runShellSync([prettierScript, 'src/index.ts'], {
        cwd: tempDir,
        env: {
          ...restrictedPathEnv,
          PATH: `${binDir}:/usr/bin:/bin`,
        },
      });

      expect(result.status).toBe(0);
      expect(result.stdout).toContain('prettier stub ran');
      expect(result.stdout).toContain('--check');
      expect(result.stdout).toContain('src/index.ts');
    });
  });
});
