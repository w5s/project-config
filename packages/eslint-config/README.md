<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# W5S ESLint configuration _(${name})_) -->
# W5S ESLint configuration _(@w5s/eslint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> ESLint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @w5s/eslint-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

### Default JS/TS project

For most kind of project, just edit `eslintrc.json` and add default configuration

```js
{
  "extends": [
    "@w5s/eslint-config"
  ]
}
```

**Features :**

- `ES` and `TS` validation
- `Prettier` formatting
- `JSX` and `React` syntax validation
- `Jest` tests

### Custom project

For most kind of project, just edit `eslintrc.json` and cherry pick only configurations

```js
{
  "root": true,
  "extends": [
    "@w5s/eslint-config/es",
    "@w5s/eslint-config/jest",
    "@w5s/eslint-config/json",
    "@w5s/eslint-config/ts",
    "@w5s/eslint-config/yml",
    // include more configurations here
  ]
  //...
}
```

**Available configurations :**

- `@w5s/eslint-config/es`: for ECMA Script (ES) files
- `@w5s/eslint-config/jest`: for jest environment tests
- `@w5s/eslint-config/json`: for json and jsonc files
- `@w5s/eslint-config/ts`: for typescript files
- `@w5s/eslint-config/yml`: for yaml files

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@gmail.com>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@w5s/eslint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@w5s/eslint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
