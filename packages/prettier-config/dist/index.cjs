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
module.exports = prettierConfig;

//# sourceMappingURL=index.cjs.map