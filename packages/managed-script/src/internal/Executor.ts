import { spawn } from 'node:child_process';

export type ExecutorRequest = ExecutorTarget & {
  readonly cwd?: string | undefined;
  readonly env?: NodeJS.ProcessEnv | undefined;
};

export interface ExecutorRun {
  readonly args?: undefined;
  readonly run: string;
  readonly runner?: undefined;
}

export interface ExecutorRunner {
  readonly args?: ReadonlyArray<string> | undefined;
  readonly run?: undefined;
  readonly runner: string;
}

/**
 * Same shape as a lefthook job: either a shell command (`run`) or a program with arguments (`runner` + `args`).
 */
export type ExecutorTarget = ExecutorRun | ExecutorRunner;

/**
 * Runs a shell command (`run`), or a program spawned directly without a shell (`runner`).
 * Stdio is inherited and the exit code is forwarded.
 */
export const Executor = {
  async run(request: ExecutorRequest): Promise<number> {
    const env = request.env == null ? process.env : { ...process.env, ...request.env };
    const options = { cwd: request.cwd, env, stdio: 'inherit' } as const;
    const child = request.runner == null
      ? spawn(request.run, { ...options, shell: true })
      : spawn(request.runner, request.args ?? [], { ...options, shell: false });

    return new Promise((resolve, reject) => {
      child.on('error', reject);
      child.on('close', (code, signal) => {
        resolve(code ?? (signal == null ? 1 : 128));
      });
    });
  },
};
