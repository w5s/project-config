import { interopDefault } from '@w5s/dev';

import type { RuleOptions } from '../typegen/jsx-a11y.js';

import { jsxSourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [jsxSourceGlob];

export async function jsx(options: jsx.Options = {}) {
  const { files, jsxA11y = false, recommended = true, rules = {} } = options;
  const [jsxA11yPlugin] = await Promise.all([
    jsxA11y ? interopDefault(import('eslint-plugin-jsx-a11y')) : undefined,
  ] as const);
  return [
    {
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
        sourceType: 'module',
      },
      name: 'w5s/jsx/setup',
      plugins: {
        ...(jsxA11yPlugin ? { 'jsx-a11y': jsxA11yPlugin } : {}),
      },
    },
    {
      files: withDefaultFiles(files, defaultFiles),
      name: 'w5s/jsx/rules',
      rules: {
        ...(recommended && jsxA11yPlugin != null ? jsxA11yPlugin.configs['recommended'].rules : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace jsx {
  export interface Options extends Omit<PluginOptionsBase<Rules>, 'stylistic'> {
    /**
     * Enable jsx-a11y plugin. Defaults to false.
     */
    jsxA11y?: boolean;
  }

  export type Rules = RuleOptions;
}
