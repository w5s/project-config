import { defineConfig } from "@w5s/managed-script";
import path from "node:path";
// src/config.ts
const configDir = new URL(".", import.meta.url).pathname;
const scriptDir = (...parts) => path.join(configDir, "script", ...parts);
const config = defineConfig({ scripts: {
	"format": {
		args: [scriptDir("format.js")],
		runner: "node"
	},
	"lint": {
		args: [scriptDir("lint.js")],
		runner: "node"
	},
	"prepare": {
		args: [scriptDir("prepare.js")],
		runner: "node"
	},
	"prepare:gitmodules": {
		args: [scriptDir("prepare", "gitmodules.js")],
		runner: "node"
	},
	"prepare:lefthook": {
		args: [scriptDir("prepare", "lefthook.js")],
		runner: "node"
	},
	"prepare:skills": {
		args: [scriptDir("prepare", "skills.js")],
		runner: "node"
	},
	"rescue": {
		args: [scriptDir("rescue.js")],
		runner: "node"
	}
} });
// src/meta.ts
const meta = Object.freeze({
	buildNumber: 0,
	name: "@w5s/managed-script-config",
	version: "1.0.0-alpha.5"
});
export { config as default, meta };

//# sourceMappingURL=index.js.map