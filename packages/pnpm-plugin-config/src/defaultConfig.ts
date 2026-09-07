import type { PnpmUserConfig } from './PnpmUserConfig.js';

import { betterDefaultConfig } from './internal/betterDefaultConfig.js';

// Opinionated defaults inspired by @pnpm/plugin-better-defaults, extended with org-specific settings.
export const defaultConfig = Object.freeze({
  ...betterDefaultConfig,
  allowBuilds: {
    '@parcel/watcher': true,
    '@swc/core': true,
    'core-js': true,
    'core-js-pure': true,
    'electron': true,
    'es5-ext': true,
    'esbuild': true,
    'lefthook': true,
    'nx': true,
    'protobufjs': true,
    're2': true,
    'sharp': true,
    'sqlite3': true,
  },
  enableGlobalVirtualStore: false, // FIXME: this does not work
  minimumReleaseAgeExclude: ['@w5s/*'],
  overrides: {},
  verifyDepsBeforeRun: 'warn', // FIXME: Causes infinite loop with prepare and pnpm run inside prepare/postinstall
} satisfies PnpmUserConfig);
