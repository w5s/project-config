/* eslint-disable import/no-import-module-exports */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { RuleConfigSeverity, type QualifiedRules, type LintOptions } from '@commitlint/types';
import { gitmojis } from 'gitmojis';
import emojiRegexp from 'emoji-regex';

const allGitmojiCodes = [...gitmojis.map((gitmoji) => gitmoji.code), ...gitmojis.map((gitmoji) => gitmoji.emoji)];
const { Error, Warning } = RuleConfigSeverity;

const parserPreset: LintOptions = {
  parserOpts: {
    // eslint-disable-next-line unicorn/no-unsafe-regex, prefer-regex-literals
    headerPattern: new RegExp(`^(:\\w*:|${String(emojiRegexp().source)}) (?:\\((.*)\\):? )?(.*)$`), /// ^(:\w*:) (?:\((.*)\) )?(.*)$/,
    headerCorrespondence: ['type', 'scope', 'subject'],
  },
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
  'type-enum': [Error, 'always', allGitmojiCodes],
};

const config = {
  parserPreset,
  rules,
};

export default config;
