import { accessSync, constants, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';

import { vendoredCliPath, VENDORING_SKILLS } from '../scripts/vendored-cli.ts';

const packageDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

describe('vendored CLI', () => {
  test.each(VENDORING_SKILLS)('%s bundles the git-worktree-manager binary', (skill) => {
    const file = vendoredCliPath(packageDir, skill);

    expect(statSync(file).isFile()).toBe(true);
    expect(() => accessSync(file, constants.X_OK)).not.toThrow();
  });
});
