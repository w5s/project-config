<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# W5S Typescript configuration _(${name})_) -->
# W5S Typescript configuration _(@w5s/ts-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> Typescript compiler configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @w5s/ts-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

In the `tsconfig.json` for your project

```json
{
    "extends": "@w5s/ts-config"
}
```

## Features

- `tsconfig.json`
  - All strict settings by default
  - Emit JS with latest syntax, files should be transpiled if needed with other tool (esbuild, etc)
  - Isolated modules
  - Source map, Declaration and Declaration map

## Requirements
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=Typescript: ${peerDependencies.typescript}&unknownTxt= ) -->
Typescript: >=5.x
<!-- AUTO-GENERATED-CONTENT:END -->

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@gmail.com>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@w5s/ts-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@w5s/ts-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
