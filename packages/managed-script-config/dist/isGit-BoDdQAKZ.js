import { existsSync, statSync } from "node:fs";
//#region src/internal/isGit.ts
const isGit = existsSync(".git") && statSync(".git").isDirectory();
//#endregion
export { isGit as t };

//# sourceMappingURL=isGit-BoDdQAKZ.js.map