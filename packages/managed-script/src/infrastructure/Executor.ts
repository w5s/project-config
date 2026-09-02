import { spawn } from 'node:child_process';

export interface ExecutorRunOptions {
  readonly cwd?: string | undefined;
  readonly env?: NodeJS.ProcessEnv | undefined;
}

/**
 * Executes a command via the system shell, inheriting stdio and forwarding its exit code.
 */
export const Executor = {
  async run(command: string, options: ExecutorRunOptions = {}): Promise<number> {
    return new Promise((resolve, reject) => {
      const child = spawn(command, {
        cwd: options.cwd,
        env: options.env == null ? process.env : { ...process.env, ...options.env },
        shell: true,
        stdio: 'inherit',
      });

      child.on('error', reject);
      child.on('close', (code, signal) => {
        resolve(code ?? (signal == null ? 1 : 128));
      });
    });
  },
};
