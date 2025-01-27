import { exec, execSync } from './exec.js';

export interface YarnConfigOptions {
  /**
   * Configuration key
   */
  readonly key: string;

  /**
   * Option target state
   */
  readonly state: 'present' | 'absent';

  /**
   * File content mapping function
   *
   * @param content
   */
  readonly update?: ((content: string) => string | undefined) | undefined;
}

/**
 * Synchronous version of {@link yarnConfig}
 *
 * @example
 * yarnConfigSync({
 *   key: 'nodeLinker',
 *   state: 'present',
 *   update: (content) => content.replace('node-modules', 'hoisted'),
 * })
 */
export function yarnConfigSync(options: YarnConfigOptions) {
  const { key, state, update } = options;
  if (state === 'present') {
    const { stdout } = execSync('yarn', ['config', 'get', String(key)]);
    execSync('yarn', ['config', 'set', String(key), `${update == null ? '' : update(stdout)}`]);
  } else {
    execSync('yarn', ['config', 'unset']);
  }
}

/**
 * Set/Unset yarn configuration value
 *
 * @example
 * await yarnConfig({
 *   key: 'nodeLinker',
 *   state: 'present',
 *   update: (content) => content.replace('node-modules', 'hoisted'),
 * })
 */
export async function yarnConfig(options: YarnConfigOptions): Promise<void> {
  const { key, state, update } = options;
  if (state === 'present') {
    const { stdout } = await exec('yarn', ['config', 'get', String(key)]);
    await exec('yarn', ['config', 'set', String(key), `${update == null ? '' : update(stdout)}`]);
  } else {
    await exec('yarn', ['config', 'unset']);
  }
}
