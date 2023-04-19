import { describe, expect, it } from 'vitest';
import type { Commit } from './data.js';
import { createTransform } from './transform.js';

const generateCommit = (commit: Partial<Commit>): Commit => ({
  header: '',
  notes: [],
  references: [],
  mentions: [],
  body: null,
  footer: null,
  merge: null,
  revert: null,
  ...commit,
});
const defaultContext = { commit: '', date: '', issue: '' };

describe('createTransform', () => {
  it('return commit if has feat', () => {
    const transform = createTransform({});

    const commit = generateCommit({
      header: 'amazing new module',
      type: 'feat',
    });

    expect(transform(commit, defaultContext)).toEqual({
      body: null,
      footer: null,
      merge: null,
      revert: null,
      type: '✨ Features',
      header: 'amazing new module',
      mentions: [],
      notes: [],
      references: [],
    });
  });

  it('should truncated commit hash', () => {
    const transform = createTransform({});
    const commit = generateCommit({
      header: '',
      type: 'feat',
      hash: '12345678abc',
    });

    expect(transform(commit, defaultContext)).toEqual({
      body: null,
      footer: null,
      merge: null,
      revert: null,
      hash: '1234567',
      header: '',
      mentions: [],
      notes: [],
      references: [],
      type: '✨ Features',
    });
  });

  describe('Custom Config', () => {
    it('should only display included types', () => {
      const transform = createTransform({
        displayTypes: ['fix'],
      });
      const featCommit = generateCommit({
        type: 'feat',
      });
      const fixCommit = generateCommit({
        type: 'fix',
      });

      expect(transform(featCommit, defaultContext)).toBe(false);
      expect(transform(fixCommit, defaultContext)).toEqual({
        body: null,
        footer: null,
        merge: null,
        revert: null,
        header: '',
        mentions: [],
        notes: [],
        references: [],
        type: '🐛 Bug Fixes',
      });
    });
    it.each([
      [
        generateCommit({
          type: '🐛',
        }),
        {
          body: null,
          footer: null,
          merge: null,
          revert: null,
          header: '',
          mentions: [],
          notes: [],
          references: [],
          type: '🐛 Bug Fixes',
        },
      ],
      [
        generateCommit({
          type: '⬆️',
        }),
        {
          body: null,
          footer: null,
          merge: null,
          revert: null,
          header: '',
          mentions: [],
          notes: [],
          references: [],
          type: '🎫 Chores',
        },
      ],
      [
        generateCommit({
          type: ':bug:',
        }),
        {
          body: null,
          footer: null,
          merge: null,
          revert: null,
          header: '',
          mentions: [],
          notes: [],
          references: [],
          type: '🐛 Bug Fixes',
        },
      ],
    ])('should handle type as unicode gitmoji', (commit, expected) => {
      const transform = createTransform({});

      expect(transform(commit, defaultContext)).toEqual(expected);
    });

    it('should show scope display name', () => {
      const transform = createTransform({
        scopeDisplayName: {
          foo: 'module-foo',
        },
      });
      const commit = generateCommit({
        type: 'feat',
        scope: 'foo',
      });

      expect(transform(commit, defaultContext)).toEqual({
        body: null,
        footer: null,
        merge: null,
        revert: null,
        header: '',
        mentions: [],
        notes: [],
        references: [],
        scope: 'module-foo',
        type: '✨ Features',
      });
    });
  });
});
