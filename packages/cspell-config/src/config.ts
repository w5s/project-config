import type { AdvancedCSpellSettings } from '@cspell/cspell-types';

// @ts-ignore CSpell config is not typed
import cSpellSettings from '@cspell/cspell-bundled-dicts/cspell-default.config.js';

const toArray = <T>(value: T | T[] | undefined) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const defaultSettings = cSpellSettings as AdvancedCSpellSettings;
// eslint-disable-next-line unicorn/no-useless-collection-argument
const excludeImport = new Set<string>([
  // Put here the imports you want to exclude
]);
const dictionaryDefinitions: AdvancedCSpellSettings['dictionaryDefinitions'] = [
  {
    addWords: false,
    description: 'Additional file types',
    name: 'w5s-filetypes',
    path: '../dict/filetypes.txt',
  },
  {
    addWords: false,
    description: 'Fullstack terms',
    name: 'w5s-fullstack',
    path: '../dict/fullstack.txt',
  },
  {
    addWords: false,
    description: 'Typescript keywords',
    name: 'w5s-typescript',
    path: '../dict/typescript.txt',
  },
  {
    addWords: false,
    description: 'Known names',
    name: 'w5s-names',
    path: '../dict/names.txt',
  },
  {
    addWords: false,
    description: 'NPM packages',
    name: 'w5s-npm',
    path: '../dict/npm.txt',
  },
];

export const config: AdvancedCSpellSettings = {
  ...defaultSettings,
  description: 'Default cspell configuration.',
  dictionaries: [
    ...toArray(defaultSettings.dictionaries),
    ...dictionaryDefinitions
      .map((dictionaryDefinition) => dictionaryDefinition.name)
      .filter((name) => !['w5s-typescript'].includes(name)),
  ],
  dictionaryDefinitions: [...toArray(defaultSettings.dictionaryDefinitions), ...dictionaryDefinitions],
  flagWords: [],
  id: 'w5s-default-js',
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
    '**/pnpm-lock.yaml',

    // Ignore common media files
    '**/*.svg',
    '**/*.webp',
    '**/*.webm',
  ],
  ignoreWords: [],
  import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
  language: 'en',
  languageSettings: [
    ...toArray(defaultSettings.languageSettings),
    {
      dictionaries: ['w5s-typescript'],
      dictionaryDefinitions: [],
      ignoreRegExpList: ['js-hex-escape', 'js-unicode-escape', 'js-regexp-flags'],
      includeRegExpList: [],
      languageId: 'typescript,javascript,typescriptreact,javascriptreact',
      locale: '*',
      patterns: [],
    },
    {
      // eslint-disable-next-line unicorn/prefer-string-raw
      ignoreRegExpList: ['\\/\\* eslint-disable.+', '\\/\\/ eslint-disable.+'],
      languageId: 'typescript,javascript,typescriptreact,javascriptreact',
      locale: '*',
    },
  ],
  name: 'W5S default settings .js',
  useGitignore: true,
  words: [],
};
