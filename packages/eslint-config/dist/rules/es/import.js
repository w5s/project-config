"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dev_1 = require("@w5s/dev");
// @ts-ignore airbnb is not typed
const imports_1 = __importDefault(require("eslint-config-airbnb-base/rules/imports"));
// @see https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
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
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                ...imports_1.default.rules['import/no-extraneous-dependencies'][1],
                devDependencies: [
                    ...imports_1.default.rules['import/no-extraneous-dependencies'][1].devDependencies,
                    '**/*.config.[jt]s?(x)',
                    '**/*.config.cjs',
                ],
            },
        ],
        'import/no-named-as-default': 'off',
        'import/no-unused-modules': 'off',
        'import/prefer-default-export': 'off',
        'import/unambiguous': dev_1.ESLintConfig.fixme('off'), // Disable because proposal still in progress
    },
    settings: {
        'import/extensions': dev_1.Project.sourceExtensions(),
        // Resolve type definition packages
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/ignore': [...dev_1.IGNORE_LIST, dev_1.Project.extensionsToMatcher(dev_1.Project.resourceExtensions()).source],
        // Apply special parsing for TypeScript files
        'import/parsers': {
            '@typescript-eslint/parser': dev_1.Project.sourceExtensions().filter((ext) => !ext.includes('js')),
        },
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: [...dev_1.Project.sourceExtensions(), '.json'],
            },
        },
    },
});
module.exports = config;
