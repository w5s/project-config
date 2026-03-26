import { Builtins, Cli } from 'clipanion';
import { RootCommand } from './RootCommand.js';
import { RunCommand } from './RunCommand.js';
import { meta } from '../meta.js';

export async function runCLI(): Promise<void> {
  const cli = new Cli({
    binaryLabel: 'W5S Configurator',
    binaryName: meta.binaryName,
    binaryVersion: meta.binaryVersion,
  });

  cli.register(RootCommand);
  cli.register(RunCommand);
  cli.register(Builtins.HelpCommand);
  cli.register(Builtins.VersionCommand);
  return cli.runExit(process.argv.slice(2), {
    stderr: process.stderr,
    stdin: process.stdin,
    stdout: process.stdout,
  }).catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
};
