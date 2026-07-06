import { beforeEach, describe, expect, it, vi } from 'vitest';

import { defaultConfig } from './defaultConfig.js';
import { defineConfig } from './defineConfig.js';

const mockDefineConfig = vi.fn((config: unknown) => config);
const mockMergeConfig = vi.fn((base: object, ext: object) => ({ ...base, ...ext }));

vi.mock('tsdown', () => ({
  defineConfig: (arg: unknown) => mockDefineConfig(arg),
  mergeConfig: (base: object, ext: object) => mockMergeConfig(base, ext),
}));

describe(defineConfig, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('merges defaultConfig with object override and applies package define', () => {
    const override = { format: ['cjs'] } satisfies import('tsdown').UserConfig;
    defineConfig(override);

    expect(mockMergeConfig).toHaveBeenCalledWith(defaultConfig, override);
    expect(mockDefineConfig).toHaveBeenCalledTimes(1);
    const passed = mockDefineConfig.mock.calls[0]?.[0] as Record<string, unknown>;
    expect(passed).toMatchObject({
      define: {
        __PACKAGE_BUILD_NUMBER__: expect.any(String),
        __PACKAGE_NAME__: expect.any(String),
        __PACKAGE_VERSION__: expect.any(String),
      },
      format: ['cjs'],
    });
  });

  it('accepts a function and passes merged config (default + inline) with package define', () => {
    const fn = vi.fn((config: Record<string, unknown>) => ({ ...config, dts: false }));
    defineConfig(fn as unknown as import('tsdown').UserConfigFn);

    expect(mockDefineConfig).toHaveBeenCalledWith(expect.any(Function));
    const wrapperFn = mockDefineConfig.mock.calls[0]?.[0] as (config: object, context: unknown) => object;
    const inlineConfig = { sourcemap: false };
    wrapperFn(inlineConfig, undefined);

    expect(mockMergeConfig).toHaveBeenCalledWith(defaultConfig, inlineConfig);
    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({
        define: expect.objectContaining({
          __PACKAGE_NAME__: expect.any(String),
          __PACKAGE_VERSION__: expect.any(String),
        }),
        sourcemap: false,
      }),
      undefined,
    );
    expect(fn).toHaveReturnedWith(expect.objectContaining({ dts: false }));
  });
});
