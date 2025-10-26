import TsUp from 'tsup';
import { defaultConfig } from './defaultConfig.js';
function awaitableMap(awaitable, mapFn) {
    return awaitable != null && typeof awaitable.then === 'function'
        ? awaitable.then(mapFn)
        : mapFn(awaitable);
}
const mergeWithDefault = (options) => ({
    ...defaultConfig,
    ...options,
});
const mergeAllWithDefault = (options) => Array.isArray(options) ? options.map(mergeWithDefault) : mergeWithDefault(options);
export const defineConfig = (configOrGetter) => TsUp.defineConfig(typeof configOrGetter === 'function'
    ? (config) => awaitableMap(configOrGetter(config), mergeAllWithDefault)
    : awaitableMap(configOrGetter, mergeAllWithDefault));
