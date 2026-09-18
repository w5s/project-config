import { describe, expect, it } from 'vitest';

import { Project } from './Project.js';

describe('Project', () => {
  describe(Project.ecmaVersion, () => {
    it('should be default constant value', () => {
      expect(Project.ecmaVersion()).toBe(2022);
    });
  });
  describe(Project.sourceExtensions, () => {
    it('should equals values', () => {
      expect(Project.sourceExtensions()).toEqual(['.cjs', '.cts', '.js', '.jsx', '.mjs', '.mts', '.ts', '.tsx']);
    });
  });
  describe(Project.resourceExtensions, () => {
    it('should equals values', () => {
      expect(Project.resourceExtensions()).toMatchSnapshot();
    });
    it('should be frozen', () => {
      expect(Object.isFrozen(Project.resourceExtensions())).toBe(true);
    });
  });
  describe(Project.queryExtensions, () => {
    it('should equals values', () => {
      expect(Project.queryExtensions(['javascript'])).toEqual(['.cjs', '.js', '.mjs']);
    });
    it('should concatenate values and keep sorted', () => {
      expect(Project.queryExtensions(['javascript', 'javascriptreact'])).toEqual(['.cjs', '.js', '.jsx', '.mjs']);
    });
  });
  describe(Project.extensionsToRegExp, () => {
    it('should return a RegExp', () => {
      expect(Project.extensionsToRegExp(['.js', '.ts'])).toEqual(/(\.js|\.ts)$/);
    });
  });
  describe(Project.glob, () => {
    it('should return a glob string', () => {
      expect(Project.glob({ fileExtensions: [['.js', '.ts']] })).toEqual('*.@(js|ts)');
      expect(Project.glob({ fileExtensions: [['.test', '.spec'], ['.js', '.ts']] })).toEqual('*.@(test|spec).@(js|ts)');
      expect(Project.glob({ fileExtensions: [['.js', '.ts']], nested: true })).toEqual('**/*.@(js|ts)');
    });
    it('should support ancestor folders', () => {
      expect(Project.glob({ fileExtensions: [['.js']], folderAncestors: '@(src|test)' })).toEqual('@(src|test)/**/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderAncestors: '@(src|test)', folderParents: 'parent' })).toEqual('@(src|test)/**/parent/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderAncestors: ['src'] })).toEqual('src/**/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderAncestors: ['src', 'test'] })).toEqual('@(src|test)/**/*.js');
    });
    it('should support parent folders', () => {
      expect(Project.glob({ fileExtensions: [['.js']], folderParents: '@(src|test)' })).toEqual('@(src|test)/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderParents: ['src'] })).toEqual('src/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderParents: ['src', 'test'] })).toEqual('@(src|test)/*.js');
      expect(Project.glob({ fileExtensions: [['.js']], folderParents: ['src'], nested: true })).toEqual('**/src/*.js');
    });
  });
  describe(Project.extensionsToTestGlob, () => {
    it('should return default test globs', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'])).toEqual([
        '**/__tests__/**/*.@(js|ts)',
        '**/*.@(spec|test).@(js|ts)',
      ]);
    });
    it('should support custom test suffixes', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['.unit'] })).toEqual([
        '**/__tests__/**/*.@(js|ts)',
        '**/*.unit.@(js|ts)',
      ]);
    });
    it('should support custom test folders', () => {
      expect(
        Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: ['.unit'], testFolders: ['custom_tests'] }),
      ).toEqual(['**/custom_tests/**/*.@(js|ts)', '**/*.unit.@(js|ts)']);
    });
    it('should combine multiple test folders into a single glob entry', () => {
      expect(
        Project.extensionsToTestGlob(['.js', '.ts'], { testFolders: ['__tests__', 'custom_tests'] }),
      ).toEqual(['**/@(__tests__|custom_tests)/**/*.@(js|ts)', '**/*.@(spec|test).@(js|ts)']);
    });
    it('should omit folder globs when testFolders is empty', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'], { testFolders: [] })).toEqual([
        '**/*.@(spec|test).@(js|ts)',
      ]);
    });
    it('should omit compound globs when testExtensions is empty', () => {
      expect(Project.extensionsToTestGlob(['.js', '.ts'], { testExtensions: [] })).toEqual([
        '**/__tests__/**/*.@(js|ts)',
      ]);
    });
  });
});
