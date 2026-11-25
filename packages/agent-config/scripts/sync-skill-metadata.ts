#!/usr/bin/env node

/**
 * Writes the metadata derived from `package.json` into every `skills/<name>/SKILL.md` (see `./skill-metadata.ts`).
 *
 * Release workflow: this is the package `build` script. `make release` runs
 * `lerna version` → `pnpm install` → `pnpm run build` → "Build artifacts" commit → tags moved on that commit,
 * so the version written here is the freshly bumped one and ends up inside the release tag.
 *
 * Usage: node scripts/sync-skill-metadata.ts [--check] [--package-dir=<dir>]
 *   --check  Do not write; exit with code 1 when a SKILL.md is out of date.
 */
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { syncSkillMetadata } from './skill-metadata.ts';

const PACKAGE_DIR_FLAG = '--package-dir=';

const args = process.argv.slice(2);
const check = args.includes('--check');
const packageDirArg = args.find((_) => _.startsWith(PACKAGE_DIR_FLAG))?.slice(PACKAGE_DIR_FLAG.length);
const packageDir = path.resolve(packageDirArg ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..'));

const files = syncSkillMetadata({ check, packageDir }).map((file) => `  - ${path.relative(process.cwd(), file)}`);

if (check && files.length > 0) {
  process.stderr.write(`Skill metadata is out of date, run "pnpm run build":\n${files.join('\n')}\n`);
  process.exitCode = 1;
} else if (files.length > 0) {
  process.stdout.write(`Updated skill metadata:\n${files.join('\n')}\n`);
} else {
  process.stdout.write('Skill metadata is up to date.\n');
}
