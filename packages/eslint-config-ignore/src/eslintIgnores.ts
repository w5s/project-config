import fs from 'node:fs';
import nodePath from 'node:path';
import process from 'node:process';
import { findUp } from 'find-up';
import { defaultIgnores } from './defaultIgnores.js';
import { includeIgnoreFileContent } from './internal/includeIgnoreFileContent.js';

const getGitignore = async (cwd: string, prefix = ''): Promise<Array<string>> => {
  const gitIgnoreFile = await findUp(nodePath.join(prefix, '.gitignore'), { cwd });
  if (gitIgnoreFile != null) {
    const { patterns } = includeIgnoreFileContent(await fs.promises.readFile(gitIgnoreFile)) as { patterns: string[] };
    const returnValue = patterns.map((pattern) => nodePath.join(prefix, pattern));
    return returnValue;
  }

  return [];
};

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
  const [ignoreRoot, ignoreAndroid, ignoreIOS] = await Promise.all([
    getGitignore(cwd),
    getGitignore(cwd, 'android'),
    getGitignore(cwd, 'ios'),
  ]);
  const mergedIgnores = [
    ...(recommended ? defaultIgnores : []),
    ...ignoreRoot,
    ...ignoreAndroid,
    ...ignoreIOS,
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
