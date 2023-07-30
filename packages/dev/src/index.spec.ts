import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('exports', () => {
    expect(Object.keys(Module).sort()).toEqual(['IGNORE_LIST', 'Project', 'ESLintConfig'].sort());
  });
});
