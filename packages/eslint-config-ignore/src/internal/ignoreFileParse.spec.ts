import { describe, it, expect } from 'vitest';
import { ignoreFileParse } from './ignoreFileParse.js';

describe(ignoreFileParse, () => {
  it('parses simple gitignore content into patterns', () => {
    const patterns = ignoreFileParse('dist\n.env\n');
    expect(patterns).toEqual(['dist', '.env']);
  });

  it('ignores blank lines and comments', () => {
    const patterns = ignoreFileParse('# comment\n\nnode_modules\n');
    expect(patterns).toEqual(['node_modules']);
  });

  it('preserves negation patterns', () => {
    const patterns = ignoreFileParse('!important.js\n');
    expect(patterns).toEqual(['!important.js']);
  });
});
