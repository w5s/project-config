import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import prettierConfig from '@w5s/prettier-config';

export interface StylisticConfig {
  enabled: boolean;
  indent: NonNullable<StylisticCustomizeOptions['indent']>;
  quotes: NonNullable<StylisticCustomizeOptions['quotes']>;
  jsx: NonNullable<StylisticCustomizeOptions['jsx']>;
  semi: NonNullable<StylisticCustomizeOptions['semi']>;
}

export interface StylisticParameters extends Partial<StylisticConfig> {}

const defaultConfig = {
  enabled: true,
  indent: prettierConfig.tabWidth ?? 2,
  quotes: prettierConfig.singleQuote ? 'single' : 'double',
  jsx: true,
  semi: prettierConfig.semi ?? true,
} satisfies StylisticConfig;

/**
 * @namespace
 */
export const StylisticConfig = {
  /**
   * Default config
   */
  default: defaultConfig,

  /**
   * Return a new StylisticConfig from input
   *
   * @param input
   */
  from(input: boolean | StylisticParameters): StylisticConfig {
    return typeof input === 'boolean' ? { ...defaultConfig, enabled: input } : { ...defaultConfig, ...input };
  },
};
