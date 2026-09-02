import { Builtins, Cli } from 'clipanion';

import { meta } from '../meta.js';
import { RootCommand } from './RootCommand.js';

export async function runCLI(): Promise<void> {
  const cli = new Cli({
    binaryLabel: meta.binaryLabel,
    binaryName: meta.binaryName,
    binaryVersion: meta.binaryVersion,
  });

  cli.register(RootCommand);
  cli.register(Builtins.HelpCommand);
  cli.register(Builtins.VersionCommand);

  try {
    await cli.runExit(process.argv.slice(2), {
      stderr: process.stderr,
      stdin: process.stdin,
      stdout: process.stdout,
    });
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}
