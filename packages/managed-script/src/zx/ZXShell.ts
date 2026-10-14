/* eslint-disable ts/no-shadow */
import type { ProcessOutput, ProcessPromise } from 'zx';

import type { ZXOptions } from './ZXOptions.js';

/**
 * Shell interface with some extensions
 */
export interface ZXShell<S = false, R = S extends true ? ProcessOutput : ProcessPromise> {
  (pieces: TemplateStringsArray, ...args: Array<any>): R;
  <O extends Partial<ZXOptions> = Partial<ZXOptions>, R = O extends {
    sync: true;
  } ? ZXShell<true> : ZXShell>(opts: O): R;
  sync: {
    (pieces: TemplateStringsArray, ...args: Array<any>): ProcessOutput;
    (opts: Partial<Omit<ZXOptions, 'sync'>>): ZXShell<true>;
  };
}
