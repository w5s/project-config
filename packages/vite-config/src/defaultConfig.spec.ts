import { describe, it, expect } from 'vitest';
import { defaultConfig } from './defaultConfig.js';

describe('defaultConfig', () => {
  it('should be an object', () => {
    expect(defaultConfig).toMatchSnapshot();
  });
});
