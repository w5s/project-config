import { describe, it, expect } from 'vitest';
import { configDefaultMap } from './configDefaultMap.js';
import { defineConfig } from './defineConfig.js';

describe('defineConfig', () => {
  it.each(['application', 'library'] as const)('should return the default config when no parameter', (type) => {
    expect(defineConfig(type)).toEqual(configDefaultMap.application);
  });
});
