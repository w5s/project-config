import { execSync } from 'node:child_process';

/**
 * Runs `command`, ignoring a non-zero exit code so the next command still runs (mimics shell `;`).
 *
 * @param command
 */
function run(command: string): void {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch {
    // ignored: continue to the next command regardless of the outcome
  }
}

run('git clean -fdx');
run('pnpm install');
