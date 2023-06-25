import { describe, it, expect } from 'vitest';
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
      defineConfig('application', {
        test: {
          globalSetup: ['test_setup.ts'],
        },
      })
    ).toEqual({
      ...configDefaultMap.application,
      test: {
        ...configDefaultMap.application.test,
        globalSetup: ['test_setup.ts'],
      },
    });
  });
});
