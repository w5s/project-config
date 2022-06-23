/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type LintOptions, RuleConfigSeverity, type QualifiedRules } from '@commitlint/types';
// @ts-ignore
import getParserPreset from 'conventional-changelog-conventionalcommits';

const { Error, Warning } = RuleConfigSeverity;

const rules: QualifiedRules = {
  'body-leading-blank': [Warning, 'always'],
  'body-max-line-length': [Error, 'always', 100],
  'footer-leading-blank': [Warning, 'always'],
  'footer-max-line-length': [Error, 'always', 100],
  'header-max-length': [Error, 'always', 72],
  'scope-case': [Error, 'always', 'lower-case'],
  'subject-case': [Error, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  'subject-empty': [Error, 'never'],
  'subject-full-stop': [Error, 'never', '.'],
  'type-case': [Error, 'always', 'lower-case'],
  'type-empty': [Error, 'never'],
  'type-enum': [
    Error,
    'always',
    ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
  ],
};

const config = {
  rules,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  parserPreset: getParserPreset() as LintOptions,
};
// FIXME: this is a workaround for commonjs loading
if (typeof module !== 'undefined') {
  module.exports = config;
}

export default config;
