"use strict";
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const getPackageScope = () => {
    try {
        const { name } = require('../package.json');
        const prefixMatch = (name ?? '').match(/(@\w+)\//);
        const packageScope = prefixMatch == null ? undefined : prefixMatch[1];
        return packageScope;
    }
    catch (error_) {
        // eslint-disable-next-line no-console
        console.warn(error_);
        return undefined;
    }
};
const getPrettierConfig = (moduleName) => {
    try {
        const moduleConfig = require(moduleName);
        return moduleConfig;
    }
    catch {
        return undefined;
    }
};
// Try require '@my-organization/prettier-config'
const getPrettierConfigDefault = () => {
    const defaultConfig = {
        trailingComma: 'es5',
    };
    const packageScope = getPackageScope();
    return (packageScope == null ? undefined : getPrettierConfig(`${packageScope}/prettier-config`)) ?? defaultConfig;
};
const config = {
    extends: ['prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error', getPrettierConfigDefault()],
    },
};
module.exports = config;
//# sourceMappingURL=prettier.js.map