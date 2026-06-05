import { describe, it, expect } from 'vitest';
import { includeIgnoreFileContent } from './includeIgnoreFileContent.js';

describe('includeIgnoreFileContent', () => {
  it('parses simple gitignore content into patterns', () => {
    const { patterns } = includeIgnoreFileContent('dist\n.env\n');
    expect(patterns).toEqual(['dist', '.env']);
  });

  it('ignores blank lines and comments', () => {
    const { patterns } = includeIgnoreFileContent('# comment\n\nnode_modules\n');
    expect(patterns).toEqual(['node_modules']);
  });

  it('preserves negation patterns', () => {
    const { patterns } = includeIgnoreFileContent('!important.js\n');
    expect(patterns).toEqual(['!important.js']);
  });
});
