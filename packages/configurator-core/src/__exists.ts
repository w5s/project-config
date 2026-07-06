import { constants } from 'node:fs';
import { access } from 'node:fs/promises';

export async function __exists(path: string) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
