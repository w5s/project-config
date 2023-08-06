import { describe, it, expect, vi } from 'vitest';
import { configDefaultMap } from './configDefaultMap.js';
import { defineConfig } from './defineConfig.js';

describe('defineConfig', () => {
  it('should return the default config when no parameter (application)', () => {
    expect(defineConfig('application')).toEqual(configDefaultMap.application);
  });
  it('should return the default config when no parameter (library)', () => {
    expect(defineConfig('library')).toEqual(configDefaultMap.library);
  });

  it('should override parameter for application', () => {
    expect(
      defineConfig('application', () => ({
        test: {
          globalSetup: ['test_setup.ts'],
        },
      }))
    ).toEqual({
      test: {
        globalSetup: ['test_setup.ts'],
      },
    });
  });

  it('should override parameter for application', () => {
    const spy = vi.fn();
    defineConfig('library', spy);
    expect(spy).toHaveBeenCalledWith(configDefaultMap.library);
  });
});
