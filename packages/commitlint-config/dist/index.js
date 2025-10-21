import { RuleConfigSeverity } from "@commitlint/types";
import conventionalChangelogPreset, { Emoji, GitmojiCode } from "@w5s/conventional-changelog";

//#region src/plugin.ts
const $if = (when = "always") => (cond) => when === "always" ? cond : !cond;
const typeGitmojiStyle = (parsed, when = "always", value = "unicode") => {
	const isUnicode = parsed.type != null && Emoji.isUnicode(parsed.type);
	const isEmoji = parsed.type != null && Emoji.isText(parsed.type);
	return value === "unicode" ? $if(when)(isUnicode) ? [true] : [false, `Type should ${when} be an unicode character`] : $if(when)(isEmoji) ? [true] : [false, `Type should ${when} be an valid :emoji:`];
};
const typeValidGitmoji = (parsed, when = "always") => {
	const isValidGitmoji = parsed.type != null && GitmojiCode.isValid(parsed.type);
	return $if(when)(isValidGitmoji) ? [true] : [false, `Type should ${when} be an valid gitmoji (see https://gitmoji.dev)`];
};
/**
* Gitmoji plugins
*/
const gitmojiPlugin = { rules: {
	"type-gitmoji-style": typeGitmojiStyle,
	"type-valid-gitmoji": typeValidGitmoji
} };

//#endregion
//#region src/index.ts
const { Error, Warning, Disabled } = RuleConfigSeverity;
const config = {
	parserPreset: { parserOpts: (await conventionalChangelogPreset()).parser },
	rules: {
		"body-leading-blank": [Warning, "always"],
		"body-max-line-length": [
			Error,
			"always",
			100
		],
		"footer-leading-blank": [Warning, "always"],
		"footer-max-line-length": [
			Error,
			"always",
			100
		],
		"header-max-length": [
			Error,
			"always",
			100
		],
		"scope-case": [
			Error,
			"always",
			"lower-case"
		],
		"subject-case": [
			Error,
			"always",
			["sentence-case"]
		],
		"subject-empty": [Error, "never"],
		"subject-exclamation-mark": [Error, "never"],
		"subject-full-stop": [
			Error,
			"never",
			"."
		],
		"type-case": [
			Error,
			"always",
			"lower-case"
		],
		"type-empty": [Error, "never"],
		"type-enum": [Disabled],
		"type-gitmoji-style": [
			Error,
			"always",
			"unicode"
		],
		"type-valid-gitmoji": [Error, "always"]
	},
	plugins: [gitmojiPlugin]
};
var src_default = config;

//#endregion
export { src_default as default };
//# sourceMappingURL=index.js.map