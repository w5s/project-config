<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=# W5s Commitlint configuration _(${name})_) -->
# W5s Commitlint configuration _(@w5s/commitlint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=> ${description}&unknownTxt= ) -->
> Commitlint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=```console\nnpm install --save-dev ${name} @commitlint/cli\n```) -->
```console
npm install --save-dev @w5s/commitlint-config @commitlint/cli
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

In the `package.json` of your project

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=```json\n{\n  "commitlint": {\n    "extends": ["${name}"]\n  }\n}\n```) -->
```json
{
  "commitlint": {
    "extends": ["@w5s/commitlint-config"]
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

Ensure the `commitlint` is setup on husky commit message hook (default `.husky/commit-msg`)

```console
commitlint --edit $1
# -OR-
npm exec --no -- commitlint --edit $1
```

## License
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@gmail.com>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@w5s/commitlint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@w5s/commitlint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
