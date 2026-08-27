import type { Linter } from 'eslint';

export const strict = () => ({
  // babel inserts `'use strict';` for us
  strict: ['error', 'never'],
} satisfies Linter.RulesRecord);
