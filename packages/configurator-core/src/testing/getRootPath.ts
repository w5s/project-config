import path from 'node:path';
import { fileURLToPath } from 'node:url';

const _dirname = path.dirname(fileURLToPath(import.meta.url));
let rootPath: string | undefined = undefined;

export function getRootPath() {
  return rootPath ?? (rootPath = path.resolve(_dirname, '../../../..'));// we use renovate.json to find root
}
