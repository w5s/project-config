"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// @ts-ignore CSpell config is not typed
const cspell_default_config_js_1 = __importDefault(require("@cspell/cspell-bundled-dicts/cspell-default.config.js"));
const toArray = (value) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const defaultSettings = cspell_default_config_js_1.default;
const excludeImport = new Set([
    '@cspell/dict-ada/cspell-ext.json',
    '@cspell/dict-cpp/cspell-ext.json',
    '@cspell/dict-csharp/cspell-ext.json',
    '@cspell/dict-django/cspell-ext.json',
    '@cspell/dict-dotnet/cspell-ext.json',
    '@cspell/dict-elixir/cspell-ext.json',
    '@cspell/dict-haskell/cspell-ext.json',
    '@cspell/dict-latex/cspell-ext.json',
    '@cspell/dict-lua/cspell-ext.json',
    '@cspell/dict-php/cspell-ext.json',
    '@cspell/dict-powershell/cspell-ext.json',
    '@cspell/dict-python/cspell-ext.json',
    '@cspell/dict-r/cspell-ext.json',
    '@cspell/dict-scala/cspell-ext.json',
]);
const settings = {
    ...defaultSettings,
    name: 'W5s default settings .js',
    id: 'w5s-default-js',
    language: 'en',
    description: 'Default cspell configuration.',
    words: [],
    flagWords: [],
    useGitignore: true,
    dictionaryDefinitions: [
        ...toArray(defaultSettings.dictionaryDefinitions),
        {
            addWords: false,
            name: 'w5s-filetypes',
            path: '../dict/filetypes.txt',
            description: 'Additional file types',
        },
        {
            name: 'w5s-fullstack',
            path: '../dict/fullstack.txt',
            description: 'Fullstack terms',
        },
        {
            addWords: false,
            name: 'w5s-typescript',
            path: '../dict/typescript.txt',
            description: 'Typescript keywords',
        },
        {
            addWords: false,
            name: 'w5s-names',
            path: '../dict/names.txt',
            description: 'Known names',
        },
    ],
    dictionaries: [...toArray(defaultSettings.dictionaries), 'w5s-filetypes', 'w5s-fullstack', 'w5s-names'],
    ignoreWords: [],
    import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
    ignorePaths: [
        ...toArray(defaultSettings.ignorePaths),
        'CHANGELOG.md',
        '**/__snapshots__/**',
        // '**/.git/**',
        '**/.vscode/**',
        '**/*.snap',
        '**/lib/**',
        '**/node_modules/**',
        '**/package.json',
        '**/package-lock.json',
        '**/renovate.json',
        '**/vscode-extension/**',
        '**/yarn.lock',
        '**/apps/*/CHANGELOG.md',
        '**/packages/*/CHANGELOG.md',
        'pnpm-lock.yaml',
    ],
    languageSettings: [
        ...toArray(defaultSettings.languageSettings),
        {
            languageId: 'typescript,javascript,typescriptreact,javascriptreact',
            locale: '*',
            includeRegExpList: [],
            ignoreRegExpList: ['js-hex-escape', 'js-unicode-escape', 'js-regexp-flags'],
            patterns: [],
            dictionaries: ['w5s-typescript'],
            dictionaryDefinitions: [],
        },
        {
            languageId: 'typescript,javascript,typescriptreact,javascriptreact',
            locale: '*',
            ignoreRegExpList: ['\\/\\* eslint-disable.+', '\\/\\/ eslint-disable.+'],
        },
    ],
};
module.exports = settings;
