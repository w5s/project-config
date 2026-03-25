import { accessSync, constants } from 'node:fs';

export function __existsSync(path: string) {
  try {
    accessSync(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
