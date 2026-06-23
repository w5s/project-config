import nodePath from 'node:path';

/**
 * Resolve a raw ignore rule from a `.gitignore` file into a path
 * relative to the configured working directory.
 *
 * @example
 * ```ts
 * import { ignoreRuleResolve } from './internal/ignoreRuleResolve.js';
 *
 * ignoreRuleResolve('.', 'dist'); // 'dist'
 * ignoreRuleResolve('.', '/dist'); // 'dist'
 * ignoreRuleResolve('android', 'android-build'); // 'android/android-build'
 * ignoreRuleResolve('android', '!android-build'); // '!android/android-build'
 * ```
 *
 * @internal
 * @param prefix A path prefix that points to the directory containing the `.gitignore` file.
 * @param rule The raw ignore rule parsed from `.gitignore`.
 * @returns A normalized ignore pattern relative to the root `cwd`.
 */
export function ignoreRuleResolve(prefix: string, rule: string) {
  const negated = rule.startsWith('!');
  const normalizedPattern = negated ? rule.slice(1) : rule;
  const trimmedPattern = normalizedPattern.startsWith('/')
    ? normalizedPattern.slice(1)
    : normalizedPattern;
  const relativeIgnorePath = nodePath.join(prefix, trimmedPattern);

  return negated ? `!${relativeIgnorePath}` : relativeIgnorePath;
}
