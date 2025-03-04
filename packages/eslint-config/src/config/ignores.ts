import fs from 'node:fs';
import nodePath from 'node:path';
import process from 'node:process';
import findUp from 'find-up';
import parseGitignore from 'parse-gitignore';
import type { Config } from '../type.js';

const getGitignore = async (cwd: string, prefix = ''): Promise<Array<string>> => {
  const gitIgnoreFile = await findUp(nodePath.join(prefix, '.gitignore'), { cwd });
  if (gitIgnoreFile != null) {
    const { patterns } = parseGitignore.parse(await fs.promises.readFile(gitIgnoreFile));
    const returnValue = patterns.map(pattern => nodePath.join(prefix, pattern));
    return returnValue;
  }
  return [];
};

export async function ignores(options: ignores.Options = {}) {
  const cwd = process.cwd();
  return [
    {
      ignores: [
        '**/node_modules',
        '**/dist',
        '**/package-lock.json',
        '**/yarn.lock',
        '**/pnpm-lock.yaml',
        '**/bun.lockb',

        '**/.docusaurus',
        '**/output',
        '**/coverage',
        '**/temp',
        '**/.temp',
        '**/tmp',
        '**/.tmp',
        '**/.history',
        '**/.vitepress/cache',
        '**/.nuxt',
        '**/.next',
        '**/.svelte-kit',
        '**/.vercel',
        '**/.changeset',
        '**/.idea',
        '**/.cache',
        '**/.output',
        '**/.vite-inspect',
        '**/.yarn',
        '**/vendor',
        '**/vendors',
        '**/*.min.*',

        '**/*.timestamp-*.mjs', // esbuild/vite temporary files

        '.modules/',
        '.go/',
        '.pnpm-store/',
        // '!.*',
        // '.venv/',
        // 'deprecated/',
        // 'test-output/',
        // 'venv/',
        // '_generated_/',

        ...await getGitignore(cwd),
        ...await getGitignore(cwd, 'android'),
        ...await getGitignore(cwd, 'ios'),
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
