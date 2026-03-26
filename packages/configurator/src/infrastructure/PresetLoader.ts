import { createRequire } from 'node:module';
import nodePath from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Preset, PresetModule } from '../runtime/Preset.js';

export interface PresetLoadOptions {
  readonly configFile?: string | undefined;
  readonly cwd: string;
}

function isPathLike(value: string): boolean {
  return value.startsWith('./') || value.startsWith('../') || nodePath.isAbsolute(value);
}

/**
 * @namespace
 */
export const PresetLoader = {
  async load(preset: string, options: PresetLoadOptions): Promise<Preset> {
    const mod = await PresetLoader.loadModule(preset, options);
    return PresetLoader.resolveFunction(mod);
  },
  async loadModule(preset: string, options: PresetLoadOptions): Promise<PresetModule> {
    const baseDir = options.configFile
      ? nodePath.resolve(options.cwd, nodePath.dirname(options.configFile))
      : options.cwd;
    const requireFromBase = createRequire(nodePath.join(baseDir, 'configurator-resolve.cjs'));

    const resolvedPath = isPathLike(preset)
      ? nodePath.resolve(baseDir, preset)
      : requireFromBase.resolve(preset);

    const resolvedUrl = pathToFileURL(resolvedPath).href;

    try {
      return (await import(resolvedUrl)) as PresetModule;
    } catch {
      const required = requireFromBase(resolvedPath) as PresetModule;

      return required;
    }
  },
  resolveFunction(module: PresetModule): Preset {
    const candidate = (module as PresetModule).default ?? module;

    if (typeof candidate !== 'function') {
      throw new TypeError('Preset module must export a default function.');
    }

    return candidate as Preset;
  },
};
