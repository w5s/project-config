import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

import { packageRoot } from './script/lib/testing.js';

function readPackageFile(relativePath: string) {
  return readFileSync(path.join(packageRoot, relativePath), 'utf8');
}

describe('yaml presets', () => {
  it('default.yml matches snapshot', () => {
    expect(readPackageFile('default.yml')).toMatchSnapshot();
  });

  it('hook/commit-msg/commitlint.yml matches snapshot', () => {
    expect(readPackageFile('hook/commit-msg/commitlint.yml')).toMatchSnapshot();
  });

  it('hook/pre-commit/eslint.yml matches snapshot', () => {
    expect(readPackageFile('hook/pre-commit/eslint.yml')).toMatchSnapshot();
  });

  it('hook/pre-commit/prettier.yml matches snapshot', () => {
    expect(readPackageFile('hook/pre-commit/prettier.yml')).toMatchSnapshot();
  });
});
