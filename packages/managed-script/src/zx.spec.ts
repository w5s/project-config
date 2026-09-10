import { mkdtemp, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { PassThrough } from 'node:stream';
import { describe, expect, it } from 'vitest';

import { ManagedScriptEnv } from './ManagedScriptEnv.js';
import { $, create$ } from './zx.js';

async function captureCwd(shell: ReturnType<typeof create$>): Promise<string> {
  const output = await shell({ quiet: true, stdio: 'pipe' })`${process.execPath} -e ${'process.stdout.write(process.cwd())'}`;
  expect(output.ok).toBe(true);
  return output.stdout;
}

function createStream() {
  const stream = new PassThrough();
  const chunks: Array<string> = [];
  stream.on('data', (chunk: Buffer) => chunks.push(chunk.toString()));
  return { chunks, stream };
}

describe(create$, () => {
  it('uses the explicit cwd option', async () => {
    const cwd = await realpath(await mkdtemp(path.join(tmpdir(), 'managed-script-zx-')));
    const shell = create$({ cwd, logLevel: 'silent' });

    await expect(captureCwd(shell)).resolves.toBe(cwd);
  });

  it('falls back to MANAGED_SCRIPT_CWD', async () => {
    const cwd = await realpath(await mkdtemp(path.join(tmpdir(), 'managed-script-zx-')));
    const shell = create$({
      env: { [ManagedScriptEnv.Cwd]: cwd },
      logLevel: 'silent',
    });

    await expect(captureCwd(shell)).resolves.toBe(cwd);
  });

  it('forwards merged environment variables to the child process', async () => {
    const shell = create$({
      env: { ZX_TEST_MARKER: 'from-create' },
      logLevel: 'silent',
    });
    const output = await shell({ quiet: true, stdio: 'pipe' })`${process.execPath} -e ${'process.stdout.write(process.env.ZX_TEST_MARKER ?? "")'}`;

    expect(output.stdout).toBe('from-create');
  });

  it('logs the resolved command at info level', async () => {
    const { chunks, stream } = createStream();
    const shell = create$({ logLevel: 'info', stderr: stream });

    await shell`${process.execPath} -e ${'process.exit(0)'}`;

    expect(chunks.join('')).toContain(process.execPath);
  });

  it('does not log commands at the silent log level', async () => {
    const { chunks, stream } = createStream();
    const shell = create$({ logLevel: 'silent', stderr: stream });

    await shell`${process.execPath} -e ${'process.exit(0)'}`;

    expect(chunks).toEqual([]);
  });

  it('derives silent quiet mode from MANAGED_SCRIPT_LOGLEVEL', async () => {
    const { chunks, stream } = createStream();
    const shell = create$({
      env: { [ManagedScriptEnv.LogLevel]: 'silent' },
      stderr: stream,
    });

    await shell`${process.execPath} -e ${'process.exit(0)'}`;

    expect(chunks).toEqual([]);
  });
});

describe('$', () => {
  it('exports a callable zx preset', () => {
    expect(typeof $).toBe('function');
  });
});
