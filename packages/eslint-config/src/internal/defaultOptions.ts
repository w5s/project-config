import { type PluginOptionsBase, StylisticConfig } from '../type.js';

/**
 * Return a new plugin option object with default values
 *
 * @param options
 */
export function defaultPluginOptions<T extends PluginOptionsBase<any>>(options: T): Omit<T, 'namespace' | 'recommended' | 'stylistic'> & {
  namespace: Exclude<PluginOptionsBase<any>['namespace'], undefined>;
  recommended: Exclude<PluginOptionsBase<any>['recommended'], undefined>;
  stylistic: StylisticConfig;
} {
  return {
    ...options,
    namespace: options.namespace ?? 'w5s',
    recommended: options.recommended ?? true,
    stylistic: StylisticConfig.from(options.stylistic ?? true),
  };
}
