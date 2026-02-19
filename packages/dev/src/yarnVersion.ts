import { exec, execSync } from './exec.js';

export type YarnVersionKind = 'berry' | 'classic';

export interface YarnVersionOptions {
  /**
   * Option target state
   */
  readonly state: 'present' | 'absent';

  /**
   * Version mapping function
   *
   */
  readonly update?: (() => YarnVersionKind | undefined) | undefined;
}

/**
 * Synchronous version of {@link yarnVersion}
 *
 * @param options
 * @example
 * yarnVersionSync({
 *   state: 'present',
 *   update: () => 'berry', // or 'classic'
 * })
 */
export function yarnVersionSync(options: YarnVersionOptions) {
  const { state, update } = options;
  if (state === 'present') {
    execSync('yarn', ['set', 'version', `${update == null ? 'berry' : update()}`]);
  } else {
    // TODO: remove yarn.lock
    throw new Error('Not implemented');
  }
}

/**
 * Set/Unset yarn configuration value
 *
 * @param options
 * @example
 * await yarnVersion({
 *   state: 'present',
 *   update: () => 'berry', // or 'classic'
 * })
 */
export async function yarnVersion(options: YarnVersionOptions): Promise<void> {
  const { state, update } = options;
  if (state === 'present') {
    await exec('yarn', ['set', 'version', `${update == null ? 'berry' : update()}`]);
  } else {
    // TODO: remove yarn.lock
    throw new Error('Not implemented');
  }
}
