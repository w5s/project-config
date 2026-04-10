import { RuntimeContext } from './RuntimeContext.js';

export type { ResolvedConfig } from '../config/ResolvedConfig.js';

export function useRuntimeContext(): RuntimeContext {
  return RuntimeContext.storage.getStore() ?? RuntimeContext.default;
}
