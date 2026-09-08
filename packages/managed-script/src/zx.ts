import type { ZXShell } from './zx/ZXShell.js';

import { zx } from './zx/zx.js';

export * from './zx/zx.js';
export type * from './zx/ZXOptions.js';
export type * from './zx/ZXShell.js';

/**
 * Default `$` preset for scripts launched by managed-script.
 * Reads `MANAGED_SCRIPT_*` from the process environment at import time.
 */
export const $: ZXShell = zx();
