import { $, isCI } from '@w5s/managed-script/zx';

import { isGit } from '../../internal/isGit.js';
import { npmExec } from '../../internal/npmExec.js';

export async function main() {
  if (!isCI() && isGit) {
    await npmExec($)('lefthook', ['install']);
  }
}

if (import.meta.main) await main();
