import { type FileOptions, file, fileSync } from './file.js';

export interface IgnoreFileOptions extends Omit<FileOptions, 'update'> {
  /**
   * File content mapping function where content is represented as lines.
   * When the file does not yet exist, the callback receives `undefined`.
   */
  readonly update?: ((content: string[] | undefined) => string[] | undefined) | undefined;
}

function toFileOption({ update, ...otherOptions }: IgnoreFileOptions): FileOptions {
  return {
    ...otherOptions,

    update:
      update == null
        ? update
        : (content) => {
            const eol = content.includes('\r\n') ? '\r\n' : '\n';
            const lines = content === '' ? undefined : content.split(eol);
            const updatedLines = update(lines);

            return updatedLines == null ? undefined : updatedLines.join(eol);
          },
  };
}

/**
 * Ensure file is present/absent asynchronously with content initialized or modified by line.
 *
 * @example
 * ```ts
 * await ignoreFile({
 *   path: '.gitignore',
 *   update: (lines) => [...(lines ?? []), 'dist'],
 * });
 * ```
 * @param options File target options.
 */
export async function ignoreFile(options: IgnoreFileOptions): Promise<void> {
  return file(toFileOption(options));
}

/**
 * Ensure file is present/absent synchronously with content initialized or modified by line.
 *
 * @example
 * ```ts
 * ignoreFileSync({
 *   path: '.gitignore',
 *   update: (lines) => [...(lines ?? []), 'dist'],
 * });
 * ```
 * @param options File target options.
 */
export function ignoreFileSync(options: IgnoreFileOptions): void {
  return fileSync(toFileOption(options));
}
