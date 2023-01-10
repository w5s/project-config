/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */

import type eslint from 'eslint';
import type * as prettier from 'prettier';

const getPackageScope = (): string | undefined => {
  try {
    const { name } = require('../package.json') as { name?: string };
    const prefixMatch = (name ?? '').match(/(@\w+)\//);
    const packageScope = prefixMatch == null ? undefined : prefixMatch[1];
    return packageScope;
  } catch (error_: unknown) {
    // eslint-disable-next-line no-console
    console.warn(error_);

    return undefined;
  }
};
const getPrettierConfig = (moduleName: string): prettier.Config | undefined => {
  try {
    const moduleConfig = require(moduleName);
    return moduleConfig as prettier.Config | undefined;
  } catch {
    return undefined;
  }
};

// Try require '@my-organization/prettier-config'
const getPrettierConfigDefault = () => {
  const defaultConfig: prettier.Config = {
    trailingComma: 'es5',
  };
  const packageScope = getPackageScope();
  return (packageScope == null ? undefined : getPrettierConfig(`${packageScope}/prettier-config`)) ?? defaultConfig;
};

const config: eslint.Linter.Config = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', getPrettierConfigDefault()],
  },
};
export = config;
