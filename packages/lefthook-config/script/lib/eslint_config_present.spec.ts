import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync, withTempDirSync } from './testing.js';

describe('eslint_config_present', () => {
  it('returns success when eslint.config.js exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'eslint.config.js'), 'export default [];\n');

      const result = sourceEnvAndRunSync('eslint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when .eslintrc.json exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, '.eslintrc.json'), '{}\n');

      const result = sourceEnvAndRunSync('eslint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when package.json has an eslintConfig key', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          eslintConfig: { extends: ['eslint:recommended'] },
        }),
      );

      const result = sourceEnvAndRunSync('eslint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns failure when no eslint configuration is present', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify({ name: 'demo' }));

      const result = sourceEnvAndRunSync('eslint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(1);
    });
  });
});
