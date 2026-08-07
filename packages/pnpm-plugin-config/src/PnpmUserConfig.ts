import type { PnpmConfig } from './PnpmConfig.js';

export type PnpmUserConfig = Partial<PnpmConfig>;

function arrayMerge<T>(
  base: ReadonlyArray<T> | T | undefined,
  extension: ReadonlyArray<T> | T | undefined,
): Array<T> | undefined {
  const baseArray = base == null ? [] : Array.isArray(base) ? base : [base];
  const extensionArray = extension == null ? [] : Array.isArray(extension) ? extension : [extension];
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
  };
}

function objectMergeForce<P extends string, V extends object>(
  base: Partial<Record<P, V>>,
  extension: Partial<Record<P, V>>,
  property: P,
): undefined | V {
  return {
    ...extension[property],
    ...base[property],
  };
}

/**
 * @namespace
 */
export const PnpmUserConfig = Object.freeze({
  /**
   * Merge two configs immutably. `extension` values win; `base` fills in
   * undefined slots. `allowBuilds` and `overrides` are deep-merged (extension
   * entries win). `minimumReleaseAgeExclude`, `hoistPattern`, and
   * `publicHoistPattern` are merged as deduplicated unions of both arrays
   * (base first, extension second — so pnpm `!`-negation entries in extension
   * can exclude org defaults).
   *
   * @param base
   * @param extension
   */
  merge(base: PnpmUserConfig, extension: PnpmUserConfig): PnpmUserConfig {
    return {
      ...extension,
      allowBuilds: objectMergeForce(base, extension, 'allowBuilds'),
      blockExoticSubdeps: extension.blockExoticSubdeps ?? base.blockExoticSubdeps,
      enableGlobalVirtualStore: extension.enableGlobalVirtualStore ?? base.enableGlobalVirtualStore,
      enablePrePostScripts: extension.enablePrePostScripts ?? base.enablePrePostScripts,
      hoistPattern: arrayMerge(base.hoistPattern, extension.hoistPattern),
      ignorePatchFailures: extension.ignorePatchFailures ?? base.ignorePatchFailures,
      minimumReleaseAge: extension.minimumReleaseAge ?? base.minimumReleaseAge,
      minimumReleaseAgeExclude: arrayMerge(
        base.minimumReleaseAgeExclude,
        extension.minimumReleaseAgeExclude,
      ),
      optimisticRepeatInstall: extension.optimisticRepeatInstall ?? base.optimisticRepeatInstall,
      overrides: objectMergeDefault(base, extension, 'overrides'),
      publicHoistPattern: arrayMerge(
        base.publicHoistPattern,
        extension.publicHoistPattern,
      ),
      resolutionMode: extension.resolutionMode ?? base.resolutionMode,
      trustPolicy: extension.trustPolicy ?? base.trustPolicy,
      trustPolicyIgnoreAfter: extension.trustPolicyIgnoreAfter ?? base.trustPolicyIgnoreAfter,
      verifyDepsBeforeRun: extension.verifyDepsBeforeRun ?? base.verifyDepsBeforeRun,
    } as PnpmUserConfig;
  },
});
