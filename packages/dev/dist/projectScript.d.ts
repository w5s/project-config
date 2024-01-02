/**
 * Project common scripts
 */
export declare const ProjectScript: {
    readonly Build: "build";
    readonly Clean: "clean";
    readonly CodeAnalysis: "code-analysis";
    readonly Coverage: "coverage";
    readonly Develop: "develop";
    readonly Docs: "docs";
    readonly Format: "format";
    readonly Install: "install";
    readonly Lint: "lint";
    readonly Prepare: "prepare";
    readonly Release: "release";
    readonly Rescue: "rescue";
    readonly Spellcheck: "spellcheck";
    readonly Test: "test";
    readonly Validate: "validate";
};
export type ProjectScript = (typeof ProjectScript)[keyof typeof ProjectScript];
//# sourceMappingURL=projectScript.d.ts.map