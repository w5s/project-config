// @ts-ignore
const fs = require('node:fs');
const findUp = require('find-up');
// @ts-ignore
const parseGitignore = require('parse-gitignore');

const getGitignore = () => {
  const found = findUp.sync('.gitignore');
  if (found) {
    return parseGitignore.parse(fs.readFileSync(found)).patterns;
  }

  return [];
};

module.exports = {
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
