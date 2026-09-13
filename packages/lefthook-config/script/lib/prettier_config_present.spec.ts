import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync, withTempDirSync } from './testing.js';

describe('prettier_config_present', () => {
  it('returns success when prettier.config.js exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'prettier.config.js'), 'export default {};\n');

      const result = sourceEnvAndRunSync('prettier_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when .prettierrc.json exists', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, '.prettierrc.json'), '{}\n');

      const result = sourceEnvAndRunSync('prettier_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when package.json has a prettier key', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          prettier: '@w5s/prettier-config',
        }),
      );

      const result = sourceEnvAndRunSync('prettier_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns failure when no prettier configuration is present', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify({ name: 'demo' }));

      const result = sourceEnvAndRunSync('prettier_config_present', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(1);
    });
  });
});
