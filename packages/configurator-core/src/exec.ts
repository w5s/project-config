import { spawn, spawnSync } from 'node:child_process';

export interface ExecOptions {
  /**
   * Current working directory
   */
  cwd?: string;

  /**
   * Stdio options
   */
  stdio?: 'ignore' | 'inherit' | 'pipe';
}

/**
 * Runs a command in a shell and returns a promise that resolves with an object
 * containing the stdout and stderr strings.
 *
 * @param command The command to run
 * @param args The arguments to pass to the command
 * @param options
 */
export async function exec(
  command: string,
  args: ReadonlyArray<string>,
  options?: ExecOptions,
): Promise<{ stderr: string; stdout: string }> {
  return new Promise((resolve, reject) => {
    const encoding = 'utf8';
    const child = spawn(command, args, { ...options });
    let stdout = '';
    let stderr = '';

    // Capture the stdout and stderr streams
    if (child.stdout != null) {
      child.stdout.on('data', (data) => {
        stdout += data.toString(encoding);
      });
    }
    if (child.stderr != null) {
      child.stderr.on('data', (data) => {
        stderr += data.toString(encoding);
      });
    }
    // Handle process exit
    child.on('close', (_code) => {
      resolve({ stderr, stdout });
    });

    // Handle errors
    child.on('error', reject);
  });
}

/**
 * Runs a command in a shell and returns a promise that resolves with an object
 * containing the stdout and stderr strings.
 *
 * @param command The command to run
 * @param args The arguments to pass to the command
 * @param options
 * @returns A promise that resolves with an object like `{ stdout: string, stderr: string }`
 */
export function execSync(
  command: string,
  args: ReadonlyArray<string>,
  options?: ExecOptions,
): { stderr: string; stdout: string } {
  const result = spawnSync(command, args, { ...options });
  const encoding = 'utf8';

  return { stderr: result.stderr.toString(encoding), stdout: result.stdout.toString(encoding) };
}
