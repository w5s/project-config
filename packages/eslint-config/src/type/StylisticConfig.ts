import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';

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
  indent: 2,
  quotes: 'single',
  jsx: true,
  semi: true,
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
  }
}




