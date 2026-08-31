import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

/**
 * This file contains the type definition for restricted globals used in the ESLint configuration.
 */

export type RestrictedGlobals = Array<NonNullable<
  ESLintRules['no-restricted-globals'] extends Linter.RuleEntry<infer O>
    ? O[number]
    : never
>>;
