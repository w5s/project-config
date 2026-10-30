import { n as ManagedScriptEnv, r as Stdio, t as defaultContext } from "./defaultContext-CSKy4KuS.js";
import { loadConfig } from "c12";
import path from "node:path";
import { spawn } from "node:child_process";
import path$1 from "node:path/win32";
// src/meta.ts
const meta = Object.freeze({
	binaryLabel: "W5S Managed Script",
	binaryName: "managed-script",
	binaryVersion: "1.0.0-alpha.4",
	buildNumber: 1,
	name: "@w5s/managed-script",
	version: "1.0.0-alpha.4"
});
// src/internal/ConfigLoader.ts
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
// src/internal/Executor.ts
/**
* Runs a shell command (`run`), or a program spawned directly without a shell (`runner`).
* Stdio is inherited and the exit code is forwarded.
*/
const Executor = { async run(request) {
	const env = request.env == null ? process.env : {
		...process.env,
		...request.env
	};
	const options = {
		cwd: request.cwd,
		env,
		stdio: "inherit"
	};
	const child = request.runner == null ? spawn(request.run, {
		...options,
		shell: true
	}) : spawn(request.runner, request.args ?? [], {
		...options,
		shell: false
	});
	return new Promise((resolve, reject) => {
		child.on("error", reject);
		child.on("close", (code, signal) => {
			resolve(code ?? (signal == null ? 1 : 128));
		});
	});
} };
// src/internal/Logger.ts
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
const Logger = { create({ color = "auto", level, name = meta.binaryName, stdio }) {
	const { stderr } = Stdio.resolve(stdio);
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
// src/internal/ScriptInvocation.ts
const shellSafe = /^[\w@%+=:,./-]+$/;
/**
* @namespace
*/
const ScriptInvocation = {
	/**
	* Builds the command line shown to the user and the target passed to the executor.
	* A `run` script stays one command string. A `runner` script receives real arguments.
	*
	* @param script
	* @param scriptArgs
	*/
	create(script, scriptArgs) {
		if (script.runner != null) return { target: {
			args: [...script.args, ...scriptArgs],
			runner: script.runner
		} };
		return { target: { run: [script.run, ...scriptArgs.map((argument) => quoteShell(argument))].join(" ") } };
	},
	/**
	* Returns the command line as a string suitable for display.
	*
	* @param self
	*/
	format(self) {
		const { args, run, runner } = self.target;
		return runner == null ? run : formatArgv([runner, ...args ?? []]);
	}
};
function formatArgv(argv) {
	return argv.map((part) => shellSafe.test(part) ? part : quoteShell(part)).join(" ");
}
function quoteShell(value) {
	return `'${value.replaceAll("'", String.raw`'\''`)}'`;
}
// src/internal/ScriptNameResolver.ts
/**
* Resolves the script name to run.
*
* Priority: first positional CLI argument > `npm_lifecycle_event` env var.
*
* `MANAGED_SCRIPT_NAME` is deliberately not read: it is only provided to the spawned script, so that
* an inherited value can never shadow the name of a nested invocation.
*/
const ScriptNameResolver = { resolve({ env, scriptName }) {
	return scriptName ?? env["npm_lifecycle_event"];
} };
// src/ManagedScript/resolveScripts.ts
function resolveScripts(loaded) {
	const scripts = {};
	const layers = loaded.layers.length > 0 ? loaded.layers : [{ config: loaded.config }];
	for (const layer of layers) for (const [name, command] of Object.entries(layer.config?.scripts ?? {})) {
		const configFile = layer.configFile ?? loaded.configFile;
		const configDir = configFile == null ? void 0 : path$1.dirname(configFile);
		scripts[name] ??= {
			...normalizeScript(name, command),
			configDir,
			configFile
		};
	}
	return { scripts };
}
function isPlainObject(value) {
	return Object.prototype.toString.call(value) === "[object Object]";
}
function isStringArray(value) {
	return Array.isArray(value) && value.every((item) => typeof item === "string");
}
const allowedKeys = /* @__PURE__ */ new Set([
	"args",
	"run",
	"runner"
]);
function normalizeScript(name, definition) {
	if (typeof definition === "string") return requireRun(name, definition);
	if (!isPlainObject(definition)) throw new TypeError(`Script "${name}" must be a shell command string or an object with "run", or "runner" and "args".`);
	const unknownKeys = Object.keys(definition).filter((key) => !allowedKeys.has(key));
	if (unknownKeys.length > 0) throw new TypeError(`Script "${name}" has unknown option(s): ${unknownKeys.join(", ")}.`);
	const { args, run, runner } = definition;
	if (run !== void 0) {
		if (runner !== void 0 || args !== void 0) throw new TypeError(`Script "${name}" cannot mix "run" with "runner" or "args".`);
		return requireRun(name, run);
	}
	if (typeof runner !== "string" || runner.trim().length === 0) throw new TypeError(`Script "${name}" runner must be a non-empty string.`);
	if (args !== void 0 && !isStringArray(args)) throw new TypeError(`Script "${name}" args must be an array of strings.`);
	return {
		args: [...args ?? []],
		runner
	};
}
function requireRun(name, run) {
	if (typeof run !== "string" || run.trim().length === 0) throw new TypeError(`Script "${name}" run must be a non-empty string.`);
	return { run };
}
// src/ManagedScript/execute.ts
const handlers = { RunScript: async (command) => {
	const { context: { color, cwd, dryRun, env, logLevel, stdio }, parameters: { scriptArgs = [], scriptName } } = command;
	const { stdout } = Stdio.resolve(stdio);
	const logger = Logger.create({
		color,
		level: logLevel,
		stdio
	});
	const loaded = await ConfigLoader.load({ cwd });
	logger.debug(`Resolved configuration from ${loaded.configFile ?? "defaults (no config file found)"}`);
	const { scripts } = resolveScripts(loaded);
	const name = ScriptNameResolver.resolve({
		env,
		scriptName
	});
	if (name == null) throw new Error("Unable to resolve the script name. Pass it as the first argument or run through an npm/pnpm script (npm_lifecycle_event).");
	const script = scripts[name];
	if (script == null) {
		const available = Object.keys(scripts);
		throw new Error(`No script named "${name}" found in the configuration.${available.length > 0 ? ` Available scripts: ${available.join(", ")}.` : " No scripts are configured."}`);
	}
	const invocation = ScriptInvocation.create(script, scriptArgs);
	logger.debug(`Script found in configuration: ${path.relative(cwd, script.configFile)}`);
	stdout.write(`$ ${ScriptInvocation.format(invocation)}\n`);
	if (dryRun) return 0;
	const scriptEnv = {
		[ManagedScriptEnv.Color]: color,
		[ManagedScriptEnv.ConfigDir]: script.configDir,
		[ManagedScriptEnv.ConfigFile]: script.configFile,
		[ManagedScriptEnv.Cwd]: cwd,
		[ManagedScriptEnv.LogLevel]: logLevel,
		[ManagedScriptEnv.Name]: name
	};
	const exitCode = await Executor.run({
		...invocation.target,
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
// src/ManagedScript/runScript.ts
async function runScript(options) {
	return execute({
		_: "RunScript",
		...options
	});
}
// src/ManagedScript.ts
/**
* @namespace
*/
const ManagedScript = Object.freeze({ runScript });
export { meta as n, ManagedScript as t };

//# sourceMappingURL=ManagedScript-BDFJYUTd.js.map