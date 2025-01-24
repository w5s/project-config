import { spawn, spawnSync } from 'node:child_process';

export interface ExecOptions {
  /**
   * Current working directory
   */
  cwd?: string;
  /**
   * Stdio options
   */
  stdio?: 'inherit' | 'pipe' | 'ignore';
}

/**
 * Runs a command in a shell and returns a promise that resolves with an object
 * containing the stdout and stderr strings.
 *
 * @param command - The command to run
 * @param args - The arguments to pass to the command
 * @returns A promise that resolves with an object like `{ stdout: string, stderr: string }`
 */
export function execSync(
  command: string,
  args: ReadonlyArray<string>,
  options?: ExecOptions,
): { stdout: string; stderr: string } {
  const { stdout, stderr } = spawnSync(command, args, { cwd: process.cwd(), ...options });
  const encoding = 'utf8';
  return { stdout: stdout.toString(encoding), stderr: stderr.toString(encoding) };
}

/**
 * Runs a command in a shell and returns a promise that resolves with an object
 * containing the stdout and stderr strings.
 *
 * @param command - The command to run
 * @param args - The arguments to pass to the command
 * @returns A promise that resolves with an object containing the stdout and stderr strings
 */
export async function exec(
  command: string,
  args: ReadonlyArray<string>,
  options?: ExecOptions,
): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const encoding = 'utf8';
    const child = spawn(command, args, { cwd: process.cwd(), ...options });
    let stdout = '';
    let stderr = '';

    // Capture the stdout and stderr streams
    if (child.stdout != null) {
      child.stdout.on('data', (data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        stdout += data.toString(encoding);
      });
    }
    if (child.stderr != null) {
      child.stderr.on('data', (data) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        stderr += data.toString(encoding);
      });
    }
    // Handle process exit
    child.on('close', (_code) => {
      resolve({ stdout, stderr });
    });

    // Handle errors
    child.on('error', reject);
  });
}
