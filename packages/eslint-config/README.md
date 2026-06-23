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

> Requires ESLint `9.x` or `10.x`. Optional TypeScript support for `4.x`, `5.x`, and `6.x`.

## Usage

### Minimal flat config

Create `eslint.config.ts` in your project root:

```ts
import defineConfig from '@w5s/eslint-config';

export default defineConfig();
```

### Customize enabled integrations

```ts
import defineConfig from '@w5s/eslint-config';

export default defineConfig({
  stylistic: { indent: 2 },
  yml: true,
});
```

### Features

- Supported languages : `JS`, `TS`, `JSX`, `JSON`, `YAML`, `MARKDOWN`
- Standalone formatting : no prettier cli/configuration required (uses stylistic plugin)
- Enforce best practices : Airbnb base as default
- Opinionated but customizable
- Supports frameworks :
  - UI : `React`
  - Testing : `Jest`, `Vitest`

### Advanced usage

If you want fine-grained control, the package also exports individual configs:

- `@w5s/eslint-config/es`
- `@w5s/eslint-config/jsonc`
- `@w5s/eslint-config/ts`
- `@w5s/eslint-config/yml`
- `@w5s/eslint-config/test`

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
