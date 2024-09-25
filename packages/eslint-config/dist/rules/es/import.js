"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
// @ts-ignore airbnb is not typed
const imports_1 = __importDefault(require("eslint-config-airbnb-base/rules/imports"));
// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
const extensionsToMatcher = (extensions) => `.{${extensions.map((_) => _.slice(1)).join(',')}}`;
const configFiles = [
    // plopfile.js, plopfile.cjs, plopfile.mts, plopfile.ts, ...
    `plopfile${extensionsToMatcher(dev_1.Project.queryExtensions(['javascript', 'typescript']))}`,
    // dangerfile.js, dangerfile.cjs, dangerfile.mts, dangerfile.ts, ...
    `dangerfile${extensionsToMatcher(dev_1.Project.queryExtensions(['javascript', 'typescript']))}`,
    // *.config.js, *.config.cjs, *.config.mts, *.config.ts, ...
    `**/*.config${extensionsToMatcher(dev_1.Project.queryExtensions(['javascript', 'typescript']))}`,
];
const config = dev_1.ESLintConfig.concat(imports_1.default, 
// Overrides
{
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
            // js: 'never',
            // jsx: 'never',
            // mjs: 'never',
            },
        ],
        'import/no-default-export': 'error', // Default exports are bad, especially when refactoring/renaming module
        'import/no-deprecated': 'off', // Performance issues
        'import/no-extraneous-dependencies': [
            'error',
            {
                ...imports_1.default.rules['import/no-extraneous-dependencies'][1],
                devDependencies: [
                    ...imports_1.default.rules['import/no-extraneous-dependencies'][1].devDependencies,
                    ...configFiles,
                ],
            },
        ],
        'import/no-named-as-default': 'off', // Performance issues
        'import/no-unused-modules': 'off', // Performance issues
        'import/prefer-default-export': 'off', // Not aligned, default export does not bring sufficient semantic
        'import/unambiguous': dev_1.ESLintConfig.fixme('off'), // Disable because proposal still in progress
    },
    settings: {
        'import/extensions': dev_1.Project.sourceExtensions(),
        // Resolve type definition packages
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/ignore': [...dev_1.Project.ignored(), dev_1.Project.extensionsToMatcher(dev_1.Project.resourceExtensions()).source],
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': dev_1.Project.queryExtensions(['typescript', 'typescriptreact']),
        },
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [...dev_1.Project.sourceExtensions(), '.json'],
            },
        },
    },
}, {
    overrides: [
        {
            files: [...configFiles, '**/*.d.ts'],
            rules: {
                'import/no-default-export': 'off', // Enable default exports only for config files
            },
        },
    ],
});
module.exports = config;
