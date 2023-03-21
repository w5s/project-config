import { describe, expect, it } from 'vitest';
import { gitRawCommitOpts } from './git-raw-commit-opts';

describe('gitRawCommitOpts', () => {
  it('should be {format}', () => {
    expect(gitRawCommitOpts).toMatchSnapshot();
  });
});
