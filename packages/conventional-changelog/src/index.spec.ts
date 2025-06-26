import { describe, expect, it } from 'vitest';
import config from './index.js';

describe('conventional-changelog', () => {
  it('should export data', async () => {
    await expect(config()).resolves.toMatchSnapshot();
  });
});
