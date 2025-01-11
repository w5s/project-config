import { PluginOptionsBase, StylisticConfig, type Config } from '../type.js';
import type { RuleOptions } from '../typegen/import.js';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';

const importConfig = importPlugin.flatConfigs['recommended'];

export async function imports(options: imports.Options = {}) {
  const { rules = {}, stylistic = true } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);
  return [
    {
      name: 'w5s/import/rules',
      plugins: importConfig.plugins,
      rules: {
        ...(importConfig?.rules),
        ...(stylisticEnabled
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

  export interface Options extends PluginOptionsBase {
    rules?: Rules;
  }
}
