import { describe, it, expect } from 'vitest';
import { configDefaultMap } from './configDefaultMap.js';

describe('configDefaultMap', () => {
  it('should be an object', () => {
    expect(configDefaultMap).toMatchSnapshot();
  });
});
