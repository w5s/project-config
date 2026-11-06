import type { ZXShell } from '@w5s/managed-script/zx';

import { detectAgent } from './detectAgent.js';
import { npmCommandOrThrow } from './npmCommandOrThrow.js';

/**
 * Installs the project dependencies using the detected package manager's "install" command
 * (e.g. `pnpm install`, `npm install`, `yarn install`, `bun install`...), in a portable way.
 *
 * @param shell zx shell used to run the resolved command, e.g. the shared `$` from
 * `@w5s/managed-script/zx`, or a preset (e.g. `$({ nothrow: true })`) to customize error handling.
 * @returns a function that runs the resolved "install" invocation (with extra `args`)
 * for the detected package manager.
 * @example
 * ```ts
 * import { $ } from '@w5s/managed-script/zx';
 * import { npmInstall } from '../internal/npmInstall.js';
 * await npmInstall($)([]);
 * ```
 */
export function npmInstall(shell: ZXShell) {
  return async (args: ReadonlyArray<string>) => {
    const agent = await detectAgent();
    const resolved = npmCommandOrThrow(agent, 'install', [...args]);

    return shell`${resolved.command} ${resolved.args}`;
  };
}
