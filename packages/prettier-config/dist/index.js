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
export { prettierConfig as default };

//# sourceMappingURL=index.js.map