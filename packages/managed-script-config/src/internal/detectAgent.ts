import type { Agent } from 'package-manager-detector';

import { detect, getUserAgent } from 'package-manager-detector';

const defaultAgent: Agent = 'npm';

/**
 * Detects the package manager used by the current project.
 *
 * Detection order:
 * 1. The `npm_config_user_agent` environment variable, set by the package manager that is
 *    actually invoking the current process — it's guaranteed to be installed and runnable.
 * 2. Lockfile presence (`pnpm-lock.yaml`, `yarn.lock`, ...) or the `package.json`
 *    `packageManager` / `devEngines.packageManager` field, used when the current process
 *    wasn't spawned by a package manager (e.g. direct `node` invocation).
 * 3. `npm`, as a last resort fallback.
 */
export async function detectAgent(): Promise<Agent> {
  const userAgent = getUserAgent();
  if (userAgent != null) {
    return userAgent;
  }
  const detected = await detect();
  return detected?.agent ?? defaultAgent;
}
