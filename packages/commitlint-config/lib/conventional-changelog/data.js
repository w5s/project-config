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
        },
        fix: {
            emoji: '🐛',
            'en-US': 'Bug Fixes',
        },
        build: {
            emoji: '👷',
            'en-US': 'Build System',
        },
        chore: {
            emoji: '🎫',
            'en-US': 'Chores',
        },
        ci: {
            emoji: '🔧',
            'en-US': 'Continuous Integration',
        },
        docs: {
            emoji: '📝',
            'en-US': 'Documentation',
        },
        test: {
            emoji: '✅',
            'en-US': 'Tests',
        },
        perf: {
            emoji: '⚡',
            'en-US': 'Performance Improvements',
        },
        refactor: {
            emoji: '♻',
            'en-US': 'Code Refactoring',
        },
        revert: {
            emoji: '⏪',
            'en-US': 'Reverts',
        },
        style: {
            emoji: '💄',
            'en-US': 'Styles',
        },
        wip: {
            emoji: '🚧',
            'en-US': 'Work in progress',
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
    return { ...enumObject, hasInstance, getData, values, parse };
})();
