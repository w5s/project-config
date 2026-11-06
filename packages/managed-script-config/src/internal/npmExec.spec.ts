import { $ } from '@w5s/managed-script/zx';
import { resolveCommand } from 'package-manager-detector';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { detectAgent } from './detectAgent.js';
import { npmExec } from './npmExec.js';

vi.mock('@w5s/managed-script/zx', () => ({
  $: vi.fn(async () => undefined),
}));
vi.mock('./detectAgent.js', () => ({
  detectAgent: vi.fn(),
}));
vi.mock('package-manager-detector', async (importOriginal) => {
  const actual = await importOriginal<typeof import('package-manager-detector')>();
  return { ...actual, resolveCommand: vi.fn(actual.resolveCommand) };
});

describe(npmExec, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('runs the "exec" command resolved for the detected agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');

    await npmExec($)('lefthook', ['install']);

    expect($).toHaveBeenCalledWith(expect.anything(), 'pnpm', ['exec', 'lefthook', 'install']);
  });

  it('resolves the command differently per agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('yarn');

    await npmExec($)('lefthook', ['install']);

    expect($).toHaveBeenCalledWith(expect.anything(), 'yarn', ['exec', 'lefthook', '--', 'install']);
  });

  it('forwards extra arguments', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');

    await npmExec($)('lefthook', []);

    expect($).toHaveBeenCalledWith(expect.anything(), 'pnpm', ['exec', 'lefthook']);
  });

  it('runs the resolved command using the provided shell', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');
    const customShell = vi.fn(async () => undefined);

    // @ts-expect-error minimal shell stub for testing purposes
    await npmExec(customShell)('lefthook', ['install']);

    expect(customShell).toHaveBeenCalledWith(expect.anything(), 'pnpm', ['exec', 'lefthook', 'install']);
    expect($).not.toHaveBeenCalled();
  });

  it('throws when the "exec" command cannot be resolved for the detected agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');
    vi.mocked(resolveCommand).mockReturnValueOnce(null);

    await expect(npmExec($)('lefthook', [])).rejects.toThrow(/Could not resolve "exec" command/);
    expect($).not.toHaveBeenCalled();
  });
});
