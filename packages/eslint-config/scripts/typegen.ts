import fs from 'node:fs/promises';
import jsoncPlugin from 'eslint-plugin-jsonc';
import { pluginsToRulesDTS } from 'eslint-typegen/core';

// eslint-disable-next-line no-console
console.log('Generating types...');

await Promise.all(
  (
    [
      // [pluginName, plugin]
      ['jsonc', jsoncPlugin],
    ] as const
  ).map(async ([pluginName, plugin]) => {
    const content = `/* eslint-disable unicorn/no-abusive-eslint-disable */\n${await pluginsToRulesDTS({
      [pluginName]: plugin,
    } as any)}`;

    await fs.writeFile(`src/typegen/${pluginName}.d.ts`, content);
  }),
);
