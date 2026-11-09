import type { ZXShell } from '@w5s/managed-script/zx';

import { detectAgent } from './detectAgent.js';

export function npmRunAll(shell: ZXShell) {
  return async (scriptPrefix: string): Promise<void> => {
    const agent = await detectAgent();
    switch (agent) {
      case 'bun':
      case 'npm':
      case 'yarn':
        throw new Error(`Unsupported package manager: ${agent}`);
      case 'pnpm':
        await shell`pnpm run "/^${scriptPrefix}:.*/"`;
        break;
      default:
        throw new Error(`Unsupported package manager: ${agent}`);
    }
  };
}
