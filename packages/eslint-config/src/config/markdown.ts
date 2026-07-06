import { interopDefault, Project } from '@w5s/dev';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';

import type { RuleOptions } from '../typegen/markdown.js';

import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['markdown']))}`];

export async function markdown(options: markdown.Options = {}) {
  const [markdownPlugin] = await Promise.all([interopDefault(import('@eslint/markdown'))] as const);
  const {
    files = defaultFiles,
    language = 'markdown/gfm',
    languageOptions,
    recommended = true,
    rules = {},
    stylistic = true,
  } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  return [
    {
      name: 'w5s/markdown/setup',
      plugins: {
        markdown: markdownPlugin,
      },
    },
    {
      files,
      language: language,
      languageOptions: {
        frontmatter: 'yaml',
        ...languageOptions,
      },
      name: 'w5s/markdown/rules',
      // eslint-disable-next-line ts/no-non-null-assertion
      processor: mergeProcessors([markdownPlugin.processors!.markdown, processorPassThrough]),
      rules: {
        ...(recommended ? markdownPlugin.configs.recommended.at(0)?.rules : {}),
        ...(stylisticEnabled ? {} : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace markdown {
  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * Default to 'markdown/gfm' (Github Flavored Markdown)
     */
    language?: 'markdown/commonmark' | 'markdown/gfm';

    /**
     * Default to 'yaml'
     * If you want to use TOML frontmatter, set this to 'toml'
     * If you want to disable frontmatter parsing, set this to undefined
     */
    languageOptions?: {
      frontmatter?: 'toml' | 'yaml';
    };
  }

  export type Rules = RuleOptions;
}
