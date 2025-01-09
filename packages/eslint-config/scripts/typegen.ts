import fs from 'node:fs/promises';
import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import jsoncPlugin from 'eslint-plugin-jsonc';
import ymlPlugin from 'eslint-plugin-yml';
import { pluginsToRulesDTS } from 'eslint-typegen/core';

// eslint-disable-next-line no-console
console.log('Generating types...');

await Promise.all(
  (
    [
      // [pluginName, plugin]
      ['import', importPlugin],
      ['jsdoc', jsdocPlugin],
      ['jsonc', jsoncPlugin],
      ['yml', ymlPlugin],
    ] as const
  ).map(async ([pluginName, plugin]) => {
    const content = `/* eslint-disable unicorn/no-abusive-eslint-disable */\n${await pluginsToRulesDTS({
      [pluginName]: plugin,
    } as any)}`;

    await fs.writeFile(`src/typegen/${pluginName}.d.ts`, content);
  }),
);
