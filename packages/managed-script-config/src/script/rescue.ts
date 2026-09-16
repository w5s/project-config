import { $ } from '@w5s/managed-script/zx';

/* cspell:ignore nothrow */
const $noThrow = $({ nothrow: true });

await $noThrow`git clean -fdx`;
await $noThrow`pnpm install`;
