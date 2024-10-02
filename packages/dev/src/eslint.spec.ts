import { describe, expect, it } from 'vitest';
import { ESLintConfig } from './eslint.js';

describe('ESLintConfig', () => {
  describe('.concat()', () => {
    it('should return a new configuration', () => {
      expect(
        ESLintConfig.concat(
          {
            env: {
              a: true,
            },
            globals: {
              ga: true,
            },
            extends: ['a'],
            overrides: [{ files: 'a' }],
            plugins: ['plugin-a'],
            rules: {
              'rule-a': 'error',
            },
            parserOptions: {
              a: true,
            },
            settings: {
              sa: true,
            },
          },
          {
            env: {
              b: true,
            },
            globals: {
              gb: true,
            },
            extends: ['b'],
            overrides: [{ files: 'b' }],
            plugins: ['plugin-b'],
            rules: {
              'rule-b': 'error',
            },
            parserOptions: {
              b: true,
            },
            settings: {
              sb: true,
            },
          },
          {
            env: {
              c: true,
            },
            globals: {
              gc: true,
            },
            extends: ['c'],
            overrides: [{ files: 'c' }],
            plugins: ['plugin-c'],
            rules: {
              'rule-c': 'error',
            },
            parserOptions: {
              c: true,
            },
            settings: {
              sc: true,
            },
          },
        ),
      ).toEqual({
        env: {
          a: true,
          b: true,
          c: true,
        },
        extends: ['a', 'b', 'c'],
        globals: {
          ga: true,
          gb: true,
          gc: true,
        },
        overrides: [{ files: 'a' }, { files: 'b' }, { files: 'c' }],
        parserOptions: {
          a: true,
          b: true,
          c: true,
        },
        plugins: ['plugin-a', 'plugin-b', 'plugin-c'],
        rules: {
          'rule-a': 'error',
          'rule-b': 'error',
          'rule-c': 'error',
        },
        settings: {
          sa: true,
          sb: true,
          sc: true,
        },
      });
    });
  });
});
