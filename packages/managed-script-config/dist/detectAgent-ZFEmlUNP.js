import { detect, getUserAgent } from "package-manager-detector";
// src/internal/detectAgent.ts
const defaultAgent = "npm";
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
async function detectAgent() {
	const userAgent = getUserAgent();
	if (userAgent != null) return userAgent;
	return (await detect())?.agent ?? defaultAgent;
}
export { detectAgent as t };

//# sourceMappingURL=detectAgent-ZFEmlUNP.js.map