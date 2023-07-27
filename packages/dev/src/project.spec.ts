import { describe, expect, it } from 'vitest';
import { Project } from './project.js';

describe('Project', () => {
  describe('.ecmaVersion()', () => {
    it('should be default constant value', () => {
      expect(Project.ecmaVersion()).toBe(2022);
    });
  });
});
