import { t as isGit } from "../isGit-DsCKZw03.js";
import { $ } from "@w5s/managed-script/zx";
// src/script/rescue.ts
const $noThrow = $({ nothrow: true });
async function main() {
	if (isGit) await $noThrow`git clean -fdx`;
	await $noThrow`pnpm install`;
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=rescue.js.map