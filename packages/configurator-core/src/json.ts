import { file, type FileOptions, fileSync } from './file.js';

export interface JSONOption<V = JSONValue> extends Omit<FileOptions, 'update'> {
  /**
   * File content mapping function
   */
  readonly update?: ((content: undefined | V) => undefined | V) | undefined;
}

export type JSONValue = Array<JSONValue> | boolean | null | number | string | { [key: string]: JSONValue };

/**
 * Ensure file is present/absent asynchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export async function json<Value>(options: JSONOption<Value>): Promise<void> {
  return file(toFileOption(options));
}

/**
 * Ensure file is present/absent synchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export function jsonSync<Value>(options: JSONOption<Value>): void {
  return fileSync(toFileOption(options));
}

function toFileOption<Value>({ update, ...otherOptions }: JSONOption<Value>): FileOptions {
  return {
    ...otherOptions,

    update:
      update == null
        ? update
        : (content) => {
            const jsonValue = content === '' ? undefined : (JSON.parse(content) as Value);

            return JSON.stringify(update(jsonValue));
          },
  };
}
