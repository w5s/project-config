import { describe, expect, it } from 'vitest';

import { defaultConfig } from './defaultConfig.js';

describe('defaultConfig', () => {
  it('should match snapshot', () => {
    expect(defaultConfig).toMatchSnapshot();
  });
});
