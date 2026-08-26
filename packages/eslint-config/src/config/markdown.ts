import { ESLintConfig, interopDefault, Project } from '@w5s/dev';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';

import type { RuleOptions } from '../typegen/markdown.js';

import { sourceGlob } from '../glob.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { type Config, type PluginOptionsBase, StylisticConfig } from '../type.js';

const defaultFiles = [`**/${Project.extensionsToGlob(Project.queryExtensions(['markdown']))}`];

export async function markdown(options: markdown.Options = {}) {
  const [markdownPlugin, tsPlugin] = await Promise.all([
    interopDefault(import('@eslint/markdown')),
    interopDefault(import('@typescript-eslint/eslint-plugin')),
  ] as const);
  const {
    files,
    language = 'markdown/gfm',
    languageOptions,
    recommended = true,
    rules = {},
    stylistic = true,
  } = options;
  const { enabled: stylisticEnabled } = StylisticConfig.from(stylistic);

  const resolvedFiles = withDefaultFiles(files, defaultFiles);
  return [
    {
      name: 'w5s/markdown/setup',
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
      name: 'w5s/markdown/rules',

      processor: mergeProcessors([markdownPlugin.processors.markdown, processorPassThrough]),
      rules: {
        ...(recommended ? markdownPlugin.configs.recommended.at(0)?.rules : {}),
        ...(stylisticEnabled ? {} : {}),
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
      name: 'w5s/markdown/embed-code',
      rules:
      // No typecheck
      // eslint-disable-next-line ts/no-non-null-assertion
      Object.assign(ESLintConfig.renameRules(tsPlugin.configs['disable-type-checked']!.rules as any, {
        '@typescript-eslint': 'ts',
      }), {
        // Loose configuration
        'e18e/prefer-static-regex': 'off',
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
        'ts/explicit-function-return-type': 'off',
        'ts/no-namespace': 'off',
        'ts/no-redeclare': 'off',
        'ts/no-require-imports': 'off',
        'ts/no-unused-expressions': 'off',
        'ts/no-unused-vars': 'off',
        'ts/no-use-before-define': 'off',
        'unicode-bom': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      }),
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
