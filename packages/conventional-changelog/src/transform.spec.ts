import { describe, expect, it } from 'vitest';

import type { Commit } from './data.js';

import { createTransform, type WriterContext } from './transform.js';

const generateCommit = (commit: Partial<Commit>): Commit => ({
  body: null,
  footer: null,
  hash: null,
  header: '',
  mentions: [],
  merge: null,
  notes: [],
  references: [],
  revert: null,
  scope: null,
  subject: null,
  type: null,
  ...commit,
});
const defaultContext: WriterContext = {};

const defaultOptions = {};

describe('createTransform', () => {
  it('return commit if has feat', () => {
    const transform = createTransform({});

    const commit = generateCommit({
      header: 'amazing new module',
      type: 'feat',
    });

    expect(transform(commit, defaultContext, defaultOptions)).toEqual({
      body: null,
      footer: null,
      hash: null,
      header: 'amazing new module',
      mentions: [],
      merge: null,
      notes: [],
      references: [],
      revert: null,
      scope: null,
      subject: null,
      type: '✨ Features',
    });
  });

  it('should truncated commit hash', () => {
    const transform = createTransform({});
    const commit = generateCommit({
      hash: '12345678abc',
      header: '',
      type: 'feat',
    });

    expect(transform(commit, defaultContext, defaultOptions)).toEqual({
      body: null,
      footer: null,
      hash: '1234567',
      header: '',
      mentions: [],
      merge: null,
      notes: [],
      references: [],
      revert: null,
      scope: null,
      subject: null,
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

      expect(transform(featCommit, defaultContext, defaultOptions)).toBe(false);
      expect(transform(fixCommit, defaultContext, defaultOptions)).toEqual({
        body: null,
        footer: null,
        hash: null,
        header: '',
        mentions: [],
        merge: null,
        notes: [],
        references: [],
        revert: null,
        scope: null,
        subject: null,
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
          hash: null,
          header: '',
          mentions: [],
          merge: null,
          notes: [],
          references: [],
          revert: null,
          scope: null,
          subject: null,
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
          hash: null,
          header: '',
          mentions: [],
          merge: null,
          notes: [],
          references: [],
          revert: null,
          scope: null,
          subject: null,
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
          hash: null,
          header: '',
          mentions: [],
          merge: null,
          notes: [],
          references: [],
          revert: null,
          scope: null,
          subject: null,
          type: '🐛 Bug Fixes',
        },
      ],
    ])('should handle type as unicode gitmoji', (commit, expected) => {
      const transform = createTransform({});

      expect(transform(commit, defaultContext, defaultOptions)).toEqual(expected);
    });

    it('should show scope display name', () => {
      const transform = createTransform({
        scopeDisplayName: {
          foo: 'module-foo',
        },
      });
      const commit = generateCommit({
        scope: 'foo',
        type: 'feat',
      });

      expect(transform(commit, defaultContext, defaultOptions)).toEqual({
        body: null,
        footer: null,
        hash: null,
        header: '',
        mentions: [],
        merge: null,
        notes: [],
        references: [],
        revert: null,
        scope: 'module-foo',
        subject: null,
        type: '✨ Features',
      });
    });
  });
});
