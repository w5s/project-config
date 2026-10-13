import type { ResolvedConfig } from '../type/ResolvedConfig.js';
import type { ExecutorTarget } from './Executor.js';

const shellSafe = /^[\w@%+=:,./-]+$/;

export interface ScriptInvocation {
  /**
   * What the executor runs
   */
  readonly target: ExecutorTarget;
}

/**
 * @namespace
 */
export const ScriptInvocation = {
  /**
   * Builds the command line shown to the user and the target passed to the executor.
   * A `run` script stays one command string. A `runner` script receives real arguments.
   *
   * @param script
   * @param scriptArgs
   */
  create(script: ResolvedConfig.Script, scriptArgs: ReadonlyArray<string>): ScriptInvocation {
    if (script.runner != null) {
      const args = [...script.args, ...scriptArgs];
      return {
        target: { args, runner: script.runner },
      };
    }

    const run = [script.run, ...scriptArgs.map((argument) => quoteShell(argument))].join(' ');
    return {
      target: { run },
    };
  },

  /**
   * Returns the command line as a string suitable for display.
   *
   * @param self
   */
  format(self: ScriptInvocation): string {
    const { args, run, runner } = self.target;
    return runner == null ? run : formatArgv([runner, ...args ?? []]);
  },
};

function formatArgv(argv: ReadonlyArray<string>): string {
  return argv.map((part) => shellSafe.test(part) ? part : quoteShell(part)).join(' ');
}

function quoteShell(value: string): string {
  return `'${value.replaceAll("'", String.raw`'\''`)}'`;
}
