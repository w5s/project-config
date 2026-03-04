import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';
export function defineConfig(optionsOrFn) {
    // @ts-ignore
    return TsDown.defineConfig(typeof optionsOrFn === 'function'
        ? (config, context) => optionsOrFn(TsDown.mergeConfig(defaultConfig, config), context)
        : TsDown.mergeConfig(defaultConfig, optionsOrFn));
}
