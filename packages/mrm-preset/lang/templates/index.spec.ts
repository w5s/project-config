import { describe, test, expect } from '@jest/globals'
import { main } from './index.js';

describe('index', () => {
  test('main', () => {
    expect(typeof main).toBe('function');
  });
});
