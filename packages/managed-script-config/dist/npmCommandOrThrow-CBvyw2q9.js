import { detect, getUserAgent, resolveCommand as npmCommand } from "package-manager-detector";
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
// src/internal/npmCommandOrThrow.ts
function npmCommandOrThrow(agent, command, args, options) {
	const resolved = npmCommand(agent, command, args, options);
	if (resolved == null) throw new Error(`Could not resolve "${command}" command for package manager "${agent}"`);
	return resolved;
}
export { detectAgent as n, npmCommandOrThrow as t };

//# sourceMappingURL=npmCommandOrThrow-CBvyw2q9.js.map