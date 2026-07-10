import fs from 'node:fs';
import nodePath from 'node:path';

const SUBMODULE_PATH_RE = /path\s*=\s*(.+)/g;

/**
 * Read `cwd/.gitmodules` and return ESLint ignore glob patterns for every
 * listed submodule.  Returns an empty array when no `.gitmodules` file exists.
 *
 * @param cwd
 * @example
 * ```ts
 * await gitModulesIgnore('/path/to/project');
 * // ['**\/packages/foo\/**', '**\/packages/bar\/**']
 * ```
 */
export async function gitModulesIgnore(cwd: string): Promise<Array<string>> {
  const gmPath = nodePath.join(cwd, '.gitmodules');
  try {
    let stat = null;
    try {
      stat = await fs.promises.stat(gmPath);
    } catch {
      stat = null;
    }
    if (!stat?.isFile()) return [];

    const content = String(await fs.promises.readFile(gmPath, 'utf8'));
    const paths = gitModulesParse(content);
    return paths.map((p) => `${p.replaceAll('\\', '/')}/**`);
  } catch {
    return [];
  }
}

/**
 * Parse the content of a `.gitmodules` file and return the list of submodule paths.
 *
 * @param content
 * @example
 * ```ts
 * gitModulesParse('[submodule "foo"]\n\tpath = packages/foo\n');
 * // ['packages/foo']
 * ```
 */
export function gitModulesParse(content: string): Array<string> {
  const paths: Array<string> = [];
  SUBMODULE_PATH_RE.lastIndex = 0;
  for (;;) {
    const matches = SUBMODULE_PATH_RE.exec(content);
    if (!matches) break;
    const captured = matches[1];
    if (captured) paths.push(captured.trim());
  }
  return paths;
}
