import { bool, cleanEnv } from 'envalid';

import { lazy } from '../internal/lazy.js';

const envSchema = {
  CI: bool({ default: false }),
  CONTINUOUS_INTEGRATION: bool({ default: false }),
};

const getEnvClean = lazy(() =>
  cleanEnv(process.env, envSchema, {
    reporter: null,
  }),
);

/**
 * Determines if the current environment is a CI (Continuous Integration) environment.
 * Checks the `CI` and `CONTINUOUS_INTEGRATION` environment variables to determine if the current environment is a CI environment.
 *
 * @example
 * ```ts
 * const ci = isCI();
 * ```
 * @returns `true` if the current environment is a CI environment, otherwise `false`
 */
export const isCI = lazy(() => getEnvClean().CI || getEnvClean().CONTINUOUS_INTEGRATION);
