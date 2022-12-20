import type { Options as WriterOptions } from 'conventional-changelog-writer';
import { CommitConventionalType } from './data.js';
export type Language = 'en-US';
export interface TransformConfig {
    scopeDisplayName?: Record<string, string>;
    displayTypes?: CommitConventionalType[];
    displayScopes?: string[];
    showAuthor?: boolean;
    withEmoji?: boolean;
    language?: Language;
}
export declare function displayScope(scope: string | null | undefined, scopeDisplayNameMap: Record<string, string>): string | undefined;
export declare function displayType(type: CommitConventionalType, options?: displayType.Options): string;
export declare namespace displayType {
    interface Options {
        readonly withEmoji?: boolean;
        readonly language?: Language;
    }
}
export declare function createTransform(config: TransformConfig): WriterOptions.Transform.Function;
//# sourceMappingURL=transform.d.ts.map