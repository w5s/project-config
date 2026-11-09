import { t as detectAgent } from "../detectAgent-ZFEmlUNP.js";
import { $ } from "@w5s/managed-script/zx";
// src/internal/npmRunAll.ts
function npmRunAll(shell) {
	return async (scriptPrefix) => {
		const agent = await detectAgent();
		switch (agent) {
			case "bun":
			case "npm":
			case "yarn": throw new Error(`Unsupported package manager: ${agent}`);
			case "pnpm":
				await shell`pnpm run "/^${scriptPrefix}:.*/"`;
				break;
			default: throw new Error(`Unsupported package manager: ${agent}`);
		}
	};
}
// src/script/prepare.ts
async function main() {
	await npmRunAll($)("prepare");
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=prepare.js.map