import { describe, expect, it } from 'vitest';

import { PnpmUserConfig } from './PnpmUserConfig.js';

describe('PnpmUserConfig.merge', () => {
  it('fills undefined slots from base', () => {
    const result = PnpmUserConfig.merge(
      { minimumReleaseAge: 1440, resolutionMode: 'lowest-direct' },
      {},
    );

    expect(result.minimumReleaseAge).toBe(1440);
    expect(result.resolutionMode).toBe('lowest-direct');
  });

  it('lets extension values win over base', () => {
    const result = PnpmUserConfig.merge(
      { minimumReleaseAge: 1440, resolutionMode: 'lowest-direct', trustPolicy: 'no-downgrade' },
      { minimumReleaseAge: 60, resolutionMode: 'highest' },
    );

    expect(result.resolutionMode).toBe('highest');
    expect(result.minimumReleaseAge).toBe(60);
    expect(result.trustPolicy).toBe('no-downgrade');
  });

  it('keeps a falsy extension value instead of falling back to base', () => {
    const result = PnpmUserConfig.merge(
      { enablePrePostScripts: true, minimumReleaseAge: 1440 },
      { enablePrePostScripts: false, minimumReleaseAge: 0 },
    );

    expect(result.minimumReleaseAge).toBe(0);
    expect(result.enablePrePostScripts).toBe(false);
  });

  it('deep-merges allowBuilds without clobbering existing keys', () => {
    const result = PnpmUserConfig.merge(
      { allowBuilds: { '@swc/core': false, 'core-js': true } },
      { allowBuilds: { 'core-js': false, 'esbuild': true } },
    );

    expect(result.allowBuilds).toEqual({
      '@swc/core': false,
      'core-js': true,
      'esbuild': true,
    });
  });

  it('deep-merges overrides without clobbering existing keys', () => {
    const result = PnpmUserConfig.merge(
      { overrides: { resolve: '2.0.0-next.7' } },
      { overrides: { lodash: '4.17.21' } },
    );

    expect(result.overrides).toEqual({
      lodash: '4.17.21',
      resolve: '2.0.0-next.7',
    });
  });

  it('resets hoistPattern from ["*"] to []', () => {
    const result = PnpmUserConfig.merge(
      { hoistPattern: ['eslint'] },
      { hoistPattern: ['*'] },
    );

    expect(result.hoistPattern).toEqual([]);
  });

  it('preserves custom hoistPattern values', () => {
    const result = PnpmUserConfig.merge(
      { hoistPattern: ['eslint'] },
      { hoistPattern: ['eslint', '*types*'] },
    );

    expect(result.hoistPattern).toEqual(['eslint', '*types*']);
  });

  it('falls back to base hoistPattern when extension omits it', () => {
    const result = PnpmUserConfig.merge({ hoistPattern: ['eslint'] }, {});

    expect(result.hoistPattern).toEqual(['eslint']);
  });

  it('merges minimumReleaseAgeExclude as a deduplicated union', () => {
    const result = PnpmUserConfig.merge(
      { minimumReleaseAgeExclude: ['@w5s/*', '@scope/a'] },
      { minimumReleaseAgeExclude: ['@scope/a', '@scope/b'] },
    );

    expect(result.minimumReleaseAgeExclude).toEqual(['@w5s/*', '@scope/a', '@scope/b']);
  });

  it('falls back to base minimumReleaseAgeExclude when extension omits it', () => {
    const result = PnpmUserConfig.merge(
      { minimumReleaseAgeExclude: ['@w5s/*'] },
      {},
    );

    expect(result.minimumReleaseAgeExclude).toEqual(['@w5s/*']);
  });

  it('uses extension minimumReleaseAgeExclude when base omits it', () => {
    const result = PnpmUserConfig.merge(
      {},
      { minimumReleaseAgeExclude: ['@scope/a'] },
    );

    expect(result.minimumReleaseAgeExclude).toEqual(['@scope/a']);
  });

  it('returns undefined for minimumReleaseAgeExclude when both are absent', () => {
    const result = PnpmUserConfig.merge({}, {});

    expect(result.minimumReleaseAgeExclude).toBeUndefined();
  });

  it('does not mutate base or extension inputs', () => {
    const base = Object.freeze({
      allowBuilds: Object.freeze({ '@swc/core': false }),
      overrides: Object.freeze({ resolve: '2.0.0-next.7' }),
    });
    const extension = Object.freeze({
      allowBuilds: Object.freeze({ 'core-js': true }),
      resolutionMode: 'highest' as const,
    });

    const result = PnpmUserConfig.merge(base, extension);

    expect(result).not.toBe(base);
    expect(result).not.toBe(extension);
    expect(base.allowBuilds).toEqual({ '@swc/core': false });
    expect(extension.allowBuilds).toEqual({ 'core-js': true });
  });
});
