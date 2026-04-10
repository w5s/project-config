import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';
import type { UserConfig } from '../config/UserConfig.js';

const booleanFromEnv = z.preprocess((value) => {
  if (typeof value !== 'string') {
    return value;
  }

  const normalized = value.trim().toLowerCase();
  if (normalized.length === 0) {
    return undefined;
  }

  if (['true', '1', 'yes'].includes(normalized)) {
    return true;
  }

  if (['false', '0', 'no'].includes(normalized)) {
    return false;
  }

  return value;
}, z.boolean().optional());

export function parseEnv(env: NodeJS.ProcessEnv): UserConfig {
  const validated = createEnv({
    server: {
      CONFIGURATOR_PRESET: z.string().optional(),
      CONFIGURATOR_DEBUG: booleanFromEnv,
      CONFIGURATOR_DRY_RUN: booleanFromEnv,
    },
    runtimeEnv: env,
    emptyStringAsUndefined: true,
    onValidationError: ({ issues }) => {
      const errors = issues.map((issue) => issue.message).join('\n');
      throw new Error(`Invalid environment variables:\n${errors}`);
    },
  });

  return {
    preset: validated.CONFIGURATOR_PRESET,
    debug: validated.CONFIGURATOR_DEBUG,
    dryRun: validated.CONFIGURATOR_DRY_RUN,
  };
}
