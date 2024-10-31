import { describe, it, expect } from 'vitest';
import * as Module from './index.js';

describe('index', () => {
  it('should match snapshot', () => {
    const {
      import: importProperty,
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      default: _dropDefaultBecauseOfVitest,
      ...otherProperties
    } = Module;
    expect(otherProperties).toMatchSnapshot();
    expect(importProperty).toEqual(
      expect.arrayContaining([
        '@cspell/dict-aws/cspell-ext.json',
        '@cspell/dict-bash/cspell-ext.json',
        '@cspell/dict-companies/cspell-ext.json',
        '@cspell/dict-cryptocurrencies/cspell-ext.json',
        '@cspell/dict-css/cspell-ext.json',
        '@cspell/dict-dart/cspell-ext.json',
        '@cspell/dict-docker/cspell-ext.json',
        '@cspell/dict-en_us/cspell-ext.json',
        '@cspell/dict-en-common-misspellings/cspell-ext.json',
        '@cspell/dict-en-gb/cspell-ext.json',
        '@cspell/dict-filetypes/cspell-ext.json',
        '@cspell/dict-flutter/cspell-ext.json',
        '@cspell/dict-fonts/cspell-ext.json',
        '@cspell/dict-fullstack/cspell-ext.json',
        '@cspell/dict-gaming-terms/cspell-ext.json',
        '@cspell/dict-git/cspell-ext.json',
        '@cspell/dict-golang/cspell-ext.json',
        '@cspell/dict-google/cspell-ext.json',
        '@cspell/dict-html-symbol-entities/cspell-ext.json',
        '@cspell/dict-html/cspell-ext.json',
        '@cspell/dict-java/cspell-ext.json',
        '@cspell/dict-julia/cspell-ext.json',
        '@cspell/dict-k8s/cspell-ext.json',
        '@cspell/dict-lorem-ipsum/cspell-ext.json',
        '@cspell/dict-makefile/cspell-ext.json',
        '@cspell/dict-node/cspell-ext.json',
        '@cspell/dict-npm/cspell-ext.json',
        '@cspell/dict-public-licenses/cspell-ext.json',
        '@cspell/dict-ruby/cspell-ext.json',
        '@cspell/dict-rust/cspell-ext.json',
        '@cspell/dict-sql/cspell-ext.json',
        '@cspell/dict-software-terms/cspell-ext.json',
        '@cspell/dict-svelte/cspell-ext.json',
        '@cspell/dict-swift/cspell-ext.json',
        '@cspell/dict-terraform/cspell-ext.json',
        '@cspell/dict-typescript/cspell-ext.json',
        '@cspell/dict-vue/cspell-ext.json',
      ]),
    );
  });
});
