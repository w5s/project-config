import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { __exists } from './__exists.js';
import { __existsSync } from './__existsSync.js';

const defaultExtensions: Array<string> = ['.json', '.yaml', '.yml', '.js', '.cjs', '.mjs', '.ts', '.cts', '.mts'];

export interface IsConfigPresentOptions {
  /**
   * The name of the application.
   */
  app: string;

  /**
   * The directory to look into. Defaults to `process.cwd()`.
   */
  cwd?: string | undefined;

  /**
   * The list of extensions to check for.
   */
  extensions?: Array<string> | undefined;

  /**
   * The name of the package configuration. Defaults to `app`.
   */
  packageConfig?: string | undefined;
}

/**
 * Return whether tool configuration exists at `cwd` (cosmiconfig-style).
 *
 * Looks for `.{app}rc`, `.{app}rc.{ext}`, `{app}.config.{ext}` and a matching
 * `package.json` key.
 *
 * @param options
 */
export async function isConfigPresent(options: IsConfigPresentOptions): Promise<boolean> {
  const { candidatePaths, packageConfig, packageJsonPath } = toCandidates(options);

  const [hasConfigFile, hasPackageConfig] = await Promise.all([
    hasAnyFile(candidatePaths),
    hasPackageConfigFile(packageJsonPath, packageConfig),
  ]);

  return hasConfigFile || hasPackageConfig;
}

export function isConfigPresentSync(options: IsConfigPresentOptions): boolean {
  const { candidatePaths, packageConfig, packageJsonPath } = toCandidates(options);

  for (const candidatePath of candidatePaths) {
    if (__existsSync(candidatePath)) {
      return true;
    }
  }

  if (__existsSync(packageJsonPath)) {
    try {
      return hasPackageConfigKey(readFileSync(packageJsonPath, 'utf8'), packageConfig);
    } catch {
      return false;
    }
  }

  return false;
}

async function hasAnyFile(paths: Array<string>): Promise<boolean> {
  const results = await Promise.all(paths.map((candidatePath) => __exists(candidatePath)));

  return results.some(Boolean);
}

async function hasPackageConfigFile(packageJsonPath: string, packageConfig: string): Promise<boolean> {
  if (!(await __exists(packageJsonPath))) {
    return false;
  }

  try {
    return hasPackageConfigKey(await readFile(packageJsonPath, 'utf8'), packageConfig);
  } catch {
    return false;
  }
}

function hasPackageConfigKey(packageJsonContent: string, packageConfig: string): boolean {
  const packageJson = JSON.parse(packageJsonContent) as Record<string, unknown>;
  const value = packageJson[packageConfig];

  return value !== undefined && value !== null && value !== false;
}

function toCandidates({ app, cwd = process.cwd(), extensions = defaultExtensions, packageConfig = app }: IsConfigPresentOptions) {
  const candidatePaths = [path.join(cwd, `.${app}rc`)];
  for (const extension of extensions) {
    candidatePaths.push(path.join(cwd, `.${app}rc${extension}`), path.join(cwd, `${app}.config${extension}`));
  }

  return {
    candidatePaths,
    packageConfig,
    packageJsonPath: path.join(cwd, 'package.json'),
  };
}
