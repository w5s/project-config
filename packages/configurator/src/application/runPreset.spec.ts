import { beforeEach, describe, expect, it } from 'vitest';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { pathToFileURL } from 'node:url';
import { runPreset } from './runPreset.js';

describe('runPreset', () => {
  const TEST_PATH = '.temp/configurator-preset';

  beforeEach(async () => {
    await rm(TEST_PATH, { recursive: true, force: true });
    await mkdir(TEST_PATH, { recursive: true });
  });

  it('executes the default export function', async () => {
    const outputPath = nodePath.resolve(TEST_PATH, 'out.txt');
    const presetPath = nodePath.resolve(TEST_PATH, 'preset.mjs');
    const presetSource = `export default async (config) => {
  const { writeFile } = await import('node:fs/promises');
  await writeFile(${JSON.stringify(outputPath)}, String(config.preset));
};`;

    await writeFile(presetPath, presetSource);

    await runPreset({
      config: { preset: './preset.mjs', debug: false, dryRun: false },
      configFile: nodePath.join(TEST_PATH, 'configurator.config.json'),
    });

    await expect(readFile(outputPath, 'utf8')).resolves.toBe('./preset.mjs');
  });

  it('throws when preset is missing', async () => {
    await expect(runPreset({
      config: { preset: undefined, debug: false, dryRun: false },
      configFile: undefined,
    })).rejects.toThrow(/preset/i);
  });

  it('throws when preset default export is not a function', async () => {
    const presetPath = nodePath.resolve(TEST_PATH, 'invalid.mjs');
    await writeFile(presetPath, 'export default 42;');

    await expect(
      runPreset({
        config: { preset: './invalid.mjs', debug: false, dryRun: false },
        configFile: nodePath.join(TEST_PATH, 'configurator.config.json'),
      }),
    ).rejects.toThrow(/default function/i);
  });

  it('exposes dryRun through the runtime context', async () => {
    const outputPath = nodePath.resolve(TEST_PATH, 'context.json');
    const presetPath = nodePath.resolve(TEST_PATH, 'context-preset.mjs');
    const runtimeModule = pathToFileURL(nodePath.resolve('src/runtime.ts')).href;
    const presetSource = `export default async () => {
  const { useRuntimeContext } = await import(${JSON.stringify(runtimeModule)});
  const { writeFile } = await import('node:fs/promises');
  const context = useRuntimeContext();
  await writeFile(${JSON.stringify(outputPath)}, JSON.stringify(context));
};`;

    await writeFile(presetPath, presetSource);

    await runPreset({
      config: { preset: './context-preset.mjs', debug: true, dryRun: true },
      configFile: nodePath.join(TEST_PATH, 'configurator.config.json'),
    });

    await expect(readFile(outputPath, 'utf8')).resolves.toBe(
      JSON.stringify({ isDebug: true, isDryRun: true }),
    );
  });
});
