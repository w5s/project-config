import { log as zxLog } from 'zx';

import type { LogLevel } from '../internal/Logger.js';
import type { ZXOptions } from './ZXOptions.js';

import { Logger } from '../internal/Logger.js';
import { defaultContext } from '../ManagedScript/defaultContext.js';

export function defaultZXOptions(options: Partial<ZXOptions> & { logLevel?: LogLevel | undefined; stderr?: NodeJS.WritableStream | undefined; stdout?: NodeJS.WritableStream | undefined }): Partial<ZXOptions> {
  const { cwd: optionsCwd, env: optionsEnv, logLevel: optionsLogLevel, stderr: optionsStderr, stdout: optionsStdout, ...optionsRest } = options;
  const env = optionsEnv == null ? process.env : { ...process.env, ...optionsEnv };
  const context = defaultContext({
    env,
    ...(optionsCwd == null ? {} : { cwd: optionsCwd }),
    ...(optionsLogLevel == null ? {} : { logLevel: optionsLogLevel }),
    ...(optionsStderr == null ? {} : { stderr: optionsStderr }),
    ...(optionsStdout == null ? {} : { stdout: optionsStdout }),
  });
  const logger = Logger.create({ level: context.logLevel, stderr: context.stderr, stdout: context.stdout });

  return {
    cwd: context.cwd,
    env: context.env,
    log: (entry) => {
      if (entry.kind === 'cmd') {
        logger.info(entry.cmd);
        return;
      }
      zxLog(entry);
    },
    preferLocal: true,
    quiet: context.logLevel === 'silent',
    stdio: 'inherit',
    verbose: context.logLevel === 'debug',
    ...optionsRest,
  };
}
