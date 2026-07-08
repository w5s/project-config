import { type Commit, CommitConventionalType } from './data.js';
import { GitmojiCode } from './gitmoji.js';

export type CommitTransformFunction<TCommit extends Commit = Commit> = (commit: Commit, context: WriterContext, ...args: Array<unknown>) => false | TCommit;

export type Language = 'en-US';

export interface TransformConfig {
  displayScopes?: Array<string>;
  displayTypes?: Array<CommitConventionalType>;
  language?: Language;
  scopeDisplayName?: Record<string, string>;
  showAuthor?: boolean;
  withEmoji?: boolean;
}

export interface WriterContext {
  host?: string | undefined;
  owner?: string | undefined;
  repository?: string | undefined;
  repoUrl?: string | undefined;
}

export function displayScope(scope: null | string | undefined, scopeDisplayNameMap: Record<string, string>) {
  return scope == null || scope.length === 0
    ? scopeDisplayNameMap['*']
    : scopeDisplayNameMap[scope] ?? scope;
}

export function displayType(type: string, options: displayType.Options = {}): string {
  const { language = 'en-US', withEmoji = true } = options;

  if (CommitConventionalType.hasInstance(type)) {
    // eslint-disable-next-line unicorn/no-unreadable-object-destructuring
    const { emoji, [language]: title } = CommitConventionalType.getData(type);
    return `${withEmoji ? `${emoji} ` : ''}${title}`;
  }

  return type;
}
export namespace displayType {
  export interface Options {
    readonly language?: Language;
    readonly withEmoji?: boolean | undefined;
  }
}

export function createTransform(config: TransformConfig): CommitTransformFunction<Commit> {
  const displayTypes = new Set(config.displayTypes ?? CommitConventionalType.values());
  const shouldIgnoreType = (type: string | undefined) => type == null || !displayTypes.has(type as CommitConventionalType);
  const shouldIgnoreScope = (scope: null | string | undefined) =>
    config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);

  const transform = (commit: Commit, { host, owner, repository, repoUrl }: WriterContext): Commit | false => {
    const isDiscard = commit.notes.length === 0;
    const issues = new Set<string>();
    const notes = commit.notes.map((note) => ({
      ...note,
      title: `${config.withEmoji === false ? '' : '💥 '}BREAKING CHANGES`,
    }));
    const conventionalType =
      commit.type == null
        ? undefined
        : (CommitConventionalType.parse(commit.type) ??
          (GitmojiCode.isValid(commit.type) ? GitmojiCode.toConventionalCommitType(commit.type) : undefined));

    if (shouldIgnoreType(conventionalType) && isDiscard) return false;

    if (shouldIgnoreScope(commit.scope)) return false;

    const type =
      conventionalType == null
        ? null
        : displayType(conventionalType, {
            withEmoji: config.withEmoji,
          });

    const scopeIntermediate = commit.scope === '*' ? '' : commit.scope;
    const scope =
      config.scopeDisplayName == null ? null : (displayScope(scopeIntermediate, config.scopeDisplayName) ?? null);
    const hash = typeof commit.hash === 'string' ? commit.hash.slice(0, 7) : commit.hash;

    const subject =
      typeof commit.subject === 'string'
        ? (() => {
            let returnValue = commit.subject;
            const url = repository == null ? repoUrl : [host, owner, repository].filter(Boolean).join('/');
            if (url != null) {
              const issueURL = `${url}/issues/`;
              // Issue URLs.
              // eslint-disable-next-line unicorn/prefer-string-replace-all
              returnValue = returnValue.replace(/#(\d+)/g, (_, issue: string) => {
                issues.add(issue);

                return `[#${issue}](${issueURL}${issue})`;
              });
            }
            if (host != null) {
              // User URLs.
              // eslint-disable-next-line unicorn/prefer-string-replace-all
              returnValue = returnValue.replace(/\B@([\da-z](?:-?[\d/a-z]){0,38})/g, (_, username: string) =>
                username.includes('/') ? `@${username}` : `[@${username}](${host}/${username})`,
              );
            }
            return returnValue;
          })()
        : commit.subject;

    // Remove references that already appear in the subject
    const references = commit.references.filter((reference) => !issues.has(reference.issue));

    return {
      ...commit,
      body: commit.body,
      footer: commit.footer,
      hash,
      header: commit.header,
      mentions: commit.mentions,
      merge: commit.merge,
      notes,
      references,
      revert: commit.revert,
      scope,
      subject,
      type,
    } as Commit;
  };

  return transform as unknown as CommitTransformFunction<Commit>;
}
