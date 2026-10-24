import type { StdioOptions } from 'node:child_process';

import { Writable } from 'node:stream';

export interface StdioStreams {
  readonly stderr: NodeJS.WritableStream;
  readonly stdout: NodeJS.WritableStream;
}

function createSink(): NodeJS.WritableStream {
  return new Writable({
    write(_chunk, _encoding, callback) {
      callback();
    },
  });
}

function resolveEntry(entry: StdioOptions[number] | undefined, fd: 1 | 2): NodeJS.WritableStream {
  const parent = fd === 1 ? process.stdout : process.stderr;
  if (entry === 'inherit' || entry === fd) {
    return parent;
  }
  // `ignore`, `pipe`, `ipc`, other file descriptors and unset entries have no stream to write to
  return (typeof entry === 'object' && entry != null && 'write' in entry && typeof entry.write === 'function') ? entry as unknown as NodeJS.WritableStream : createSink();
}

/**
 * Helpers for Node.js {@link StdioOptions}
 *
 * @namespace
 */
export const Stdio = {
  /**
   * Resolve the writable streams (stdout is index 1, stderr is index 2) described by `stdio`.
   *
   * @param stdio
   */
  resolve(stdio: StdioOptions): StdioStreams {
    return typeof stdio === 'string' ? { stderr: resolveEntry(stdio, 2), stdout: resolveEntry(stdio, 1) } : { stderr: resolveEntry(stdio[2], 2), stdout: resolveEntry(stdio[1], 1) };
  },
};
