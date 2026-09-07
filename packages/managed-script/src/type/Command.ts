import type { CommandContext } from './CommandContext.js';

export type ManagedScriptCommand =
  | ManagedScriptCommand.RunScript;

export namespace ManagedScriptCommand {
  export interface Base<TName extends string, TParameters extends object> {
    /**
     * Name of the command.
     */
    readonly _: TName;

    /**
     * Context in which the command is executed.
     */
    readonly context: CommandContext;

    /**
     * Parameters provided to the command.
     */
    readonly parameters: Readonly<TParameters>;
  }

  export type Parameters<T extends Base<string, object>> = Omit<T, '_'>;

  export interface RunScript extends Base<'RunScript', {
    scriptName: string | undefined;
  }> {}
}

export const ManagedScriptCommand = Object.freeze({
  RunScript: (args: ManagedScriptCommand.Parameters<ManagedScriptCommand.RunScript>): ManagedScriptCommand.RunScript => ({
    _: 'RunScript' as const,
    ...args,
  }),
});
