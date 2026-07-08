import YAML from 'yaml';

import { file, type FileOptions, fileSync } from './file.js';

export interface YAMLOption<V = YAMLValue> extends Omit<FileOptions, 'update'> {
  /**
   * File content mapping function
   */
  readonly update?: ((content: undefined | V) => undefined | V) | undefined;
}

export type YAMLValue = Array<YAMLValue> | boolean | null | number | string | { [key: string]: YAMLValue };

/**
 * Ensure file is present/absent asynchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export async function yaml<Value>(options: YAMLOption<Value>): Promise<void> {
  return file(toFileOption(options));
}

/**
 * Ensure file is present/absent synchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export function yamlSync<Value>(options: YAMLOption<Value>): void {
  return fileSync(toFileOption(options));
}

function toFileOption<Value>({ update, ...otherOptions }: YAMLOption<Value>): FileOptions {
  return {
    ...otherOptions,

    update:
      update == null
        ? update
        : (content) => {
            const yamlValue = content === '' ? undefined : (YAML.parse(content) as Value);

            return YAML.stringify(update(yamlValue));
          },
  };
}
