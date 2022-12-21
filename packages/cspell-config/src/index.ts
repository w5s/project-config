import type { AdvancedCSpellSettings } from '@cspell/cspell-types';
// @ts-ignore
import cSpellSettings from '@cspell/cspell-bundled-dicts/cspell-default.config.js';

const toArray = <T>(value: T | T[] | undefined) => (Array.isArray(value) ? value : value == null ? [] : [value]);
const defaultSettings = cSpellSettings as AdvancedCSpellSettings;
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
const settings: AdvancedCSpellSettings = {
  ...defaultSettings,
  name: 'W5s default settings .js',
  id: 'w5s-default-js',
  language: 'en',
  description: 'Default cspell configuration.',
  words: [],
  flagWords: [],
  ignorePaths: [],
  dictionaryDefinitions: [
    ...toArray(defaultSettings.dictionaryDefinitions),
    {
      name: 'filetypes-w5s',
      path: '../dict/filetypes.txt',
      description: 'Additional file types',
    },
  ],
  dictionaries: [...toArray(defaultSettings.dictionaries), 'filetypes-w5s'],
  ignoreWords: [],
  import: toArray(defaultSettings.import).filter((dict) => !excludeImport.has(dict)),
};

export = settings;
