import { interopDefault, Project } from '@w5s/dev';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';

import type { RuleOptions } from '../typegen/markdown.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { looseRules } from '../rules/looseRules.js';
import { type Config, type PluginOptionsBase } from '../type.js';

const defaultFiles = [Project.glob({ fileExtensions: [Project.queryExtensions(['markdown'])], nested: true })];

export async function markdown(options: markdown.Options = {}) {
  const [markdownPlugin] = await Promise.all([
    interopDefault(import('@eslint/markdown')),
  ] as const);
  const {
    files,
    language = 'markdown/gfm',
    languageOptions,
    namespace,
    recommended,
    rules = {},
    stylistic,
  } = defaultPluginOptions(options);

  const resolvedFiles = withDefaultFiles(files, defaultFiles);
  return [
    {
      name: `${namespace}/markdown/setup`,
      plugins: {
        markdown: markdownPlugin,
      },
    },
    {
      files: resolvedFiles,
      language,
      languageOptions: {
        frontmatter: 'yaml',
        ...languageOptions,
      },
      name: `${namespace}/markdown/rules`,

      processor: mergeProcessors([markdownPlugin.processors.markdown, processorPassThrough]),
      rules: {
        ...(recommended ? markdownPlugin.configs.recommended.at(0)?.rules : {}),
        ...(stylistic.enabled ? {} : {}),
        ...rules,
      },
    },
    {
      files: resolvedFiles.map((f) => `${f}/${sourceGlob}`),
      languageOptions: {
        parserOptions: {
          project: false,
          projectService: false,
        },
      },
      name: `${namespace}/markdown/embed-code`,
      rules: {
        ...looseRules(),
        'no-alert': 'off',
        'no-console': 'off',
        'no-labels': 'off',
        'no-lone-blocks': 'off',
        'no-restricted-syntax': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-labels': 'off',
        'no-unused-vars': 'off',
        'node/prefer-global/process': 'off',
        'style/eol-last': 'off',
        'ts/consistent-type-imports': 'off',
        'ts/no-redeclare': 'off',
        'ts/no-require-imports': 'off',
        'ts/no-unused-expressions': 'off',
        'ts/no-unused-vars': 'off',
        'unicode-bom': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
  ] as [Config, Config, Config] satisfies Array<Config>;
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
