import type { PluginOptionsBase } from '../type.js';

/**
 * withDefaultFiles
 *
 * @param options The options to process.
 * @param defaultFiles The default files to apply.
 * @returns An array of strings representing the combined files.
 */
export function withDefaultFiles(options: PluginOptionsBase<any>['files'], defaultFiles: Array<string>): Array<string> {
  return typeof options === 'function' ? options(defaultFiles) : [...(options == null ? [] : options.flat()), ...defaultFiles];
}
