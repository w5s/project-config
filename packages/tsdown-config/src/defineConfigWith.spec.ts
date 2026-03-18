import { describe, it, expect, vi, beforeEach } from 'vitest';
import { defineConfigWith } from './defineConfigWith.js';
import { defaultConfig } from './defaultConfig.js';

const mockDefineConfig = vi.fn((config: unknown) => config);
const mockMergeConfig = vi.fn((base: object, ext: object) => ({ ...base, ...ext }));

vi.mock('tsdown', () => ({
  defineConfig: (arg: unknown) => mockDefineConfig(arg),
  mergeConfig: (base: object, ext: object) => mockMergeConfig(base, ext),
}));

describe(defineConfigWith, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns a function that merges defaultConfig + base + override', () => {
    const base = { format: ['esm', 'cjs'] } satisfies import('tsdown').UserConfig;
    const withPreset = defineConfigWith(base);
    const override = { entry: ['src/main.ts'] };

    withPreset(override);

    expect(mockMergeConfig).toHaveBeenCalledWith(defaultConfig, base);
    expect(mockMergeConfig).toHaveBeenCalledWith(
      expect.objectContaining({ format: ['esm', 'cjs'] }),
      override,
    );
    expect(mockDefineConfig).toHaveBeenCalledTimes(1);
    const passed = mockDefineConfig.mock.calls[0]?.[0] as Record<string, unknown>;
    expect(passed).toMatchObject({
      format: ['esm', 'cjs'],
      entry: ['src/main.ts'],
      define: {
        __PACKAGE_NAME__: expect.any(String),
        __PACKAGE_VERSION__: expect.any(String),
        __PACKAGE_BUILD_NUMBER__: expect.any(String),
      },
    });
  });

  it('accepts a function and passes resolved base config to it', () => {
    const base = { dts: false };
    const withPreset = defineConfigWith(base);
    const fn = vi.fn((config: Record<string, unknown>) => ({ ...config, sourcemap: false }));

    withPreset(fn as unknown as import('tsdown').UserConfigFn);

    expect(mockDefineConfig).toHaveBeenCalledWith(expect.any(Function));
    const wrapperFn = mockDefineConfig.mock.calls[0]?.[0] as (config: object, context: unknown) => object;
    wrapperFn({}, undefined);

    expect(fn).toHaveBeenCalledWith(
      expect.objectContaining({
        ...defaultConfig,
        dts: false,
      }),
      undefined,
    );
    expect(fn).toHaveReturnedWith(expect.objectContaining({ sourcemap: false }));
  });
});
