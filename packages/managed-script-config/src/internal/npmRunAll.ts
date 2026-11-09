import type { ZXShell } from '@w5s/managed-script/zx';

import npmRunAllTasks from 'npm-run-all2';

import { detectAgent } from './detectAgent.js';
import { npmCommandOrThrow } from './npmCommandOrThrow.js';

/**
 * Runs every script whose name matches `${scriptPrefix}:*`, in a portable way.
 *
 * `pnpm` natively supports running multiple scripts matching a regex
 * (`pnpm run "/^prefix:.*\/"`), which is used directly. Every other package manager (npm,
 * yarn, bun, ...) has no equivalent built-in feature, so the `npm-run-all2` Node API is used
 * instead to discover and run the matched scripts, via the detected package manager.
 *
 * @param shell zx shell used to run the resolved `pnpm` command. Unused for other package
 * managers, which run through the `npm-run-all2` Node API instead.
 * @returns a function that runs every script matching `${scriptPrefix}:*`.
 * @example
 * ```ts
 * import { $ } from '@w5s/managed-script/zx';
 * import { npmRunAll } from '../internal/npmRunAll.js';
 * await npmRunAll($)('prepare');
 * ```
 */
export function npmRunAll(shell: ZXShell) {
  return async (scriptPrefix: string): Promise<void> => {
    const agent = await detectAgent();
    switch (agent) {
      case 'pnpm':
        await shell`pnpm run "/^${scriptPrefix}:.*/"`;
        return;
      default:
        // Fallback to npm-run-all2 for other package managers (npm, yarn, bun, ...)
        const { command: npmPath } = npmCommandOrThrow(agent, 'agent', []);
        await npmRunAllTasks(`${scriptPrefix}:*`, {
          npmPath,
          parallel: true,
          printLabel: true,
          stderr: process.stderr,
          stdin: process.stdin,
          stdout: process.stdout,
        });
    }
  };
}
