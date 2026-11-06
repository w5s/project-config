import { type Agent, type Command, type ResolveCommandOptions, type ResolvedCommand } from 'package-manager-detector';

import { npmCommand } from './npmCommand.js';

export function npmCommandOrThrow(agent: Agent, command: Command, args: Array<string>, options?: ResolveCommandOptions): ResolvedCommand {
  const resolved = npmCommand(agent, command, args, options);
  if (resolved == null) {
    throw new Error(`Could not resolve "${command}" command for package manager "${agent}"`);
  }
  return resolved;
}
