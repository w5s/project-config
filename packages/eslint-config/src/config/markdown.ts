import { interopDefault, Project } from '@w5s/dev';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import * as yamlParser from 'yaml-eslint-parser';

import type { RuleOptions } from '../typegen/markdown.js';
import type { RuleOptions as SchemaRuleOptions } from '../typegen/schema.js';

import { sourceGlob } from '../glob.js';
import { defaultPluginOptions } from '../internal/defaultOptions.js';
import { withDefaultFiles } from '../internal/withDefaultFiles.js';
import { withSchema } from '../internal/withSchema.js';
import { looseRules } from '../rules/looseRules.js';
import { type Config, type PluginOptionsBase, type PluginOptionsSchema } from '../type.js';

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
    rules: allRules = {},
    stylistic,
  } = defaultPluginOptions(options);
  // Schema rules target the virtual frontmatter file, not the markdown file
  const { rules, schemaRules } = splitSchemaRules(allRules);

  const resolvedFiles = withDefaultFiles(files, defaultFiles);
  const schemaConfig = await withSchema(options.schema);
  const resolvedLanguageOptions = { frontmatter: 'yaml' as 'toml' | 'yaml' | undefined, ...languageOptions };
  // The schema validator only extracts YAML frontmatter
  const frontmatterSchemaEnabled =
    Object.keys(schemaConfig.rules).length > 0 && resolvedLanguageOptions.frontmatter === 'yaml';

  return [
    {
      name: `${namespace}/markdown/setup`,
      plugins: {
        markdown: markdownPlugin,
        ...schemaConfig.plugins,
      },
    },
    {
      files: resolvedFiles,
      language,
      languageOptions: resolvedLanguageOptions,
      name: `${namespace}/markdown/rules`,

      processor: mergeProcessors([
        markdownPlugin.processors.markdown,
        ...(frontmatterSchemaEnabled ? [schemaConfig.plugins.schema.processors.frontmatter] : []),
        processorPassThrough,
      ]),
      rules: {
        ...(recommended ? markdownPlugin.configs.recommended.at(0)?.rules : {}),
        ...(recommended
          ? {
              'markdown/no-multiple-h1': ['error', { frontmatterTitle: '' }], // Enforce a single H1, ignoring the frontmatter title
            }
          : {}),
        ...(stylistic.enabled ? {} : {}),
        ...rules,
      },
    },
    {
      files: resolvedFiles.map((f) => `${f}/**/*.frontmatter.yaml`),
      languageOptions: {
        parser: yamlParser,
      },
      name: `${namespace}/markdown/frontmatter`,
      rules: frontmatterSchemaEnabled
        ? {
            'no-irregular-whitespace': 'off',
            'no-unused-vars': 'off',
            'spaced-comment': 'off',
            ...schemaConfig.rules,
            ...schemaRules,
          }
        : {},
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
  ] as [Config, Config, Config, Config] satisfies Array<Config>;
}

function splitSchemaRules<R extends object>(allRules: R) {
  const rules: Record<string, unknown> = {};
  const schemaRules: Record<string, unknown> = {};

  for (const [name, value] of Object.entries(allRules)) {
    (name.startsWith('schema/') ? schemaRules : rules)[name] = value;
  }

  return { rules: rules as Partial<R>, schemaRules: schemaRules as Partial<R> };
}

export namespace markdown {
  export interface Options extends PluginOptionsBase<Rules>, PluginOptionsSchema {
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

  export type Rules = RuleOptions & SchemaRuleOptions;
}
