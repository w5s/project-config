Object.defineProperty(exports, '__esModule', { value: true });
//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let emoji_regex = require("emoji-regex");
emoji_regex = __toESM(emoji_regex);
let gitmojis = require("gitmojis");
gitmojis = __toESM(gitmojis);
let node_fs = require("node:fs");
node_fs = __toESM(node_fs);
let node_path = require("node:path");
node_path = __toESM(node_path);
let node_url = require("node:url");
node_url = __toESM(node_url);

//#region src/git-raw-commit-opts.ts
const gitRawCommitOpts = { format: "%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae" };

//#endregion
//#region src/parser.ts
const createParserOpts = () => ({
	headerPattern: new RegExp("^(?<type>\\S*)? (?:\\((?<scope>.*)\\):? )?(?<subject>.*)$", "u"),
	headerCorrespondence: [
		"type",
		"scope",
		"subject"
	],
	revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i,
	noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
	revertCorrespondence: [`header`, `hash`]
});

//#endregion
//#region src/data.ts
const CommitConventionalType = (() => {
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
			"emoji": "✨",
			"en-US": "Features",
			"changelog": true
		},
		fix: {
			"emoji": "🐛",
			"en-US": "Bug Fixes",
			"changelog": true
		},
		build: {
			"emoji": "👷",
			"en-US": "Build System",
			"changelog": false
		},
		chore: {
			"emoji": "🎫",
			"en-US": "Chores",
			"changelog": false
		},
		ci: {
			"emoji": "🔧",
			"en-US": "Continuous Integration",
			"changelog": false
		},
		docs: {
			"emoji": "📝",
			"en-US": "Documentation",
			"changelog": false
		},
		test: {
			"emoji": "✅",
			"en-US": "Tests",
			"changelog": false
		},
		perf: {
			"emoji": "⚡",
			"en-US": "Performance Improvements",
			"changelog": true
		},
		refactor: {
			"emoji": "♻",
			"en-US": "Code Refactoring",
			"changelog": false
		},
		revert: {
			"emoji": "⏪",
			"en-US": "Reverts",
			"changelog": true
		},
		style: {
			"emoji": "💄",
			"en-US": "Styles",
			"changelog": false
		},
		wip: {
			"emoji": "🚧",
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
	return {
		...enumObject,
		hasInstance,
		getData,
		values,
		parse,
		findWhere
	};
})();

//#endregion
//#region src/gitmoji.ts
let Emoji;
(function(_Emoji) {
	const reEmojiUnicode = _Emoji.reEmojiUnicode = (0, emoji_regex.default)();
	const reEmojiText = _Emoji.reEmojiText = /:\w*:/;
	const reMatchOnly = (input) => new RegExp(`^${input.source}$`, "");
	const _reEmojiUnicode = reMatchOnly(reEmojiUnicode);
	const _reEmojiText = reMatchOnly(reEmojiText);
	function isUnicode(anyValue) {
		return _reEmojiUnicode.test(anyValue);
	}
	_Emoji.isUnicode = isUnicode;
	function isText(anyValue) {
		return _reEmojiText.test(anyValue);
	}
	_Emoji.isText = isText;
	function hasInstance(anyValue) {
		return isText(anyValue) || isUnicode(anyValue);
	}
	_Emoji.hasInstance = hasInstance;
})(Emoji || (Emoji = {}));
let GitmojiCode;
(function(_GitmojiCode) {
	const allGitmojiCodes = new Set(gitmojis.gitmojis.map((gitmoji) => gitmoji.code).concat(gitmojis.gitmojis.map((gitmoji) => gitmoji.emoji)));
	const index = { emoji: createIndex(gitmojis.gitmojis, "emoji") };
	function createIndex(list, key) {
		return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
	}
	function isValid(anyValue) {
		return allGitmojiCodes.has(anyValue);
	}
	_GitmojiCode.isValid = isValid;
	const defaultType = "chore";
	const conversionMap = (() => {
		const entries = Array.from(Object.entries({
			feat: [
				"✨",
				"♿️",
				"🚸"
			],
			fix: ["🐛"],
			docs: ["📝"],
			style: ["🎨", "🚨"],
			refactor: ["♻️", "🏗️"],
			test: ["✅", "🧪"],
			perf: ["⚡️"],
			revert: ["⏪️"],
			ci: ["👷", "💚"],
			wip: ["🚧"],
			build: [],
			chore: ["🔧"]
		}));
		return new Map(entries.reduce((acc, [commitType, gitmojiUnicodeArray]) => acc.concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [gitmojiUnicode, commitType])).concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [index.emoji.get(gitmojiUnicode)?.code, commitType])), []));
	})();
	function toConventionalCommitType$1(gitmoji) {
		return conversionMap.get(gitmoji) ?? defaultType;
	}
	_GitmojiCode.toConventionalCommitType = toConventionalCommitType$1;
})(GitmojiCode || (GitmojiCode = {}));

//#endregion
//#region src/whatBump.ts
function toConventionalCommitType(text) {
	return GitmojiCode.isValid(text) ? GitmojiCode.toConventionalCommitType(text) : CommitConventionalType.hasInstance(text) ? text : void 0;
}
const whatBump = (commits) => {
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
			if (level === 2) level = 1;
		}
	}
	return {
		level,
		reason: breakings === 1 ? `There is ${breakings} BREAKING CHANGE and ${features} features` : `There are ${breakings} BREAKING CHANGES and ${features} features`
	};
};

//#endregion
//#region src/transform.ts
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
			title: `${config.withEmoji === false ? "" : "💥 "}BREAKING CHANGES`
		}));
		const conventionalType = commit.type == null ? void 0 : CommitConventionalType.parse(commit.type) ?? (GitmojiCode.isValid(commit.type) ? GitmojiCode.toConventionalCommitType(commit.type) : void 0);
		if (ignoreType(conventionalType) && discard) return false;
		const type = conventionalType == null ? null : displayType(conventionalType, { withEmoji: config.withEmoji });
		if (ignoreScope(commit.scope)) return false;
		const scopeIntermediate = commit.scope === "*" ? "" : commit.scope;
		const scope = config.scopeDisplayName == null ? null : displayScope(scopeIntermediate, config.scopeDisplayName) ?? null;
		const hash = typeof commit.hash === "string" ? commit.hash.slice(0, 7) : commit.hash;
		const subject = typeof commit.subject === "string" ? (() => {
			let returnValue = commit.subject;
			const url = repository == null ? repoUrl : [
				host,
				owner,
				repository
			].filter(Boolean).join("/");
			if (url != null) {
				const issueURL = `${url}/issues/`;
				returnValue = returnValue.replace(/#(\d+)/g, (_, issue) => {
					issues.add(issue);
					return `[#${issue}](${issueURL}${issue})`;
				});
			}
			if (host != null) returnValue = returnValue.replace(/\B@([\da-z](?:-?[\d/a-z]){0,38})/g, (_, username) => username.includes("/") ? `@${username}` : `[@${username}](${host}/${username})`);
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

//#endregion
//#region src/writer.ts
const _dirname = typeof __dirname === "undefined" ? node_path.default.dirname((0, node_url.fileURLToPath)(require("url").pathToFileURL(__filename).href)) : __dirname;
const basePath = node_path.default.resolve(node_path.default.dirname(_dirname), "./template");
const defaultDisplayTypes = CommitConventionalType.findWhere((_) => _.changelog);
const createWriterOpts = async () => {
	const mainTemplate = (0, node_fs.readFileSync)(`${basePath}/template.hbs`, "utf8");
	const headerPartial = (0, node_fs.readFileSync)(`${basePath}/header.hbs`, "utf8");
	const commitPartial = (0, node_fs.readFileSync)(`${basePath}/commit.hbs`, "utf8");
	const footerPartial = (0, node_fs.readFileSync)(`${basePath}/footer.hbs`, "utf8");
	const author = (0, node_fs.readFileSync)(`${basePath}/author.hbs`, "utf8");
	return {
		transform: createTransform({ displayTypes: defaultDisplayTypes }),
		groupBy: "type",
		commitGroupsSort: "title",
		commitsSort: ["scope", "subject"],
		noteGroupsSort: "title",
		mainTemplate,
		headerPartial,
		commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
		footerPartial
	};
};

//#endregion
//#region src/index.ts
async function createPreset() {
	return {
		gitRawCommitOpts,
		parser: createParserOpts(),
		writer: await createWriterOpts(),
		whatBump
	};
}

//#endregion
Object.defineProperty(exports, 'Emoji', {
  enumerable: true,
  get: function () {
    return Emoji;
  }
});
Object.defineProperty(exports, 'GitmojiCode', {
  enumerable: true,
  get: function () {
    return GitmojiCode;
  }
});
exports.default = createPreset;
//# sourceMappingURL=index.cjs.map