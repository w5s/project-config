/* cSpell: disable */
import type { Buffer } from 'node:buffer';

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
  it('writes all messages at or below the configured level to stderr', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ level: 'warn', ...streams });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunksErr).toEqual(['managed-script: error: an error\n', 'managed-script: warning: a warning\n']);
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

  it('writes every message to stderr at the debug level', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ level: 'debug', ...streams });

    logger.error('an error');
    logger.warn('a warning');
    logger.info('an info');
    logger.debug('a debug');

    expect(chunksErr).toEqual([
      'managed-script: error: an error\n',
      'managed-script: warning: a warning\n',
      'managed-script: an info\n',
      'managed-script: debug: a debug\n',
    ]);
    expect(chunksOut).toEqual([]);
  });

  it('colors messages when color is always', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ color: 'always', level: 'info', ...streams });

    logger.warn('a warning');

    expect(chunksOut).toEqual([]);
    expect(chunksErr).toEqual([`managed-script: \u{1B}[33mwarning\u{1B}[0m: a warning\n`]);
  });

  it('does not color messages when color is never', () => {
    const { chunksErr, chunksOut, ...streams } = createStream();
    const logger = Logger.create({ color: 'never', level: 'info', ...streams });

    logger.info('an info');

    expect(chunksOut).toEqual([]);
    expect(chunksErr).toEqual(['managed-script: an info\n']);
  });

  it('colors auto output only for TTY streams', () => {
    const stderr = createTTYStream();
    const chunksErr: Array<string> = [];
    stderr.on('data', (chunk: Buffer) => chunksErr.push(chunk.toString()));
    const logger = Logger.create({ color: 'auto', level: 'info', stderr });

    logger.error('an error');

    expect(chunksErr).toEqual(['managed-script: \u{1B}[31merror\u{1B}[0m: an error\n']);
  });
});
