import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import {
  envShPath,
  runShellSync,
  sourceEnvAndRunSync,
  withTempDirSync,
} from './lib/testing.js';

describe('env.sh', () => {
  it('exports LEFTHOOK_CONFIG_PACKAGE', () => {
    const result = sourceEnvAndRunSync(
      'printf "%s" "$LEFTHOOK_CONFIG_PACKAGE"',
    );

    expect(result.status).toBe(0);
    expect(result.stdout).toBe('@w5s/lefthook-config');
  });

  it('prepends ./node_modules/.bin to PATH when that directory exists', () => {
    withTempDirSync((tempDir) => {
      const binDir = path.join(tempDir, 'node_modules/.bin');
      mkdirSync(binDir, { recursive: true });
      writeFileSync(path.join(binDir, 'stub-tool'), '#!/bin/sh\necho stub-ok\n', {
        mode: 0o755,
      });

      const result = runShellSync(['-c', `source "${envShPath}" && stub-tool`], {
        cwd: tempDir,
        env: { ...process.env, PATH: '/usr/bin:/bin' },
      });

      expect(result.status).toBe(0);
      expect(result.stdout).toContain('stub-ok');
    });
  });

  it('loads lib helpers after sourcing', () => {
    const result = sourceEnvAndRunSync('type -t die && type -t command_assert');

    expect(result.status).toBe(0);
    expect(result.stdout).toContain('function');
  });
});
