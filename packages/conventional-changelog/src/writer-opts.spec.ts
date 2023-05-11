import { describe, expect, it } from 'vitest';
import { defaultDisplayTypes } from './writer-opts.js';

describe('defaultDisplayTypes', () => {
  it('should filter types with changelog=true', () => {
    expect(defaultDisplayTypes).toMatchSnapshot();
  });
});
