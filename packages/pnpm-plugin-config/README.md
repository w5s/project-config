<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# w5s pnpm plugin _(${name})_) -->

# w5s pnpm plugin _(@w5s/pnpm-plugin-config)_

<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->

> Shared pnpm configuration plugin with org defaults

<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

Install as a [config dependency](https://pnpm.io/config-dependencies) so pnpm auto-loads the plugin:

```console
pnpm add --config @w5s/pnpm-plugin-config
```

This adds the package to `configDependencies` in `pnpm-workspace.yaml`. Because the package name follows the `@*/pnpm-plugin-*` convention, pnpm automatically loads `pnpmfile.mjs` from the package root.

## What it changes

Defaults are applied only when a setting is not already defined in your workspace configuration.
Inspired by [@pnpm/plugin-better-defaults](https://github.com/pnpm/pnpm/tree/main/plugins/plugin-better-defaults), extended with org-specific settings.

- `allowBuilds`: `@swc/core: true`, `core-js: true`, `es5-ext: true`, `esbuild: true`, `lefthook: true`, `nx: true`, `protobufjs: true`
- `blockExoticSubdeps: true`
- `enableGlobalVirtualStore: true`
- `enablePrePostScripts: false`
- `ignorePatchFailures: false`
- `minimumReleaseAge: 1440` (1 day)
- `minimumReleaseAgeExclude`: `@w5s/*`
- `optimisticRepeatInstall: true`
- `resolutionMode: 'lowest-direct'`
- `trustPolicy: 'no-downgrade'`
- `trustPolicyIgnoreAfter: 10080` (7 days)
- `verifyDepsBeforeRun: 'install'`
- Resets `hoistPattern` from `['*']` to `[]` when that is the only pattern

## Usage

### Auto-load (recommended)

```console
pnpm add --config @w5s/pnpm-plugin-config
```

### Manual compose

Import hooks in your local `.pnpmfile.mjs` to compose with other hooks:

```js
import { hooks as pluginHooks } from '@w5s/pnpm-plugin-config';

export const hooks = {
  updateConfig(config) {
    return pluginHooks.updateConfig(config);
  },
};
```

## Requirements

pnpm: >=10.8.0 (`updateConfig` hook)

## License

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->

[UNLICENSED][license-url] © w5s

<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->

[package-version-svg]: https://img.shields.io/npm/v/@w5s/pnpm-plugin-config.svg?style=flat-square

<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->

[package-url]: https://www.npmjs.com/package/@w5s/pnpm-plugin-config

<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->

[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square

<!-- AUTO-GENERATED-CONTENT:END -->

[license-url]: ../../LICENSE
