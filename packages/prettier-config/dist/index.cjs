
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
module.exports = src_default;
//# sourceMappingURL=index.cjs.map