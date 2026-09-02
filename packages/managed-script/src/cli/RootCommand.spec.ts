import { Cli } from 'clipanion';
import { Writable } from 'node:stream';
import { describe, expect, it, vi } from 'vitest';

import { ManagedScript } from '../ManagedScript.js';
import { RootCommand } from './RootCommand.js';

vi.mock('../ManagedScript.js', () => ({
  ManagedScript: {
    runScript: vi.fn(),
  },
}));

function createCli() {
  const cli = new Cli({ binaryLabel: 'test', binaryName: 'managed-script', binaryVersion: '0.0.0' });
  cli.register(RootCommand);
  return cli;
}

describe(RootCommand, () => {
  it('passes the --name option to runScript and returns its exit code', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['--name', 'build'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.any(Object),
        }),
        parameters: expect.objectContaining({ scriptName: 'build' }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('writes the error message to stderr and returns 1 on failure', async () => {
    vi.mocked(ManagedScript.runScript).mockRejectedValue(new Error('boom'));
    const chunks: Array<string> = [];
    const stderr = new Writable({
      write(chunk: Buffer, _encoding, callback) {
        chunks.push(chunk.toString());
        callback();
      },
    });

    const exitCode = await createCli().run([], {
      stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(exitCode).toBe(1);
    expect(chunks.join('')).toContain('boom');
  });
});
