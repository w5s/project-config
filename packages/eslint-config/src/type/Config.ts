import type { Linter } from 'eslint';

type RuleOptions = {};

export interface Config extends Linter.Config<Linter.RulesRecord & RuleOptions> {
  // plugins?: Record<string, any>;
}
