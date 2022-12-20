"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransform = exports.displayType = exports.displayScope = void 0;
var data_js_1 = require("./data.js");
var gitmoji_js_1 = require("./gitmoji.js");
function displayScope(scope, scopeDisplayNameMap) {
    return scope == null || scope.length === 0
        ? scopeDisplayNameMap['*']
        : scopeDisplayNameMap[scope] == null
            ? scope
            : scopeDisplayNameMap[scope];
}
exports.displayScope = displayScope;
function displayType(type, options) {
    if (options === void 0) { options = {}; }
    var _a = options.withEmoji, withEmoji = _a === void 0 ? true : _a, _b = options.language, language = _b === void 0 ? 'en-US' : _b;
    if (data_js_1.CommitConventionalType.hasInstance(type)) {
        var _c = data_js_1.CommitConventionalType.getData(type), emoji = _c.emoji, _d = language, title = _c[_d];
        return "".concat(withEmoji ? "".concat(emoji, " ") : '').concat(title);
    }
    return type;
}
exports.displayType = displayType;
function createTransform(config) {
    var displayTypes = new Set(config.displayTypes == null ? data_js_1.CommitConventionalType.values() : config.displayTypes);
    var ignoreType = function (type) { return type == null || !displayTypes.has(type); };
    var ignoreScope = function (scope) {
        return config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);
    };
    var transform = function (commit, _a) {
        var _b;
        var repository = _a.repository, host = _a.host, owner = _a.owner, repoUrl = _a.repoUrl;
        var discard = commit.notes.length === 0;
        var issues = new Set();
        var notes = commit.notes.map(function (note) { return (__assign(__assign({}, note), { title: "".concat(config.withEmoji === false ? '' : '💥 ', "BREAKING CHANGES") })); });
        var conventionalType = commit.type == null
            ? undefined
            : (_b = data_js_1.CommitConventionalType.parse(commit.type)) !== null && _b !== void 0 ? _b : (gitmoji_js_1.GitmojiCode.isValid(commit.type) ? gitmoji_js_1.GitmojiCode.toConventionalCommitType(commit.type) : undefined);
        if (ignoreType(conventionalType) && discard)
            return false;
        var type = conventionalType == null
            ? conventionalType
            : displayType(conventionalType, {
                withEmoji: config.withEmoji,
            });
        if (ignoreScope(commit.scope))
            return false;
        var scopeIntermediate = commit.scope === '*' ? '' : commit.scope;
        var scope = config.scopeDisplayName == null ? scopeIntermediate : displayScope(scopeIntermediate, config.scopeDisplayName);
        var hash = typeof commit.hash === 'string' ? commit.hash.slice(0, 7) : commit.hash;
        var subject = typeof commit.subject === 'string'
            ? (function () {
                var returnValue = commit.subject;
                var url = repository == null ? repoUrl : [host, owner, repository].filter(Boolean).join('/');
                if (url != null) {
                    var issueURL_1 = "".concat(url, "/issues/");
                    // Issue URLs.
                    returnValue = returnValue.replace(/#(\d+)/g, function (_, issue) {
                        issues.add(issue);
                        return "[#".concat(issue, "](").concat(issueURL_1).concat(issue, ")");
                    });
                }
                if (host != null) {
                    // User URLs.
                    // eslint-disable-next-line unicorn/no-unsafe-regex
                    returnValue = returnValue.replace(/\B@([\da-z](?:-?[\d/a-z]){0,38})/g, function (_, username) {
                        return username.includes('/') ? "@".concat(username) : "[@".concat(username, "](").concat(host, "/").concat(username, ")");
                    });
                }
                return returnValue;
            })()
            : commit.subject;
        // Remove references that already appear in the subject
        var references = commit.references.filter(function (reference) { return !issues.has(reference.issue); });
        return __assign(__assign({}, commit), { type: type, hash: hash, scope: scope, subject: subject, references: references, header: commit.header, body: commit.body, footer: commit.footer, merge: commit.merge, revert: commit.revert, notes: notes, mentions: commit.mentions });
    };
    return transform;
}
exports.createTransform = createTransform;
//# sourceMappingURL=transform.js.map