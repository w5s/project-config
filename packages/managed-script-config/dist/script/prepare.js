import { $ } from "@w5s/managed-script/zx";
// src/internal/npmRunAll.ts
async function npmRunAll(scriptPrefix) {
	await $`pnpm run "/^${scriptPrefix}:.*/"`;
}
// src/script/prepare.ts
async function main() {
	await npmRunAll("prepare");
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=prepare.js.map