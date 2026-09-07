import { ManagedScriptCommand } from '../type.js';
import { execute, type ExecuteCommandParameters } from './execute.js';

export async function runScript(options: ExecuteCommandParameters<ManagedScriptCommand.RunScript>) {
  return execute({
    _: 'RunScript',
    ...options,
  });
}
