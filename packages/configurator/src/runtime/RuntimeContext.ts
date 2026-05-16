import { AsyncLocalStorage } from 'node:async_hooks';
import type { ResolvedConfig } from '../config/ResolvedConfig.js';

export interface RuntimeContext {
  /**
   * Debug mode
   */
  readonly isDebug: boolean;

  /**
   * Dry-run mode (no actual changes will be made)
   */
  readonly isDryRun: boolean;

  /**
   * Log debug messages if debug mode is enabled
   *
   * @param args
   */
  debug: (...args: unknown[]) => void;
}

const storage = new AsyncLocalStorage<RuntimeContext>();

/**
 * @namespace
 */
export const RuntimeContext = {
  storage,
  create(config: ResolvedConfig): RuntimeContext {
    const debug =
      config.debug === true
        ? (...args: unknown[]): void => {
          // Keep the prefix short and consistent for filtering.
            console.debug('[configurator]', ...args);
          }
        : () => {};

    return {
      isDebug: config.debug,
      isDryRun: config.dryRun,
      debug,
    };
  },

  default: Object.freeze({
    isDebug: false,
    isDryRun: false,
    debug: () => {},
  }) satisfies RuntimeContext,

  async run<T>(
    context: RuntimeContext,
    fn: () => T | Promise<T>,
  ): Promise<T> {
    return await storage.run(context, fn);
  },
};
