import tsPlugin from '@typescript-eslint/eslint-plugin';
import { ESLintConfig } from '@w5s/dev';

import { lazy } from '../internal/lazy.js';

export const looseRules = lazy(() => {
  // eslint-disable-next-line ts/no-non-null-assertion
  return Object.assign(ESLintConfig.renameRules(tsPlugin.configs['disable-type-checked']!.rules as any, {
    '@typescript-eslint': 'ts',
  }), {
    // Loose rules
    'e18e/prefer-static-regex': 'off',
    // TypeScript loose rules
    'ts/explicit-function-return-type': 'off',
    'ts/explicit-module-boundary-types': 'off',
    'ts/no-empty-function': 'off',
    'ts/no-explicit-any': 'off',
    'ts/no-namespace': 'off',
    'ts/no-non-null-assertion': 'off',
    'ts/no-unsafe-argument': 'off',
    'ts/no-unsafe-assignment': 'off',
    'ts/no-unsafe-call': 'off',
    'ts/no-unsafe-member-access': 'off',
    'ts/no-unsafe-return': 'off',
    'ts/no-use-before-define': 'off',
    'ts/require-await': 'off',
    'ts/unbound-method': 'off',
  });
});
