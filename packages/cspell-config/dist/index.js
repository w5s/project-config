import cSpellSettings from "@cspell/cspell-bundled-dicts/cspell-default.config.js";
//#region src/config.ts
const toArray = (value) => Array.isArray(value) ? value : value == null ? [] : [value];
const defaultSettings = cSpellSettings;
const excludeImport = /* @__PURE__ */ new Set([]);
const dictionaryDefinitions = [
	{
		addWords: false,
		description: "Additional file types",
		name: "w5s-filetypes",
		path: "../dict/filetypes.txt"
	},
	{
		addWords: false,
		description: "Fullstack terms",
		name: "w5s-fullstack",
		path: "../dict/fullstack.txt"
	},
	{
		addWords: false,
		description: "Typescript keywords",
		name: "w5s-typescript",
		path: "../dict/typescript.txt"
	},
	{
		addWords: false,
		description: "Known names",
		name: "w5s-names",
		path: "../dict/names.txt"
	},
	{
		addWords: false,
		description: "NPM packages",
		name: "w5s-npm",
		path: "../dict/npm.txt"
	}
];
const config = {
	...defaultSettings,
	description: "Default cspell configuration.",
	dictionaries: [...toArray(defaultSettings.dictionaries), ...dictionaryDefinitions.map((dictionaryDefinition) => dictionaryDefinition.name).filter((name) => !["w5s-typescript"].includes(name))],
	dictionaryDefinitions: [...toArray(defaultSettings.dictionaryDefinitions), ...dictionaryDefinitions],
	flagWords: [],
	id: "w5s-default-js",
	ignorePaths: [
		...toArray(defaultSettings.ignorePaths),
		"**/CHANGELOG.md",
		"**/__snapshots__/**",
		"**/.vscode/**",
		"**/*.snap",
		"**/dist/**",
		"**/node_modules/**",
		"**/package.json",
		"**/package-lock.json",
		"**/renovate.json",
		"**/vscode-extension/**",
		"**/yarn.lock",
		"**/pnpm-lock.yaml",
		"**/*.svg",
		"**/*.webp",
		"**/*.webm"
	],
	ignoreWords: [],
	import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
	language: "en",
	languageSettings: [
		...toArray(defaultSettings.languageSettings),
		{
			dictionaries: ["w5s-typescript"],
			dictionaryDefinitions: [],
			ignoreRegExpList: [
				"js-hex-escape",
				"js-unicode-escape",
				"js-regexp-flags"
			],
			includeRegExpList: [],
			languageId: "typescript,javascript,typescriptreact,javascriptreact",
			locale: "*",
			patterns: []
		},
		{
			ignoreRegExpList: ["\\/\\* eslint-disable.+", "\\/\\/ eslint-disable.+"],
			languageId: "typescript,javascript,typescriptreact,javascriptreact",
			locale: "*"
		}
	],
	name: "W5S default settings .js",
	useGitignore: true,
	words: []
};
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 1,
	name: "@w5s/cspell-config",
	version: "3.4.0"
});
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map