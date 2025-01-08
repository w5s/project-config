/**
 * Resolves a module or promise-like object, returning the default export if available.
 *
 * @example
 * ```ts
 * await interopDefault(import('./module'));// Can be a commonjs or esm module
 * ```
 *
 * @template T - The type of the module or promise-like object.
 * @param {T | PromiseLike<T>} m - The module or promise-like object to resolve.
 * @returns {Promise<T extends { default: infer U } ? U : T>} A promise resolving to the default export if present, otherwise the module itself.
 */

export async function interopDefault<T>(m: T | PromiseLike<T>): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return (resolved as any).default ?? resolved;
}
