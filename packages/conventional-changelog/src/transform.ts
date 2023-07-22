import type { Context, Options as WriterOptions } from 'conventional-changelog-writer';
import { CommitConventionalType, Commit } from './data.js';
import { GitmojiCode } from './gitmoji.js';

export type Language = 'en-US';

export interface TransformConfig {
  scopeDisplayName?: Record<string, string>;
  displayTypes?: CommitConventionalType[];
  displayScopes?: string[];
  showAuthor?: boolean;
  withEmoji?: boolean;
  language?: Language;
}

export function displayScope(scope: string | null | undefined, scopeDisplayNameMap: Record<string, string>) {
  return scope == null || scope.length === 0
    ? scopeDisplayNameMap['*']
    : scopeDisplayNameMap[scope] == null
    ? scope
    : scopeDisplayNameMap[scope];
}

export function displayType(type: string, options: displayType.Options = {}): string {
  const { withEmoji = true, language = 'en-US' } = options;

  if (CommitConventionalType.hasInstance(type)) {
    const { emoji, [language]: title } = CommitConventionalType.getData(type);
    return `${withEmoji ? `${emoji} ` : ''}${title}`;
  }

  return type;
}
export namespace displayType {
  export interface Options {
    readonly withEmoji?: boolean;
    readonly language?: Language;
  }
}

export function createTransform(config: TransformConfig): WriterOptions.Transform.Function {
  const displayTypes = new Set(config.displayTypes == null ? CommitConventionalType.values() : config.displayTypes);
  const ignoreType = (type: string | undefined) => type == null || !displayTypes.has(type as CommitConventionalType);
  const ignoreScope = (scope: string | undefined | null) =>
    config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);

  const transform = (commit: Commit, { repository, host, owner, repoUrl }: Context): Commit | false => {
    const discard = commit.notes.length === 0;
    const issues = new Set<string>();
    const notes = commit.notes.map((note) => ({
      ...note,
      title: `${config.withEmoji === false ? '' : '💥 '}BREAKING CHANGES`,
    }));
    const conventionalType =
      commit.type == null
        ? undefined
        : CommitConventionalType.parse(commit.type) ??
          (GitmojiCode.isValid(commit.type) ? GitmojiCode.toConventionalCommitType(commit.type) : undefined);

    if (ignoreType(conventionalType) && discard) return false;

    const type =
      conventionalType == null
        ? conventionalType
        : displayType(conventionalType, {
            withEmoji: config.withEmoji,
          });

    if (ignoreScope(commit.scope)) return false;

    const scopeIntermediate = commit.scope === '*' ? '' : commit.scope;
    const scope =
      config.scopeDisplayName == null ? scopeIntermediate : displayScope(scopeIntermediate, config.scopeDisplayName);
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
                username.includes('/') ? `@${username}` : `[@${username}](${host}/${username})`
              );
            }
            return returnValue;
          })()
        : commit.subject;

    // Remove references that already appear in the subject
    const references = commit.references.filter((reference) => !issues.has(reference.issue));

    return {
      ...commit,
      type,
      hash,
      scope,
      subject,
      references,
      header: commit.header,
      body: commit.body,
      footer: commit.footer,
      merge: commit.merge,
      revert: commit.revert,
      notes,
      mentions: commit.mentions,
    };
  };

  return transform as unknown as WriterOptions.Transform.Function;
}
