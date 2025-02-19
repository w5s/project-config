import { readFileSync } from 'node:fs';
import nodePath from 'node:path';
import process from 'node:process';
import type eslint from 'eslint';
import findUp from 'find-up';
import parseGitignore from 'parse-gitignore';

const getGitignore = (prefix = '') => {
  const cwd = process.cwd();
  const gitIgnoreFile = findUp.sync(nodePath.join(prefix, '.gitignore'), { cwd });
  if (gitIgnoreFile != null) {
    // eslint-disable-next-line n/no-sync
    const { patterns } = parseGitignore.parse(readFileSync(gitIgnoreFile));
    const returnValue = patterns.map((pattern) => nodePath.join(prefix, pattern));
    return returnValue;
  }
  return [];
};

const config: eslint.Linter.Config = {
  ignorePatterns: [
    '!.*',
    '.docusaurus',
    '.yarn',
    '.common/',
    '.config/package-lock.json',
    '.config/yarn.lock',
    '.git/',
    '.go/',
    '.modules/',
    '.pnpm-store/',
    '.venv/',
    'deprecated/',
    'angular.json',
    'esbuild.js',
    'package-lock.json',
    'pnpm-lock.yaml',
    'slim.report.json',
    'test-output/',
    'venv/',
    'yarn.lock',
    '_generated_/',
    '**/vendor/**',
    '**/vendors/**',
    '*.min.*',
    '*.toml',
    '*.timestamp-*.mjs', // esbuild/vite temporary files
    ...getGitignore(),
    ...getGitignore('android'),
    ...getGitignore('ios'),
  ],
};

export = config;
