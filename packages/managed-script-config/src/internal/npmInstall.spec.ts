import { $ } from '@w5s/managed-script/zx';
import { resolveCommand } from 'package-manager-detector';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { detectAgent } from './detectAgent.js';
import { npmInstall } from './npmInstall.js';

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

describe(npmInstall, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('runs the "install" command resolved for the detected agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');

    await npmInstall($)([]);

    expect($).toHaveBeenCalledWith(expect.anything(), 'pnpm', ['i']);
  });

  it('resolves the command differently per agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('npm');

    await npmInstall($)([]);

    expect($).toHaveBeenCalledWith(expect.anything(), 'npm', ['i']);
  });

  it('forwards extra arguments', async () => {
    vi.mocked(detectAgent).mockResolvedValue('yarn');

    await npmInstall($)(['--frozen-lockfile']);

    expect($).toHaveBeenCalledWith(expect.anything(), 'yarn', ['install', '--frozen-lockfile']);
  });

  it('runs the resolved command using the provided shell', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');
    const customShell = vi.fn(async () => undefined);

    // @ts-expect-error minimal shell stub for testing purposes
    await npmInstall(customShell)([]);

    expect(customShell).toHaveBeenCalledWith(expect.anything(), 'pnpm', ['i']);
    expect($).not.toHaveBeenCalled();
  });

  it('throws when the "install" command cannot be resolved for the detected agent', async () => {
    vi.mocked(detectAgent).mockResolvedValue('pnpm');
    vi.mocked(resolveCommand).mockReturnValueOnce(null);

    await expect(npmInstall($)([])).rejects.toThrow(/Could not resolve "install" command/);
    expect($).not.toHaveBeenCalled();
  });
});
