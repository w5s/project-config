Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
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
exports.default = prettierConfig;
exports.meta = meta;

//# sourceMappingURL=index.cjs.map