import { $ } from "@w5s/managed-script/zx";
import { existsSync } from "node:fs";
import { t as isGit } from "../../isGit-B965siHE.js";
// src/script/prepare/gitmodules.ts
async function main() {
	if (!(isGit && existsSync(".gitmodules"))) return;
	await $`git submodule sync --recursive`;
	await $`git submodule update --init --recursive`;
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=gitmodules.js.map