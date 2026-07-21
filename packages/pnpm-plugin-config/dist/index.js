//#region src/defaultConfig.ts
const defaultConfig = Object.freeze({
	allowBuilds: {
		"@swc/core": true,
		"core-js": true,
		"es5-ext": true,
		"esbuild": true,
		"lefthook": true,
		"nx": true,
		"protobufjs": true,
		"sqlite3": true
	},
	blockExoticSubdeps: true,
	enablePrePostScripts: false,
	ignorePatchFailures: false,
	minimumReleaseAge: 1440,
	minimumReleaseAgeExclude: ["@w5s/*"],
	optimisticRepeatInstall: true,
	overrides: {},
	resolutionMode: "lowest-direct",
	trustPolicy: "no-downgrade",
	trustPolicyIgnoreAfter: 10080,
	verifyDepsBeforeRun: "install"
});
//#endregion
//#region src/PnpmUserConfig.ts
function arrayMerge(base, extension) {
	const baseArray = base ?? [];
	const extensionArray = extension ?? [];
	if (baseArray.length === 0 && extensionArray.length === 0) return void 0;
	return [.../* @__PURE__ */ new Set([...baseArray, ...extensionArray])];
}
function objectMergeDefault(base, extension, property) {
	return {
		...base[property],
		...extension[property]
	};
}
function objectMergeForce(base, extension, property) {
	return {
		...extension[property],
		...base[property]
	};
}
/**
* @namespace
*/
const PnpmUserConfig = Object.freeze({ 
/**
* Merge two configs immutably. `extension` values win; `base` fills in
* undefined slots. `allowBuilds` and `overrides` are deep-merged (extension
* entries win). `minimumReleaseAgeExclude` is merged as a deduplicated union
* of both arrays. A `hoistPattern` of `['*']` in extension is normalized to
* `[]` following pnpm-plugin-better-defaults behavior.
*
* @param base
* @param extension
*/
merge(base, extension) {
	const hoistPattern = extension.hoistPattern?.length === 1 && extension.hoistPattern[0] === "*" ? [] : extension.hoistPattern ?? base.hoistPattern;
	return {
		...extension,
		allowBuilds: objectMergeForce(base, extension, "allowBuilds"),
		blockExoticSubdeps: extension.blockExoticSubdeps ?? base.blockExoticSubdeps,
		enableGlobalVirtualStore: extension.enableGlobalVirtualStore ?? base.enableGlobalVirtualStore,
		enablePrePostScripts: extension.enablePrePostScripts ?? base.enablePrePostScripts,
		hoistPattern,
		ignorePatchFailures: extension.ignorePatchFailures ?? base.ignorePatchFailures,
		minimumReleaseAge: extension.minimumReleaseAge ?? base.minimumReleaseAge,
		minimumReleaseAgeExclude: arrayMerge(base.minimumReleaseAgeExclude, extension.minimumReleaseAgeExclude),
		optimisticRepeatInstall: extension.optimisticRepeatInstall ?? base.optimisticRepeatInstall,
		overrides: objectMergeDefault(base, extension, "overrides"),
		publicHoistPattern: extension.publicHoistPattern ?? base.publicHoistPattern,
		resolutionMode: extension.resolutionMode ?? base.resolutionMode,
		trustPolicy: extension.trustPolicy ?? base.trustPolicy,
		trustPolicyIgnoreAfter: extension.trustPolicyIgnoreAfter ?? base.trustPolicyIgnoreAfter,
		verifyDepsBeforeRun: extension.verifyDepsBeforeRun ?? base.verifyDepsBeforeRun
	};
} });
//#endregion
//#region src/hooks.ts
const hooks = { updateConfig(config) {
	return PnpmUserConfig.merge(defaultConfig, config);
} };
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 1,
	name: "@w5s/pnpm-plugin-config",
	version: "1.0.0-alpha.4"
});
//#endregion
export { PnpmUserConfig, defaultConfig, hooks, meta };

//# sourceMappingURL=index.js.map