/// <reference types="node" />
export type JSONValue = null | number | string | boolean | JSONValue[] | {
    [key: string]: JSONValue;
};
export interface JSONOption<V = JSONValue> {
    /**
     * File path
     */
    readonly path: string;
    /**
     * File target state
     */
    readonly state: 'present' | 'absent';
    /**
     * File content mapping function
     *
     * @param content
     */
    readonly update?: (content: V | undefined) => V | undefined;
    /**
     * File encoding
     */
    readonly encoding?: BufferEncoding;
}
/**
 * Ensure file is present/absent asynchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export declare function json<Value>(options: JSONOption<Value>): Promise<void>;
/**
 * Ensure file is present/absent synchronously with content value initialized or modified with `update`
 *
 * @param options
 */
export declare function jsonSync<Value>(options: JSONOption<Value>): void;
//# sourceMappingURL=json.d.ts.map