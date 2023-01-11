import type eslint from 'eslint';
import { readFileSync } from 'node:fs';
import findUp from 'find-up';
import parseGitignore from 'parse-gitignore';

const getGitignore = () => {
  const found = findUp.sync('.gitignore');
  if (found != null) {
    return parseGitignore.parse(readFileSync(found)).patterns;
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
    '*.toml',
    ...getGitignore(),
  ],
};

export = config;
