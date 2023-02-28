import { describe, it, expect } from 'vitest'
import { main } from './index.js';

describe('index', () => {
  it('main', () => {
    expect(typeof main).toBe('function');
  });
});
