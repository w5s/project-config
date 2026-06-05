import fs from 'node:fs';
import nodePath from 'node:path';
import process from 'node:process';
import { defaultIgnores } from './defaultIgnores.js';
import { ignoreFileParse } from './internal/ignoreFileParse.js';
import { ignoreFileFind } from './internal/ignoreFileFind.js';
import { ignoreRuleResolve } from './internal/ignoreRuleResolve.js';

/**
 * Create a new eslint configuration object
 *
 * @example
 * ```ts
 * // eslint.config.js
 * export default [
 *   await eslintIgnores({
 *     ignores: [
 *       // Add custom paths here
 *     ]
 *   })
 * ];
 * ```
 *
 * @param options
 */
export async function eslintIgnores(options: ESLintIgnoreOptions = {}): Promise<ESLintIgnoreConfig> {
  const cwd = options.cwd ?? process.cwd();
  const recommended = options.recommended ?? true;
  const ignoreFilePaths = await ignoreFileFind(cwd);
  const ignoreGlobs = (await Promise.all(ignoreFilePaths.map(async (ignoreFilePathRelative) => {
    const ignoreFilePath = nodePath.join(cwd, ignoreFilePathRelative);
    const ignoreFileContent = String(await fs.promises.readFile(ignoreFilePath));
    const patterns = ignoreFileParse(ignoreFileContent);
    const ignoreDirectoryRelative = nodePath.dirname(ignoreFilePathRelative);

    return patterns.map((pattern) => ignoreRuleResolve(ignoreDirectoryRelative, pattern));
  })));

  const mergedIgnores = [
    ...(recommended ? defaultIgnores : []),
    ...ignoreGlobs.flat(),
  ];

  const ignores = typeof options.ignores === 'function'
    ? options.ignores(mergedIgnores)
    : options.ignores
      ? [...mergedIgnores, ...options.ignores]
      : mergedIgnores;

  return {
    name: options.name ?? 'w5s/eslint-ignore',
    ignores,
  };
}

export interface ESLintIgnoreConfig {
  /**
   * The configuration name
   */
  name: string;

  /**
   * The file globs to ignore
   */
  ignores: Array<string>;
}

export interface ESLintIgnoreOptions {
  /**
   * Override configuration name
   */
  name?: ESLintIgnoreConfig['name'];

  /**
   * Override current working directory
   */
  cwd?: string;

  /**
   * Override or customize ignore patterns.
   * - If passed an array, it appends patterns to the merged ignore list.
   * - If passed a function, it receives the merged list and returns the final array.
   */
  ignores?: ESLintIgnoreConfig['ignores'] | ((ignores: ESLintIgnoreConfig['ignores']) => ESLintIgnoreConfig['ignores']);

  /**
   * Include recommended settings and default ignored files
   */
  recommended?: boolean | undefined;
}
