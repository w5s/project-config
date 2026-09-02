import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ConfigLoader } from '../infrastructure/ConfigLoader.js';
import { Executor } from '../infrastructure/Executor.js';
import { runScript } from './runScript.js';

vi.mock('../infrastructure/ConfigLoader.js', () => ({
  ConfigLoader: { load: vi.fn() },
}));
vi.mock('../infrastructure/Executor.js', () => ({
  Executor: { run: vi.fn() },
}));

describe(runScript, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('executes the resolved script and returns its exit code', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: '/cwd/config/managed-script.config',
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });
    vi.mocked(Executor.run).mockResolvedValue(0);

    const exitCode = await runScript({
      context: { cwd: '/cwd', env: {} },
      parameters: { scriptName: 'build' },
    });

    expect(Executor.run).toHaveBeenCalledWith('my-command', {
      cwd: '/cwd',
      env: {
        MANAGED_SCRIPT_CONFIG_DIR: '/cwd/config',
        MANAGED_SCRIPT_CONFIG_FILE: '/cwd/config/managed-script.config',
        MANAGED_SCRIPT_NAME: 'build',
      },
    });
    expect(exitCode).toBe(0);
  });

  it('throws when the script name cannot be resolved', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: {} },
      configFile: undefined,
      layers: [{ config: { scripts: {} } }],
    });

    await expect(runScript({
      context: { cwd: '/cwd', env: {} },
      parameters: { scriptName: undefined },
    })).rejects.toThrow(/Unable to resolve/);
  });

  it('throws when the script name is not found in the configuration', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: undefined,
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });

    await expect(runScript({
      context: { cwd: '/cwd', env: {} },
      parameters: { scriptName: 'test' },
    })).rejects.toThrow(
      /No script named "test".*Available scripts: build/,
    );
  });
});
