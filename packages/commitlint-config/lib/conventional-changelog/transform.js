"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransform = exports.displayType = exports.displayScope = void 0;
const data_js_1 = require("./data.js");
const gitmoji_js_1 = require("./gitmoji.js");
function displayScope(scope, scopeDisplayNameMap) {
    return scope == null || scope.length === 0
        ? scopeDisplayNameMap['*']
        : scopeDisplayNameMap[scope] == null
            ? scope
            : scopeDisplayNameMap[scope];
}
exports.displayScope = displayScope;
function displayType(type, options = {}) {
    const { withEmoji = true, language = 'en-US' } = options;
    if (data_js_1.CommitConventionalType.hasInstance(type)) {
        const { emoji, [language]: title } = data_js_1.CommitConventionalType.getData(type);
        return `${withEmoji ? `${emoji} ` : ''}${title}`;
    }
    return type;
}
exports.displayType = displayType;
function createTransform(config) {
    const displayTypes = new Set(config.displayTypes == null ? data_js_1.CommitConventionalType.values() : config.displayTypes);
    const ignoreType = (type) => type == null || !displayTypes.has(type);
    const ignoreScope = (scope) => config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);
    const transform = (commit, { repository, host, owner, repoUrl }) => {
        const discard = commit.notes.length === 0;
        const issues = new Set();
        const notes = commit.notes.map((note) => ({
            ...note,
            title: `${config.withEmoji === false ? '' : '💥 '}BREAKING CHANGES`,
        }));
        const conventionalType = commit.type == null
            ? undefined
            : data_js_1.CommitConventionalType.parse(commit.type) ??
                (gitmoji_js_1.GitmojiCode.isValid(commit.type) ? gitmoji_js_1.GitmojiCode.toConventionalCommitType(commit.type) : undefined);
        if (ignoreType(conventionalType) && discard)
            return false;
        const type = conventionalType == null
            ? conventionalType
            : displayType(conventionalType, {
                withEmoji: config.withEmoji,
            });
        if (ignoreScope(commit.scope))
            return false;
        const scopeIntermediate = commit.scope === '*' ? '' : commit.scope;
        const scope = config.scopeDisplayName == null ? scopeIntermediate : displayScope(scopeIntermediate, config.scopeDisplayName);
        const hash = typeof commit.hash === 'string' ? commit.hash.slice(0, 7) : commit.hash;
        const subject = typeof commit.subject === 'string'
            ? (() => {
                let returnValue = commit.subject;
                const url = repository == null ? repoUrl : [host, owner, repository].filter(Boolean).join('/');
                if (url != null) {
                    const issueURL = `${url}/issues/`;
                    // Issue URLs.
                    returnValue = returnValue.replace(/#(\d+)/g, (_, issue) => {
                        issues.add(issue);
                        return `[#${issue}](${issueURL}${issue})`;
                    });
                }
                if (host != null) {
                    // User URLs.
                    // eslint-disable-next-line unicorn/no-unsafe-regex
                    returnValue = returnValue.replace(/\B@([\da-z](?:-?[\d/a-z]){0,38})/g, (_, username) => username.includes('/') ? `@${username}` : `[@${username}](${host}/${username})`);
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
    return transform;
}
exports.createTransform = createTransform;
//# sourceMappingURL=transform.js.map