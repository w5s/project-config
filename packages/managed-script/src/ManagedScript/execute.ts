import type { ManagedScriptCommand } from '../type.js';

import { ConfigLoader } from '../infrastructure/ConfigLoader.js';
import { Executor } from '../infrastructure/Executor.js';
import { ScriptNameResolver } from '../infrastructure/ScriptNameResolver.js';
import { ManagedScriptEnv } from '../ManagedScriptEnv.js';
import { defaultContext } from './defaultContext.js';
import { resolveScripts } from './resolveScripts.js';

const handlers = {
  RunScript: async (command: ManagedScriptCommand.RunScript): Promise<number> => {
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
      [ManagedScriptEnv.ConfigDir]: script.configDir,
      [ManagedScriptEnv.ConfigFile]: script.configFile,
      [ManagedScriptEnv.Name]: name,
    };

    const exitCode = await Executor.run(script.command, { cwd, env: scriptEnv });

    if (exitCode !== 0) {
      throw new Error(`Script "${name}" exited with code ${exitCode}.`);
    }

    return exitCode;
  },
} satisfies {
  [K in ManagedScriptCommand['_']]: (command: Extract<ManagedScriptCommand, { _: K }>) => Promise<any>;
};

export type ExecuteCommand<T extends ManagedScriptCommand> = Omit<T, 'context'> & {
  /**
   * Context is optional
   */
  context?: Partial<ManagedScriptCommand['context']>;
};

/**
 * Extract command parameter from execute handler
 */
export type ExecuteCommandParameters<T extends ManagedScriptCommand> = Omit<Parameters<typeof execute<T>>[0], '_'>;

/**
 * Dispatch the command to the appropriate handler based on its type.
 *
 * @param command
 */
export async function execute<T extends ManagedScriptCommand>(command: ExecuteCommand<T>): Promise<Awaited<ReturnType<typeof handlers[T['_']]>>> {
  const context = defaultContext(command.context);
  // @ts-ignore we know this works
  return handlers[command._]({
    ...command,
    context,
  });
}
