import { defineConfig, type UserConfig } from '@w5s/managed-script';
import path from 'node:path';

const configDir = new URL('.', import.meta.url).pathname;

const scriptDir = (...parts: Array<string>) => path.join(configDir, 'script', ...parts);

export const config: UserConfig = defineConfig({
  scripts: {
    'format': {
      args: [scriptDir('format.js')],
      runner: 'node',
    },
    'lint': {
      args: [scriptDir('lint.js')],
      runner: 'node',
    },
    'prepare': {
      args: [scriptDir('prepare.js')],
      runner: 'node',
    },
    'prepare:gitmodules': {
      args: [scriptDir('prepare', 'gitmodules.js')],
      runner: 'node',
    },
    'prepare:lefthook': {
      args: [scriptDir('prepare', 'lefthook.js')],
      runner: 'node',
    },
    'prepare:skills': {
      args: [scriptDir('prepare', 'skills.js')],
      runner: 'node',
    },
    'rescue': {
      args: [scriptDir('rescue.js')],
      runner: 'node',
    },
  },
});
