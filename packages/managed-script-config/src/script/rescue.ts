import { $ } from '@w5s/managed-script/zx';

import { isGit } from '../internal/isGit.js';

/* cspell:ignore nothrow */
const $noThrow = $({ nothrow: true });

export async function main() {
  if (isGit) {
    await $noThrow`git clean -fdx`;
  }
  await $noThrow`pnpm install`;
}

if (import.meta.main) await main();
