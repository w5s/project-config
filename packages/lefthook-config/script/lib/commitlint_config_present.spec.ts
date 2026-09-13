import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync, withTempDirSync } from './testing.js';

describe('commitlint_config_present', () => {
  it('returns success when commitlint.config.js exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'commitlint.config.js'),
        'export default {};\n',
      );

      const result = sourceEnvAndRunSync('commitlint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when package.json has a commitlint key', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          commitlint: { extends: ['@commitlint/config-conventional'] },
        }),
      );

      const result = sourceEnvAndRunSync('commitlint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns failure when no commitlint configuration is present', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify({ name: 'demo' }));

      const result = sourceEnvAndRunSync('commitlint_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(1);
    });
  });
});
