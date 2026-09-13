import { spawn, spawnSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface ShellRunOptions {
  readonly cwd?: string;
  readonly env?: NodeJS.ProcessEnv;
}

export interface ShellRunResult {
  readonly status: null | number;
  readonly stderr: string;
  readonly stdout: string;
}

export const packageRoot = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);

export const envShPath = path.join(packageRoot, 'script/env.sh');

export const restrictedPathEnv: NodeJS.ProcessEnv = {
  ...process.env,
  PATH: '/usr/bin:/bin',
};

export function runShell(args: Array<string>, options: ShellRunOptions = {}) {
  return new Promise<ShellRunResult>((resolve, reject) => {
    const child = spawn('bash', args, {
      cwd: options.cwd,
      env: options.env ?? process.env,
    });

    let stdout = '';
    let stderr = '';

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', (chunk: string) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk: string) => {
      stderr += chunk;
    });
    child.on('error', reject);
    child.on('close', (status) => {
      resolve({
        status,
        stderr,
        stdout,
      });
    });
  });
}

export function runShellSync(
  args: Array<string>,
  options: ShellRunOptions = {},
) {
  const result = spawnSync('bash', args, {
    cwd: options.cwd,
    encoding: 'utf8',
    env: options.env ?? process.env,
  });

  return {
    status: result.status,
    stderr: result.stderr ?? '',
    stdout: result.stdout ?? '',
  } satisfies ShellRunResult;
}

export function sourceEnvAndRun(bash: string, options: ShellRunOptions = {}) {
  return runShell(['-c', `source "${envShPath}" && ${bash}`], options);
}

export function sourceEnvAndRunSync(
  bash: string,
  options: ShellRunOptions = {},
) {
  return runShellSync(['-c', `source "${envShPath}" && ${bash}`], options);
}

export async function withTempDir<T>(fn: (tempDir: string) => Promise<T> | T) {
  const tempDir = await mkdtemp(path.join(tmpdir(), 'lefthook-config-'));

  try {
    return await fn(tempDir);
  } finally {
    await rm(tempDir, { force: true, recursive: true });
  }
}

export function withTempDirSync<T>(fn: (tempDir: string) => T) {
  const tempDir = mkdtempSync(path.join(tmpdir(), 'lefthook-config-'));

  try {
    return fn(tempDir);
  } finally {
    rmSync(tempDir, { force: true, recursive: true });
  }
}
