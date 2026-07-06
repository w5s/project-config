/* eslint-disable ts/consistent-type-assertions */
import type { ESLint, Linter } from 'eslint';

import { describe, expect, it } from 'vitest';

import { ESLintConfig } from './ESLintConfig.js';

describe('ESLintConfig', () => {
  describe(ESLintConfig.merge, () => {
    it('should return a new configuration', () => {
      expect(
        ESLintConfig.merge(
          {
            env: {
              a: true,
            },
            extends: ['a'],
            files: ['a'],
            globals: {
              ga: true,
            },
            ignores: ['x'],
            languageOptions: {
              parserOptions: {
                ecmaVersion: 2020,
              },
            },
            overrides: [{ files: 'a' }],
            parserOptions: {
              a: true,
            },
            plugins: {
              'plugin-a': {} as ESLint.Plugin,
            },
            rules: {
              'rule-a': 'error',
            },
            settings: {
              sa: true,
            },
          },
          {
            env: {
              b: true,
            },
            extends: ['b'],
            files: ['b'],
            globals: {
              gb: true,
            },
            ignores: ['y'],
            languageOptions: {
              sourceType: 'module',
            },
            overrides: [{ files: 'b' }],
            parserOptions: {
              b: true,
            },
            plugins: {
              'plugin-b': {} as ESLint.Plugin,
            },
            rules: {
              'rule-b': 'warn',
            },
            settings: {
              sb: true,
            },
          },
          {
            env: {
              c: true,
            },
            extends: ['c'],
            files: ['c'],
            globals: {
              gc: true,
            },
            ignores: ['z'],
            languageOptions: {
              ecmaVersion: 2022,
            },
            overrides: [{ files: 'c' }],
            parserOptions: {
              c: true,
            },
            plugins: {
              'plugin-c': {} as ESLint.Plugin,
            },
            rules: {
              'rule-c': 'off',
            },
            settings: {
              sc: true,
            },
          },
        ),
      ).toEqual({
        env: {
          c: true,
        },
        extends: ['c'],
        files: ['a', 'b', 'c'],
        globals: {
          gc: true,
        },
        ignores: ['x', 'y', 'z'],
        languageOptions: {
          ecmaVersion: 2022,
          parserOptions: {
            ecmaVersion: 2020,
          },
          sourceType: 'module',
        },
        overrides: [{ files: 'c' }],
        parserOptions: {
          c: true,
        },
        plugins: {
          'plugin-a': {},
          'plugin-b': {},
          'plugin-c': {},
        },
        rules: {
          'rule-a': 'error',
          'rule-b': 'warn',
          'rule-c': 'off',
        },
        settings: {
          sc: true,
        },
      });
    });
  });

  describe(ESLintConfig.concat, () => {
    it('should concat flat configs and resolve promises', async () => {
      await expect(
        ESLintConfig.concat(
          {
            files: ['a'],
            rules: {
              'rule-a': 'error',
            },
          },
          [
            {
              files: ['b'],
              rules: {
                'rule-b': 'warn',
              },
            },
          ],
          Promise.resolve<Linter.Config>({
            files: ['c'],
            rules: {
              'rule-c': 'off',
            },
          }),
          Promise.resolve<Array<Linter.Config>>([
            {
              files: ['d'],
              rules: {
                'rule-d': 'error',
              },
            },
          ]),
        ),
      ).resolves.toEqual([
        {
          files: ['a'],
          rules: {
            'rule-a': 'error',
          },
        },
        {
          files: ['b'],
          rules: {
            'rule-b': 'warn',
          },
        },
        {
          files: ['c'],
          rules: {
            'rule-c': 'off',
          },
        },
        {
          files: ['d'],
          rules: {
            'rule-d': 'error',
          },
        },
      ]);
    });
  });

  describe(ESLintConfig.renameRules, () => {
    it('should rename rules according to the given map', () => {
      const rules = {
        'another-prefix/rule-three': 'off',
        'old-prefix/rule-one': 'error',
        'old-prefix/rule-two': 'warn',
        'rule-five': 'error',
        'rule-four': 'error',
      };

      const map = {
        '': 'custom/',
        'old-prefix': 'new-prefix',
      };

      expect(ESLintConfig.renameRules(rules, map)).toEqual({
        'another-prefix/rule-three': 'off',
        'custom/rule-five': 'error',
        'custom/rule-four': 'error',
        'new-prefix/rule-one': 'error',
        'new-prefix/rule-two': 'warn',
      });
    });
  });
});
