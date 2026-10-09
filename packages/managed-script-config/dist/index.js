import { defineConfig } from "@w5s/managed-script";
import path from "node:path";
//#region src/config.ts
const configDir = new URL(".", import.meta.url).pathname;
const config = defineConfig({ scripts: {
	"prepare:lefthook": `node "${path.join(configDir, "script", "prepare", "lefthook.js")}"`,
	"rescue": `node "${path.join(configDir, "script", "rescue.js")}"`
} });
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 0,
	name: "@w5s/managed-script-config",
	version: "1.0.0-alpha.3"
});
//#endregion
export { config as default, meta };

//# sourceMappingURL=index.js.map