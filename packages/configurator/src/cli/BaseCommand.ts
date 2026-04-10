import { Command, Option } from 'clipanion';

export abstract class BaseCommand extends Command {
  readonly preset = Option.String('--preset,-p', {
    description: 'Preset module/package to load.',
    required: false,
  });

  readonly debug = Option.Boolean('--debug,-g', {
    description: 'Debug mode.',
    required: false,
  });

  readonly dryRun = Option.Boolean('--dry-run', {
    description: 'Preview changes without mutating files.',
    required: false,
  });
}
