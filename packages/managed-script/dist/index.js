import { n as meta, t as ManagedScript } from "./ManagedScript-CuIvyQ2n.js";
import { n as ManagedScriptEnv } from "./defaultContext-BthxLDX3.js";
import { createDefineConfig } from "c12";
//#region src/defineConfig.ts
/**
* Define the configuration for the managed script.
*
* @example
* ```ts
* // managed-script.config.ts or @acme/managed-script-config/index.ts
* export default defineConfig({
*   // your configuration here
* });
* ```
*/
const defineConfig = createDefineConfig();
//#endregion
//#region src/type/Command.ts
const ManagedScriptCommand = Object.freeze({ RunScript: (args) => ({
	_: "RunScript",
	...args
}) });
//#endregion
//#region src/mergeConfig.ts
const DANGEROUS_KEYS = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
/**
* Merge two managed-script configs using the same heuristic as Vite and Vitest:
* later values win, plain objects merge recursively, and arrays concatenate.
*
* @param defaults
* @param overrides
* @example
* ```ts
* export default defineConfig(mergeConfig(
*   { scripts: { build: 'echo base', test: 'echo test' } },
*   { scripts: { build: 'echo override' } },
* ));
* ```
*/
function mergeConfig(defaults, overrides) {
	if (typeof defaults === "function" || typeof overrides === "function") throw new TypeError("Cannot merge config in form of callback");
	return mergeConfigRecursively({ ...defaults }, { ...overrides });
}
function isObject(value) {
	return Object.prototype.toString.call(value) === "[object Object]";
}
function mergeConfigRecursively(defaults, overrides) {
	const merged = { ...defaults };
	for (const [key, value] of Object.entries(overrides)) {
		if (DANGEROUS_KEYS.has(key)) continue;
		if (value == null) continue;
		const existing = merged[key];
		if (existing == null) {
			merged[key] = value;
			continue;
		}
		if (Array.isArray(existing) || Array.isArray(value)) {
			merged[key] = [...toArray(existing), ...toArray(value)];
			continue;
		}
		if (isObject(existing) && isObject(value)) {
			merged[key] = mergeConfigRecursively(existing, value);
			continue;
		}
		merged[key] = value;
	}
	return merged;
}
function toArray(target) {
	return Array.isArray(target) ? target : [target];
}
//#endregion
export { ManagedScript, ManagedScriptCommand, ManagedScriptEnv, defineConfig, mergeConfig, meta };

//# sourceMappingURL=index.js.map