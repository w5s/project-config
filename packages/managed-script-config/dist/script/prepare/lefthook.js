import { t as isGit } from "../../isGit-DsCKZw03.js";
import { t as detectAgent } from "../../detectAgent-ZFEmlUNP.js";
import { $, isCI } from "@w5s/managed-script/zx";
import { resolveCommand } from "package-manager-detector";
// src/internal/npmExec.ts
/**
* Runs a locally installed binary using the detected package manager "exec" command
* (e.g. `pnpm exec`, `npm exec` / `npx`, `yarn exec`, `bun x`...), in a portable way.
*
* @param shell zx shell used to run the resolved command, e.g. the shared `$` from
* `@w5s/managed-script/zx`, or a preset (e.g. `$({ nothrow: true })`) to customize error handling.
* @returns a function that runs the given `command` (and its `args`) via the resolved
* "exec" invocation for the detected package manager.
* @example
* ```ts
* import { $ } from '@w5s/managed-script/zx';
* import { npmExec } from '../internal/npmExec.js';
* await npmExec($)('lefthook', ['install']);
* ```
*/
function npmExec(shell) {
	return async (command, args) => {
		const agent = await detectAgent();
		const resolved = resolveCommand(agent, "execute-local", [command, ...args]);
		if (resolved == null) throw new Error(`Could not resolve "exec" command for package manager "${agent}"`);
		await shell`${resolved.command} ${resolved.args}`;
	};
}
// src/script/prepare/lefthook.ts
async function main() {
	if (!isCI() && isGit) await npmExec($)("lefthook", ["install"]);
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=lefthook.js.map