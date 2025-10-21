//#region src/index.ts
const prettierConfig = {
	singleQuote: true,
	trailingComma: "all",
	overrides: [{
		files: ["*.css", "*.scss"],
		options: { trailingComma: "none" }
	}]
};
var src_default = prettierConfig;

//#endregion
export { src_default as default };
//# sourceMappingURL=index.js.map