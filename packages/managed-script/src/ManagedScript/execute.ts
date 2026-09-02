import type { Command } from '../type.js';

import { ConfigLoader } from '../infrastructure/ConfigLoader.js';
import { Executor } from '../infrastructure/Executor.js';
import { ScriptNameResolver } from '../infrastructure/ScriptNameResolver.js';
import { defaultContext } from './defaultContext.js';
import { resolveScripts } from './resolveScripts.js';

const handlers = {
  RunScript: async (command: Command.RunScript): Promise<number> => {
    const { context: { cwd, env }, parameters: { scriptName } } = command;
    const loaded = await ConfigLoader.load({ cwd });
    const resolved = resolveScripts(loaded);
    const { scripts } = resolved;

    const name = ScriptNameResolver.resolve({ env, scriptName: scriptName });
    if (name == null) {
      throw new Error(
        'Unable to resolve the script name. Set it with --name,-n, the MANAGED_SCRIPT_NAME environment variable, or run through an npm/pnpm script (npm_lifecycle_event).',
      );
    }

    const script = scripts[name];
    if (script == null) {
      const available = Object.keys(scripts);
      throw new Error(
        `No script named "${name}" found in the configuration.${
          available.length > 0 ? ` Available scripts: ${available.join(', ')}.` : ' No scripts are configured.'
        }`,
      );
    }

    // Prepare the environment variables for the script execution.
    const scriptEnv = {
      MANAGED_SCRIPT_CONFIG_DIR: script.configDir,
      MANAGED_SCRIPT_CONFIG_FILE: script.configFile,
      MANAGED_SCRIPT_NAME: name,
    };

    const exitCode = await Executor.run(script.command, { cwd, env: scriptEnv });

    if (exitCode !== 0) {
      throw new Error(`Script "${name}" exited with code ${exitCode}.`);
    }

    return exitCode;
  },
} satisfies {
  [K in Command['_']]: (command: Extract<Command, { _: K }>) => Promise<any>;
};

export type ExecuteCommand<T extends Command> = Omit<T, 'context'> & {
  /**
   * Context is optional
   */
  context?: Partial<Command['context']>;
};

/**
 * Extract command parameter from execute handler
 */
export type ExecuteCommandParameters<T extends Command> = Omit<Parameters<typeof execute<T>>[0], '_'>;

/**
 * Dispatch the command to the appropriate handler based on its type.
 *
 * @param command
 */
export async function execute<T extends Command>(command: ExecuteCommand<T>): Promise<Awaited<ReturnType<typeof handlers[T['_']]>>> {
  const context = defaultContext(command.context);
  // @ts-ignore we know this works
  return handlers[command._]({
    ...command,
    context,
  });
}
