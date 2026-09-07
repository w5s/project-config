import { describe, expect, it } from 'vitest';

import { betterDefaultConfig } from './betterDefaultConfig.js';

describe('betterDefaultConfig', () => {
  it('should match snapshot', () => {
    expect(betterDefaultConfig).toMatchSnapshot();
  });
});
