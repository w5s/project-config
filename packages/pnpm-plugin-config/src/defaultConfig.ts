import type { PnpmUserConfig } from './PnpmUserConfig.js';

// Opinionated defaults inspired by @pnpm/plugin-better-defaults, extended with org-specific settings.
export const defaultConfig = Object.freeze({
  allowBuilds: {
    '@swc/core': true,
    'core-js': true,
    'es5-ext': true,
    'esbuild': true,
    'lefthook': true,
    'nx': true,
    'protobufjs': true,
    'sqlite3': true,
  },
  blockExoticSubdeps: true,
  enableGlobalVirtualStore: true,
  enablePrePostScripts: false,
  ignorePatchFailures: false,
  minimumReleaseAge: 1 * 24 * 60,
  minimumReleaseAgeExclude: ['@w5s/*'],
  optimisticRepeatInstall: true,
  overrides: {},
  resolutionMode: 'lowest-direct',
  trustPolicy: 'no-downgrade',
  trustPolicyIgnoreAfter: 7 * 24 * 60,
  verifyDepsBeforeRun: 'install',
} satisfies PnpmUserConfig);
