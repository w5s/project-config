import path from 'node:path';
import { getRootPath } from './getRootPath.js';

export function getTempPath() {
  return path.join(getRootPath(), '.temp');
}
