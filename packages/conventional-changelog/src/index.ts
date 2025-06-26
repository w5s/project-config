import { gitRawCommitOpts } from './git-raw-commit-opts.js';
import { createParserOpts } from './parser.js';
import { whatBump } from './whatBump.js';
import { createWriterOpts } from './writer.js';

export { Emoji, GitmojiCode } from './gitmoji.js';

// eslint-disable-next-line import/no-default-export
export default async function createPreset() {
  return {
    gitRawCommitOpts,
    parser: createParserOpts(),
    writer: await createWriterOpts(),
    whatBump,
  };
}
