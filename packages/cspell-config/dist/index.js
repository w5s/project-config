import cSpellSettings from "@cspell/cspell-bundled-dicts/cspell-default.config.js";
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/cspell-config",
	version: "3.1.3",
	buildNumber: 1
});
//#endregion
//#region src/config.ts
const toArray = (value) => Array.isArray(value) ? value : value == null ? [] : [value];
const defaultSettings = cSpellSettings;
const excludeImport = /* @__PURE__ */ new Set([]);
const dictionaryDefinitions = [
	{
		addWords: false,
		name: "w5s-filetypes",
		path: "../dict/filetypes.txt",
		description: "Additional file types"
	},
	{
		addWords: false,
		name: "w5s-fullstack",
		path: "../dict/fullstack.txt",
		description: "Fullstack terms"
	},
	{
		addWords: false,
		name: "w5s-typescript",
		path: "../dict/typescript.txt",
		description: "Typescript keywords"
	},
	{
		addWords: false,
		name: "w5s-names",
		path: "../dict/names.txt",
		description: "Known names"
	},
	{
		addWords: false,
		name: "w5s-npm",
		path: "../dict/npm.txt",
		description: "NPM packages"
	}
];
const config = {
	...defaultSettings,
	name: "W5S default settings .js",
	id: "w5s-default-js",
	language: "en",
	description: "Default cspell configuration.",
	words: [],
	flagWords: [],
	useGitignore: true,
	dictionaryDefinitions: [...toArray(defaultSettings.dictionaryDefinitions), ...dictionaryDefinitions],
	dictionaries: [...toArray(defaultSettings.dictionaries), ...dictionaryDefinitions.map((dictionaryDefinition) => dictionaryDefinition.name).filter((name) => !["w5s-typescript"].includes(name))],
	ignoreWords: [],
	import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
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
	languageSettings: [
		...toArray(defaultSettings.languageSettings),
		{
			languageId: "typescript,javascript,typescriptreact,javascriptreact",
			locale: "*",
			includeRegExpList: [],
			ignoreRegExpList: [
				"js-hex-escape",
				"js-unicode-escape",
				"js-regexp-flags"
			],
			patterns: [],
			dictionaries: ["w5s-typescript"],
			dictionaryDefinitions: []
		},
		{
			languageId: "typescript,javascript,typescriptreact,javascriptreact",
			locale: "*",
			ignoreRegExpList: ["\\/\\* eslint-disable.+", "\\/\\/ eslint-disable.+"]
		}
	]
};
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map