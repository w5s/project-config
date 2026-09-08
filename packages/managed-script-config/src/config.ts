import { defineConfig } from '@w5s/managed-script';

export const config = defineConfig({
  scripts: {
    // implementation lives in `rescue.ts`, resolved through `MANAGED_SCRIPT_CONFIG_DIR` so it works regardless of the consuming project's cwd
    rescue: 'node "$MANAGED_SCRIPT_CONFIG_DIR/rescue.js"',
  },
});
