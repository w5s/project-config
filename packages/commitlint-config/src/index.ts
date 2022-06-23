/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RuleConfigSeverity, type QualifiedRules } from '@commitlint/types';
import gitmojiPlugin from 'commitlint-plugin-gitmoji';
import gitmojiParserOpts from '@gitmoji/parser-opts';
import commitTypes from '@gitmoji/commit-types';

const { Error, Warning, Disabled } = RuleConfigSeverity;

const rules: QualifiedRules = {
  'start-with-gitmoji': [Error, 'always'],
  'body-leading-blank': [Warning, 'always'],
  'body-max-line-length': [Error, 'always', 100],
  'footer-leading-blank': [Warning, 'always'],
  'footer-max-line-length': [Error, 'always', 100],
  'header-max-length': [Error, 'always', 72],
  'scope-case': [Error, 'always', 'lower-case'],
  'subject-case': [Error, 'always', ['sentence-case']],
  'subject-empty': [Disabled, 'never'], // [Error, 'never'],
  'subject-full-stop': [Error, 'never', '.'],
  'type-case': [Error, 'always', 'lower-case'],
  'type-empty': [Error, 'always'],
  'type-enum': [Error, 'always', commitTypes],
};

const config = {
  rules,
  parserPreset: {
    parserOpts: gitmojiParserOpts,
    plugins: {
      gitmoji: gitmojiPlugin,
    },
  },
  plugins: [gitmojiPlugin],
};
// FIXME: this is a workaround for commonjs loading
if (typeof module !== 'undefined') {
  module.exports = config;
}

export default config;
