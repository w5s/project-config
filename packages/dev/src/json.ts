import { FileOptions, file, fileSync } from './file.js';

export type JSONValue = null | number | string | boolean | JSONValue[] | { [key: string]: JSONValue };

export interface JSONOption<V = JSONValue> {
  /**
   * File path
   */
  readonly path: string;
  /**
   * File target state
   */
  readonly state: 'present' | 'absent';
  /**
   * File content mapping function
   *
   * @param content
   */
  readonly update?: (content: V | undefined) => V | undefined;
  /**
   * File encoding
   */
  readonly encoding?: BufferEncoding;
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
