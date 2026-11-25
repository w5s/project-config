import type { ConfigLayer, ResolvedConfig } from 'c12';

import { loadConfig } from 'c12';
import { access } from 'node:fs/promises';
import path from 'node:path';

import type { UserConfig } from '../type/UserConfig.js';

import { meta } from '../meta.js';

export interface ConfigLoaderOptions {
  readonly cwd: string;
}

export interface ConfigLoaderResult {
  readonly config: UserConfig;
  readonly configFile: string | undefined;
  readonly layers: Array<ConfigLayer<UserConfig>>;
}

export const ConfigLoader = {
  /**
   * Load the configuration of the nearest directory, from `cwd` upward, that defines a non-empty one.
   *
   * @param options
   * @param options.cwd
   */
  async load({ cwd }: ConfigLoaderOptions): Promise<ConfigLoaderResult> {
    for (const dir of ancestors(cwd)) {
      const result = await loadFrom(dir);
      if (Object.keys(result.config).length > 0) {
        return toLoaderResult(dir, result);
      }
    }
    return { config: {}, configFile: undefined, layers: [] };
  },
};

function* ancestors(start: string): Generator<string> {
  for (let dir = path.resolve(start), parent = path.dirname(dir); ; dir = parent, parent = path.dirname(dir)) {
    yield dir;
    if (parent === dir) return;
  }
}

async function hasPackageJson(dir: string): Promise<boolean> {
  try {
    await access(path.join(dir, 'package.json'));
    return true;
  } catch (error) {
    if (error instanceof Error && 'code' in error && (error.code === 'ENOENT' || error.code === 'ENOTDIR')) return false;
    throw error;
  }
}

async function loadFrom(dir: string): Promise<ResolvedConfig<UserConfig>> {
  return loadConfig<UserConfig>({
    cwd: dir,
    name: meta.binaryName,
    // c12 reads the *nearest* package.json, which can belong to an ancestor: only read the one located in `dir`
    packageJson: await hasPackageJson(dir) ? [meta.binaryName] : false,
  });
}

function toLoaderResult(dir: string, result: ResolvedConfig<UserConfig>): ConfigLoaderResult {
  // c12 reports the main layer by base name (without extension) and rc/package layers relative to `dir`
  const resolveFile = (configFile: string): string =>
    path.resolve(dir, configFile === `${meta.binaryName}.config` ? result.configFile ?? configFile : configFile);

  const layers = (result.layers ?? [])
    .filter((layer) => layer.config != null && Object.keys(layer.config).length > 0)
    .map((layer) => (layer.configFile === undefined ? layer : { ...layer, configFile: resolveFile(layer.configFile) }));

  return {
    config: result.config,
    configFile: layers.find((layer) => layer.configFile !== undefined)?.configFile,
    layers,
  };
}
