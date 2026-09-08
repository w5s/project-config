import { PassThrough } from 'node:stream';
import { describe, expect, it } from 'vitest';

import { Logger } from './Logger.js';

function createStream() {
  const stream = new PassThrough();
  const chunks: Array<string> = [];
  stream.on('data', (chunk: Buffer) => chunks.push(chunk.toString()));
  return { chunks, stream };
}

describe(Logger.create, () => {
  it('writes messages at or below the configured level', () => {
    const { chunks, stream } = createStream();
    const logger = Logger.create({ level: 'warn', stream });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunks).toEqual(['an error\n', 'a warning\n']);
  });

  it('writes nothing at the silent level', () => {
    const { chunks, stream } = createStream();
    const logger = Logger.create({ level: 'silent', stream });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunks).toEqual([]);
  });

  it('writes everything at the debug level', () => {
    const { chunks, stream } = createStream();
    const logger = Logger.create({ level: 'debug', stream });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunks).toEqual(['an error\n', 'a warning\n', 'an info\n', 'a debug\n']);
  });
});
