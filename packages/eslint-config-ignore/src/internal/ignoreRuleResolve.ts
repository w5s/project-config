import { convertIgnorePatternToMinimatch } from './convertIgnorePatternToMinimatch.js';

const ROOT_PREFIX_PATTERN = /^\.\/?/;

const normalizePath = (p: string) => p.replaceAll('\\', '/').replace(ROOT_PREFIX_PATTERN, '');

/**
 * Resolve a raw ignore rule from a `.gitignore` file into a flat ESLint
 * minimatch glob relative to the configured working directory.
 *
 * @example
 * ```ts
 * import { ignoreRuleResolve } from './internal/ignoreRuleResolve.js';
 *
 * ignoreRuleResolve('.', 'out'); // '**\/out'
 * ignoreRuleResolve('.', '/dist'); // 'dist'
 * ignoreRuleResolve('android', 'build'); // 'android/**\/build'
 * ignoreRuleResolve('android', '/build'); // 'android/build'
 * ignoreRuleResolve('android', '!build'); // '!android/**\/build'
 * ```
 *
 * @internal
 * @param prefix A path prefix that points to the directory containing the `.gitignore` file.
 * @param rule The raw ignore rule parsed from `.gitignore`.
 * @returns {string} A normalized ignore pattern relative to the root `cwd`.
 */
export function ignoreRuleResolve(prefix: string, rule: string): string {
  const negated = rule.startsWith('!');
  const raw = negated ? rule.slice(1) : rule;
  const normalizedPrefix = prefix === '.' || prefix === '' ? '' : normalizePath(prefix);

  let converted: string;
  if (raw.startsWith('/')) {
    const joined = normalizedPrefix
      ? `${normalizedPrefix}/${raw.slice(1)}`
      : raw.slice(1);
    converted = convertIgnorePatternToMinimatch(`/${joined}`);
  } else {
    const dirPrefix = normalizedPrefix ? `${normalizedPrefix}/` : '';
    converted = dirPrefix + convertIgnorePatternToMinimatch(raw);
  }

  return negated ? `!${converted}` : converted;
}
