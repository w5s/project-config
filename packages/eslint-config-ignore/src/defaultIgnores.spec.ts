import { describe, it, expect } from 'vitest';
import { defaultIgnores } from './defaultIgnores.js';

describe('defaultIgnores', () => {
  it('has defined values', () => {
    expect(defaultIgnores).toMatchSnapshot();
  });
});
