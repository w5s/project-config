import { defineConfig } from '@w5s/managed-script';
import path from 'node:path';

const configDir = new URL('.', import.meta.url).pathname;

export const config = defineConfig({
  scripts: {
    rescue: `node "${path.join(configDir, 'script', 'rescue.js')}"`,
  },
});
