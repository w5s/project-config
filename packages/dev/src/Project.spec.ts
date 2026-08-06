import { describe, expect, it } from 'vitest';

import { Project } from './Project.js';

describe('Project', () => {
  describe('.ecmaVersion()', () => {
    it('should be default constant value', () => {
      expect(Project.ecmaVersion()).toBe(2022);
    });
  });
  describe('.sourceExtensions()', () => {
    it('should equals values', () => {
      expect(Project.sourceExtensions()).toEqual(['.cjs', '.cts', '.js', '.jsx', '.mjs', '.mts', '.ts', '.tsx']);
    });
  });
  describe('.resourceExtensions()', () => {
    it('should equals values', () => {
      expect(Project.resourceExtensions()).toMatchSnapshot();
    });
    it('should be frozen', () => {
      expect(Object.isFrozen(Project.resourceExtensions())).toBe(true);
    });
  });
  describe('.queryExtensions()', () => {
    it('should equals values', () => {
      expect(Project.queryExtensions(['javascript'])).toEqual(['.cjs', '.js', '.mjs']);
    });
    it('should concatenate values and keep sorted', () => {
      expect(Project.queryExtensions(['javascript', 'javascriptreact'])).toEqual(['.cjs', '.js', '.jsx', '.mjs']);
    });
  });
  describe('.extensionsToMatcher()', () => {
    it('should return a RegExp', () => {
      expect(Project.extensionsToMatcher(['.js', '.ts'])).toEqual(/(\.js|\.ts)$/);
    });
  });
  describe('.extensionsToGlob()', () => {
    it('should return a glob string', () => {
      expect(Project.extensionsToGlob(['.js', '.ts'])).toEqual('*.+(js|ts)');
    });
  });
  describe('.extensionsToTestGlob()', () => {
    it('should return default test globs', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'])).toEqual([
        '**/__tests__/**/*.+(js|ts)',
        '**/*.+(spec|test).+(js|ts)',
      ]);
    });
    it('should support custom test suffixes', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['unit'] })).toEqual([
        '**/__tests__/**/*.+(js|ts)',
        '**/*.+(unit).+(js|ts)',
      ]);
    });
    it('should support custom test folders', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['unit'], testFolders: ['custom_tests'] })).toEqual([
        '**/custom_tests/**/*.+(js|ts)',
        '**/*.+(unit).+(js|ts)',
      ]);
    });
  });
});
