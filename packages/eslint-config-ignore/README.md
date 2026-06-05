# W5S ESLint ignore configuration _(@w5s/eslint-config-ignore)_

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

> Shared ignore configuration generator for ESLint presets.

## Installation

```console
npm install --save-dev @w5s/eslint-config-ignore
```

## Usage

```ts
import { ignores } from '@w5s/eslint-config-ignore';

export default [ignores()];
```

## API

- `ignores(options?)`
  - `options.ignores?: string[]`

## License

[MIT][license-url]

[package-version-svg]: https://img.shields.io/npm/v/@w5s/eslint-config-ignore.svg?style=flat-square
[package-url]: https://www.npmjs.com/package/@w5s/eslint-config-ignore
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: ../../LICENSE
