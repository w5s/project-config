import type { Linter } from 'eslint';

/**
 * Concat multiple flat configs into a single flat config array.
 *
 * It also resolves promises and flattens the result.
 *
 * @example
 *
 * ```ts
 * import eslint from '@eslint/js'
 *
 * export default ESLintConfig.concat(
 *   {
 *     plugins: {},
 *     rules: {},
 *   },
 *   // It can also takes a array of configs:
 *   [
 *     {
 *       plugins: {},
 *       rules: {},
 *     }
 *    // ...
 *   ],
 *   // Or promises:
 *   Promise.resolve({
 *     files: ['*.ts'],
 *     rules: {},
 *   })
 * );
 * ```
 * @param configs
 */
async function concat<T extends Linter.Config = Linter.Config>(
  ...configs: Array<Promise<ReadonlyArray<T>> | Promise<T> | ReadonlyArray<T> | T>
): Promise<Array<T>> {
  const resolved = await Promise.all(configs);
  return resolved.flat() as Array<T>;
}

/**
 * Always return 'off'. `_status` is the previous rule value.
 *
 * @param _status
 */
function fixme(_status: [number | string, ...Array<any>] | number | string | undefined) {
  return 'off' as const;
}

/**
 * Return a new merged flat configuration
 *
 * @param configs
 */
function merge<T extends Linter.Config = Linter.Config>(...configs: Array<T>): T {
  const keys = new Set(configs.flatMap((i) => Object.keys(i)));
  const merged = configs.reduce((acc, cur) => {
    return {
      ...acc,
      ...cur,
      files: [
        ...(acc.files ?? []),
        ...(cur.files ?? []),
      ],
      ignores: [
        ...(acc.ignores ?? []),
        ...(cur.ignores ?? []),
      ],
      languageOptions: {
        ...acc.languageOptions,
        ...cur.languageOptions,
      },
      linterOptions: {
        ...acc.linterOptions,
        ...cur.linterOptions,
      },
      plugins: {
        ...acc.plugins,
        ...cur.plugins,
      },
      rules: {
        ...acc.rules,
        ...cur.rules,
      },
    };
  }, {} as T);

  // Remove unused keys
  for (const key of Object.keys(merged)) {
    if (!keys.has(key))
      // eslint-disable-next-line ts/no-dynamic-delete
      delete (merged as any)[key];
  }

  return merged as T;
}

/**
 * Renames rules in the given object according to the given map.
 *
 * Given a map `{ 'old-prefix': 'new-prefix' }`, and a rule object
 * `{ 'old-prefix/rule-name': 'error' }`, this function will return
 * `{ 'new-prefix/rule-name': 'error' }`.
 *
 * @param rules The object containing the rules to rename.
 * @param map The object containing the rename map.
 */
function renameRules(rules: Record<string, any>, map: Record<string, string>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      for (const [from, to] of Object.entries(map)) {
        if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
        else if (from === '' && !key.includes('/') && to !== '') return [to + key, value];
      }
      return [key, value];
    }),
  );
}

/**
 * @namespace
 */
export const ESLintConfig = Object.freeze({
  concat,
  fixme,
  merge,
  renameRules,
});
