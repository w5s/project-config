/* eslint-disable ts/consistent-type-assertions */
import { describe, expect, it } from 'vitest';
import type { ESLint, Linter } from 'eslint';
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
            globals: {
              ga: true,
            },
            extends: ['a'],
            files: ['a'],
            ignores: ['x'],
            overrides: [{ files: 'a' }],
            plugins: {
              'plugin-a': {} as ESLint.Plugin,
            },
            rules: {
              'rule-a': 'error',
            },
            parserOptions: {
              a: true,
            },
            settings: {
              sa: true,
            },
            languageOptions: {
              parserOptions: {
                ecmaVersion: 2020,
              },
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
            files: ['b'],
            ignores: ['y'],
            overrides: [{ files: 'b' }],
            plugins: {
              'plugin-b': {} as ESLint.Plugin,
            },
            rules: {
              'rule-b': 'warn',
            },
            parserOptions: {
              b: true,
            },
            settings: {
              sb: true,
            },
            languageOptions: {
              sourceType: 'module',
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
            files: ['c'],
            ignores: ['z'],
            overrides: [{ files: 'c' }],
            plugins: {
              'plugin-c': {} as ESLint.Plugin,
            },
            rules: {
              'rule-c': 'off',
            },
            parserOptions: {
              c: true,
            },
            settings: {
              sc: true,
            },
            languageOptions: {
              ecmaVersion: 2022,
            },
          },
        ),
      ).toEqual({
        env: {
          c: true,
        },
        globals: {
          gc: true,
        },
        extends: ['c'],
        files: ['a', 'b', 'c'],
        ignores: ['x', 'y', 'z'],
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
        languageOptions: {
          parserOptions: {
            ecmaVersion: 2020,
          },
          sourceType: 'module',
          ecmaVersion: 2022,
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
        'old-prefix/rule-one': 'error',
        'old-prefix/rule-two': 'warn',
        'another-prefix/rule-three': 'off',
        'rule-four': 'error',
        'rule-five': 'error',
      };

      const map = {
        'old-prefix': 'new-prefix',
        '': 'custom/',
      };

      expect(ESLintConfig.renameRules(rules, map)).toEqual({
        'new-prefix/rule-one': 'error',
        'new-prefix/rule-two': 'warn',
        'another-prefix/rule-three': 'off',
        'custom/rule-four': 'error',
        'custom/rule-five': 'error',
      });
    });
  });
});
