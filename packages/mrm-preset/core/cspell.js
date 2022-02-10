const { json } = require('mrm-core');
const pkg = require('./pkg');
const npm = require('./npm');
/**
 * @typedef {{
 *   version: '0.1',
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

  pkg.withPackageJson((packageFile) => {
    pkg.script(packageFile, {
      name: 'cspell',
      script: 'cspell',
      state,
    });
  });

  const cSpellFile = json('cSpell.json', {
    version: '0.1',
    language: 'en',
    words: [],
    flagWords: [],
    ignorePaths: [
      '**/[.]*/**', // ignore hidden directories
    ],
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
