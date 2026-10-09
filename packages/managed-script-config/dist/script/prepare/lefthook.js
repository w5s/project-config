import { t as isGit } from "../../isGit-BoDdQAKZ.js";
import { $ } from "@w5s/managed-script/zx";
//#region src/internal/isCI.ts
const isCI = !!process.env["CI"];
//#endregion
//#region src/script/prepare/lefthook.ts
async function main() {
	if (!isCI && isGit) await $`pnpm exec lefthook install`;
}
if (import.meta.main) await main();
//#endregion
export { main };

//# sourceMappingURL=lefthook.js.map