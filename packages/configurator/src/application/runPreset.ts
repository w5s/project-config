import type { ResolveConfigResult } from './resolveConfig.js';
import { PresetLoader } from '../infrastructure/PresetLoader.js';
import { RuntimeContext } from '../runtime/RuntimeContext.js';

export async function runPreset(resolved: ResolveConfigResult): Promise<void> {
  const preset = resolved.config.preset;

  if (preset == null || preset.length === 0) {
    throw new Error('No preset configured. Use --preset, CONFIGURATOR_PRESET, or a configurator config file.');
  }

  const presetFn = await PresetLoader.load(preset, { configFile: resolved.configFile, cwd: process.cwd() });

  const context = RuntimeContext.create(resolved.config);
  await RuntimeContext.run(context, () => presetFn(resolved.config));
}
