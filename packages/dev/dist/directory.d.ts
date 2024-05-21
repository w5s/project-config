export interface DirectoryOptions {
    /**
     * Directory path
     */
    readonly path: string;
    /**
     * Directory target state
     */
    readonly state: 'present' | 'absent';
}
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directory({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
export declare function directory(options: DirectoryOptions): Promise<void>;
/**
 * Ensure directory is present/absent
 *
 * @example
 * ```ts
 * await directorySync({
 *   path: 'foo/bar',
 *   state: 'present',
 * })
 * ```
 *
 * @param options
 */
export declare function directorySync(options: DirectoryOptions): void;
//# sourceMappingURL=directory.d.ts.map