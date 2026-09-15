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
  readonly stderr: NodeJS.WritableStream;
  readonly stdout: NodeJS.WritableStream;
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
  create({ color = 'auto', level, stderr, stdout }: CreateLoggerOptions): Logger {
    const write = (messageLevel: LogLevel, message: string) => {
      if (!(logLevelRank[messageLevel] <= logLevelRank[level])) {
        return;
      }
      // write to stderr for warnings and errors
      const outputStream = logLevelRank[messageLevel] <= logLevelRank.warn ? stderr : stdout;
      const shouldColor = color === 'always' || (color === 'auto' && 'isTTY' in outputStream && outputStream.isTTY === true);
      const colorCode = {
        debug: '\u{1B}[36m',
        error: '\u{1B}[31m',
        info: '\u{1B}[32m',
        silent: '',
        warn: '\u{1B}[33m',
      }[messageLevel];
      outputStream.write(`${shouldColor ? `${colorCode}${message}\u{1B}[0m` : message}\n`);
    };

    return {
      debug: (message) => write('debug', message),
      error: (message) => write('error', message),
      info: (message) => write('info', message),
      warn: (message) => write('warn', message),
    };
  },
};
