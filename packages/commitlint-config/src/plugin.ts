import type { Plugin, Rule, RuleConfigCondition } from '@commitlint/types';
import { Emoji, GitmojiCode } from '@w5s/conventional-changelog';

const $if =
  (when: RuleConfigCondition | undefined = 'always') =>
    (cond: boolean) =>
      when === 'always' ? cond : !cond;

export const typeGitmojiStyle: Rule<'unicode' | 'emoji'> = (parsed, when = 'always', value = 'unicode') => {
  const type = parsed['type'];
  const isUnicode = type != null && Emoji.isUnicode(type);
  const isEmoji = type != null && Emoji.isText(type);

  return value === 'unicode'
    ? $if(when)(isUnicode)
      ? [true]
      : [false, `Type should ${when} be an unicode character`]
    : $if(when)(isEmoji)
      ? [true]
      : [false, `Type should ${when} be an valid :emoji:`];
};

export const typeValidGitmoji: Rule = (parsed, when = 'always') => {
  const type = parsed['type'];
  const isValidGitmoji = type != null && GitmojiCode.isValid(type);

  return $if(when)(isValidGitmoji)
    ? [true]
    : [false, `Type should ${when} be an valid gitmoji (see https://gitmoji.dev)`];
};

/**
 * Gitmoji plugins
 */
export const gitmojiPlugin: Plugin = {
  rules: {
    'type-gitmoji-style': typeGitmojiStyle,
    'type-valid-gitmoji': typeValidGitmoji,
  },
};
