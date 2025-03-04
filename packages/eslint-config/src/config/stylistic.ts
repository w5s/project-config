import { interopDefault } from '@w5s/dev';
import { StylisticConfig, type PluginOptionsBase, type Config, type StylisticParameters } from '../type.js';
import type { RuleOptions } from '../typegen/style.js';

export async function stylistic(options: stylistic.Options = {}) {
  const [stylisticPlugin] = await Promise.all([
    interopDefault(import('@stylistic/eslint-plugin')),
  ] as const);
  const { rules = {} } = options;
  const { enabled: stylisticEnabled, indent, jsx, quotes, semi } = StylisticConfig.from(options);
  const config = stylisticEnabled
    ? stylisticPlugin.configs.customize({
        indent,
        jsx,
        pluginName: 'style',
        quotes,
        semi,
      })
    : { rules: {} };

  return [
    {
      name: 'w5s/style/setup',
      plugins: {
        style: stylisticPlugin,
      },
    },
    {
      name: 'w5s/style/rules',
      rules: {
        ...(stylisticEnabled
          ? config.rules
          : {}),
        ...rules,
      },
    },
  ] as const satisfies Array<Config>;
}

export namespace stylistic {
  export type Rules = RuleOptions;

  export interface Options extends Pick<PluginOptionsBase<Rules>, 'rules'>, StylisticParameters {}
}
