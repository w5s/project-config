import { Command, Option } from 'clipanion';

import { ManagedScript } from '../ManagedScript.js';

export class RootCommand extends Command {
  static override paths = [Command.Default];
  static override usage = Command.Usage({
    description: 'Run a script from the managed-script configuration.',
    details: 'Resolves the script name from --name, MANAGED_SCRIPT_NAME or npm_lifecycle_event, then executes it.',
  });

  readonly cwd = Option.String('--cwd', {
    description: 'Working directory used to resolve configuration and run the script.',
    required: false,
  });

  readonly name = Option.String('--name,-n', {
    description: 'Script name to run (overrides MANAGED_SCRIPT_NAME / npm_lifecycle_event).',
    required: false,
  });

  async execute(): Promise<number> {
    try {
      await ManagedScript.runScript({
        context: {
          cli: this,
        },
        parameters: {
          scriptName: this.name,
        },
      });
      return 0;
    } catch (error) {
      this.context.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
      return 1;
    }
  }
}
