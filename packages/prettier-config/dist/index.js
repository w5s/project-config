//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/prettier-config",
	version: "3.0.6",
	buildNumber: 1
});
//#endregion
//#region src/index.ts
const prettierConfig = {
	singleQuote: true,
	trailingComma: "all",
	overrides: [{
		files: ["*.css", "*.scss"],
		options: { trailingComma: "none" }
	}]
};
//#endregion
export { prettierConfig as default, meta };

//# sourceMappingURL=index.js.map