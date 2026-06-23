import path from 'node:path';
import { afterAll, beforeAll } from 'vitest';
import { mkdir, rm } from 'node:fs/promises';
import { getTempPath } from './getTempPath.js';

export function getTestPath(prefix: string, remove = true) {
  const returnValue = path.join(getTempPath(), prefix + Math.random().toString(36));
  if (remove) {
    afterAll(async () => {
      try {
        await rm(returnValue, { recursive: true });
      } catch {
      /* empty */
      }
    });
  }
  beforeAll(async () => {
    try {
      await mkdir(returnValue, { recursive: true });
    } catch {
      /* empty */
    }
  });
  return returnValue;
}
