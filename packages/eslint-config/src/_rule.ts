import type { Linter } from 'eslint';

export function fixme(_status: Linter.RuleLevel | [Linter.RuleLevel, ...any[]] | undefined) {
  return 'off' as const;
}
