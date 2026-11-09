import { $, isCI } from '@w5s/managed-script/zx';
import { existsSync } from 'node:fs';

import { npmExec } from '../../internal/npmExec.js';

export async function main() {
  const isUsingSkills = existsSync('skills-lock.json');
  if (!isCI() && isUsingSkills) {
    await npmExec($)('skills', ['experimental_sync']);
  }
}

if (import.meta.main) await main();
