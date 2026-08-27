import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

/**
 * This file contains the type definition for restricted import paths used in the ESLint configuration.
 */

export type RestrictedImportPaths = NonNullable<
  Extract<
    ESLintRules['no-restricted-imports'] extends Linter.RuleEntry<infer O>
      ? O[number]
      : never,
    { paths?: unknown }
  >['paths']
>;
