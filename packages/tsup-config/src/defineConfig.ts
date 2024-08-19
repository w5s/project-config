/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import TsUp from 'tsup';
import { defaultConfig } from './defaultConfig.js';

type MaybePromise<T> = Promise<T> | T;

function awaitableMap<T, U>(awaitable: Promise<T>, mapFn: (value: T) => U): Promise<U>;
function awaitableMap<T, U>(awaitable: T, mapFn: (value: T) => U): U;
function awaitableMap<T, U>(awaitable: MaybePromise<T>, mapFn: (value: T) => U): MaybePromise<U>;
function awaitableMap<T, U>(awaitable: MaybePromise<T>, mapFn: (value: T) => U): MaybePromise<U> {
  return awaitable != null && typeof (awaitable as any).then === 'function'
    ? // eslint-disable-next-line promise/prefer-await-to-then
      (awaitable as any).then(mapFn)
    : mapFn(awaitable as any);
}

const mergeWithDefault = (options: TsUp.Options): TsUp.Options => ({
  ...defaultConfig,
  ...options,
});

const mergeAllWithDefault = (options: TsUp.Options | Array<TsUp.Options>): TsUp.Options | Array<TsUp.Options> =>
  Array.isArray(options) ? options.map(mergeWithDefault) : mergeWithDefault(options);

export const defineConfig: typeof TsUp.defineConfig = (configOrGetter) =>
  TsUp.defineConfig(
    typeof configOrGetter === 'function'
      ? (config) => awaitableMap(configOrGetter(config), mergeAllWithDefault)
      : awaitableMap(configOrGetter, mergeAllWithDefault)
  );
