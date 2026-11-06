import { t as isGit } from "../isGit-DsCKZw03.js";
import { t as detectAgent } from "../detectAgent-ZFEmlUNP.js";
import { $ } from "@w5s/managed-script/zx";
import { resolveCommand } from "package-manager-detector";
// src/internal/npmInstall.ts
/**
* Installs the project dependencies using the detected package manager's "install" command
* (e.g. `pnpm install`, `npm install`, `yarn install`, `bun install`...), in a portable way.
*
* @param shell zx shell used to run the resolved command, e.g. the shared `$` from
* `@w5s/managed-script/zx`, or a preset (e.g. `$({ nothrow: true })`) to customize error handling.
* @returns a function that runs the resolved "install" invocation (with extra `args`)
* for the detected package manager.
* @example
* ```ts
* import { $ } from '@w5s/managed-script/zx';
* import { npmInstall } from '../internal/npmInstall.js';
* await npmInstall($)([]);
* ```
*/
function npmInstall(shell) {
	return async (args) => {
		const agent = await detectAgent();
		const resolved = resolveCommand(agent, "install", [...args]);
		if (resolved == null) throw new Error(`Could not resolve "install" command for package manager "${agent}"`);
		await shell`${resolved.command} ${resolved.args}`;
	};
}
// src/script/rescue.ts
async function main() {
	if (isGit) await $({ nothrow: true })`git clean -fdx`;
	await npmInstall($({ nothrow: true }))([]);
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=rescue.js.map