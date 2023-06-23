import { UserConfigExport } from 'vitest/config';
import { ConfigType } from './type.js';
export declare const configDefaultMap: {
    readonly [T in ConfigType]: UserConfigExport;
};
