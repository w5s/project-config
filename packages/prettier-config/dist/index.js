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
	version: "3.1.15"
});
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map