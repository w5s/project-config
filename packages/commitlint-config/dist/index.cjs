'use strict';

var types = require('@commitlint/types');
var Changelog = require('@w5s/conventional-changelog');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var Changelog__default = /*#__PURE__*/_interopDefault(Changelog);

// src/index.ts
var $if = (when = "always") => (cond) => when === "always" ? cond : !cond;
var typeGitmojiStyle = (parsed, when = "always", value = "unicode") => {
  const isUnicode = parsed.type != null && Changelog__default.default.Emoji.isUnicode(parsed.type);
  const isEmoji = parsed.type != null && Changelog__default.default.Emoji.isText(parsed.type);
  return value === "unicode" ? $if(when)(isUnicode) ? [true] : [false, `Type should ${when} be an unicode character`] : $if(when)(isEmoji) ? [true] : [false, `Type should ${when} be an valid :emoji:`];
};
var typeValidGitmoji = (parsed, when = "always") => {
  const isValidGitmoji = parsed.type != null && Changelog__default.default.GitmojiCode.isValid(parsed.type);
  return $if(when)(isValidGitmoji) ? [true] : [false, `Type should ${when} be an valid gitmoji (see https://gitmoji.dev)`];
};
var gitmojiPlugin = {
  rules: {
    "type-gitmoji-style": typeGitmojiStyle,
    "type-valid-gitmoji": typeValidGitmoji
  }
};

// src/index.ts
var { Error, Warning, Disabled } = types.RuleConfigSeverity;
var parserPreset = {
  parserOpts: Changelog__default.default.parserOpts
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
var src_default = config;

module.exports = src_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map