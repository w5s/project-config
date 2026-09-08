import { Writable } from 'node:stream';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ConfigLoader } from '../internal/ConfigLoader.js';
import { Executor } from '../internal/Executor.js';
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
        MANAGED_SCRIPT_LOGLEVEL: 'info',
        MANAGED_SCRIPT_NAME: 'build',
      },
    });
    expect(exitCode).toBe(0);
  });

  it('prints the resolved command and skips execution when dryRun is set', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: '/cwd/config/managed-script.config',
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });
    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => undefined);

    const exitCode = await runScript({
      context: { cwd: '/cwd', dryRun: true, env: {} },
      parameters: { scriptName: 'build' },
    });

    expect(logSpy).toHaveBeenCalledWith('my-command');
    expect(Executor.run).not.toHaveBeenCalled();
    expect(exitCode).toBe(0);

    logSpy.mockRestore();
  });

  it('forwards the resolved log level to the executed script', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: '/cwd/config/managed-script.config',
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });
    vi.mocked(Executor.run).mockResolvedValue(0);

    await runScript({
      context: { cwd: '/cwd', env: {}, logLevel: 'debug' },
      parameters: { scriptName: 'build' },
    });

    expect(Executor.run).toHaveBeenCalledWith('my-command', expect.objectContaining({
      env: expect.objectContaining({ MANAGED_SCRIPT_LOGLEVEL: 'debug' }),
    }));
  });

  it('writes info and debug messages to the provided stderr stream', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: '/cwd/config/managed-script.config',
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });
    vi.mocked(Executor.run).mockResolvedValue(0);
    const chunks: Array<string> = [];
    const stderr = new Writable({
      write(chunk: Buffer, _encoding, callback) {
        chunks.push(chunk.toString());
        callback();
      },
    });

    await runScript({
      context: { cwd: '/cwd', env: {}, logLevel: 'debug', stderr },
      parameters: { scriptName: 'build' },
    });

    const output = chunks.join('');
    expect(output).toContain('Running script "build": my-command');
    expect(output).toContain('Resolved configuration from /cwd/config/managed-script.config');
  });

  it('writes nothing to stderr at the silent log level', async () => {
    vi.mocked(ConfigLoader.load).mockResolvedValue({
      config: { scripts: { build: 'my-command' } },
      configFile: '/cwd/config/managed-script.config',
      layers: [{ config: { scripts: { build: 'my-command' } } }],
    });
    vi.mocked(Executor.run).mockResolvedValue(0);
    const chunks: Array<string> = [];
    const stderr = new Writable({
      write(chunk: Buffer, _encoding, callback) {
        chunks.push(chunk.toString());
        callback();
      },
    });

    await runScript({
      context: { cwd: '/cwd', env: {}, logLevel: 'silent', stderr },
      parameters: { scriptName: 'build' },
    });

    expect(chunks).toEqual([]);
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
