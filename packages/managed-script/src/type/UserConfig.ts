import type { InputConfig } from 'c12';

export interface UserConfig extends InputConfig<{
  readonly scripts?: Record<string, string> | undefined;
}> {}
