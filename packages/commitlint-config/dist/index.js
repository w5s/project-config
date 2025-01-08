import { RuleConfigSeverity } from '@commitlint/types';
import Changelog from '@w5s/conventional-changelog';

// src/index.ts
var $if = (when = "always") => (cond) => when === "always" ? cond : !cond;
var typeGitmojiStyle = (parsed, when = "always", value = "unicode") => {
  const isUnicode = parsed.type != null && Changelog.Emoji.isUnicode(parsed.type);
  const isEmoji = parsed.type != null && Changelog.Emoji.isText(parsed.type);
  return value === "unicode" ? $if(when)(isUnicode) ? [true] : [false, `Type should ${when} be an unicode character`] : $if(when)(isEmoji) ? [true] : [false, `Type should ${when} be an valid :emoji:`];
};
var typeValidGitmoji = (parsed, when = "always") => {
  const isValidGitmoji = parsed.type != null && Changelog.GitmojiCode.isValid(parsed.type);
  return $if(when)(isValidGitmoji) ? [true] : [false, `Type should ${when} be an valid gitmoji (see https://gitmoji.dev)`];
};
var gitmojiPlugin = {
  rules: {
    "type-gitmoji-style": typeGitmojiStyle,
    "type-valid-gitmoji": typeValidGitmoji
  }
};

// src/index.ts
var { Error, Warning, Disabled } = RuleConfigSeverity;
var parserPreset = {
  parserOpts: Changelog.parserOpts
};
var rules = {
  "body-leading-blank": [Warning, "always"],
  "body-max-line-length": [Error, "always", 100],
  "footer-leading-blank": [Warning, "always"],
  "footer-max-line-length": [Error, "always", 100],
  "header-max-length": [Error, "always", 100],
  "scope-case": [Error, "always", "lower-case"],
  "subject-case": [Error, "always", ["sentence-case"]],
  "subject-empty": [Error, "never"],
  "subject-exclamation-mark": [Error, "never"],
  "subject-full-stop": [Error, "never", "."],
  "type-case": [Error, "always", "lower-case"],
  "type-empty": [Error, "never"],
  "type-enum": [Disabled],
  "type-gitmoji-style": [Error, "always", "unicode"],
  "type-valid-gitmoji": [Error, "always"]
};
var config = {
  parserPreset,
  rules,
  plugins: [gitmojiPlugin]
};
var index_default = config;

export { index_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map