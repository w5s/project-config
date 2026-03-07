Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/prettier-config",
	version: "3.1.0",
	buildNumber: 1
});
//#endregion
//#region src/config.ts
const config = {
	singleQuote: true,
	trailingComma: "all",
	overrides: [{
		files: ["*.css", "*.scss"],
		options: { trailingComma: "none" }
	}]
};
//#endregion
exports.default = config;
exports.meta = meta;

//# sourceMappingURL=index.cjs.map