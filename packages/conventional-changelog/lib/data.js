"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitConventionalType = void 0;
exports.CommitConventionalType = (() => {
    const enumObject = Object.freeze({
        Build: 'build',
        CI: 'ci',
        Docs: 'docs',
        Feat: 'feat',
        Fix: 'fix',
        Perf: 'perf',
        Refactor: 'refactor',
        Revert: 'revert',
        Style: 'style',
        Test: 'test',
        WIP: 'wip',
        Chore: 'chore',
    });
    const enumValues = Object.freeze(Object.values(enumObject).sort());
    const enumValuesSet = new Set(enumValues);
    const typeData = {
        feat: {
            emoji: '✨',
            'en-US': 'Features',
            changelog: true,
        },
        fix: {
            emoji: '🐛',
            'en-US': 'Bug Fixes',
            changelog: true,
        },
        build: {
            emoji: '👷',
            'en-US': 'Build System',
            changelog: false,
        },
        chore: {
            emoji: '🎫',
            'en-US': 'Chores',
            changelog: false,
        },
        ci: {
            emoji: '🔧',
            'en-US': 'Continuous Integration',
            changelog: false,
        },
        docs: {
            emoji: '📝',
            'en-US': 'Documentation',
            changelog: false,
        },
        test: {
            emoji: '✅',
            'en-US': 'Tests',
            changelog: false,
        },
        perf: {
            emoji: '⚡',
            'en-US': 'Performance Improvements',
            changelog: true,
        },
        refactor: {
            emoji: '♻',
            'en-US': 'Code Refactoring',
            changelog: false,
        },
        revert: {
            emoji: '⏪',
            'en-US': 'Reverts',
            changelog: true,
        },
        style: {
            emoji: '💄',
            'en-US': 'Styles',
            changelog: false,
        },
        wip: {
            emoji: '🚧',
            'en-US': 'Work in progress',
            changelog: false,
        },
    };
    function hasInstance(anyValue) {
        return typeof anyValue === 'string' && enumValuesSet.has(anyValue);
    }
    function getData(commitType) {
        return typeData[commitType];
    }
    function parse(anyValue) {
        return hasInstance(anyValue) ? anyValue : undefined;
    }
    function values() {
        return enumValues;
    }
    function findWhere(predicate) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return enumValues.filter((enumValue) => predicate(getData(enumValue)));
    }
    return { ...enumObject, hasInstance, getData, values, parse, findWhere };
})();
