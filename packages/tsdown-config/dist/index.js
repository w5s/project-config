import * as TsDown from "tsdown";
import { readFileSync } from "node:fs";
import path from "node:path";
//#region src/defaultConfig.ts
const defaultConfig = {
	dts: true,
	entry: [
		"src/index.ts",
		"!src/**/*.test.*",
		"!src/**/*.spec.*",
		"!**/__mocks__/**"
	],
	format: ["esm"],
	outExtensions({ format }) {
		return { js: format === "es" ? ".js" : ".cjs" };
	},
	sourcemap: true,
	tsconfig: "tsconfig.build.json"
};
//#endregion
//#region src/withPackageDefine.ts
function withPackageDefine(config) {
	let packageJSON = void 0;
	const cwd = config.cwd ?? process.cwd();
	function getPackageJSON() {
		if (packageJSON) return packageJSON;
		try {
			packageJSON = JSON.parse(readFileSync(path.join(cwd, "package.json"), "utf8"));
			return packageJSON;
		} catch {
			return {};
		}
	}
	function jsonSafeStringify(value) {
		return JSON.stringify(value);
	}
	return {
		...config,
		cwd,
		define: {
			__PACKAGE_BUILD_NUMBER__: jsonSafeStringify(toInt(process.env["npm_package_build_number"]) ?? toInt(process.env["BUILD_NUMBER"]) ?? toInt(process.env["CI_BUILD_NUMBER"]) ?? Date.now()),
			__PACKAGE_NAME__: jsonSafeStringify(process.env["npm_package_name"] ?? getPackageJSON().name ?? ""),
			__PACKAGE_VERSION__: jsonSafeStringify(process.env["npm_package_version"] ?? getPackageJSON().version ?? ""),
			...config.define
		}
	};
}
function toInt(value) {
	if (value == null) return void 0;
	const parsed = Number.parseInt(value);
	return Number.isNaN(parsed) ? void 0 : parsed;
}
//#endregion
//#region src/defineConfig.ts
function defineConfig(optionsOrFn) {
	return TsDown.defineConfig(typeof optionsOrFn === "function" ? (config, context) => optionsOrFn(withPackageDefine(TsDown.mergeConfig(defaultConfig, config)), context) : withPackageDefine(TsDown.mergeConfig(defaultConfig, optionsOrFn)));
}
//#endregion
//#region src/defineConfigWith.ts
/**
* Returns a `defineConfig`-like function that uses a custom base config instead of the package default.
* Use this when you have a shared base (e.g. a library preset) and want to reuse it across multiple packages.
*
* @example
* ```ts
* // Helper for shared library preset
* export const defineConfig = defineConfigWith({ format: ['esm', 'cjs'] });
*
* // in tsdown.config.ts
* export default defineConfig({ entry: ['src/index.ts'] });
* ```
* @param baseConfig The base configuration to merge with the package default.
*/
function defineConfigWith(baseConfig) {
	const resolvedBaseConfig = mergeConfig(defaultConfig, baseConfig);
	return (optionsOrFn) => TsDown.defineConfig(typeof optionsOrFn === "function" ? (config, context) => withPackageDefine(optionsOrFn(resolvedBaseConfig, context)) : withPackageDefine(mergeConfig(resolvedBaseConfig, optionsOrFn)));
}
function mergeConfig(base, extension) {
	return TsDown.mergeConfig(base, extension);
}
//#endregion
export { defaultConfig, defineConfig, defineConfigWith };

//# sourceMappingURL=index.js.map