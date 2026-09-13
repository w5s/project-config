import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { restrictedPathEnv, sourceEnvAndRunSync, withTempDirSync } from './testing.js';

describe('config_present', () => {
  it('returns success for a bare .{app}rc file', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, '.commitlintrc'), '{}\n');

      const result = sourceEnvAndRunSync('config_present --app commitlint', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success for .{app}rc.{ext} when extension is listed', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, '.eslintrc.json'), '{}\n');

      const result = sourceEnvAndRunSync(
        'config_present --app eslint --ext "json,js"',
        {
          cwd: tempDir,
          env: restrictedPathEnv,
        },
      );

      expect(result.status).toBe(0);
    });
  });

  it('returns success for {app}.config.{ext}', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'commitlint.config.js'), 'export default {};\n');

      const result = sourceEnvAndRunSync('config_present --app commitlint', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('ignores extensions not listed in --ext', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'commitlint.config.js'), 'export default {};\n');

      const result = sourceEnvAndRunSync(
        'config_present --app commitlint --ext "json,yaml"',
        {
          cwd: tempDir,
          env: restrictedPathEnv,
        },
      );

      expect(result.status).toBe(1);
    });
  });

  it('returns success when package.json has the app key (via jq)', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          commitlint: { extends: ['@commitlint/config-conventional'] },
        }),
      );

      const result = sourceEnvAndRunSync('config_present --app commitlint', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(0);
    });
  });

  it('returns success when package.json has a --package-config key', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          eslintConfig: { extends: ['eslint:recommended'] },
        }),
      );

      const result = sourceEnvAndRunSync(
        'config_present --app eslint --package-config eslintConfig',
        {
          cwd: tempDir,
          env: restrictedPathEnv,
        },
      );

      expect(result.status).toBe(0);
    });
  });

  it('ignores the default app key when --package-config is set', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(
        path.join(tempDir, 'package.json'),
        JSON.stringify({
          eslint: { extends: ['eslint:recommended'] },
        }),
      );

      const result = sourceEnvAndRunSync(
        'config_present --app eslint --package-config eslintConfig',
        {
          cwd: tempDir,
          env: restrictedPathEnv,
        },
      );

      expect(result.status).toBe(1);
    });
  });

  it('returns failure when no matching configuration is present', () => {
    withTempDirSync((tempDir) => {
      writeFileSync(path.join(tempDir, 'package.json'), JSON.stringify({ name: 'demo' }));

      const result = sourceEnvAndRunSync('config_present --app commitlint', {
        cwd: tempDir,
        env: restrictedPathEnv,
      });

      expect(result.status).toBe(1);
    });
  });

  it('fails when --app is missing', () => {
    const result = sourceEnvAndRunSync('config_present --ext "json"', {
      env: restrictedPathEnv,
    });

    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain('config_present: --app is required');
  });
});
