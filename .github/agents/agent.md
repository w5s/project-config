# Copilot Agent Instructions

## Build Artifacts

This repository versions its built files. After making any source code changes, you **must** rebuild the affected packages and stage the updated dist files before committing.

### Steps

1. Run the build from the repository root:
   ```sh
   pnpm run build
   ```

2. Stage all modified tracked files (including dist and typegen files):
   ```sh
   git add -u
   ```

3. Include the updated build artifacts in the same commit as the source changes.

### Versioned build outputs

The following directories contain versioned build artifacts that must be kept in sync with their sources:

- `packages/*/dist/` — compiled JavaScript and TypeScript declaration files
- `packages/eslint-config/src/typegen/` — generated ESLint rule type definitions

Failing to update these files will cause the CI `validate` job to fail.
