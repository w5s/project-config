import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(
      ['CONFIG_GLOB_LIST', 'EXTENSIONS_WITHOUT_DOT', 'IGNORE_LIST', 'Project', 'ESLintConfig'].sort()
    );
  });
});
