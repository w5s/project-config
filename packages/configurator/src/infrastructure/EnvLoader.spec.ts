import { describe, expect, it } from 'vitest';
import { EnvLoader } from './EnvLoader.js';

describe('EnvLoader', () => {
  it('parses preset string and ignores empty string', () => {
    const loaded = EnvLoader.load({
      CONFIGURATOR_PRESET: '',
    });

    expect(loaded.preset).toBeUndefined();

    const loadedWithPreset = EnvLoader.load({
      CONFIGURATOR_PRESET: './configurator.preset.ts',
    });

    expect(loadedWithPreset.preset).toBe('./configurator.preset.ts');
  });

  it('parses debug values', () => {
    const truthyValues = ['true', '1', 'yes', 'TRUE', 'Yes'];
    for (const value of truthyValues) {
      const loaded = EnvLoader.load({
        CONFIGURATOR_DEBUG: value,
      });

      expect(loaded.debug).toBe(true);
    }

    const falsyValues = ['false', '0', 'no', 'FALSE', 'No'];
    for (const value of falsyValues) {
      const loaded = EnvLoader.load({
        CONFIGURATOR_DEBUG: value,
      });

      expect(loaded.debug).toBe(false);
    }
  });

  it('parses dryRun values', () => {
    const truthyValues = ['true', '1', 'yes', 'TRUE', 'Yes'];
    for (const value of truthyValues) {
      const loaded = EnvLoader.load({
        CONFIGURATOR_DRY_RUN: value,
      });

      expect(loaded.dryRun).toBe(true);
    }

    const falsyValues = ['false', '0', 'no', 'FALSE', 'No'];
    for (const value of falsyValues) {
      const loaded = EnvLoader.load({
        CONFIGURATOR_DRY_RUN: value,
      });

      expect(loaded.dryRun).toBe(false);
    }
  });

  it('throws on invalid debug values', () => {
    expect(() =>
      EnvLoader.load({
        CONFIGURATOR_DEBUG: 'maybe',
      }),
    ).toThrow('Invalid environment variables');
  });

  it('throws on invalid dryRun values', () => {
    expect(() =>
      EnvLoader.load({
        CONFIGURATOR_DRY_RUN: 'maybe',
      }),
    ).toThrow('Invalid environment variables');
  });

  it('handles missing envs', () => {
    const loaded = EnvLoader.load({});

    expect(loaded.preset).toBeUndefined();
    expect(loaded.debug).toBeUndefined();
    expect(loaded.dryRun).toBeUndefined();
  });
});
