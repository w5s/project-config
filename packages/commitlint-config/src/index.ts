import { RuleConfigSeverity, type QualifiedRules, type LintOptions } from '@commitlint/types';
import conventionalChangelog from '@w5s/conventional-changelog';
import { gitmojiPlugin } from './plugin.js';

const { Error, Warning, Disabled } = RuleConfigSeverity;

const parserPreset: LintOptions = {
  parserOpts: conventionalChangelog.parserOpts as LintOptions['parserOpts'],
};

const rules: QualifiedRules = {
  'body-leading-blank': [Warning, 'always'],
  'body-max-line-length': [Error, 'always', 100],
  'footer-leading-blank': [Warning, 'always'],
  'footer-max-line-length': [Error, 'always', 100],
  'header-max-length': [Error, 'always', 100],
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

// eslint-disable-next-line import/no-default-export
export default config;
