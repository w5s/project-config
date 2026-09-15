import { describe, expect, it } from 'vitest';

import type { DefineConfigOptions } from './defineConfig.js';

import { defineConfig } from './defineConfig.js';

const disabledPlugins = {
  'e18e': false,
  'es': false,
  'import': false,
  'jsdoc': false,
  'jsonc': false,
  'jsx': false,
  'markdown': false,
  'next': false,
  'node': false,
  'perfectionist': false,
  'react': false,
  'stylistic': false,
  'test': false,
  'ts': false,
  'unicorn': false,
  'unused-imports': false,
  'yml': false,
} as const;

describe(defineConfig, () => {
  it('returns only ignore config in full-disable mode', async () => {
    const config = await defineConfig({ plugins: disabledPlugins });
    expect(config).toHaveLength(1);
    expect(config[0]).toMatchObject({ name: 'w5s/eslint-ignore' });
  });

  it('keeps defineConfig promise contract', async () => {
    const result = defineConfig({ plugins: disabledPlugins });
    expect(result).toBeInstanceOf(Promise);
    await expect(result).resolves.toEqual(expect.any(Array));
  });

  it('appends todo configs before final overrides', async () => {
    const todo: DefineConfigOptions['todo'] = [{ name: 'w5s/todo', rules: { 'no-undef': 'error' } }];
    const overrides: DefineConfigOptions['overrides'] = [{ files: ['**/*.ts'], rules: { semi: 'error' } }];

    const config = await defineConfig({ overrides, todo });

    expect(config.at(-2)).toMatchObject(todo[0]!);
    expect(config.at(-1)).toMatchObject(overrides[0]!);
  });

  it('matches the snapshot of config names in default mode', async () => {
    const config = await defineConfig();
    expect(config.map((entry) => entry.name)).toMatchSnapshot();
  });
});
