import { describe, expect, it } from 'vitest';
import { gitRawCommitOpts } from './git-raw-commit-opts.js';

describe('gitRawCommitOpts', () => {
  it('should be {format}', () => {
    expect(gitRawCommitOpts).toMatchSnapshot();
  });
});
