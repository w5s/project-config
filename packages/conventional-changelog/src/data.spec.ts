import { describe, expect, it } from 'vitest';
import { CommitConventionalType } from './data.js';

describe('CommitConventionalType', () => {
  describe('hasInstance', () => {
    it('should return true only for correct values', () => {
      expect(CommitConventionalType.hasInstance('build')).toBe(true);
      expect(CommitConventionalType.hasInstance('any_value')).toBe(false);
      expect(CommitConventionalType.hasInstance(undefined)).toBe(false);
    });
  });
  describe('values', () => {
    it('should have correct values', () => {
      expect(CommitConventionalType.values()).toEqual([
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'wip',
      ]);
      const ref = CommitConventionalType.values();
      expect(CommitConventionalType.values()).toBe(ref);
      expect(Object.isFrozen(CommitConventionalType.values())).toBe(true);
    });
  });
  describe('parse', () => {
    it('should return undefined for incorrect values', () => {
      expect(CommitConventionalType.parse('any_value')).toBe(undefined);
    });
    it('should return type for correct values', () => {
      expect(CommitConventionalType.parse('build')).toBe(CommitConventionalType.Build);
    });
  });
});
