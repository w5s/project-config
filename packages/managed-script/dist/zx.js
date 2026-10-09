import { t as defaultContext } from "./defaultContext-BthxLDX3.js";
import { $ as $$1, chalk, log } from "zx";
import { stripVTControlCharacters } from "node:util";
//#region src/zx/defaultZXOptions.ts
function defaultZXOptions(options) {
	const { cwd: optionsCwd, env: optionsEnv, logLevel: optionsLogLevel, stderr: optionsStderr, stdout: optionsStdout, ...optionsRest } = options;
	const env = optionsEnv == null ? process.env : {
		...process.env,
		...optionsEnv
	};
	const context = defaultContext({
		env,
		...optionsCwd == null ? {} : { cwd: optionsCwd },
		...optionsLogLevel == null ? {} : { logLevel: optionsLogLevel },
		...optionsStderr == null ? {} : { stderr: optionsStderr },
		...optionsStdout == null ? {} : { stdout: optionsStdout }
	});
	return {
		cwd: context.cwd,
		env: context.env,
		log: (entry) => {
			const target = entry.kind === "cmd" || entry.kind === "stdout" ? context.stdout : context.stderr;
			const colorEnabled = context.color === "always" || context.color === "auto" && autoColor(context.env, target);
			const previousOutput = log.output;
			const previousLevel = chalk.level;
			log.output = colorEnabled ? target : { write: (chunk) => target.write(stripVTControlCharacters(chunk)) };
			if (colorEnabled && !chalk.level) chalk.level = 1;
			else if (!colorEnabled) chalk.level = 0;
			try {
				log(entry.kind === "cmd" && (context.logLevel === "info" || context.logLevel === "debug") ? {
					...entry,
					verbose: true
				} : entry);
			} finally {
				log.output = previousOutput;
				chalk.level = previousLevel;
			}
		},
		preferLocal: true,
		quiet: context.logLevel === "silent",
		stdio: "inherit",
		verbose: context.logLevel === "debug",
		...optionsRest
	};
}
function autoColor(env, stream) {
	if (env["NO_COLOR"] != null && env["NO_COLOR"] !== "") return false;
	const force = env["FORCE_COLOR"];
	return force == null ? stream.isTTY === true : force !== "0" && force !== "false";
}
//#endregion
//#region src/zx/zx.ts
/**
* Creates a zx `$` preset configured from managed-script context and environment variables.
*
* @param options
*/
function zx(options = {}) {
	const env = options.env == null ? process.env : {
		...process.env,
		...options.env
	};
	return $$1(defaultZXOptions({
		env,
		...options.cwd == null ? {} : { cwd: options.cwd },
		...options.logLevel == null ? {} : { logLevel: options.logLevel },
		...options.stderr == null ? {} : { stderr: options.stderr },
		...options.stdout == null ? {} : { stdout: options.stdout }
	}));
}
//#endregion
//#region src/zx.ts
/**
* Default `$` preset for scripts launched by managed-script.
* Reads `MANAGED_SCRIPT_*` from the process environment at import time.
*
* @example
* ```ts
* import { $ } from '@w5s/managed-script/zx';
* await $`echo Hello, world!`;
* ```
*/
const $ = zx();
//#endregion
export { $, zx };

//# sourceMappingURL=zx.js.map