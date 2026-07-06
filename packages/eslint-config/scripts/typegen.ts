import fs from 'node:fs/promises';
import stylisticPlugin from '@stylistic/eslint-plugin';
// @ts-ignore no definition for import
import e18ePlugin from '@e18e/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import jsoncPlugin from 'eslint-plugin-jsonc';
import nextPlugin from '@next/eslint-plugin-next';
import nodePlugin from 'eslint-plugin-n';
import reactPlugin from '@eslint-react/eslint-plugin';
import markdownPlugin from '@eslint/markdown';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import vitestPlugin from '@vitest/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';
import ymlPlugin from 'eslint-plugin-yml';
import { pluginsToRulesDTS } from 'eslint-typegen/core';

console.log('Generating types...');

await Promise.all(
  (
    [
      // [pluginName, plugin]
      ['e18e', e18ePlugin],
      ['import', importPlugin],
      ['jsdoc', jsdocPlugin],
      ['jsonc', jsoncPlugin],
      ['markdown', markdownPlugin],
      ['next', nextPlugin],
      ['node', nodePlugin],
      ['perfectionist', perfectionistPlugin],
      ['react', reactPlugin],
      ['style', stylisticPlugin],
      ['ts', tsPlugin],
      ['unicorn', unicornPlugin],
      ['test', vitestPlugin],
      ['yml', ymlPlugin],
    ] as const
  ).map(async ([pluginName, plugin]) => {
    const content = String(await pluginsToRulesDTS({
      [pluginName]: plugin,
    } as any));

    await fs.writeFile(`src/typegen/${pluginName}.d.ts`, content);
  }),
);
