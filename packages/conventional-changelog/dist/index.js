import emojiRegexp from "emoji-regex";
import { gitmojis } from "gitmojis";
import { readFileSync } from "node:fs";
import nodePath from "node:path";
import { fileURLToPath } from "node:url";
//#region src/git-raw-commit-opts.ts
const gitRawCommitOpts = { format: "%B%n-hash-%n%H%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae" };
//#endregion
//#region src/parser.ts
const createParserOpts = () => ({
	headerCorrespondence: [
		"type",
		"scope",
		"subject"
	],
	headerPattern: /* @__PURE__ */ new RegExp("^(?<type>\\S*)? (?:\\((?<scope>.*)\\):? )?(?<subject>.*)$", "u"),
	noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
	revertCorrespondence: [`header`, `hash`],
	revertPattern: /^(?:revert|revert:)\s"?([\S\s]+?)"?\s*this reverts commit (\w*)\./i
});
//#endregion
//#region src/data.ts
const CommitConventionalType = (() => {
	const enumObject = Object.freeze({
		Build: "build",
		Chore: "chore",
		CI: "ci",
		Docs: "docs",
		Feat: "feat",
		Fix: "fix",
		Perf: "perf",
		Refactor: "refactor",
		Revert: "revert",
		Style: "style",
		Test: "test",
		WIP: "wip"
	});
	const enumValues = Object.freeze(Object.values(enumObject).sort((left, right) => left.localeCompare(right)));
	const enumValuesSet = new Set(enumValues);
	const typeData = {
		build: {
			"changelog": false,
			"emoji": "👷",
			"en-US": "Build System"
		},
		chore: {
			"changelog": false,
			"emoji": "🎫",
			"en-US": "Chores"
		},
		ci: {
			"changelog": false,
			"emoji": "🔧",
			"en-US": "Continuous Integration"
		},
		docs: {
			"changelog": false,
			"emoji": "📝",
			"en-US": "Documentation"
		},
		feat: {
			"changelog": true,
			"emoji": "✨",
			"en-US": "Features"
		},
		fix: {
			"changelog": true,
			"emoji": "🐛",
			"en-US": "Bug Fixes"
		},
		perf: {
			"changelog": true,
			"emoji": "⚡",
			"en-US": "Performance Improvements"
		},
		refactor: {
			"changelog": false,
			"emoji": "♻",
			"en-US": "Code Refactoring"
		},
		revert: {
			"changelog": true,
			"emoji": "⏪",
			"en-US": "Reverts"
		},
		style: {
			"changelog": false,
			"emoji": "💄",
			"en-US": "Styles"
		},
		test: {
			"changelog": false,
			"emoji": "✅",
			"en-US": "Tests"
		},
		wip: {
			"changelog": false,
			"emoji": "🚧",
			"en-US": "Work in progress"
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
		findWhere,
		getData,
		hasInstance,
		parse,
		values
	};
})();
//#endregion
//#region src/gitmoji.ts
const reEmojiUnicode = emojiRegexp();
const reEmojiText = /:\w*:/;
const reMatchOnly = (input) => new RegExp(`^${input.source}$`, "");
const _reEmojiUnicode = reMatchOnly(reEmojiUnicode);
const _reEmojiText = reMatchOnly(reEmojiText);
function hasInstance(anyValue) {
	return isText(anyValue) || isUnicode(anyValue);
}
function isText(anyValue) {
	return _reEmojiText.test(anyValue);
}
function isUnicode(anyValue) {
	return _reEmojiUnicode.test(anyValue);
}
/**
* @namespace
*/
const Emoji = Object.freeze({
	hasInstance,
	isText,
	isUnicode,
	reEmojiText,
	reEmojiUnicode
});
const allGitmojiCodes = new Set(gitmojis.map((gitmoji) => gitmoji.code).concat(gitmojis.map((gitmoji) => gitmoji.emoji)));
const index = { emoji: createIndex(gitmojis, "emoji") };
function createIndex(list, key) {
	return new Map(list.map((gitmoji) => [gitmoji[key], gitmoji]));
}
function isValid(anyValue) {
	return allGitmojiCodes.has(anyValue);
}
const defaultType = "chore";
const conversionMap = (() => {
	const entries = Array.from(Object.entries({
		build: [],
		chore: ["🔧"],
		ci: ["👷", "💚"],
		docs: ["📝"],
		feat: [
			"✨",
			"♿️",
			"🚸"
		],
		fix: ["🐛"],
		perf: ["⚡️"],
		refactor: ["♻️", "🏗️"],
		revert: ["⏪️"],
		style: ["🎨", "🚨"],
		test: ["✅", "🧪"],
		wip: ["🚧"]
	}));
	return new Map(entries.reduce((acc, [commitType, gitmojiUnicodeArray]) => acc.concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [gitmojiUnicode, commitType])).concat(gitmojiUnicodeArray.map((gitmojiUnicode) => [index.emoji.get(gitmojiUnicode)?.code, commitType])), []));
})();
function toConventionalCommitType$1(gitmoji) {
	return conversionMap.get(gitmoji) ?? defaultType;
}
/**
* @namespace
*/
const GitmojiCode = Object.freeze({
	isValid,
	toConventionalCommitType: toConventionalCommitType$1
});
//#endregion
//#region src/whatBump.ts
function toConventionalCommitType(text) {
	return GitmojiCode.isValid(text) ? GitmojiCode.toConventionalCommitType(text) : CommitConventionalType.hasInstance(text) ? text : void 0;
}
const whatBump = (commits) => {
	let level = 2;
	let breakings = 0;
	let features = 0;
	for (const { notes, type } of commits) {
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
	return scope == null || scope.length === 0 ? scopeDisplayNameMap["*"] : scopeDisplayNameMap[scope] ?? scope;
}
function displayType(type, options = {}) {
	const { language = "en-US", withEmoji = true } = options;
	if (CommitConventionalType.hasInstance(type)) {
		const { emoji, [language]: title } = CommitConventionalType.getData(type);
		return `${withEmoji ? `${emoji} ` : ""}${title}`;
	}
	return type;
}
function createTransform(config) {
	const displayTypes = new Set(config.displayTypes ?? CommitConventionalType.values());
	const shouldIgnoreType = (type) => type == null || !displayTypes.has(type);
	const shouldIgnoreScope = (scope) => config.displayScopes == null ? false : scope != null && !config.displayScopes.includes(scope);
	const transform = (commit, { host, owner, repository, repoUrl }) => {
		const isDiscard = commit.notes.length === 0;
		const issues = /* @__PURE__ */ new Set();
		const notes = commit.notes.map((note) => ({
			...note,
			title: `${config.withEmoji === false ? "" : "💥 "}BREAKING CHANGES`
		}));
		const conventionalType = commit.type == null ? void 0 : CommitConventionalType.parse(commit.type) ?? (GitmojiCode.isValid(commit.type) ? GitmojiCode.toConventionalCommitType(commit.type) : void 0);
		if (shouldIgnoreType(conventionalType) && isDiscard) return false;
		if (shouldIgnoreScope(commit.scope)) return false;
		const type = conventionalType == null ? null : displayType(conventionalType, { withEmoji: config.withEmoji });
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
			type
		};
	};
	return transform;
}
//#endregion
//#region src/writer.ts
const _dirname = nodePath.dirname(fileURLToPath(import.meta.url));
const basePath = nodePath.resolve(nodePath.dirname(_dirname), "./template");
const defaultDisplayTypes = CommitConventionalType.findWhere((_) => _.changelog);
const createWriterOpts = async () => {
	const mainTemplate = readFileSync(`${basePath}/template.hbs`, "utf8");
	const headerPartial = readFileSync(`${basePath}/header.hbs`, "utf8");
	const commitPartial = readFileSync(`${basePath}/commit.hbs`, "utf8");
	const footerPartial = readFileSync(`${basePath}/footer.hbs`, "utf8");
	const author = readFileSync(`${basePath}/author.hbs`, "utf8");
	return {
		commitGroupsSort: "title",
		commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
		commitsSort: ["scope", "subject"],
		footerPartial,
		groupBy: "type",
		headerPartial,
		mainTemplate,
		noteGroupsSort: "title",
		transform: createTransform({ displayTypes: defaultDisplayTypes })
	};
};
//#endregion
//#region src/createPreset.ts
async function createPreset() {
	return {
		gitRawCommitOpts,
		parser: createParserOpts(),
		whatBump,
		writer: await createWriterOpts()
	};
}
//#endregion
//#region src/meta.ts
const meta = Object.freeze({
	buildNumber: 1,
	name: "@w5s/conventional-changelog",
	version: "3.7.0"
});
//#endregion
export { Emoji, GitmojiCode, createPreset as default, meta };

//# sourceMappingURL=index.js.map