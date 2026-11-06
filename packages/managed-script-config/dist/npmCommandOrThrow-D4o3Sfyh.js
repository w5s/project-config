import { resolveCommand as npmCommand } from "package-manager-detector";
// src/internal/npmCommandOrThrow.ts
function npmCommandOrThrow(agent, command, args, options) {
	const resolved = npmCommand(agent, command, args, options);
	if (resolved == null) throw new Error(`Could not resolve "${command}" command for package manager "${agent}"`);
	return resolved;
}
export { npmCommandOrThrow as t };

//# sourceMappingURL=npmCommandOrThrow-D4o3Sfyh.js.map