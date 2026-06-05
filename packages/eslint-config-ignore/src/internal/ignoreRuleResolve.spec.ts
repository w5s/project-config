import nodePath from 'node:path';
import { describe, expect, it } from 'vitest';
import { ignoreRuleResolve } from './ignoreRuleResolve.js';

describe('ignoreRuleResolve', () => {
  it('resolves rules in the root directory', () => {
    expect(ignoreRuleResolve('.', 'dist')).toBe('dist');
    expect(ignoreRuleResolve('.', '/dist')).toBe('dist');
    expect(ignoreRuleResolve('.', '!dist')).toBe('!dist');
    expect(ignoreRuleResolve('.', '!/dist')).toBe('!dist');
  });

  it('resolves rules inside a nested ignore directory', () => {
    expect(ignoreRuleResolve('android', 'android-build')).toBe(nodePath.join('android', 'android-build'));
    expect(ignoreRuleResolve('android', '/android-build')).toBe(nodePath.join('android', 'android-build'));
    expect(ignoreRuleResolve('android', '!android-build')).toBe(`!${nodePath.join('android', 'android-build')}`);
  });
});
