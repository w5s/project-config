import { describe, it, expect } from '@jest/globals'
import { main } from './index.js';

describe('index', () => {
  it('main', () => {
    expect(typeof main).toBe('function');
  });
});
