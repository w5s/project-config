const { json } = require('mrm-core');

const npm = require('./npm.js');

/**
 * @typedef {{
 *   version: '0.2',
 *   language: string,
 *   words?: string[],
 *   flagWords?: string[],
 *   ignorePaths?: string[],
 *   ignoreWords?: string[],
 *   ignoreRegExpList?: string[],
 *   import?: string[]
 * }} CSpellConfig
 */

/**
 * @param {{
 *   state: 'present'|'absent'
 *   update?: (config: CSpellConfig) => CSpellConfig
 * }} options
 */
function cspell({ state, update }) {
  const hasCSpell = state === 'present';

  const cSpellFile = json('.cspell.json', {
    flagWords: [],
    ignorePaths: [
      '**/[.]*/**', // ignore hidden directories
    ],
    language: 'en',
    version: '0.2',
    words: [],
  });

  if (hasCSpell) {
    if (update) {
      cSpellFile.set(update(cSpellFile.get()));
    }

    /**
     * Otherwise save the file with content
     */
    cSpellFile.save();
  } else {
    cSpellFile.delete();
  }

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['cspell'],
    state,
  });
}

module.exports = {
  cspell,
};
