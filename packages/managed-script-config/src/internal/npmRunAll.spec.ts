import npmRunAllTasks from 'npm-run-all2';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { detectAgent } from './detectAgent.js';
import { npmRunAll } from './npmRunAll.js';

vi.mock('./detectAgent.js', () => ({
  detectAgent: vi.fn(),
}));
vi.mock('npm-run-all2', () => ({
  default: vi.fn(async () => null),
}));

describe(npmRunAll, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('runs the native pnpm regex command for the pnpm agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');
    const shell = vi.fn(async () => undefined);

    // @ts-expect-error minimal shell stub for testing purposes
    await npmRunAll(shell)('prepare');

    expect(shell).toHaveBeenCalledWith(expect.anything(), 'prepare');
    expect(npmRunAllTasks).not.toHaveBeenCalled();
  });

  it('falls back to npm-run-all2 for package managers without a native equivalent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('npm');
    const shell = vi.fn(async () => undefined);

    // @ts-expect-error minimal shell stub for testing purposes
    await npmRunAll(shell)('prepare');

    expect(npmRunAllTasks).toHaveBeenCalledWith(
      'prepare:*',
      expect.objectContaining({ npmPath: 'npm', parallel: true }),
    );
    expect(shell).not.toHaveBeenCalled();
  });

  it('resolves the "npmPath" option differently per agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('yarn');
    const shell = vi.fn(async () => undefined);

    // @ts-expect-error minimal shell stub for testing purposes
    await npmRunAll(shell)('prepare');

    expect(npmRunAllTasks).toHaveBeenCalledWith('prepare:*', expect.objectContaining({ npmPath: 'yarn' }));
  });

  it('routes pnpm-rush, pnpm@6 and yarn@berry through the npm-run-all2 fallback too', async () => {
    for (const agent of ['pnpm-rush', 'pnpm@6', 'yarn@berry'] as const) {
      vi.clearAllMocks();
      vi.mocked(detectAgent).mockResolvedValue(agent);
      const shell = vi.fn(async () => undefined);

      // @ts-expect-error minimal shell stub for testing purposes
      await npmRunAll(shell)('prepare');

      expect(npmRunAllTasks).toHaveBeenCalledOnce();
      expect(shell).not.toHaveBeenCalled();
    }
  });
});
