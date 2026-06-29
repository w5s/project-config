import { describe, expect, it } from 'vitest';
import { defineConfig } from './defineConfig.js';

const disabledPlugins = {
  e18e: false,
  es: false,
  ts: false,
  jsonc: false,
  jsdoc: false,
  stylistic: false,
  import: false,
  markdown: false,
  next: false,
  node: false,
  react: false,
  unicorn: false,
  yml: false,
  test: false,
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
});
