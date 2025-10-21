import emojiRegexp from 'emoji-regex';
import { gitmojis } from 'gitmojis';
import { readFileSync } from 'fs';
import nodePath from 'path';
import { fileURLToPath } from 'url';

// src/git-raw-commit-opts.ts
var gitRawCommitOpts = {
  format: "%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae"
};

// src/parser.ts
var createParserOpts = () => ({
  headerPattern: new RegExp(
    // Type
    `^(?<type>\\S*)? (?:\\((?<scope>.*)\\):? )?(?<subject>.*)$`,
    "u"
  ),
  headerCorrespondence: ["type", "scope", "subject"],
  revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
  noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
  // revertPattern: /revert:\s([\S\s]*?)\s*this reverts commit (\w*)\./i,
  revertCorrespondence: [`header`, `hash`]
});

// src/data.ts
var CommitConventionalType = (() => {
  const enumObject = Object.freeze({
    Build: "build",
    CI: "ci",
    Docs: "docs",
    Feat: "feat",
    Fix: "fix",
    Perf: "perf",
    Refactor: "refactor",
    Revert: "revert",
    Style: "style",
    Test: "test",
    WIP: "wip",
    Chore: "chore"
  });
  const enumValues = Object.freeze(Object.values(enumObject).sort());
  const enumValuesSet = new Set(enumValues);
  const typeData = {
    feat: {
      "emoji": "\u2728",
      "en-US": "Features",
      "changelog": true
    },
    fix: {
      "emoji": "\u{1F41B}",
      "en-US": "Bug Fixes",
      "changelog": true
    },
    build: {
      "emoji": "\u{1F477}",
      "en-US": "Build System",
      "changelog": false
    },
    chore: {
      "emoji": "\u{1F3AB}",
      "en-US": "Chores",
      "changelog": false
    },
    ci: {
      "emoji": "\u{1F527}",
      "en-US": "Continuous Integration",
      "changelog": false
    },
    docs: {
      "emoji": "\u{1F4DD}",
      "en-US": "Documentation",
      "changelog": false
    },
    test: {
      "emoji": "\u2705",
      "en-US": "Tests",
      "changelog": false
    },
    perf: {
      "emoji": "\u26A1",
      "en-US": "Performance Improvements",
      "changelog": true
    },
    refactor: {
      "emoji": "\u267B",
      "en-US": "Code Refactoring",
      "changelog": false
    },
    revert: {
      "emoji": "\u23EA",
      "en-US": "Reverts",
      "changelog": true
    },
    style: {
      "emoji": "\u{1F484}",
      "en-US": "Styles",
      "changelog": false
    },
    wip: {
      "emoji": "\u{1F6A7}",
      "en-US": "Work in progress",
      "changelog": false
    }
  };
  function hasInstance(anyValue) {
    return typeof anyValue === "string" && enumValuesSet.has(anyValue);
  }
  function getData(commitType) {
    return typeData[commitType];
  }
  function parse(anyValue) {
    return hasInstance(anyValue) ? anyValue : void 0;
  }
  function values() {
    return enumValues;
  }
  function findWhere(predicate) {
    return enumValues.filter((enumValue) => predicate(getData(enumValue)));
  }
  return { ...enumObject, hasInstance, getData, values, parse, findWhere };
})();
var Emoji;
((Emoji2) => {
  Emoji2.reEmojiUnicode = emojiRegexp();
  Emoji2.reEmojiText = /:\w*:/;
  const reMatchOnly = (input) => new RegExp(`^${input.source}$`, "");
  const _reEmojiUnicode = reMatchOnly(Emoji2.reEmojiUnicode);
  const _reEmojiText = reMatchOnly(Emoji2.reEmojiText);
  function isUnicode(anyValue) {
    return _reEmojiUnicode.test(anyValue);
  }
  Emoji2.isUnicode = isUnicode;
  function isText(anyValue) {
    return _reEmojiText.test(anyValue);
  }
  Emoji2.isText = isText;
  function hasInstance(anyValue) {
    return isText(anyValue) || isUnicode(anyValue);
  }
  Emoji2.hasInstance = hasInstance;
})(Emoji || (Emoji = {}));
var GitmojiCode;
((GitmojiCode2) => {
  const allGitmojiCodes = new Set(
    gitmojis.map((gitmoji) => gitmoji.code).concat(gitmojis.map((gitmoji) => gitmoji.emoji))
  );
  const index = {
    // code: createIndex(gitmojis, 'code'),
    emoji: createIndex(gitmojis, "emoji")
  };
  function createIndex(list, key) {
    return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
  }
  function isValid(anyValue) {
    return allGitmojiCodes.has(anyValue);
  }
  GitmojiCode2.isValid = isValid;
  const defaultType = "chore";
  const conversionMap = (() => {
    const data = {
      feat: ["\u2728", "\u267F\uFE0F", "\u{1F6B8}"],
      fix: ["\u{1F41B}"],
      docs: ["\u{1F4DD}"],
      style: ["\u{1F3A8}", "\u{1F6A8}"],
      refactor: ["\u267B\uFE0F", "\u{1F3D7}\uFE0F"],
      test: ["\u2705", "\u{1F9EA}"],
      perf: ["\u26A1\uFE0F"],
      revert: ["\u23EA\uFE0F"],
      ci: ["\u{1F477}", "\u{1F49A}"],
      wip: ["\u{1F6A7}"],
      build: [],
      chore: ["\u{1F527}"]
    };
    const entries = Array.from(
      // @ts-ignore entries are not well typed
      Object.entries(data)
    );
    return new Map(
      entries.reduce(
        (acc, [commitType, gitmojiUnicodeArray]) => acc.concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [gitmojiUnicode, commitType])).concat(
          gitmojiUnicodeArray.map((gitmojiUnicode) => [
            // eslint-disable-next-line ts/no-non-null-assertion, ts/no-non-null-asserted-optional-chain
            index.emoji.get(gitmojiUnicode)?.code,
            commitType
          ])
        ),
        []
      )
    );
  })();
  function toConventionalCommitType2(gitmoji) {
    return conversionMap.get(gitmoji) ?? defaultType;
  }
  GitmojiCode2.toConventionalCommitType = toConventionalCommitType2;
})(GitmojiCode || (GitmojiCode = {}));

// src/whatBump.ts
function toConventionalCommitType(text) {
  return GitmojiCode.isValid(text) ? GitmojiCode.toConventionalCommitType(text) : CommitConventionalType.hasInstance(text) ? text : void 0;
}
var whatBump = (commits) => {
  let level = 2;
  let breakings = 0;
  let features = 0;
  for (const { type, notes } of commits) {
    const conventionalType = type == null ? type : toConventionalCommitType(type);
    if (notes.length > 0) {
      breakings += notes.length;
      level = 0;
    } else if (conventionalType === CommitConventionalType.Feat) {
      features += 1;
      if (level === 2) {
        level = 1;
      }
    }
  }
  return {
    level,
    reason: breakings === 1 ? `There is ${breakings} BREAKING CHANGE and ${features} features` : `There are ${breakings} BREAKING CHANGES and ${features} features`
  };
};

// src/transform.ts
function displayScope(scope, scopeDisplayNameMap) {
  return scope == null || scope.length === 0 ? scopeDisplayNameMap["*"] : scopeDisplayNameMap[scope] == null ? scope : scopeDisplayNameMap[scope];
}
function displayType(type, options = {}) {
  const { withEmoji = true, language = "en-US" } = options;
  if (CommitConventionalType.hasInstance(type)) {
    const { emoji, [language]: title } = CommitConventionalType.getData(type);
    return `${withEmoji ? `${emoji} ` : ""}${title}`;
  }
  return type;
}
function createTransform(config) {
  const displayTypes = new Set(config.displayTypes == null ? CommitConventionalType.values() : config.displayTypes);
  const ignoreType = (type) => type == null || !displayTypes.has(type);
  const ignoreScope = (scope) => config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);
  const transform = (commit, { repository, host, owner, repoUrl }) => {
    const discard = commit.notes.length === 0;
    const issues = /* @__PURE__ */ new Set();
    const notes = commit.notes.map((note) => ({
      ...note,
      title: `${config.withEmoji === false ? "" : "\u{1F4A5} "}BREAKING CHANGES`
    }));
    const conventionalType = commit.type == null ? void 0 : CommitConventionalType.parse(commit.type) ?? (GitmojiCode.isValid(commit.type) ? GitmojiCode.toConventionalCommitType(commit.type) : void 0);
    if (ignoreType(conventionalType) && discard) return false;
    const type = conventionalType == null ? null : displayType(conventionalType, {
      withEmoji: config.withEmoji
    });
    if (ignoreScope(commit.scope)) return false;
    const scopeIntermediate = commit.scope === "*" ? "" : commit.scope;
    const scope = config.scopeDisplayName == null ? null : displayScope(scopeIntermediate, config.scopeDisplayName) ?? null;
    const hash = typeof commit.hash === "string" ? commit.hash.slice(0, 7) : commit.hash;
    const subject = typeof commit.subject === "string" ? (() => {
      let returnValue = commit.subject;
      const url = repository == null ? repoUrl : [host, owner, repository].filter(Boolean).join("/");
      if (url != null) {
        const issueURL = `${url}/issues/`;
        returnValue = returnValue.replace(/#(\d+)/g, (_, issue) => {
          issues.add(issue);
          return `[#${issue}](${issueURL}${issue})`;
        });
      }
      if (host != null) {
        returnValue = returnValue.replace(
          /\B@([\da-z](?:-?[\d/a-z]){0,38})/g,
          (_, username) => username.includes("/") ? `@${username}` : `[@${username}](${host}/${username})`
        );
      }
      return returnValue;
    })() : commit.subject;
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
      mentions: commit.mentions
    };
  };
  return transform;
}

// src/writer.ts
var _dirname = typeof __dirname === "undefined" ? nodePath.dirname(fileURLToPath(import.meta.url)) : __dirname;
var basePath = nodePath.resolve(nodePath.dirname(_dirname), "./template");
var defaultDisplayTypes = CommitConventionalType.findWhere((_) => _.changelog);
var createWriterOpts = async () => {
  const mainTemplate = readFileSync(`${basePath}/template.hbs`, "utf8");
  const headerPartial = readFileSync(`${basePath}/header.hbs`, "utf8");
  const commitPartial = readFileSync(`${basePath}/commit.hbs`, "utf8");
  const footerPartial = readFileSync(`${basePath}/footer.hbs`, "utf8");
  const author = readFileSync(`${basePath}/author.hbs`, "utf8");
  return {
    transform: createTransform({
      displayTypes: defaultDisplayTypes
    }),
    groupBy: "type",
    commitGroupsSort: "title",
    // @ts-ignore
    commitsSort: ["scope", "subject"],
    noteGroupsSort: "title",
    mainTemplate,
    headerPartial,
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
    footerPartial
  };
};

// src/index.ts
async function createPreset() {
  return {
    gitRawCommitOpts,
    parser: createParserOpts(),
    writer: await createWriterOpts(),
    whatBump
  };
}

export { Emoji, GitmojiCode, createPreset as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map