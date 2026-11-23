import { $, isCI } from "@w5s/managed-script/zx";
import { existsSync } from "node:fs";
import { t as npmExec } from "../../npmExec-B2YFcpLE.js";
import path from "node:path";
import { access } from "node:fs/promises";
// src/internal/pathExists.ts
/**
* Tells asynchronously if a file or a directory exists.
*
* @param target path to check
* @returns `true` if `target` exists and is accessible, `false` otherwise
* @example
* ```ts
* await pathExists('.agents/skills'); // true
* await pathExists('missing'); // false
* ```
*/
async function pathExists(target) {
	try {
		await access(target);
		return true;
	} catch {
		return false;
	}
}
// src/internal/skillsAgentList.ts
/**
* Agents supported by `skills experimental_sync` and the project folder where each one reads its skills.
*
* - `claude-code` reads `.claude/skills`
*/
const agentSkillsDirectory = [["claude-code", path.join(".claude", "skills")]];
/**
* Returns the agents (as named by the `skills` CLI) whose project skills folder already exists in `cwd`.
* Folders are checked in parallel, the order of the returned agents is preserved.
*
* `skills experimental_sync` takes decisions by itself (detecting installed agents, creating missing folders).
* Passing only the agents returned here guarantees that skills are installed in existing folders only.
*
* @param cwd project root directory
* @param exists async predicate telling if a path exists (defaults to {@link pathExists})
* @returns the list of agents to pass to `skills experimental_sync --agent`
* @example
* ```ts
* // .claude/skills exists
* await skillsAgentList(); // ['claude-code']
* ```
*/
async function skillsAgentList(cwd = process.cwd(), exists = pathExists) {
	return (await Promise.all(agentSkillsDirectory.map(async ([agent, directory]) => await exists(path.join(cwd, directory)) ? agent : void 0))).filter((agent) => agent !== void 0);
}
// src/script/prepare/skills.ts
async function main() {
	const isUsingSkills = existsSync("skills-lock.json");
	if (isCI() || !isUsingSkills) return;
	const agentList = ["universal", ...await skillsAgentList()];
	await npmExec($)("skills", [
		"experimental_sync",
		"--yes",
		"--agent",
		...agentList
	]);
}
if (import.meta.main) await main();
export { main };

//# sourceMappingURL=skills.js.map