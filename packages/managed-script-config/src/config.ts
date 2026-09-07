// Note: not typed against `@w5s/managed-script`'s `UserConfig` because that type is not part of its public API yet.
export const config = {
  scripts: {
    // implementation lives in `rescue.ts`, resolved through `MANAGED_SCRIPT_CONFIG_DIR` so it works regardless of the consuming project's cwd
    rescue: 'node "$MANAGED_SCRIPT_CONFIG_DIR/rescue.js"',
  },
};
