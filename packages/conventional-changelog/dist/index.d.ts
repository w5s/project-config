//#region src/meta.d.ts
declare const meta: Readonly<{
  name: string;
  version: string;
  buildNumber: number;
}>;
//#endregion
//#region ../../node_modules/conventional-commits-parser/dist/types.d.ts
interface CommitReference {
  raw: string;
  action: string | null;
  owner: string | null;
  repository: string | null;
  issue: string;
  prefix: string;
}
interface CommitNote$1 {
  title: string;
  text: string;
}
type CommitMeta = Record<string, string | null>;
interface CommitBase {
  merge: string | null;
  revert: CommitMeta | null;
  header: string | null;
  body: string | null;
  footer: string | null;
  notes: CommitNote$1[];
  mentions: string[];
  references: CommitReference[];
}
type Commit$2 = CommitBase & CommitMeta;
//#endregion
//#region src/data.d.ts
type Commit$1 = Commit$2 & {
  type: string | null;
  subject: string | null;
  scope: string | null;
  hash: string | null;
};
type CommitConventionalType = 'build' | 'ci' | 'docs' | 'feat' | 'fix' | 'perf' | 'refactor' | 'revert' | 'style' | 'test' | 'wip' | 'chore';
declare const CommitConventionalType: {
  hasInstance: (anyValue: unknown) => anyValue is CommitConventionalType;
  getData: (commitType: CommitConventionalType) => CommitConventionalTypeData;
  values: () => readonly CommitConventionalType[];
  parse: (anyValue: string) => CommitConventionalType | undefined;
  findWhere: (predicate: (data: CommitConventionalTypeData) => boolean) => CommitConventionalType[];
  Build: "build";
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
  Chore: "chore";
};
interface CommitConventionalTypeData {
  'emoji': string;
  'en-US': string;
  'changelog': boolean;
}
//#endregion
//#region src/gitmoji.d.ts
type Emoji = Emoji.Unicode | Emoji.Text;
declare namespace Emoji {
  const reEmojiUnicode: RegExp;
  const reEmojiText: RegExp;
  type Unicode = string & {
    '@@EmojiStyle': 'unicode';
  };
  type Text = string & {
    '@@EmojiStyle': 'text';
  };
  function isUnicode(anyValue: string): anyValue is Unicode;
  function isText(anyValue: string): anyValue is Text;
  function hasInstance(anyValue: string): anyValue is Emoji;
}
type GitmojiCode = Emoji & {
  '@@Gitmoji': true;
};
declare namespace GitmojiCode {
  type Unicode = Emoji.Unicode & {
    '@@Gitmoji': true;
  };
  type Emoji = Emoji.Text & {
    '@@Gitmoji': true;
  };
  function isValid(anyValue: string): anyValue is GitmojiCode;
  function toConventionalCommitType(gitmoji: GitmojiCode): CommitConventionalType;
}
//#endregion
//#region src/parser.d.ts
interface ParserOptions extends ParserOptionsDefault {}
//#endregion
//#region ../../node_modules/conventional-changelog-writer/dist/types/utils.d.ts
type AnyObject = Record<string, any>;
type Comparator<T> = (a: T, b: T) => number;
type PickStringsKeys<T> = { [P in keyof T]: P extends string ? T[P] extends string ? (string extends T[P] ? P : never) : never : never }[keyof T];
//#endregion
//#region ../../node_modules/conventional-changelog-writer/dist/types/commit.d.ts
interface CommitKnownProps {
  type?: string | null;
  header?: string | null;
  version?: string | null;
  hash?: string | null;
  committerDate?: string | null;
  notes: CommitNote[];
  revert?: AnyObject | null;
  body?: string | null;
  footer?: string | null;
}
interface CommitNote {
  title: string;
  text: string;
}
interface CommitGroup<Commit extends CommitKnownProps = CommitKnownProps> {
  title: string;
  commits: Commit[];
}
interface NoteGroup {
  title: string;
  notes: CommitNote[];
}
//#endregion
//#region ../../node_modules/conventional-changelog-writer/dist/types/context.d.ts
interface Context<Commit extends CommitKnownProps = CommitKnownProps> {
  /**
   * Version number of the up-coming release.
   * If `version` is found in the last commit before generating logs, it will be overwritten.
   */
  version?: string;
  /**
   * Is this a patch release?
   */
  isPatch?: boolean;
  /**
   * The title of the release.
   */
  title?: string;
  /**
   * The release date.
   */
  date?: string;
  /**
   * Should all references be linked?
   */
  linkReferences?: boolean;
  /**
   * Commit base url path.
   */
  commit?: string;
  /**
   * Issue base url.
   */
  issue?: string;
  /**
   * Repository name.
   * Eg: `'conventional-changelog-writer'`
   */
  repository?: string;
  /**
   * Repository host.
   * Eg: `'https://github.com'` or `'https://bitbucket.org'`
   */
  host?: string;
  /**
   * Repository owner.
   * Eg: `'conventional-changelog'`
   */
  owner?: string;
  /**
   * Full repository url.
   * Eg: `'https://github.com/conventional-changelog/conventional-changelog-writer'`.
   * Should be used as a fallback when `context.repository` doesn't exist.
   */
  repoUrl?: string;
  /**
   * Commit groups.
   */
  commitGroups?: CommitGroup<Commit>[];
  /**
   * Note groups.
   */
  noteGroups?: NoteGroup[];
  /**
   * Add a link to compare changes.
   */
  linkCompare?: boolean;
}
type RequiredContext<Commit extends CommitKnownProps = CommitKnownProps> = Required<Context<Commit>>;
interface FinalContext<Commit extends CommitKnownProps = CommitKnownProps> extends Context<Commit> {
  commit: RequiredContext<Commit>['commit'];
  issue: RequiredContext<Commit>['issue'];
  date: RequiredContext<Commit>['date'];
}
//#endregion
//#region ../../node_modules/conventional-changelog-writer/dist/types/options.d.ts
type SortBy<T> = PickStringsKeys<T> | PickStringsKeys<T>[] | Comparator<T>;
type CommitTransformFunction<Commit extends CommitKnownProps = CommitKnownProps> = (commit: Commit, context: FinalContext<Commit>, options: FinalOptions<Commit>) => Partial<Commit> | null | Promise<Partial<Commit> | null>;
type GenerateOnFunction<Commit extends CommitKnownProps = CommitKnownProps> = (keyCommit: Commit, commitsGroup: Commit[], context: FinalContext<Commit>, options: FinalOptions<Commit>) => boolean;
interface TemplatesOptions {
  mainTemplate?: string;
  headerPartial?: string;
  commitPartial?: string;
  footerPartial?: string;
  partials?: Record<string, string | null>;
}
type RequiredTemplatesOptions = Required<TemplatesOptions>;
interface FinalTemplatesOptions extends TemplatesOptions {
  mainTemplate: RequiredTemplatesOptions['mainTemplate'];
  headerPartial: RequiredTemplatesOptions['headerPartial'];
  commitPartial: RequiredTemplatesOptions['commitPartial'];
  footerPartial: RequiredTemplatesOptions['footerPartial'];
}
interface Options<Commit extends CommitKnownProps = CommitKnownProps> extends TemplatesOptions {
  /**
   * Key to group commits by.
   * If this value is falsy, commits are not grouped.
   */
  groupBy?: keyof Commit;
  /**
   * Key to sort commits by or sort function.
   * If this value is falsy, commits are not sorted.
   */
  commitsSort?: SortBy<Commit>;
  /**
   * Key to sort commit groups by or sort function.
   * If this value is falsy, commit groups are not sorted.
   */
  commitGroupsSort?: SortBy<CommitGroup<Commit>>;
  /**
   * Key to sort notes by or sort function.
   * If this value is falsy, notes are not sorted.
   */
  notesSort?: SortBy<CommitNote>;
  /**
   * Key to sort note groups by or sort function.
   * If this value is falsy, note groups are not sorted.
   */
  noteGroupsSort?: SortBy<NoteGroup>;
  /**
   * If `true`, reverted commits will be ignored.
   */
  ignoreReverted?: boolean;
  /**
   * The normal order means reverse chronological order.
   * `reverse` order means chronological order.
   */
  reverse?: boolean;
  /**
   * If `true`, the stream will flush out the last bit of commits (could be empty) to changelog.
   */
  doFlush?: boolean;
  /**
   * A function to transform commits.
   * Should return diff object which will be merged with the original commit.
   */
  transform?: CommitTransformFunction<Commit>;
  /**
   * Function or key to detect whether a changelog block should be generated.
   */
  generateOn?: GenerateOnFunction<Commit> | keyof Commit | null;
  /**
   * Last chance to modify your context before generating a changelog.
   * @param context
   * @param options
   * @param filteredCommits
   * @param keyCommit
   * @param commits
   */
  finalizeContext?(context: FinalContext<Commit>, options: FinalOptions<Commit>, filteredCommits: Commit[], keyCommit: Commit | null, commits: Commit[]): FinalContext<Commit> | Promise<FinalContext<Commit>>;
  /**
   * A function to get debug information.
   * @param message - The debug message.
   */
  debug?(message: string): void;
  /**
   * A function to format date.
   * @param date - Date string or Date object.
   * @returns Final date string.
   */
  formatDate?(date: string | Date): string;
  /**
   * A function that will determine if a commit should be skipped by the writer
   * @param commit - The commit in question
   * @returns boolean. If true, don't write the current commit
   */
  skip?(commit: Commit): boolean;
}
type RequiredOptions<Commit extends CommitKnownProps = CommitKnownProps> = Required<Options<Commit>>;
interface FinalOptions<Commit extends CommitKnownProps = CommitKnownProps> extends Options<Commit> {
  groupBy: RequiredOptions<Commit>['groupBy'];
  generateOn: RequiredOptions<Commit>['generateOn'];
  finalizeContext: RequiredOptions<Commit>['finalizeContext'];
  debug: RequiredOptions<Commit>['debug'];
  formatDate: RequiredOptions<Commit>['formatDate'];
  transform: RequiredOptions<Commit>['transform'];
  commitsSort?: Comparator<Commit>;
  commitGroupsSort?: Comparator<CommitGroup<Commit>>;
  notesSort?: Comparator<CommitNote>;
  noteGroupsSort?: Comparator<NoteGroup>;
  skip?: Options<Commit>['skip'];
  mainTemplate: FinalTemplatesOptions['mainTemplate'];
  headerPartial: FinalTemplatesOptions['headerPartial'];
  commitPartial: FinalTemplatesOptions['commitPartial'];
  footerPartial: FinalTemplatesOptions['footerPartial'];
}
//#endregion
//#region src/writer.d.ts
interface WriterOptions extends Options<Commit$1> {}
//#endregion
//#region src/whatBump.d.ts
type Commit = Commit$2;
//#endregion
//#region src/createPreset.d.ts
declare function createPreset(): Promise<{
  gitRawCommitOpts: {
    format: string;
  };
  parser: ParserOptions;
  writer: WriterOptions;
  whatBump: (commits: ReadonlyArray<Commit>) => {
    level: number;
    reason: string;
  };
}>;
//#endregion
export { Emoji, GitmojiCode, createPreset as default, meta };
//# sourceMappingURL=index.d.ts.map