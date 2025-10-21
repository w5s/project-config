import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';
function awaitableMap(awaitable, mapFn) {
    return awaitable != null && typeof awaitable.then === 'function'
        ? awaitable.then(mapFn)
        : mapFn(awaitable);
}
const mergeAllWithDefault = (options) => Array.isArray(options)
    ? options.map((_) => ({
        ...defaultConfig,
        ..._,
    }))
    : {
        ...defaultConfig,
        ...options,
    };
export const defineConfig = (configOrGetter) => TsDown.defineConfig(
// @ts-ignore
typeof configOrGetter === 'function'
    ? (config) => awaitableMap(configOrGetter(config), mergeAllWithDefault)
    : awaitableMap(configOrGetter, mergeAllWithDefault));
