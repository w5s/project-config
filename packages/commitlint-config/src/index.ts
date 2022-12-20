/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RuleConfigSeverity, type QualifiedRules, type LintOptions } from '@commitlint/types';
import conventionalChangelog from './conventional-changelog/index.js';
import { gitmojiPlugin } from './plugin.js';

const { Error, Warning, Disabled } = RuleConfigSeverity;

const parserPreset: LintOptions = {
  parserOpts: conventionalChangelog.parserOpts,
};

const rules: QualifiedRules = {
  'body-leading-blank': [Warning, 'always'],
  'body-max-line-length': [Error, 'always', 100],
  'footer-leading-blank': [Warning, 'always'],
  'footer-max-line-length': [Error, 'always', 100],
  'header-max-length': [Error, 'always', 72],
  'scope-case': [Error, 'always', 'lower-case'],
  'subject-case': [Error, 'always', ['sentence-case']],
  'subject-empty': [Error, 'never'],
  'subject-exclamation-mark': [Error, 'never'],
  'subject-full-stop': [Error, 'never', '.'],
  'type-case': [Error, 'always', 'lower-case'],
  'type-empty': [Error, 'never'],
  'type-enum': [Disabled],
  'type-gitmoji-style': [Error, 'always', 'unicode'],
  'type-valid-gitmoji': [Error, 'always'],
};

const config = {
  parserPreset,
  rules,
  plugins: [gitmojiPlugin],
};

export default config;
