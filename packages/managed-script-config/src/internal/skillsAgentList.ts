import path from 'node:path';

import { pathExists } from './pathExists.js';

/**
 * Agents supported by `skills experimental_sync` and the project folder where each one reads its skills.
 *
 * - `claude-code` reads `.claude/skills`
 */
const agentSkillsDirectory: ReadonlyArray<readonly [agent: string, directory: string]> = [
  ['claude-code', path.join('.claude', 'skills')],
];

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
export async function skillsAgentList(
  cwd: string = process.cwd(),
  exists: (path: string) => Promise<boolean> = pathExists,
): Promise<Array<string>> {
  const found = await Promise.all(
    agentSkillsDirectory.map(async ([agent, directory]) => ((await exists(path.join(cwd, directory))) ? agent : undefined)),
  );

  return found.filter((agent) => agent !== undefined);
}
