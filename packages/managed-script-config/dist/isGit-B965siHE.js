import { existsSync, statSync } from "node:fs";
// src/internal/isGit.ts
const isGit = existsSync(".git") && statSync(".git").isDirectory();
export { isGit as t };

//# sourceMappingURL=isGit-B965siHE.js.map