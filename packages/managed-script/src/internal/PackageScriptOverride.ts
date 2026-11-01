import { readFile } from 'node:fs/promises';
import path from 'node:path';

/**
 * Suffix marking a package.json script as an override of the managed script with the same name.
 */
const OVERRIDE_MARKER = '!';

/**
 * @namespace
 */
export const PackageScriptOverride = {
  /**
   * Returns the name of the override script (`<name>!`) if it is defined in `<cwd>/package.json`.
   *
   * @param options
   * @param options.cwd
   * @param options.name
   */
  async find({ cwd, name }: { readonly cwd: string; readonly name: string }): Promise<string | undefined> {
    const overrideName = `${name}${OVERRIDE_MARKER}`;
    try {
      const content = JSON.parse(await readFile(path.join(cwd, 'package.json'), 'utf8')) as null | {
        scripts?: Record<string, unknown>;
      };
      const scripts = content?.scripts;
      return scripts != null &&
        typeof scripts === 'object' &&
        Object.hasOwn(scripts, overrideName) &&
        typeof scripts[overrideName] === 'string'
        ? overrideName
        : undefined;
    } catch {
      // missing or invalid package.json: no override
      return undefined;
    }
  },

  /**
   * The marker used to identify override scripts in `package.json`.
   */
  marker: OVERRIDE_MARKER,
};
