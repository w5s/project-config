import { $ } from '@w5s/managed-script/zx';

import { isCI } from '../../internal/isCI.js';
import { isGit } from '../../internal/isGit.js';

export async function main() {
  if (!isCI && isGit) {
    await $`pnpm exec lefthook install`;
  }
}

if (import.meta.main) await main();
