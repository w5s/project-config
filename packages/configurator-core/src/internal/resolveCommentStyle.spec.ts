import { describe, expect, it } from 'vitest';

import { resolveCommentStyle } from './resolveCommentStyle.js';

describe(resolveCommentStyle, () => {
  it.each([
    ['.gitignore', '#'],
    ['.npmrc', '#'],
    ['.env.local', '#'],
    ['Dockerfile', '#'],
    ['Makefile', '#'],
    ['readme.md', '<!--'],
    ['page.mdx', '<!--'],
    ['index.html', '<!--'],
    ['icon.svg', '<!--'],
    ['index.ts', '//'],
    ['app.tsx', '//'],
    ['main.go', '//'],
    ['styles.css', '/*'],
    ['theme.scss', '/*'],
    ['script.py', '#'],
    ['config.yml', '#'],
    ['data.json', '#'],
    ['file', '#'],
  ] as const)('resolves %s to %s', (filename, expected) => {
    expect(resolveCommentStyle(`/tmp/${filename}`)).toBe(expected);
  });
});
