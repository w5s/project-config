import { describe, expect, it } from 'vitest';
import { Project } from './project.js';

describe('Project', () => {
  describe('.ecmaVersion()', () => {
    it('should be default constant value', () => {
      expect(Project.ecmaVersion()).toBe(2022);
    });
  });
  describe('.sourceExtensions()', () => {
    it('should equals values', () => {
      expect(Project.sourceExtensions()).toMatchSnapshot();
    });
    it('should be frozen', () => {
      expect(Object.isFrozen(Project.sourceExtensions())).toBe(true);
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
});
