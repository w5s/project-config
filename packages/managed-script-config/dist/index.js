import { defineConfig } from "@w5s/managed-script";
import path from "node:path";
//#region src/config.ts
const configDir = new URL(".", import.meta.url).pathname;
const config = defineConfig({ scripts: {
	"prepare:lefthook": {
		args: [path.join(configDir, "script", "prepare", "lefthook.js")],
		runner: "node"
	},
	"rescue": {
		args: [path.join(configDir, "script", "rescue.js")],
		runner: "node"
	}
} });
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 0,
	name: "@w5s/managed-script-config",
	version: "1.0.0-alpha.4"
});
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map