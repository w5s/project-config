import { t as npmExec } from "../../npmExec-CsAKP49L.js";
import { $, isCI } from "@w5s/managed-script/zx";
import { existsSync } from "node:fs";
// src/script/prepare/skills.ts
async function main() {
	const isUsingSkills = existsSync("skills-lock.json");
	if (!isCI() && isUsingSkills) await npmExec($)("skills", ["experimental_sync"]);
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=skills.js.map