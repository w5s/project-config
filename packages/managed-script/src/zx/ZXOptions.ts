import { stripVTControlCharacters } from 'node:util';
import { chalk, log as zxLog } from 'zx';

import type { LogLevel } from '../internal/Logger.js';
import type { ZXDefaultOptions } from '../zx.js';

import { Stdio } from '../internal/Stdio.js';
import { defaultContext } from '../ManagedScript/defaultContext.js';

export type { Options as ZXDefaultOptions } from 'zx';

export interface ZXOptions extends ZXDefaultOptions {
  /**
   *
   */
  logLevel?: LogLevel | undefined;
}

/**
 * @namespace
 */
export const ZXOptions = {
  create(options: Partial<ZXOptions>): Partial<ZXOptions> {
    const { cwd: optionsCwd, env: optionsEnv, logLevel: optionsLogLevel, stdio: optionsStdio, ...optionsRest } = options;
    const env = optionsEnv == null ? process.env : { ...process.env, ...optionsEnv };
    const context = defaultContext({
      env,
      ...(optionsCwd == null ? {} : { cwd: optionsCwd }),
      ...(optionsLogLevel == null ? {} : { logLevel: optionsLogLevel }),
      ...(optionsStdio == null ? {} : { stdio: optionsStdio }),
    });
    const { stderr, stdout } = Stdio.resolve(context.stdio);

    return {
      cwd: context.cwd,
      env: context.env,
      log: (entry) => {
        const target = (entry.kind === 'cmd' || entry.kind === 'stdout' ? stdout : stderr) as NodeJS.WriteStream;
        const colorEnabled = context.color === 'always' || (context.color === 'auto' && autoColor(context.env, target));
        const previousOutput = zxLog.output;
        const previousLevel = chalk.level;
        zxLog.output = colorEnabled
          ? target
          : ({ write: (chunk: string) => target.write(stripVTControlCharacters(chunk)) } as unknown as NodeJS.WriteStream);
        if (colorEnabled && !chalk.level) {
          chalk.level = 1;
        } else if (!colorEnabled) {
          chalk.level = 0;
        }
        try {
          zxLog(entry.kind === 'cmd' && (context.logLevel === 'info' || context.logLevel === 'debug') ? { ...entry, verbose: true } : entry);
        } finally {
        // eslint-disable-next-line ts/no-non-null-assertion
          zxLog.output = previousOutput!;
          chalk.level = previousLevel;
        }
      },
      preferLocal: true,
      quiet: context.logLevel === 'silent',
      stdio: 'inherit',
      verbose: context.logLevel === 'debug',
      ...optionsRest,
    };
  },
};

function autoColor(env: NodeJS.ProcessEnv, stream: NodeJS.WriteStream): boolean {
  if (env['NO_COLOR'] != null && env['NO_COLOR'] !== '') {
    return false;
  }
  const force = env['FORCE_COLOR'];
  return force == null ? stream.isTTY === true : force !== '0' && force !== 'false';
}
