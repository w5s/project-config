import type { PnpmConfig } from './PnpmConfig.js';

export type PnpmUserConfig = Partial<PnpmConfig>;

function arrayMerge<T>(
  base: ReadonlyArray<T> | undefined,
  extension: ReadonlyArray<T> | undefined,
): Array<T> | undefined {
  const baseArray = base ?? [];
  const extensionArray = extension ?? [];
  if (baseArray.length === 0 && extensionArray.length === 0) return undefined;
  return [...new Set([...baseArray, ...extensionArray])];
}

function objectMergeDefault<P extends string, V extends object>(
  base: Partial<Record<P, V>>,
  extension: Partial<Record<P, V>>,
  property: P,
): undefined | V {
  return {
    ...base[property],
    ...extension[property],
  } as V;
}

function objectMergeForce<P extends string, V extends object>(
  base: Partial<Record<P, V>>,
  extension: Partial<Record<P, V>>,
  property: P,
): undefined | V {
  return {
    ...extension[property],
    ...base[property],
  } as V;
}

/**
 * @namespace
 */
export const PnpmUserConfig = Object.freeze({
  /**
   * Merge two configs immutably. `extension` values win; `base` fills in
   * undefined slots. `allowBuilds` and `overrides` are deep-merged (extension
   * entries win). `minimumReleaseAgeExclude` is merged as a deduplicated union
   * of both arrays. A `hoistPattern` of `['*']` in extension is normalized to
   * `[]` following pnpm-plugin-better-defaults behavior.
   *
   * @param base
   * @param extension
   */
  merge(base: PnpmUserConfig, extension: PnpmUserConfig): PnpmUserConfig {
    const hoistPattern =
      extension.hoistPattern?.length === 1 && extension.hoistPattern[0] === '*'
        ? []
        : (extension.hoistPattern ?? base.hoistPattern);

    return {
      ...extension,
      allowBuilds: objectMergeForce(base, extension, 'allowBuilds'),
      blockExoticSubdeps: extension.blockExoticSubdeps ?? base.blockExoticSubdeps,
      enableGlobalVirtualStore: extension.enableGlobalVirtualStore ?? base.enableGlobalVirtualStore,
      enablePrePostScripts: extension.enablePrePostScripts ?? base.enablePrePostScripts,
      hoistPattern,
      ignorePatchFailures: extension.ignorePatchFailures ?? base.ignorePatchFailures,
      minimumReleaseAge: extension.minimumReleaseAge ?? base.minimumReleaseAge,
      minimumReleaseAgeExclude: arrayMerge(
        base.minimumReleaseAgeExclude,
        extension.minimumReleaseAgeExclude,
      ),
      optimisticRepeatInstall: extension.optimisticRepeatInstall ?? base.optimisticRepeatInstall,
      overrides: objectMergeDefault(base, extension, 'overrides'),
      publicHoistPattern: extension.publicHoistPattern ?? base.publicHoistPattern,
      resolutionMode: extension.resolutionMode ?? base.resolutionMode,
      trustPolicy: extension.trustPolicy ?? base.trustPolicy,
      trustPolicyIgnoreAfter: extension.trustPolicyIgnoreAfter ?? base.trustPolicyIgnoreAfter,
      verifyDepsBeforeRun: extension.verifyDepsBeforeRun ?? base.verifyDepsBeforeRun,
    } as PnpmUserConfig;
  },
});
