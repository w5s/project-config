import { describe, expect, it } from 'vitest';

import { ignoreRuleResolve } from './ignoreRuleResolve.js';

describe(ignoreRuleResolve, () => {
  it('resolves unanchored rules at the root directory', () => {
    expect(ignoreRuleResolve('.', 'dist')).toBe('**/dist');
    expect(ignoreRuleResolve('.', 'out')).toBe('**/out');
    expect(ignoreRuleResolve('.', '.env')).toBe('**/.env');
    expect(ignoreRuleResolve('.', '!dist')).toBe('!**/dist');
  });

  it('resolves anchored rules at the root directory', () => {
    expect(ignoreRuleResolve('.', '/dist')).toBe('dist');
    expect(ignoreRuleResolve('.', '!/dist')).toBe('!dist');
  });

  it('resolves unanchored rules inside a nested ignore directory', () => {
    expect(ignoreRuleResolve('android', 'build')).toBe('android/**/build');
    expect(ignoreRuleResolve('android', 'android-build')).toBe('android/**/android-build');
    expect(ignoreRuleResolve('android', '!build')).toBe('!android/**/build');
  });

  it('resolves anchored rules inside a nested ignore directory', () => {
    expect(ignoreRuleResolve('android', '/build')).toBe('android/build');
    expect(ignoreRuleResolve('android', '/android-build')).toBe('android/android-build');
    expect(ignoreRuleResolve('android', '!/build')).toBe('!android/build');
  });

  it('resolves negation patterns with path segments', () => {
    expect(ignoreRuleResolve('.', '!packages/dev/dist/')).toBe('!packages/dev/dist/');
  });

  it('treats an empty prefix as the root directory', () => {
    expect(ignoreRuleResolve('', 'out')).toBe('**/out');
    expect(ignoreRuleResolve('', '/dist')).toBe('dist');
  });
});
