import type { Linter } from 'eslint';

export interface Config extends Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> {
  plugins?: Record<string, any>;
}
