import { file, type FileOptions, fileSync } from './file.js';

const reToolVersion = /\s+/;

/**
 * Regular expression to split tool and version
 */
export type ToolVersions = Record<string, string>;

export interface ToolVersionsOption extends Omit<FileOptions, 'path' | 'update'>, Partial<Pick<FileOptions, 'path'>> {
  /**
   * File content mapping function
   */
  readonly update?: ((content: ToolVersions | undefined) => ToolVersions | undefined) | undefined;
}

export function toolVersions(options: ToolVersionsOption) {
  return file(toFileOption(options));
}

export function toolVersionsSync(options: ToolVersionsOption) {
  return fileSync(toFileOption(options));
}

function toFileOption({ update, ...otherOptions }: ToolVersionsOption): FileOptions {
  return {
    ...otherOptions,
    path: otherOptions.path ?? '.tool-versions',
    update:
      update == null
        ? update
        : (content) => {
            const eol = '\n';
            const lines = content.split(eol);
            const parsed = Object.fromEntries(
              (function* () {
                for (const line of lines) {
                  const [tool, value] = line.split(reToolVersion, 2);
                  if (tool) {
                    yield [tool, value ?? ''];
                  }
                }
              }()),
            );
            const updated = update ? update(parsed) : parsed;
            if (updated === undefined) return updated;

            const formatted = Object.entries(updated)
              .map(([tool, value]) => `${tool} ${value}`)
              .join(eol);
            return formatted;
          },
  };
}
