import { Command } from '../type.js';
import { execute, type ExecuteCommandParameters } from './execute.js';

export async function runScript(options: ExecuteCommandParameters<Command.RunScript>) {
  return execute({
    _: 'RunScript',
    ...options,
  });
}
