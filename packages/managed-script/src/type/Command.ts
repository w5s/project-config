import type { CommandContext } from './CommandContext.js';

export type Command =
  | Command.RunScript;

export namespace Command {
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

export const Command = Object.freeze({
  RunScript: (args: Command.Parameters<Command.RunScript>): Command.RunScript => ({
    _: 'RunScript' as const,
    ...args,
  }),
});
