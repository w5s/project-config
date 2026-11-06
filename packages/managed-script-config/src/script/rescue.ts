import { $ } from '@w5s/managed-script/zx';

import { isGit } from '../internal/isGit.js';
import { npmInstall } from '../internal/npmInstall.js';

/* cspell:ignore nothrow */

export async function main() {
  if (isGit) {
    await $({ nothrow: true })`git clean -fdx`;
  }
  await npmInstall($({ nothrow: true }))([]);
}

if (import.meta.main) await main();
