import { n as ManagedScriptEnv, t as defaultContext } from "./defaultContext-BthxLDX3.js";
import { loadConfig } from "c12";
import path from "node:path";
import { spawn } from "node:child_process";
import path$1 from "node:path/win32";
//#region src/meta.ts
const meta = Object.freeze({
	binaryLabel: "W5S Managed Script",
	binaryName: "managed-script",
	binaryVersion: "1.0.0-alpha.3",
	buildNumber: 1,
	name: "@w5s/managed-script",
	version: "1.0.0-alpha.3"
});
//#endregion
//#region src/internal/ConfigLoader.ts
const ConfigLoader = { async load(options) {
	const result = await loadConfig({
		cwd: options.cwd,
		name: meta.binaryName,
		packageJson: [meta.binaryName]
	});
	return {
		config: result.config,
		configFile: result.configFile ?? void 0,
		layers: result.layers ?? []
	};
} };
//#endregion
//#region src/internal/Executor.ts
/**
* Executes a command via the system shell, inheriting stdio and forwarding its exit code.
*/
const Executor = { async run(command, options = {}) {
	return new Promise((resolve, reject) => {
		const child = spawn(command, {
			cwd: options.cwd,
			env: options.env == null ? process.env : {
				...process.env,
				...options.env
			},
			shell: true,
			stdio: "inherit"
		});
		child.on("error", reject);
		child.on("close", (code, signal) => {
			resolve(code ?? (signal == null ? 1 : 128));
		});
	});
} };
//#endregion
//#region src/internal/Logger.ts
/**
* Rank order used to compare log levels, higher means more verbose.
*/
const logLevelRank = {
	debug: 4,
	error: 1,
	info: 3,
	silent: 0,
	warn: 2
};
/**
* Creates a logger writing to `stream`, filtering out messages above the configured `level`.
*/
const Logger = { create({ color = "auto", level, name = meta.binaryName, stderr }) {
	const write = (messageLevel, message) => {
		if (!(logLevelRank[messageLevel] <= logLevelRank[level])) return;
		const outputStream = stderr;
		const shouldColor = color === "always" || color === "auto" && "isTTY" in outputStream && outputStream.isTTY === true;
		const colorCode = {
			debug: "\x1B[36m",
			error: "\x1B[31m",
			info: "",
			silent: "",
			warn: "\x1B[33m"
		}[messageLevel];
		const label = {
			debug: "debug",
			error: "error",
			info: "",
			silent: "",
			warn: "warning"
		}[messageLevel];
		const coloredLabel = shouldColor && colorCode !== "" ? `${colorCode}${label}\u{1B}[0m` : label;
		const prefix = label === "" ? `${name}: ` : `${name}: ${coloredLabel}: `;
		outputStream.write(`${prefix}${message}\n`);
	};
	return {
		debug: (message) => write("debug", message),
		error: (message) => write("error", message),
		info: (message) => write("info", message),
		warn: (message) => write("warn", message)
	};
} };
//#endregion
//#region src/internal/ScriptNameResolver.ts
/**
* Resolves the script name to run.
*
* Priority: first positional CLI argument > `MANAGED_SCRIPT_NAME` env var > `npm_lifecycle_event` env var.
*/
const ScriptNameResolver = { resolve({ env, scriptName }) {
	return scriptName ?? env[ManagedScriptEnv.Name] ?? env["npm_lifecycle_event"];
} };
//#endregion
//#region src/ManagedScript/resolveScripts.ts
function resolveScripts(loaded) {
	const scripts = {};
	const layers = loaded.layers.length > 0 ? loaded.layers : [{ config: loaded.config }];
	for (const layer of layers) for (const [name, command] of Object.entries(layer.config?.scripts ?? {})) {
		const configFile = layer.configFile ?? loaded.configFile;
		const configDir = configFile == null ? void 0 : path$1.dirname(configFile);
		scripts[name] ??= {
			command,
			configDir,
			configFile
		};
	}
	return { scripts };
}
//#endregion
//#region src/ManagedScript/execute.ts
const handlers = { RunScript: async (command) => {
	const { context: { color, cwd, dryRun, env, logLevel, stderr, stdout }, parameters: { scriptArgs = [], scriptName } } = command;
	const logger = Logger.create({
		color,
		level: logLevel,
		stderr,
		stdout
	});
	const loaded = await ConfigLoader.load({ cwd });
	logger.debug(`Resolved configuration from ${loaded.configFile ?? "defaults (no config file found)"}`);
	const { scripts } = resolveScripts(loaded);
	const name = ScriptNameResolver.resolve({
		env,
		scriptName
	});
	if (name == null) throw new Error("Unable to resolve the script name. Pass it as the first argument, set the MANAGED_SCRIPT_NAME environment variable, or run through an npm/pnpm script (npm_lifecycle_event).");
	const script = scripts[name];
	if (script == null) {
		const available = Object.keys(scripts);
		throw new Error(`No script named "${name}" found in the configuration.${available.length > 0 ? ` Available scripts: ${available.join(", ")}.` : " No scripts are configured."}`);
	}
	const commandLine = [script.command, ...scriptArgs.map((argument) => `'${argument.replaceAll("'", String.raw`'\''`)}'`)].join(" ");
	logger.debug(`Script found in configuration: ${path.relative(cwd, script.configFile)}`);
	stdout.write(`$ ${commandLine}\n`);
	if (dryRun) return 0;
	const scriptEnv = {
		[ManagedScriptEnv.Color]: color,
		[ManagedScriptEnv.ConfigDir]: script.configDir,
		[ManagedScriptEnv.ConfigFile]: script.configFile,
		[ManagedScriptEnv.Cwd]: cwd,
		[ManagedScriptEnv.LogLevel]: logLevel,
		[ManagedScriptEnv.Name]: name
	};
	const exitCode = await Executor.run(commandLine, {
		cwd,
		env: scriptEnv
	});
	if (exitCode !== 0) throw new Error(`Script "${name}" exited with code ${exitCode}.`);
	return exitCode;
} };
/**
* Dispatch the command to the appropriate handler based on its type.
*
* @param command
*/
async function execute(command) {
	const context = defaultContext(command.context);
	return handlers[command._]({
		...command,
		context
	});
}
//#endregion
//#region src/ManagedScript/runScript.ts
async function runScript(options) {
	return execute({
		_: "RunScript",
		...options
	});
}
//#endregion
//#region src/ManagedScript.ts
/**
* @namespace
*/
const ManagedScript = Object.freeze({ runScript });
//#endregion
export { meta as n, ManagedScript as t };

//# sourceMappingURL=ManagedScript-CuIvyQ2n.js.map