import { $, isCI } from '@w5s/managed-script/zx';
import { existsSync } from 'node:fs';

import { npmExec } from '../../internal/npmExec.js';
import { skillsAgentList } from '../../internal/skillsAgentList.js';

export async function main() {
  const isUsingSkills = existsSync('skills-lock.json');
  if (isCI() || !isUsingSkills) {
    return;
  }

  // Always sync the generic .agents/skills directory; append only specifically detected agents.
  const agentList = ['universal', ...(await skillsAgentList())];
  await npmExec($)('skills', ['experimental_sync', '--yes', '--agent', ...agentList]);
}

if (import.meta.main) await main();
