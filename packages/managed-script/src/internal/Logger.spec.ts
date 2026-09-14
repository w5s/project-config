import { PassThrough } from 'node:stream';
import { describe, expect, it } from 'vitest';

import { Logger } from './Logger.js';

function createStream() {
  const stderr = new PassThrough();
  const chunksErr: Array<string> = [];
  stderr.on('data', (chunk: Buffer) => chunksErr.push(chunk.toString()));

  const stdout = new PassThrough();
  const chunksOut: Array<string> = [];
  stdout.on('data', (chunk: Buffer) => chunksOut.push(chunk.toString()));
  return { chunksErr, chunksOut, stderr, stdout };
}

function createTTYStream() {
  const stream = new PassThrough() as PassThrough & { isTTY: boolean };
  stream.isTTY = true;
  return stream;
}

describe(Logger.create, () => {
  it('writes messages at or below the configured level, errors and warnings to stderr, others to stdout', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ level: 'warn', ...streams });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunksErr).toEqual(['an error\n', 'a warning\n']);
    expect(chunksOut).toEqual([]);
  });

  it('writes nothing at the silent level', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ level: 'silent', ...streams });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunksErr).toEqual([]);
    expect(chunksOut).toEqual([]);
  });

  it('writes everything at the debug level, errors and warnings to stderr, info and debug to stdout', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ level: 'debug', ...streams });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunksErr).toEqual(['an error\n', 'a warning\n']);
    expect(chunksOut).toEqual(['an info\n', 'a debug\n']);
  });

  it('colors messages when color is always', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ color: 'always', level: 'info', ...streams });

    logger.info('an info');

    expect(chunksOut).toEqual(['\u001b[32man info\u001b[0m\n']);
    expect(chunksErr).toEqual([]);
  });

  it('does not color messages when color is never', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ color: 'never', level: 'info', ...streams });

    logger.info('an info');

    expect(chunksOut).toEqual(['an info\n']);
    expect(chunksErr).toEqual([]);
  });

  it('colors auto output only for TTY streams', () => {
    const stdout = createTTYStream();
    const chunksOut: Array<string> = [];
    stdout.on('data', (chunk: Buffer) => chunksOut.push(chunk.toString()));
    const logger = Logger.create({ color: 'auto', level: 'info', stderr: new PassThrough(), stdout });

    logger.info('an info');

    expect(chunksOut).toEqual(['\u001b[32man info\u001b[0m\n']);
  });
});
