/* eslint-disable import/no-import-module-exports */
import { gitRawCommitOpts } from './git-raw-commit-opts';
import { parserOpts } from './parser-opts';
import { recommendedBumpOpts } from './recommended-bump-opts';
import { writerOpts } from './writer-opts';

export default {
  parserOpts,
  writerOpts,
  recommendedBumpOpts,
  gitRawCommitOpts,
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
module.exports = exports.default;
