import { defineConfig, type UserConfig } from '@w5s/managed-script';
import path from 'node:path';

const configDir = new URL('.', import.meta.url).pathname;

export const config: UserConfig = defineConfig({
  scripts: {
    'prepare': {
      args: [path.join(configDir, 'script', 'prepare.js')],
      runner: 'node',
    },
    'prepare:gitmodules': {
      args: [path.join(configDir, 'script', 'prepare', 'gitmodules.js')],
      runner: 'node',
    },
    'prepare:lefthook': {
      args: [path.join(configDir, 'script', 'prepare', 'lefthook.js')],
      runner: 'node',
    },
    'rescue': {
      args: [path.join(configDir, 'script', 'rescue.js')],
      runner: 'node',
    },
  },
});
