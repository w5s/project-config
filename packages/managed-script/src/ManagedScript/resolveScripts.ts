import path from 'node:path/win32';

import type { ConfigLoaderResult } from '../internal/ConfigLoader.js';
import type { ResolvedConfig } from '../type/ResolvedConfig.js';

type NormalizedScript = Pick<ResolvedConfig.RunnerScript, 'args' | 'run' | 'runner'> | Pick<ResolvedConfig.ShellScript, 'args' | 'run' | 'runner'>;

export function resolveScripts(loaded: ConfigLoaderResult): ResolvedConfig {
  const scripts: ResolvedConfig['scripts'] = {};
  const layers = loaded.layers.length > 0 ? loaded.layers : [{ config: loaded.config }];

  for (const layer of layers) {
    for (const [name, command] of Object.entries(layer.config?.scripts ?? {})) {
      const configFile = layer.configFile ?? loaded.configFile;
      const configDir = configFile == null ? undefined : path.dirname(configFile);
      scripts[name] ??= { ...normalizeScript(name, command), configDir, configFile };
    }
  }

  return {
    scripts,
  };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

function isStringArray(value: unknown): value is ReadonlyArray<string> {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

const allowedKeys = new Set(['args', 'run', 'runner']);

function normalizeScript(name: string, definition: unknown): NormalizedScript {
  if (typeof definition === 'string') {
    return requireRun(name, definition);
  }

  if (!isPlainObject(definition)) {
    throw new TypeError(`Script "${name}" must be a shell command string or an object with "run", or "runner" and "args".`);
  }

  const unknownKeys = Object.keys(definition).filter((key) => !allowedKeys.has(key));
  if (unknownKeys.length > 0) {
    throw new TypeError(`Script "${name}" has unknown option(s): ${unknownKeys.join(', ')}.`);
  }

  const { args, run, runner } = definition;
  if (run !== undefined) {
    if (runner !== undefined || args !== undefined) {
      throw new TypeError(`Script "${name}" cannot mix "run" with "runner" or "args".`);
    }
    return requireRun(name, run);
  }

  if (typeof runner !== 'string' || runner.trim().length === 0) {
    throw new TypeError(`Script "${name}" runner must be a non-empty string.`);
  }
  if (args !== undefined && !isStringArray(args)) {
    throw new TypeError(`Script "${name}" args must be an array of strings.`);
  }

  return { args: [...(args ?? [])], runner };
}

function requireRun(name: string, run: unknown): NormalizedScript {
  if (typeof run !== 'string' || run.trim().length === 0) {
    throw new TypeError(`Script "${name}" run must be a non-empty string.`);
  }
  return { run };
}
