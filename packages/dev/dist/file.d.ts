export interface FileOptions {
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
    readonly update?: (content: string) => string | undefined;
    /**
     * File encoding
     */
    readonly encoding?: BufferEncoding;
}
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * await file({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
export declare function file(options: FileOptions): Promise<void>;
/**
 * Ensure file is present/absent with content initialized or modified with `update
 *
 * @example
 * ```ts
 * fileSync({
 *   path: 'foo/bar',
 *   state: 'present',
 *   update: (content) => content + '_test', // This will append '_test' after current content
 * })
 * ```
 *
 * @param options
 */
export declare function fileSync(options: FileOptions): void;
//# sourceMappingURL=file.d.ts.map