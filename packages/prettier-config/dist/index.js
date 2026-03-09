//#region src/meta.ts
const meta = Object.freeze({
	name: "@w5s/prettier-config",
	version: "3.1.3",
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
export { config as default, meta };

//# sourceMappingURL=index.js.map