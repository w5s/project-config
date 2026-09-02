<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# W5S Managed Script _(${name})_) -->
# W5S Managed Script _(@w5s/managed-script)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> CLI tool to manage project scripts
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @w5s/managed-script
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```json\n"${name}"\n```) -->
```json
"@w5s/managed-script"
```
<!-- AUTO-GENERATED-CONTENT:END -->

### Working directory and config origins

Use `--cwd` to choose the directory used to resolve configuration and run the selected script. The equivalent environment variable is `MANAGED_SCRIPT_CWD`; the CLI option takes precedence over the environment variable, which takes precedence over the current process directory.

Scripts receive these environment variables:

- `MANAGED_SCRIPT_NAME`: the resolved script name.
- `MANAGED_SCRIPT_CWD`: the invocation directory used to resolve configuration and spawn the script.
- `MANAGED_SCRIPT_CONFIG_FILE`: the root configuration file, when one was found.
- `MANAGED_SCRIPT_CONFIG_DIR`: the directory of the configuration layer that declared the selected script.

The spawn directory always remains `MANAGED_SCRIPT_CWD`. This lets a shared configuration package ship scripts and locate files beside its config without changing the project's execution context:

```json
{
  "extends": ["@acme/managed-script-config"],
  "scripts": {
    "build": "node \"$MANAGED_SCRIPT_CONFIG_DIR/scripts/build.js\""
  }
}
```

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@gmail.com>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@w5s/managed-script.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@w5s/managed-script
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
