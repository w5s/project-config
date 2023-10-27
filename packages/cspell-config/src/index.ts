import type { AdvancedCSpellSettings } from '@cspell/cspell-types';
// @ts-ignore CSpell config is not typed
import cSpellSettings from '@cspell/cspell-bundled-dicts/cspell-default.config.js';

const toArray = <T>(value: T | T[] | undefined) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const defaultSettings = cSpellSettings as AdvancedCSpellSettings;
const excludeImport = new Set([
  '@cspell/dict-ada/cspell-ext.json',
  '@cspell/dict-cpp/cspell-ext.json',
  '@cspell/dict-csharp/cspell-ext.json',
  '@cspell/dict-django/cspell-ext.json',
  '@cspell/dict-dotnet/cspell-ext.json',
  '@cspell/dict-fsharp/cspell-ext.json',
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
const dictionaryDefinitions: AdvancedCSpellSettings['dictionaryDefinitions'] = [
  {
    addWords: false,
    name: 'w5s-filetypes',
    path: '../dict/filetypes.txt',
    description: 'Additional file types',
  },
  {
    addWords: false,
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
  {
    addWords: false,
    name: 'w5s-npm',
    path: '../dict/npm.txt',
    description: 'NPM packages',
  },
];

const settings: AdvancedCSpellSettings = {
  ...defaultSettings,
  name: 'W5s default settings .js',
  id: 'w5s-default-js',
  language: 'en',
  description: 'Default cspell configuration.',
  words: [],
  flagWords: [],
  useGitignore: true,
  dictionaryDefinitions: [...toArray(defaultSettings.dictionaryDefinitions), ...dictionaryDefinitions],
  dictionaries: [
    ...toArray(defaultSettings.dictionaries),
    ...dictionaryDefinitions
      .map((dictionaryDefinition) => dictionaryDefinition.name)
      .filter((name) => !['w5s-typescript'].includes(name)),
  ],
  ignoreWords: [],
  import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
  ignorePaths: [
    ...toArray(defaultSettings.ignorePaths),
    '**/CHANGELOG.md',
    '**/__snapshots__/**',
    // '**/.git/**',
    '**/.vscode/**',
    '**/*.snap',
    '**/dist/**',
    '**/node_modules/**',
    '**/package.json',
    '**/package-lock.json',
    '**/renovate.json',
    '**/vscode-extension/**',
    '**/yarn.lock',
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

export = settings;
