/**
 * Synchronizes the metadata that can be derived from `package.json` into the
 * frontmatter of every `skills/<name>/SKILL.md` of this package.
 *
 * Managed keys (written only when a value can be resolved, otherwise left untouched):
 *
 * | Frontmatter key       | Source in package.json                          |
 * | --------------------- | ----------------------------------------------- |
 * | `license`             | `license`                                       |
 * | `metadata.author`     | `author` (string or object) / `contributors[0]` |
 * | `metadata.version`    | `version`                                       |
 * | `metadata.repository` | `repository` (normalized to an https URL)       |
 * | `metadata.package`    | `name`                                          |
 *
 * Every other key (`name`, `description`, `compatibility`, `metadata.tags`, ...) is hand-authored
 * and never modified. Missing fields are resolved from the closest parent `package.json`
 * (e.g. the workspace root), so they can be declared once.
 *
 * Everything is idempotent: running it twice produces no diff.
 *
 * The CLI lives in `./sync-skill-metadata.ts`.
 */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

export interface SkillMetadata {
  author?: string | undefined;
  license?: string | undefined;
  package?: string | undefined;
  repository?: string | undefined;
  version?: string | undefined;
}

interface Manifest {
  author?: unknown;
  contributors?: Array<unknown>;
  license?: string;
  name?: string;
  repository?: unknown;
  version?: string;
}

const DELIMITER = '---';
const METADATA_KEY = 'metadata';
const METADATA_FIELDS = ['author', 'version', 'repository', 'package'] as const;

const LINE_BREAK = /\r?\n/;
const SHORTHAND_REPOSITORY = /^[\w.-]+\/[\w.-]+$/;
const HOSTED_REPOSITORY = /^(github|gitlab|bitbucket):(.+)$/;
const GIT_PLUS_PREFIX = /^git\+/;
const SCP_LIKE_URL = /^git@([^:]+):/;
const GIT_PROTOCOL_PREFIX = /^(?:git|ssh):\/\/(?:git@)?/;
const GIT_SUFFIX = /\.git$/;
const TRAILING_SLASHES = /\/+$/;
const LEADING_WHITESPACE = /^\s/;
const INDENTED_KEY = /^(\s+)\S/;
const PLAIN_SCALAR = /^[\dA-Za-z][\w ./:<>@+-]*$/;
const UNSAFE_SCALAR = /:\s|\s#|\s$/;
const NUMBER_LIKE = /^[+-]?(\d+\.?\d*|\.\d+)([Ee][+-]?\d+)?$/;
const RESERVED_WORD = /^(true|false|null|yes|no|on|off|y|n)$/i;

/**
 * @param content SKILL.md content
 * @param metadata
 * @returns the content with the managed frontmatter keys set (content without frontmatter is returned as is)
 */
export function applyMetadata(content: string, metadata: SkillMetadata): string {
  const eol = content.includes('\r\n') ? '\r\n' : '\n';
  const lines = content.split(LINE_BREAK);
  if (lines[0] !== DELIMITER) {
    return content;
  }
  const closing = lines.indexOf(DELIMITER, 1);
  if (closing === -1) {
    return content;
  }
  const frontmatter = lines.slice(1, closing);

  if (metadata.license !== undefined) {
    setTopLevel(frontmatter, 'license', metadata.license);
  }
  for (const key of METADATA_FIELDS) {
    const value = metadata[key];
    if (value !== undefined) {
      setMetadata(frontmatter, key, value);
    }
  }

  return [DELIMITER, ...frontmatter, ...lines.slice(closing)].join(eol);
}

/**
 * @param packageDir
 * @returns absolute paths of the `skills/<name>/SKILL.md` files
 */
export function findSkillFiles(packageDir: string): Array<string> {
  const skillsDir = path.join(packageDir, 'skills');
  return existsSync(skillsDir)
    ? readdirSync(skillsDir)
        .toSorted((left, right) => left.localeCompare(right))
        .map((name) => path.join(skillsDir, name))
        .filter((directory) => statSync(directory).isDirectory())
        .map((directory) => path.join(directory, 'SKILL.md'))
        .filter((file) => existsSync(file))
    : [];
}

/**
 * Normalizes npm `repository` values (`git+https://…/x.git`, `github:o/r`, `o/r`, `git@host:o/r.git`) to a browsable URL.
 *
 * @param repository
 * @returns an https URL, or `undefined` when there is no repository
 */
export function formatRepository(repository: unknown): string | undefined {
  const raw = nonEmptyString(
    typeof repository === 'string' ? repository : (repository as null | undefined | { url?: unknown })?.url,
  );
  if (raw === undefined) {
    return undefined;
  }
  let url = SHORTHAND_REPOSITORY.test(raw) ? `github:${raw}` : raw;
  const hosted = HOSTED_REPOSITORY.exec(url);
  if (hosted) {
    url = `https://${hosted[1]}.${hosted[1] === 'bitbucket' ? 'org' : 'com'}/${hosted[2]}`;
  }
  return url
    .replace(GIT_PLUS_PREFIX, '')
    .replace(SCP_LIKE_URL, 'https://$1/')
    .replace(GIT_PROTOCOL_PREFIX, 'https://')
    .replace(GIT_SUFFIX, '')
    .replace(TRAILING_SLASHES, '');
}

/**
 * Resolves the metadata of the package.
 * A value declared in the package itself always wins over the one of a parent package.
 * `version` and `package` are never inherited.
 *
 * @param packageDir
 * @returns the resolved metadata (unresolvable fields are `undefined`)
 */
export function resolveMetadata(packageDir: string): SkillMetadata {
  const manifests = readManifests(packageDir);
  const [self] = manifests;
  if (self === undefined) {
    throw new Error(`No package.json found in ${packageDir}`);
  }
  return {
    author: firstDefined(manifests, (_) => formatPerson(_.author) ?? formatPerson(_.contributors?.[0])),
    license: firstDefined(manifests, (_) => nonEmptyString(_.license)),
    package: nonEmptyString(self.name),
    repository: firstDefined(manifests, (_) => formatRepository(_.repository)),
    version: nonEmptyString(self.version),
  };
}

/**
 * @param options
 * @param options.packageDir
 * @param options.check when `true`, nothing is written
 * @returns absolute paths of the files that are (or, in check mode, would be) updated
 */
export function syncSkillMetadata({ check = false, packageDir }: { check?: boolean; packageDir: string }): Array<string> {
  const metadata = resolveMetadata(packageDir);
  const changed: Array<string> = [];
  for (const file of findSkillFiles(packageDir)) {
    const current = readFileSync(file, 'utf8');
    const next = applyMetadata(current, metadata);
    if (next !== current) {
      changed.push(file);
      if (!check) {
        writeFileSync(file, next);
      }
    }
  }
  return changed;
}

/**
 * Serializes a value as a YAML scalar, quoting it only when needed.
 *
 * @param value
 * @returns the YAML scalar
 */
export function yamlScalar(value: string): string {
  const isPlain =
    PLAIN_SCALAR.test(value) && !UNSAFE_SCALAR.test(value) && !NUMBER_LIKE.test(value) && !RESERVED_WORD.test(value);
  // Single quotes, to match the Prettier output (an escaped quote is doubled in YAML)
  return isPlain ? value : `'${value.replaceAll("'", "''")}'`;
}

/**
 * @param lines
 * @param key
 * @returns the index of the top level key, or -1
 */
function findTopLevelKey(lines: Array<string>, key: string): number {
  return lines.findIndex((line) => line.startsWith(`${key}:`));
}

/**
 * @param manifests closest first
 * @param pick
 * @returns the first value found across the manifests
 */
function firstDefined<T>(manifests: ReadonlyArray<Manifest>, pick: (manifest: Manifest) => T | undefined): T | undefined {
  for (const manifest of manifests) {
    const value = pick(manifest);
    if (value !== undefined) {
      return value;
    }
  }
  return undefined;
}

/**
 * @param person
 * @returns `Name <email>`, or `undefined` when it cannot be resolved
 */
function formatPerson(person: unknown): string | undefined {
  if (typeof person === 'string') {
    return nonEmptyString(person);
  }
  if (person != null && typeof person === 'object') {
    const name = nonEmptyString((person as { name?: unknown }).name);
    const email = nonEmptyString((person as { email?: unknown }).email);
    return name === undefined || email === undefined ? name : `${name} <${email}>`;
  }
  return undefined;
}

/**
 * @param value
 * @returns the trimmed string, or `undefined` when it is not a non-empty string
 */
function nonEmptyString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : undefined;
}

/**
 * Reads `package.json` of `packageDir` followed by those of its parent directories,
 * up to (and including) the workspace / repository root.
 *
 * @param packageDir
 * @returns the manifests, closest first
 */
function readManifests(packageDir: string): Array<Manifest> {
  const manifests: Array<Manifest> = [];
  let current = path.resolve(packageDir);
  for (;;) {
    const file = path.join(current, 'package.json');
    if (existsSync(file)) {
      manifests.push(JSON.parse(readFileSync(file, 'utf8')) as Manifest);
    }
    const isRoot = existsSync(path.join(current, 'pnpm-workspace.yaml')) || existsSync(path.join(current, '.git'));
    const parent = path.dirname(current);
    if (isRoot || parent === current) {
      return manifests;
    }
    current = parent;
  }
}

/**
 * @param lines frontmatter lines (mutated)
 * @param key
 * @param value
 */
function setMetadata(lines: Array<string>, key: string, value: string): void {
  let start = findTopLevelKey(lines, METADATA_KEY);
  if (start === -1) {
    lines.push(`${METADATA_KEY}:`);
    start = lines.length - 1;
  }
  // The block ends at the next line that is neither indented nor blank
  let end = start + 1;
  let lastChild = start;
  while (end < lines.length && (lines[end] === '' || LEADING_WHITESPACE.test(lines[end] ?? ''))) {
    if (lines[end] !== '') {
      lastChild = end;
    }
    end += 1;
  }
  const indent = INDENTED_KEY.exec(lines[start + 1] ?? '')?.[1] ?? '  ';
  const entry = `${indent}${key}: ${yamlScalar(value)}`;
  const existing = lines.findIndex(
    (line, index) => index > start && index <= lastChild && line.startsWith(`${indent}${key}:`),
  );
  if (existing === -1) {
    lines.splice(lastChild + 1, 0, entry);
  } else {
    lines[existing] = entry;
  }
}

/**
 * @param lines frontmatter lines (mutated)
 * @param key
 * @param value
 */
function setTopLevel(lines: Array<string>, key: string, value: string): void {
  const entry = `${key}: ${yamlScalar(value)}`;
  const index = findTopLevelKey(lines, key);
  if (index !== -1) {
    lines[index] = entry;
    return;
  }
  const metadataIndex = findTopLevelKey(lines, METADATA_KEY);
  lines.splice(metadataIndex === -1 ? lines.length : metadataIndex, 0, entry);
}
