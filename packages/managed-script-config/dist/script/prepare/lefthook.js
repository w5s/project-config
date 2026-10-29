import { t as isGit } from "../../isGit-DsCKZw03.js";
import { $, isCI } from "@w5s/managed-script/zx";
// src/script/prepare/lefthook.ts
async function main() {
	if (!isCI() && isGit) await $`pnpm exec lefthook install`;
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=lefthook.js.map