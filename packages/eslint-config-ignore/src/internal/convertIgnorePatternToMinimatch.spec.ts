import { describe, expect, it } from 'vitest';

import { convertIgnorePatternToMinimatch } from './convertIgnorePatternToMinimatch.js';

describe(convertIgnorePatternToMinimatch, () => {
  const tests: Array<[string, string]> = [
    ['', ''],
    ['**', '**'],
    ['/**', '/**'],
    ['**/', '**/'],
    ['src/', '**/src/'],
    ['src', '**/src'],
    ['src/**', 'src/**/*'],
    ['!src/', '!**/src/'],
    ['!src', '!**/src'],
    ['!src/**', '!src/**/*'],
    ['*/foo.js', '*/foo.js'],
    ['*/foo.js/', '*/foo.js/'],
    ['src/{a,b}.js', String.raw`src/\{a,b}.js`],
    ['src/?(a)b.js', String.raw`src/?\(a)b.js`],
    ['{.js', String.raw`**/\{.js`],
    ['(.js', String.raw`**/\(.js`],
    ['{(.js', String.raw`**/\{\(.js`],
    ['{bar}/{baz}', String.raw`\{bar}/\{baz}`],
    [String.raw`\[foo]/{bar}/{baz}`, String.raw`\[foo]/\{bar}/\{baz}`],
    [String.raw`src/\{a}`, String.raw`src/\{a}`],
    [String.raw`src/\(a)`, String.raw`src/\(a)`],
    [String.raw`src/\{a}/{b}`, String.raw`src/\{a}/\{b}`],
    [String.raw`src/\(a)/(b)`, String.raw`src/\(a)/\(b)`],
    ['node_modules', '**/node_modules'],
    ['/dist', 'dist'],
    ['*.log', '**/*.log'],
    ['.cache/', '**/.cache/'],
    ['out', '**/out'],
  ];

  it.each(tests)('converts %j to %j', (pattern, expected) => {
    expect(convertIgnorePatternToMinimatch(pattern)).toBe(expected);
  });
});
