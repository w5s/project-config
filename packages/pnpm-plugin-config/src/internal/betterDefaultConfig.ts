import type { PnpmUserConfig } from '../PnpmUserConfig.js';

/**
 * Curated defaults from [@pnpm/plugin-better-defaults](https://github.com/pnpm/plugin-better-defaults).
 *
 * @see https://github.com/pnpm/plugin-better-defaults
 */
export const betterDefaultConfig = Object.freeze({
  blockExoticSubdeps: true,
  enableGlobalVirtualStore: true,
  enablePrePostScripts: false,
  ignorePatchFailures: false,
  minimumReleaseAge: 1 * 24 * 60, // 1 day in minutes
  optimisticRepeatInstall: true,
  resolutionMode: 'lowest-direct',
  trustPolicy: 'no-downgrade',
  trustPolicyIgnoreAfter: 7 * 24 * 60, // 7 days in minutes
  verifyDepsBeforeRun: 'install',
} satisfies PnpmUserConfig);
