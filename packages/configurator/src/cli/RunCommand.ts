import { Command } from 'clipanion';
import { ConfigLoader } from '../infrastructure/ConfigLoader.js';
import { EnvLoader } from '../infrastructure/EnvLoader.js';
import { resolveConfig } from '../application/resolveConfig.js';
import { runPreset } from '../application/runPreset.js';
import { BaseCommand } from './BaseCommand.js';

export class RunCommand extends BaseCommand {
  static override paths = [['run']];
  static override usage = Command.Usage({
    description: 'Run a configurator preset.',
    details: 'Loads a configurator config, resolves the preset, and executes it.',
  });

  async execute(): Promise<number> {
    try {
      const cwd = process.cwd();
      const loaded = await ConfigLoader.load({ cwd });
      const env = EnvLoader.load(process.env);
      const resolved = resolveConfig({ preset: this.preset, debug: this.debug, dryRun: this.dryRun }, env, loaded);

      await runPreset(resolved);
      return 0;
    } catch (error) {
      this.context.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
      return 1;
    }
  }
}
