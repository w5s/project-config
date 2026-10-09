//#region src/ManagedScriptEnv.ts
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
//#endregion
//#region src/ManagedScript/defaultContext.ts
function defaultContext(context) {
	const { cli = {}, color, cwd, dryRun, env = process.env, logLevel, stderr = process.stderr, stdout = process.stdout } = context ?? {};
	const envLogLevel = env[ManagedScriptEnv.LogLevel];
	return {
		cli,
		color: color ?? cli.color ?? "auto",
		cwd: cwd ?? cli.cwd ?? env[ManagedScriptEnv.Cwd] ?? process.cwd(),
		dryRun: dryRun ?? cli.dryRun ?? false,
		env,
		logLevel: logLevel ?? cli.logLevel ?? (isLogLevel(envLogLevel) ? envLogLevel : "info"),
		stderr,
		stdout
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
//#endregion
export { ManagedScriptEnv as n, defaultContext as t };

//# sourceMappingURL=defaultContext-BthxLDX3.js.map