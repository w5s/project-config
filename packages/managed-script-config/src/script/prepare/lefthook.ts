import { $, isCI } from '@w5s/managed-script/zx';

import { isGit } from '../../internal/isGit.js';

export async function main() {
  if (!isCI() && isGit) {
    await $`pnpm exec lefthook install`;
  }
}

if (import.meta.main) await main();
