import type { Config } from '../type.js';
import type { RuleOptions } from '../typegen/import.js';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';

const importConfig = importPlugin.flatConfigs['recommended'];
const defaultStylistic = { indent: 2 };

export async function imports(options: imports.Options = {}) {
  const { rules = {}, rulesStylistic = true } = options;

  const { indent } = {
    ...defaultStylistic,
    ...(typeof rulesStylistic === 'boolean' ? {} : rulesStylistic),
  };

  return [
    {
      name: 'w5s/import/rules',
      plugins: importConfig.plugins,
      rules: {
        ...(importConfig?.rules),
        ...(rulesStylistic
          ? {
              // Stylistic rules
            }
          : {}),
        ...rules,
      },
    },
  ]  as const satisfies Array<Config>;
}

export namespace imports {
  export type Rules = RuleOptions;

  export interface Options {
    rules?: Rules;
    rulesStylistic?: boolean;
  }
}
