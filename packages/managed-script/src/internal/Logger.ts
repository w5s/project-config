import { meta } from '../meta.js';

export type ColorMode = 'always' | 'auto' | 'never';
export type LogLevel = 'debug' | 'error' | 'info' | 'silent' | 'warn';

/**
 * Rank order used to compare log levels, higher means more verbose.
 */
const logLevelRank: Record<LogLevel, number> = {
  debug: 4,
  error: 1,
  info: 3,
  silent: 0,
  warn: 2,
};

export interface CreateLoggerOptions {
  readonly color?: ColorMode;
  readonly level: LogLevel;

  /**
   * Program name used as message prefix (default: binary name)
   */
  readonly name?: string;
  readonly stderr: NodeJS.WritableStream;
  readonly stdout?: NodeJS.WritableStream | undefined;
}

export interface Logger {
  debug(message: string): void;
  error(message: string): void;
  info(message: string): void;
  warn(message: string): void;
}

/**
 * Creates a logger writing to `stream`, filtering out messages above the configured `level`.
 */
export const Logger = {
  create({ color = 'auto', level, name = meta.binaryName, stderr }: CreateLoggerOptions): Logger {
    const write = (messageLevel: LogLevel, message: string) => {
      if (!(logLevelRank[messageLevel] <= logLevelRank[level])) {
        return;
      }
      // Keep stdout free for command output that may be consumed by another process.
      const outputStream = stderr;
      const shouldColor = color === 'always' || (color === 'auto' && 'isTTY' in outputStream && outputStream.isTTY === true);
      const colorCode = {
        debug: '\u{1B}[36m',
        error: '\u{1B}[31m',
        info: '',
        silent: '',
        warn: '\u{1B}[33m',
      }[messageLevel];
      // Unix convention: `program: [level: ]message`, info has no level label
      const label = { debug: 'debug', error: 'error', info: '', silent: '', warn: 'warning' }[messageLevel];
      const coloredLabel = shouldColor && colorCode !== '' ? `${colorCode}${label}\u{1B}[0m` : label;
      const prefix = label === '' ? `${name}: ` : `${name}: ${coloredLabel}: `;
      outputStream.write(`${prefix}${message}\n`);
    };

    return {
      debug: (message) => write('debug', message),
      error: (message) => write('error', message),
      info: (message) => write('info', message),
      warn: (message) => write('warn', message),
    };
  },
};
