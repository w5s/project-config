import { describe, expect, it } from 'vitest';
import { defaultDisplayTypes } from './writer.js';

describe('defaultDisplayTypes', () => {
  it('should filter types with changelog=true', () => {
    expect(defaultDisplayTypes).toMatchSnapshot();
  });
});
