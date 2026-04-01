import { Command } from 'clipanion';
import { BaseCommand } from './BaseCommand.js';

export class RootCommand extends BaseCommand {
  static override paths = [Command.Default];
  static override usage = Command.Usage({
    description: 'Configurator CLI.',
    details: 'Use the run subcommand to execute a preset.',
  });

  async execute(): Promise<number> {
    this.context.stdout.write(this.cli.usage(null, { detailed: true }));
    return 0;
  }
}
