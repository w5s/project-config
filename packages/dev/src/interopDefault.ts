const getDefaultOrElse = (_: any) => _?.default ?? _;

/**
 * Resolves a module or promise-like object, returning the default export if available.
 *
 * @example
 * ```ts
 * // modules.ts
 * export default {
 *   foo: true
 * };
 * // Async API
 * const modPromise = import('./module');
 * interopDefault(modPromise); // == Promise.resolve({ foo: true })
 * // Sync API
 * const mod = await import('./module');
 * interopDefault(mod); // == { foo: true }
 * ```
 *
 * @template T - The type of the module or promise-like object.
 * @param m The module or promise-like object to resolve.
 * @returns A promise resolving to the default export if present, otherwise the module itself.
 */
export function interopDefault<T>(m: PromiseLike<T>): Promise<T extends { default: infer U } ? U : T>;
export function interopDefault<T>(m: T): T extends { default: infer U } ? U : T;
export function interopDefault<T>(m: T | PromiseLike<T>): Promise<T extends { default: infer U } ? U : T> {
  // @ts-ignore We know what we are doing
  return m != null && typeof m.then === 'function' ? Promise.resolve(m).then(getDefaultOrElse) : getDefaultOrElse(m);
}
