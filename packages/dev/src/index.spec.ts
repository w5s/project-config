import { describe, it, expect } from '@jest/globals';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(
      [
        'CONFIG_GLOB_LIST',
        'ECMA_VERSION',
        'EXTENSIONS',
        'EXTENSIONS_RESOURCES_REGEX',
        'EXTENSIONS_WITHOUT_DOT',
        'IGNORE_LIST',
        'ESLintConfig',
      ].sort()
    );
  });
});
