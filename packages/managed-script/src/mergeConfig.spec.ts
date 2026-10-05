import { describe, expect, it } from 'vitest';

import type { UserConfig } from './type/UserConfig.js';

import { mergeConfig } from './mergeConfig.js';

describe(mergeConfig, () => {
  it('merges scripts by name and lets the override win', () => {
    expect(mergeConfig(
      { scripts: { build: 'echo base', test: 'echo test' } },
      { scripts: { build: 'echo override' } },
    )).toEqual({
      scripts: { build: 'echo override', test: 'echo test' },
    });
  });

  it('concatenates arrays, wrapping a scalar when only one side is an array', () => {
    expect(mergeConfig(
      { extends: './base' } as UserConfig,
      { extends: ['./extra'] } as UserConfig,
    )).toEqual({
      extends: ['./base', './extra'],
    });
  });

  it('keeps the default when the override is null or undefined', () => {
    expect(mergeConfig(
      { scripts: { build: 'echo base' } },
      { scripts: undefined },
    )).toEqual({
      scripts: { build: 'echo base' },
    });
    expect(mergeConfig(
      { scripts: { build: 'echo base' } },
      { scripts: null as never },
    )).toEqual({
      scripts: { build: 'echo base' },
    });
  });

  it('replaces a missing or null default with the override', () => {
    expect(mergeConfig(
      {},
      { scripts: { build: 'echo override' } },
    )).toEqual({
      scripts: { build: 'echo override' },
    });
    expect(mergeConfig(
      { scripts: null as never },
      { scripts: { build: 'echo override' } },
    )).toEqual({
      scripts: { build: 'echo override' },
    });
  });

  it('merges nested objects such as c12 environment overrides', () => {
    expect(mergeConfig(
      { $development: { scripts: { build: 'echo base', test: 'echo test' } } },
      { $development: { scripts: { build: 'echo override' } } },
    )).toEqual({
      $development: { scripts: { build: 'echo override', test: 'echo test' } },
    });
  });

  it('does not mutate the input configs', () => {
    const defaults = { scripts: { build: 'echo base' } };
    const overrides = { scripts: { test: 'echo test' } };

    const merged = mergeConfig(defaults, overrides);

    expect(merged).toEqual({ scripts: { build: 'echo base', test: 'echo test' } });
    expect(defaults).toEqual({ scripts: { build: 'echo base' } });
    expect(overrides).toEqual({ scripts: { test: 'echo test' } });
    expect(merged).not.toBe(defaults);
    expect(merged).not.toBe(overrides);
    expect(merged.scripts).not.toBe(defaults.scripts);
    expect(merged.scripts).not.toBe(overrides.scripts);
  });

  it('keeps the original reference when a key exists on only one side', () => {
    const scripts = { build: 'echo base' };
    const extra = { lint: 'echo lint' };
    const fromDefaults = mergeConfig({ scripts }, {});
    const fromOverrides = mergeConfig({}, { scripts: extra });

    expect(fromDefaults.scripts).toBe(scripts);
    expect(fromOverrides.scripts).toBe(extra);
  });

  it('throws when a config is a function', () => {
    const callback = (() => ({})) as never;

    expect(() => mergeConfig(callback, {})).toThrow('Cannot merge config in form of callback');
    expect(() => mergeConfig({}, callback)).toThrow('Cannot merge config in form of callback');
  });
});
