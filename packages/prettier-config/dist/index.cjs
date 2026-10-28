Object.defineProperties(exports, {
	__esModule: { value: true },
	[Symbol.toStringTag]: { value: "Module" }
});
// src/config.ts
const config = {
	overrides: [{
		files: ["*.css", "*.scss"],
		options: { trailingComma: "none" }
	}],
	singleQuote: true,
	trailingComma: "all"
};
// src/meta.ts
const meta = Object.freeze({
	buildNumber: 0,
	name: "@w5s/prettier-config",
	version: "3.29.1"
});
exports.default = config;
exports.meta = meta;

//# sourceMappingURL=index.cjs.map