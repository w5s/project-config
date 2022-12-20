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
exports.CommitConventionalType = void 0;
exports.CommitConventionalType = (function () {
    var enumObject = Object.freeze({
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
    var enumValues = Object.freeze(Object.values(enumObject).sort());
    var enumValuesSet = new Set(enumValues);
    var typeData = {
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
    return __assign(__assign({}, enumObject), { hasInstance: hasInstance, getData: getData, values: values, parse: parse });
})();
//# sourceMappingURL=data.js.map