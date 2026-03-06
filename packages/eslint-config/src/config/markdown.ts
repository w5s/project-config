import { interopDefault, Project } from '@w5s/dev';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import { StylisticConfig, type Config, type PluginOptionsBase } from '../type.js';
import type { RuleOptions } from '../typegen/markdown.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['markdown']))}`];

export async function markdown(options: markdown.Options = {}) {
  const [markdownPlugin] = await Promise.all([interopDefault(import('@eslint/markdown'))] as const);
  const { language = 'markdown/gfm', files = defaultFiles, rules = {}, stylistic = true } = options;
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
      name: 'w5s/markdown/rules',
      // eslint-disable-next-line ts/no-non-null-assertion
      processor: mergeProcessors([markdownPlugin.processors!.markdown, processorPassThrough]),
      rules: {
        ...markdownPlugin.configs.recommended.at(0)?.rules,
        ...(stylisticEnabled ? {} : {}),
        ...rules,
      },
    },
  ] as [Config, Config] satisfies Array<Config>;
}

export namespace markdown {
  export type Rules = RuleOptions;

  export interface Options extends PluginOptionsBase<Rules> {
    /**
     * Default to 'markdown/gfm' (Github Flavored Markdown)
     */
    language?: 'markdown/gfm' | 'markdown/commonmark';
  }
}
