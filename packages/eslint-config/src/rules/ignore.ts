import { readFileSync } from 'node:fs';
import { join as pathJoin } from 'node:path';
import type eslint from 'eslint';
import findUp from 'find-up';
import parseGitignore from 'parse-gitignore';

const getGitignore = (prefix = '') => {
  const cwd = process.cwd();
  const gitIgnoreFile = findUp.sync(pathJoin(prefix, '.gitignore'), { cwd });
  if (gitIgnoreFile != null) {
    const { patterns } = parseGitignore.parse(readFileSync(gitIgnoreFile));
    const returnValue = patterns.map((pattern) => pathJoin(prefix, pattern));
    return returnValue;
  }
  return [];
};

const config: eslint.Linter.Config = {
  ignorePatterns: [
    '!.*',
    '.yarn',
    '.common/',
    '.config/package-lock.json',
    '.config/yarn.lock',
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
    ...getGitignore(),
    ...getGitignore('android'),
    ...getGitignore('ios'),
  ],
};

export = config;
