import fs from 'node:fs';
import nodePath from 'node:path';
import process from 'node:process';
import { findUp } from 'find-up';
import parseGitignore from 'parse-gitignore';
import type { Config } from '../type.js';

const getGitignore = async (cwd: string, prefix = ''): Promise<Array<string>> => {
  const gitIgnoreFile = await findUp(nodePath.join(prefix, '.gitignore'), { cwd });
  if (gitIgnoreFile != null) {
    const { patterns } = parseGitignore.parse(await fs.promises.readFile(gitIgnoreFile));
    const returnValue = patterns.map((pattern) => nodePath.join(prefix, pattern));
    return returnValue;
  }
  return [];
};

export async function ignores(options: ignores.Options = {}) {
  const cwd = process.cwd();
  const [ignoreRoot, ignoreAndroid, ignoreIOS] = await Promise.all([
    getGitignore(cwd),
    getGitignore(cwd, 'android'),
    getGitignore(cwd, 'ios'),
  ]);

  return [
    {
      ignores: [
        // Lock files
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',

        // Commonly ignored
        '**/output',
        '**/.output',
        '**/coverage',
        '**/temp',
        '**/.temp',
        '**/tmp',
        '**/.tmp',
        '**/.cache',

        // Well known extensions to ignore
        '**/*.min.*',
        '**/*.timestamp-*.mjs', // esbuild/vite temporary files

        // Framework specific temporary folder
        '.go/',
        '.pnpm-store/',
        '**/.vitepress/cache',
        '**/.vite-inspect',
        '**/.history',
        '**/.nuxt',
        '**/.next',
        '**/.svelte-kit',
        '**/.vercel',
        '**/.idea',
        '**/.yarn',
        '**/__snapshots__',

        // git submodules (makefile-core / makefile-ci)
        '.modules/',

        // AI related
        '**/.context',
        '**/.claude',
        '**/.agents',
        '**/.*/skills',

        ...ignoreRoot,
        ...ignoreAndroid,
        ...ignoreIOS,
        ...(options.ignores ?? []),
      ] as Array<string>,
      name: 'w5s/ignore',
    },
  ] as const satisfies Array<Config>;
}
export namespace ignores {
  export interface Options {
    ignores?: string[];
  }
}
