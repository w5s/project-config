import { $ } from '@w5s/managed-script/zx';
import { existsSync } from 'node:fs';

import { isGit } from '../../internal/isGit.js';

export async function main() {
  if (!(isGit && existsSync('.gitmodules'))) {
    return;
  }

  await $`git submodule sync --recursive`;
  await $`git submodule update --init --recursive`;
}

if (import.meta.main) await main();
