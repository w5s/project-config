import type { UserConfig } from './type/UserConfig.js';

const DANGEROUS_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

/**
 * Merge two managed-script configs using the same heuristic as Vite and Vitest:
 * later values win, plain objects merge recursively, and arrays concatenate.
 *
 * @param defaults
 * @param overrides
 * @example
 * ```ts
 * export default defineConfig(mergeConfig(
 *   { scripts: { build: 'echo base', test: 'echo test' } },
 *   { scripts: { build: 'echo override' } },
 * ));
 * ```
 */
export function mergeConfig(defaults: UserConfig, overrides: UserConfig): UserConfig {
  if (typeof defaults === 'function' || typeof overrides === 'function') {
    throw new TypeError('Cannot merge config in form of callback');
  }

  return mergeConfigRecursively({ ...defaults }, { ...overrides });
}

function isObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function mergeConfigRecursively(
  defaults: Record<string, unknown>,
  overrides: Record<string, unknown>,
): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...defaults };

  for (const [key, value] of Object.entries(overrides)) {
    if (DANGEROUS_KEYS.has(key)) {
      continue;
    }

    if (value == null) {
      continue;
    }

    const existing = merged[key];
    if (existing == null) {
      merged[key] = value;
      continue;
    }

    if (Array.isArray(existing) || Array.isArray(value)) {
      merged[key] = [...toArray(existing), ...toArray(value)];
      continue;
    }

    if (isObject(existing) && isObject(value)) {
      merged[key] = mergeConfigRecursively(existing, value);
      continue;
    }

    merged[key] = value;
  }

  return merged;
}

function toArray<T>(target: Array<T> | T): Array<T> {
  return Array.isArray(target) ? target : [target];
}
