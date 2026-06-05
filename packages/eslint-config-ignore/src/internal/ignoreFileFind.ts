import nodePath from 'node:path';
import { findUp } from 'find-up';

export async function ignoreFileFind(cwd: string): Promise<Array<string>> {
  const files = await Promise.all(
    [
      findUp(nodePath.join('', '.gitignore'), { cwd }),
      // TODO: refactor as generic exploration
      findUp(nodePath.join('android', '.gitignore'), { cwd }),
      findUp(nodePath.join('ios', '.gitignore'), { cwd }),
    ],
  );

  return files
    .filter((filePath): filePath is string => filePath !== undefined)
    .map((filePath) => nodePath.relative(cwd, filePath));
}
