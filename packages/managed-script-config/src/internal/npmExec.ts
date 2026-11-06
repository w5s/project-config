import type { ZXShell } from '@w5s/managed-script/zx';

import { detectAgent } from './detectAgent.js';
import { npmCommandOrThrow } from './npmCommandOrThrow.js';

/**
 * Runs a locally installed binary using the detected package manager "exec" command
 * (e.g. `pnpm exec`, `npm exec` / `npx`, `yarn exec`, `bun x`...), in a portable way.
 *
 * @param shell zx shell used to run the resolved command, e.g. the shared `$` from
 * `@w5s/managed-script/zx`, or a preset (e.g. `$({ nothrow: true })`) to customize error handling.
 * @returns a function that runs the given `command` (and its `args`) via the resolved
 * "exec" invocation for the detected package manager.
 * @example
 * ```ts
 * import { $ } from '@w5s/managed-script/zx';
 * import { npmExec } from '../internal/npmExec.js';
 * await npmExec($)('lefthook', ['install']);
 * ```
 */
export function npmExec(shell: ZXShell) {
  return async (command: string, args: ReadonlyArray<string>) => {
    const agent = await detectAgent();
    const resolved = npmCommandOrThrow(agent, 'execute-local', [command, ...args]);

    return shell`${resolved.command} ${resolved.args}`;
  };
}
