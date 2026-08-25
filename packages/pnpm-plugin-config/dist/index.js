//#region src/defaultConfig.ts
const defaultConfig = Object.freeze({
	allowBuilds: {
		"@parcel/watcher": true,
		"@swc/core": true,
		"core-js": true,
		"core-js-pure": true,
		"electron": true,
		"es5-ext": true,
		"esbuild": true,
		"lefthook": true,
		"nx": true,
		"protobufjs": true,
		"re2": true,
		"sharp": true
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
	const baseArray = base == null ? [] : Array.isArray(base) ? base : [base];
	const extensionArray = extension == null ? [] : Array.isArray(extension) ? extension : [extension];
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
* entries win). `minimumReleaseAgeExclude`, `hoistPattern`, and
* `publicHoistPattern` are merged as deduplicated unions of both arrays
* (base first, extension second — so pnpm `!`-negation entries in extension
* can exclude org defaults).
*
* @param base
* @param extension
*/
merge(base, extension) {
	return {
		...extension,
		allowBuilds: objectMergeForce(base, extension, "allowBuilds"),
		blockExoticSubdeps: extension.blockExoticSubdeps ?? base.blockExoticSubdeps,
		enableGlobalVirtualStore: extension.enableGlobalVirtualStore ?? base.enableGlobalVirtualStore,
		enablePrePostScripts: extension.enablePrePostScripts ?? base.enablePrePostScripts,
		hoistPattern: arrayMerge(base.hoistPattern, extension.hoistPattern),
		ignorePatchFailures: extension.ignorePatchFailures ?? base.ignorePatchFailures,
		minimumReleaseAge: extension.minimumReleaseAge ?? base.minimumReleaseAge,
		minimumReleaseAgeExclude: arrayMerge(base.minimumReleaseAgeExclude, extension.minimumReleaseAgeExclude),
		optimisticRepeatInstall: extension.optimisticRepeatInstall ?? base.optimisticRepeatInstall,
		overrides: objectMergeDefault(base, extension, "overrides"),
		publicHoistPattern: arrayMerge(base.publicHoistPattern, extension.publicHoistPattern),
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
	buildNumber: 0,
	name: "@w5s/pnpm-plugin-config",
	version: "1.5.0"
});
//#endregion
export { PnpmUserConfig, defaultConfig, hooks, meta };

//# sourceMappingURL=index.js.map