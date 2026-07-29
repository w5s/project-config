import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageJson = JSON.parse(
  readFileSync(path.join(packageRoot, 'package.json'), 'utf8'),
) as {
  dependencies?: Record<string, string>;
};

describe('package.json', () => {
  it('has no dependencies because of pnpm plugin limitation', () => {
    expect(packageJson.dependencies).toBeUndefined();
  });
});
