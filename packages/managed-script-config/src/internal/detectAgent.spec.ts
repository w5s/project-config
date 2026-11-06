import { detect, getUserAgent } from 'package-manager-detector';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { detectAgent } from './detectAgent.js';

vi.mock('package-manager-detector', async (importOriginal) => {
  const actual = await importOriginal<typeof import('package-manager-detector')>();
  return {
    ...actual,
    detect: vi.fn(),
    getUserAgent: vi.fn(),
  };
});

describe(detectAgent, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('uses the user agent environment variable first, without checking the project', async () => {
    vi.mocked(getUserAgent).mockReturnValue('yarn');

    await expect(detectAgent()).resolves.toBe('yarn');

    expect(detect).not.toHaveBeenCalled();
  });

  it('falls back to the project-detected agent when there is no user agent', async () => {
    vi.mocked(getUserAgent).mockReturnValue(null);
    vi.mocked(detect).mockResolvedValue({ agent: 'pnpm', name: 'pnpm' });

    await expect(detectAgent()).resolves.toBe('pnpm');
  });

  it('falls back to npm when neither the user agent nor detection succeed', async () => {
    vi.mocked(getUserAgent).mockReturnValue(null);
    vi.mocked(detect).mockResolvedValue(null);

    await expect(detectAgent()).resolves.toBe('npm');
  });
});
