#!/usr/bin/env node

/**
 * Vendors the built `git-worktree-manager` binary into the skills that bundle it
 * (currently `w5s-using-git-worktrees`), so the skill is self-contained and runs the
 * exact same code offline when the CLI is not installed in the host repo.
 *
 * The source is the `bin` entry of `@w5s/git-worktree-manager`, resolved through
 * node_modules (a workspace symlink in this monorepo). Because the package build
 * generates that file and `agent-config` depends on the package, turbo's `^build`
 * ordering guarantees the freshly built binary is copied here.
 *
 * Usage: node scripts/sync-vendored-cli.ts [--package-dir=<dir>]
 */
import { chmodSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { vendoredCliPath, VENDORING_SKILLS } from './vendored-cli.ts';

const PACKAGE_DIR_FLAG = '--package-dir=';
const CLI_PACKAGE = '@w5s/git-worktree-manager';

const args = process.argv.slice(2);
const packageDirArg = args.find((_) => _.startsWith(PACKAGE_DIR_FLAG))?.slice(PACKAGE_DIR_FLAG.length);
const packageDir = path.resolve(packageDirArg ?? path.join(path.dirname(fileURLToPath(import.meta.url)), '..'));

const binary = readFileSync(resolveCliBin(packageDir));

const changed: Array<string> = [];
for (const skill of VENDORING_SKILLS) {
  const target = vendoredCliPath(packageDir, skill);
  if (!existsSync(path.dirname(target))) {
    continue;
  }
  const current = existsSync(target) ? readFileSync(target) : undefined;
  if (!current?.equals(binary)) {
    writeFileSync(target, binary);
    chmodSync(target, 0o755);
    changed.push(target);
  }
}

if (changed.length > 0) {
  const list = changed.map((file) => `  - ${path.relative(process.cwd(), file)}`).join('\n');
  process.stdout.write(`Updated vendored CLI:\n${list}\n`);
} else {
  process.stdout.write('Vendored CLI is up to date.\n');
}

/**
 * @param fromDir directory to resolve the CLI package from
 * @returns absolute path of the CLI `bin` file
 */
function resolveCliBin(fromDir: string): string {
  const require = createRequire(path.join(fromDir, 'package.json'));
  const manifestPath = require.resolve(`${CLI_PACKAGE}/package.json`);
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as { bin?: Record<string, string> | string };
  const bin = typeof manifest.bin === 'string' ? manifest.bin : manifest.bin?.['git-worktree-manager'];
  if (bin === undefined) {
    throw new Error(`${CLI_PACKAGE} does not declare a git-worktree-manager bin`);
  }
  return path.resolve(path.dirname(manifestPath), bin);
}
