import type { Buffer } from 'node:buffer';

import { Cli } from 'clipanion';
import { Writable } from 'node:stream';
import { beforeEach, describe, expect, it, vi } from 'vitest';

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
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('passes the positional name to runScript and returns its exit code', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build'], {
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

  it.each([
    ['--color', 'always'],
    ['--no-color', 'never'],
    ['--color=auto', 'auto'],
    ['--color=always', 'always'],
    ['--color=never', 'never'],
  ])('normalizes %s to color mode %s', async (option, color) => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', option], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ color }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('rejects an unrecognized --color value', async () => {
    const chunks: Array<string> = [];
    const stderr = new Writable({
      write(chunk: Buffer, _encoding, callback) {
        chunks.push(chunk.toString());
        callback();
      },
    });

    const exitCode = await createCli().run(['build', '--color=nope'], {
      stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(exitCode).toBe(1);
    expect(chunks.join('')).toContain('Invalid --color value "nope"');
    expect(ManagedScript.runScript).not.toHaveBeenCalled();
  });

  it('passes arguments after -- to runScript', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '--', '--watch', 'value'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        parameters: expect.objectContaining({ scriptArgs: ['--watch', 'value'], scriptName: 'build' }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('passes the --dry-run option to runScript and returns its exit code', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '--dry-run'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ dryRun: true }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('passes the -n option as an alias for --dry-run', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '-n'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ dryRun: true }),
        }),
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

  it('passes the --loglevel option to runScript', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '--loglevel', 'debug'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ logLevel: 'debug' }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('rejects an unrecognized --loglevel value', async () => {
    const chunks: Array<string> = [];
    const stderr = new Writable({
      write(chunk: Buffer, _encoding, callback) {
        chunks.push(chunk.toString());
        callback();
      },
    });

    const exitCode = await createCli().run(['build', '--loglevel', 'nope'], {
      stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(exitCode).toBe(1);
    expect(chunks.join('')).toContain('Invalid --loglevel value "nope"');
    expect(ManagedScript.runScript).not.toHaveBeenCalled();
  });

  it('passes -s as an alias for --loglevel silent', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '-s'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ logLevel: 'silent' }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('passes -v as an alias for --loglevel debug', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '-v'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ logLevel: 'debug' }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });

  it('prefers --silent over --verbose when both are passed', async () => {
    vi.mocked(ManagedScript.runScript).mockResolvedValue(0);

    const exitCode = await createCli().run(['build', '-s', '-v'], {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });

    expect(ManagedScript.runScript).toHaveBeenCalledWith(
      expect.objectContaining({
        context: expect.objectContaining({
          cli: expect.objectContaining({ logLevel: 'silent' }),
        }),
      }),
    );
    expect(exitCode).toBe(0);
  });
});
