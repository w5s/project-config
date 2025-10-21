import * as TsDown from 'tsdown';
import { defaultConfig } from './defaultConfig.js';

type MaybePromise<T> = Promise<T> | T;

function awaitableMap<T, U>(awaitable: Promise<T>, mapFn: (value: T) => U): Promise<U>;
function awaitableMap<T, U>(awaitable: T, mapFn: (value: T) => U): U;
function awaitableMap<T, U>(awaitable: MaybePromise<T>, mapFn: (value: T) => U): MaybePromise<U>;
function awaitableMap<T, U>(awaitable: MaybePromise<T>, mapFn: (value: T) => U): MaybePromise<U> {
  return awaitable != null && typeof (awaitable as any).then === 'function'
    ? (awaitable as any).then(mapFn)
    : mapFn(awaitable as any);
}

const mergeAllWithDefault = (options: TsDown.UserConfig): TsDown.UserConfig =>
  Array.isArray(options)
    ? options.map((_) => ({
        ...defaultConfig,
        ..._,
      }))
    : {
        ...defaultConfig,
        ...options,
      };

export const defineConfig: typeof TsDown.defineConfig = (configOrGetter) =>
  TsDown.defineConfig(
    // @ts-ignore
    typeof configOrGetter === 'function'
      ? (config) => awaitableMap(configOrGetter(config), mergeAllWithDefault)
      : awaitableMap(configOrGetter, mergeAllWithDefault),
  );
