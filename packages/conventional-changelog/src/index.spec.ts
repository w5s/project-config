import { describe, expect, it } from 'vitest';
import config from './index.js';

describe('conventional-changelog', () => {
  it('should export data', () => {
    expect(config).toEqual({
      Emoji: expect.any(Object),
      GitmojiCode: expect.any(Object),
      gitRawCommitOpts: {
        format: expect.any(String),
      },
      parserOpts: expect.objectContaining({
        headerPattern: expect.any(RegExp),
      }),
      writerOpts: expect.objectContaining({
        commitGroupsSort: expect.any(String),
        commitPartial: expect.any(String),
      }),
      recommendedBumpOpts: expect.objectContaining({
        parserOpts: expect.any(Object),
        whatBump: expect.any(Function),
      }),
    });
  });
});
