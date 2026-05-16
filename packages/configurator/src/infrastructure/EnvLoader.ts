import type { UserConfig } from '../config/UserConfig.js';
import { parseEnv } from './EnvSchema.js';

/**
 * @namespace
 */
export const EnvLoader = {
  load(env: NodeJS.ProcessEnv): UserConfig {
    return parseEnv(env);
  },
};
