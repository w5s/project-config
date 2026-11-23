import { $, isCI } from "@w5s/managed-script/zx";
import { t as isGit } from "../../isGit-B965siHE.js";
import { t as npmExec } from "../../npmExec-B2YFcpLE.js";
// src/script/prepare/lefthook.ts
async function main() {
	if (!isCI() && isGit) await npmExec($)("lefthook", ["install"]);
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=lefthook.js.map