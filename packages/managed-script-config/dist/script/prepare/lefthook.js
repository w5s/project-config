import { t as isGit } from "../../isGit-DsCKZw03.js";
import { $ } from "@w5s/managed-script/zx";
// src/internal/isCI.ts
const isCI = !!process.env["CI"];
// src/script/prepare/lefthook.ts
async function main() {
	if (!isCI && isGit) await $`pnpm exec lefthook install`;
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=lefthook.js.map