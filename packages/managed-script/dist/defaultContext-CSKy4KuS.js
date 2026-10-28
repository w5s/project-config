import { Writable } from "node:stream";
// src/internal/Stdio.ts
function createSink() {
	return new Writable({ write(_chunk, _encoding, callback) {
		callback();
	} });
}
function resolveEntry(entry, fd) {
	const parent = fd === 1 ? process.stdout : process.stderr;
	if (entry === "inherit" || entry === fd) return parent;
	return typeof entry === "object" && entry != null && "write" in entry && typeof entry.write === "function" ? entry : createSink();
}
/**
* Helpers for Node.js {@link StdioOptions}
*
* @namespace
*/
const Stdio = { 
/**
* Resolve the writable streams (stdout is index 1, stderr is index 2) described by `stdio`.
*
* @param stdio
*/
resolve(stdio) {
	return typeof stdio === "string" ? {
		stderr: resolveEntry(stdio, 2),
		stdout: resolveEntry(stdio, 1)
	} : {
		stderr: resolveEntry(stdio[2], 2),
		stdout: resolveEntry(stdio[1], 1)
	};
} };
// src/ManagedScriptEnv.ts
/**
* Enum for managed script environment variables.
*
* @enum
*/
const ManagedScriptEnv = Object.freeze({
	/**
	* The color mode used for messages.
	*/
	Color: "MANAGED_SCRIPT_COLOR",
	/**
	* The directory where the managed script configuration is located.
	*/
	ConfigDir: "MANAGED_SCRIPT_CONFIG_DIR",
	/**
	* The file where the managed script configuration is located.
	*/
	ConfigFile: "MANAGED_SCRIPT_CONFIG_FILE",
	/**
	* The invocation directory used to resolve configuration and spawn the script.
	*/
	Cwd: "MANAGED_SCRIPT_CWD",
	/**
	* The resolved log level.
	*/
	LogLevel: "MANAGED_SCRIPT_LOGLEVEL",
	/**
	* The name of the managed script.
	*/
	Name: "MANAGED_SCRIPT_NAME"
});
// src/ManagedScript/defaultContext.ts
function defaultContext(context) {
	const { cli = {}, color, cwd, dryRun, env = process.env, logLevel, stdio = "inherit" } = context ?? {};
	const envLogLevel = env[ManagedScriptEnv.LogLevel];
	return {
		cli,
		color: color ?? cli.color ?? "auto",
		cwd: cwd ?? cli.cwd ?? env[ManagedScriptEnv.Cwd] ?? process.cwd(),
		dryRun: dryRun ?? cli.dryRun ?? false,
		env,
		logLevel: logLevel ?? cli.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : "info"),
		stdio
	};
}
const knownLogLevels = /* @__PURE__ */ new Set([
	"debug",
	"error",
	"info",
	"silent",
	"warn"
]);
function isLogLevel(value) {
	return knownLogLevels.has(value);
}
export { ManagedScriptEnv as n, Stdio as r, defaultContext as t };

//# sourceMappingURL=defaultContext-CSKy4KuS.js.map