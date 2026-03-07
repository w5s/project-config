import { RuleConfigSeverity } from "@commitlint/types";
import conventionalChangelogPreset, { Emoji, GitmojiCode } from "@w5s/conventional-changelog";
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/commitlint-config",
	version: "3.1.2",
	buildNumber: 1
});
//#endregion
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
//#region src/config.ts
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
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map