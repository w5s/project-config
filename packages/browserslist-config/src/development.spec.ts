import browserslist from 'browserslist';
import { describe, it, expect } from 'vitest';
import config from './development.js';

describe('browserslist latest config', () => {
  it('should not resolve to empty list', () => {
    const browsers = browserslist(config);
    expect(browsers).not.toHaveLength(0);
  });

  it('should contain minimalist configuration', () => {
    const browsers = browserslist(config);
    expect(Array.from(new Set(browsers.map((_) => _.split(' ')[0])))).toEqual(['chrome', 'firefox', 'safari']);
  });
});
