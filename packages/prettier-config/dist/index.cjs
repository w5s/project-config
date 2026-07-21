Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
//#region src/config.ts
const config = {
	overrides: [{
		files: ["*.css", "*.scss"],
		options: { trailingComma: "none" }
	}],
	singleQuote: true,
	trailingComma: "all"
};
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 1,
	name: "@w5s/prettier-config",
	version: "3.4.0"
});
//#endregion
exports.default = config;
exports.meta = meta;

//# sourceMappingURL=index.cjs.map