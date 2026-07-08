//#region src/parser.d.ts
interface ParserOptions {
  headerCorrespondence?: Array<string> | null | string;
  headerPattern?: null | RegExp | string;
  noteKeywords?: Array<string> | null | string;
  revertCorrespondence?: Array<string> | null | string;
  revertPattern?: null | RegExp | string;
}
//#endregion
//#region src/data.d.ts
interface Commit {
  body: Commit.Field;
  footer: Commit.Field;
  hash: null | string;
  header: Commit.Field;
  mentions: Array<string>;
  merge: Commit.Field;
  notes: Array<Commit.Note>;
  references: Array<Commit.Reference>;
  revert: Commit.Revert | null;
  scope: null | string;
  subject: null | string;
  type: null | string;
}
declare namespace Commit {
  type Field = null | string;
  interface Note {
    text: string;
    title: string;
  }
  interface Reference {
    action: Field;
    issue: string;
    owner: Field;
    prefix: string;
    raw: string;
    repository: Field;
  }
  interface Revert {
    [field: string]: Field | undefined;
    hash?: Field | undefined;
    header?: Field | undefined;
  }
}
type CommitConventionalType = 'build' | 'chore' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'revert' | 'style' | 'test' | 'wip';
declare const CommitConventionalType: {
  findWhere: (predicate: (data: CommitConventionalTypeData) => boolean) => Array<CommitConventionalType>;
  getData: (commitType: CommitConventionalType) => CommitConventionalTypeData;
  hasInstance: (anyValue: unknown) => anyValue is CommitConventionalType;
  parse: (anyValue: string) => CommitConventionalType | undefined;
  values: () => readonly CommitConventionalType[];
  Build: "build";
  Chore: "chore";
  CI: "ci";
  Docs: "docs";
  Feat: "feat";
  Fix: "fix";
  Perf: "perf";
  Refactor: "refactor";
  Revert: "revert";
  Style: "style";
  Test: "test";
  WIP: "wip";
};
interface CommitConventionalTypeData {
  'changelog': boolean;
  'emoji': string;
  'en-US': string;
}
//#endregion
//#region src/transform.d.ts
type CommitTransformFunction<TCommit extends Commit = Commit> = (commit: Commit, context: WriterContext, ...args: Array<unknown>) => false | TCommit;
interface WriterContext {
  host?: string | undefined;
  owner?: string | undefined;
  repository?: string | undefined;
  repoUrl?: string | undefined;
}
//#endregion
//#region src/writer.d.ts
interface WriterOptions {
  commitGroupsSort?: false | ReadonlyArray<string> | string | undefined;
  commitPartial?: string | undefined;
  commitsSort?: false | ReadonlyArray<string> | string | undefined;
  footerPartial?: string | undefined;
  groupBy?: false | string | undefined;
  headerPartial?: string | undefined;
  mainTemplate?: string | undefined;
  noteGroupsSort?: false | ReadonlyArray<string> | string | undefined;
  transform?: CommitTransformFunction<Commit> | undefined;
}
//#endregion
//#region src/gitmoji.d.ts
type Emoji = Emoji.Text | Emoji.Unicode;
declare namespace Emoji {
  type Text = string & {
    '@@EmojiStyle': 'text';
  };
  type Unicode = string & {
    '@@EmojiStyle': 'unicode';
  };
}
declare function hasInstance(anyValue: string): anyValue is Emoji;
declare function isText(anyValue: string): anyValue is Emoji.Text;
declare function isUnicode(anyValue: string): anyValue is Emoji.Unicode;
/**
 * @namespace
 */
declare const Emoji: Readonly<{
  hasInstance: typeof hasInstance;
  isText: typeof isText;
  isUnicode: typeof isUnicode;
  reEmojiText: RegExp;
  reEmojiUnicode: RegExp;
}>;
type GitmojiCode = Emoji & {
  '@@Gitmoji': true;
};
declare namespace GitmojiCode {
  type Emoji = Emoji.Text & {
    '@@Gitmoji': true;
  };
  type Unicode = Emoji.Unicode & {
    '@@Gitmoji': true;
  };
}
declare function isValid(anyValue: string): anyValue is GitmojiCode;
declare function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType;
/**
 * @namespace
 */
declare const GitmojiCode: Readonly<{
  isValid: typeof isValid;
  toConventionalCommitType: typeof toConventionalCommitType;
}>;
//#endregion
//#region src/createPreset.d.ts
declare function createPreset(): Promise<{
  gitRawCommitOpts: {
    format: string;
  };
  parser: ParserOptions;
  whatBump: (commits: ReadonlyArray<Commit>) => {
    level: number;
    reason: string;
  };
  writer: WriterOptions;
}>;
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
export { Emoji, GitmojiCode, createPreset as default, meta };
//# sourceMappingURL=index.d.ts.map