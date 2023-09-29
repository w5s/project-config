export interface BlockOptions {
    /**
     * The marker builder function that will take either `markerBegin` or `markerEnd`
     *
     * @default '# ${mark} MANAGED BLOCK'
     */
    marker?: (mark: 'Begin' | 'End') => string;
    /**
     * File path
     */
    path: string;
    /**
     * Block content to insert
     */
    block: string;
    /**
     * Insert position
     */
    insertPosition?: ['before', 'BeginningOfFile' | RegExp] | ['after', 'EndOfFile' | RegExp];
    /**
     * Block target state
     */
    state?: 'present' | 'absent';
}
/**
 * Replace asynchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
export declare function block(options: BlockOptions): Promise<void>;
/**
 * Replace synchronously a block in file that follows pattern :
 *
 * marker(markerBegin)
 * ...
 * marker(markerEnd)
 *
 * @param options
 */
export declare function blockSync(options: BlockOptions): void;
//# sourceMappingURL=block.d.ts.map