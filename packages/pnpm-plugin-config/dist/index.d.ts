import { Cafs, ResolvedFrom } from "@pnpm/cafs-types";
//#region src/defaultConfig.d.ts
declare const defaultConfig: Readonly<{
  allowBuilds: {
    '@swc/core': true;
    'core-js': true;
    'es5-ext': true;
    esbuild: true;
    lefthook: true;
    nx: true;
    protobufjs: true;
    sqlite3: true;
  };
  blockExoticSubdeps: true;
  enableGlobalVirtualStore: true;
  enablePrePostScripts: false;
  ignorePatchFailures: false;
  minimumReleaseAge: number;
  minimumReleaseAgeExclude: string[];
  optimisticRepeatInstall: true;
  overrides: {};
  resolutionMode: "lowest-direct";
  trustPolicy: "no-downgrade";
  trustPolicyIgnoreAfter: number;
  verifyDepsBeforeRun: "install";
}>;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+catalogs.types@1000.0.0/node_modules/@pnpm/catalogs.types/lib/index.d.ts
/**
 * Catalogs parsed from the pnpm-workspace.yaml file.
 *
 * https://github.com/pnpm/rfcs/pull/1
 */
interface Catalogs {
  /**
   * The default catalog.
   *
   * The default catalog can be defined in 2 ways.
   *
   *   1. Users can specify a top-level "catalog" field or,
   *   2. An explicitly named "default" catalog under the "catalogs" map.
   *
   * This field contains either definition. Note that it's an error to define
   * the default catalog using both options. The parser will fail when reading
   * the workspace manifest.
   */
  readonly default?: Catalog;
  /**
   * Named catalogs.
   */
  readonly [catalogName: string]: Catalog | undefined;
}
interface Catalog {
  readonly [dependencyName: string]: string | undefined;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/config.d.ts
type AllowBuild = (pkgName: string, pkgVersion: string) => boolean;
type TrustPolicy = 'no-downgrade' | 'off';
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/env.d.ts
interface ExecutionEnv {
  nodeVersion?: string;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/misc.d.ts
interface Registries {
  default: string;
  [scope: string]: string;
}
interface SslConfig {
  cert: string;
  key: string;
  ca?: string;
}
type DepPath = string & {
  __brand: 'DepPath';
};
type ProjectId = string & {
  __brand: 'ProjectId';
};
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/package.d.ts
type Dependencies = Record<string, string>;
type PackageBin = string | {
  [commandName: string]: string;
};
type PackageScripts = {
  [name: string]: string;
} & {
  prepublish?: string;
  prepare?: string;
  prepublishOnly?: string;
  prepack?: string;
  postpack?: string;
  publish?: string;
  postpublish?: string;
  preinstall?: string;
  install?: string;
  postinstall?: string;
  preuninstall?: string;
  uninstall?: string;
  postuninstall?: string;
  preversion?: string;
  version?: string;
  postversion?: string;
  pretest?: string;
  test?: string;
  posttest?: string;
  prestop?: string;
  stop?: string;
  poststop?: string;
  prestart?: string;
  start?: string;
  poststart?: string;
  prerestart?: string;
  restart?: string;
  postrestart?: string;
  preshrinkwrap?: string;
  shrinkwrap?: string;
  postshrinkwrap?: string;
};
interface PeerDependenciesMeta {
  [dependencyName: string]: {
    optional?: boolean;
  };
}
interface DependenciesMeta {
  [dependencyName: string]: {
    injected?: boolean;
    node?: string;
    patch?: string;
  };
}
interface EngineDependency {
  name: string;
  version?: string;
  onFail?: 'ignore' | 'warn' | 'error' | 'download';
}
type DevEngineKey = 'os' | 'cpu' | 'libc' | 'runtime' | 'packageManager';
type DevEngines = Partial<Record<DevEngineKey, EngineDependency | EngineDependency[]>>;
interface PublishConfig extends Record<string, unknown> {
  directory?: string;
  linkDirectory?: boolean;
  executableFiles?: string[];
  registry?: string;
}
type Version = string;
type Pattern = string;
interface TypesVersions {
  [version: Version]: {
    [pattern: Pattern]: string[];
  };
}
interface BaseManifest {
  name?: string;
  version?: string;
  type?: string;
  bin?: PackageBin;
  description?: string;
  directories?: {
    bin?: string;
  };
  files?: string[];
  funding?: string;
  dependencies?: Dependencies;
  devDependencies?: Dependencies;
  optionalDependencies?: Dependencies;
  peerDependencies?: Dependencies;
  peerDependenciesMeta?: PeerDependenciesMeta;
  dependenciesMeta?: DependenciesMeta;
  bundleDependencies?: string[] | boolean;
  bundledDependencies?: string[] | boolean;
  homepage?: string;
  repository?: string | {
    url: string;
  };
  bugs?: string | {
    url?: string;
    email?: string;
  };
  scripts?: PackageScripts;
  config?: object;
  engines?: {
    node?: string;
    npm?: string;
    pnpm?: string;
  } & Pick<DevEngines, 'runtime'>;
  devEngines?: DevEngines;
  cpu?: string[];
  os?: string[];
  libc?: string[];
  main?: string;
  module?: string;
  typings?: string;
  types?: string;
  publishConfig?: PublishConfig;
  typesVersions?: TypesVersions;
  readme?: string;
  keywords?: string[];
  author?: string;
  license?: string;
  exports?: Record<string, string>;
  imports?: Record<string, unknown>;
}
interface DependencyManifest extends BaseManifest {
  name: string;
  version: string;
}
type PackageExtension = Pick<BaseManifest, 'dependencies' | 'optionalDependencies' | 'peerDependencies' | 'peerDependenciesMeta'>;
interface PeerDependencyRules {
  ignoreMissing?: string[];
  allowAny?: string[];
  allowedVersions?: Record<string, string>;
}
type AllowedDeprecatedVersions = Record<string, string>;
type VersionWithIntegrity = string;
type ConfigDependencies = Record<string, VersionWithIntegrity | {
  tarball?: string;
  integrity: VersionWithIntegrity;
}>;
interface AuditConfig {
  ignoreCves?: string[];
  ignoreGhsas?: string[];
}
interface PnpmSettings {
  configDependencies?: ConfigDependencies;
  neverBuiltDependencies?: string[];
  onlyBuiltDependencies?: string[];
  onlyBuiltDependenciesFile?: string;
  allowBuilds?: Record<string, boolean | string>;
  ignoredBuiltDependencies?: string[];
  overrides?: Record<string, string>;
  packageExtensions?: Record<string, PackageExtension>;
  ignoredOptionalDependencies?: string[];
  peerDependencyRules?: PeerDependencyRules;
  allowedDeprecatedVersions?: AllowedDeprecatedVersions;
  allowNonAppliedPatches?: boolean;
  allowUnusedPatches?: boolean;
  ignorePatchFailures?: boolean;
  patchedDependencies?: Record<string, string>;
  updateConfig?: {
    ignoreDependencies?: string[];
  };
  auditConfig?: AuditConfig;
  requiredScripts?: string[];
  supportedArchitectures?: SupportedArchitectures;
  executionEnv?: ExecutionEnv;
}
interface ProjectManifest extends BaseManifest {
  packageManager?: string;
  workspaces?: string[];
  pnpm?: PnpmSettings;
  private?: boolean;
  resolutions?: Record<string, string>;
}
interface SupportedArchitectures {
  os?: string[];
  cpu?: string[];
  libc?: string[];
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/options.d.ts
interface FinderContext {
  alias: string;
  name: string;
  version: string;
  readManifest: () => DependencyManifest;
}
type Finder = (ctx: FinderContext) => boolean | string;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/peerDependencyIssues.d.ts
type ParentPackages = Array<{
  name: string;
  version: string;
}>;
interface MissingPeerDependencyIssue {
  parents: ParentPackages;
  optional: boolean;
  wantedRange: string;
}
type MissingPeerIssuesByPeerName = Record<string, MissingPeerDependencyIssue[]>;
interface BadPeerDependencyIssue extends MissingPeerDependencyIssue {
  foundVersion: string;
  resolvedFrom: ParentPackages;
}
type BadPeerIssuesByPeerName = Record<string, BadPeerDependencyIssue[]>;
type PeerDependencyIssuesByProjects = Record<string, PeerDependencyIssues>;
interface PeerDependencyIssues {
  bad: BadPeerIssuesByPeerName;
  missing: MissingPeerIssuesByPeerName;
  conflicts: string[];
  intersections: Record<string, string>;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+types@1001.3.0/node_modules/@pnpm/types/lib/project.d.ts
interface Project {
  rootDir: ProjectRootDir;
  rootDirRealPath: ProjectRootDirRealPath;
  modulesDir?: string;
  manifest: ProjectManifest;
  writeProjectManifest: (manifest: ProjectManifest, force?: boolean | undefined) => Promise<void>;
}
type ProjectsGraph = Record<ProjectRootDir, {
  dependencies: ProjectRootDir[];
  package: Project;
}>;
type ProjectRootDir = string & {
  __brand: 'ProjectRootDir';
};
type ProjectRootDirRealPath = string & {
  __brand: 'ProjectRootDirRealPath';
};
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+resolver-base@1005.4.1/node_modules/@pnpm/resolver-base/lib/index.d.ts
/**
 * tarball hosted remotely
 */
interface TarballResolution$1 {
  type?: undefined;
  tarball: string;
  integrity?: string;
  path?: string;
}
interface BinaryResolution$1 {
  type: 'binary';
  archive: 'tarball' | 'zip';
  url: string;
  integrity: string;
  bin: string;
  prefix?: string;
}
/**
 * directory on a file system
 */
interface DirectoryResolution$1 {
  type: 'directory';
  directory: string;
}
interface GitResolution {
  commit: string;
  repo: string;
  path?: string;
  type: 'git';
}
interface PlatformAssetTarget {
  os: string;
  cpu: string;
  libc?: 'musl';
}
interface PlatformAssetResolution$1 {
  resolution: AtomicResolution;
  targets: PlatformAssetTarget[];
}
type AtomicResolution = TarballResolution$1 | DirectoryResolution$1 | GitResolution | BinaryResolution$1;
interface VariationsResolution$1 {
  type: 'variations';
  variants: PlatformAssetResolution$1[];
}
type Resolution$1 = AtomicResolution | VariationsResolution$1;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+fetcher-base@1001.2.2/node_modules/@pnpm/fetcher-base/lib/index.d.ts
interface PkgNameVersion {
  name?: string;
  version?: string;
}
interface FetchOptions {
  allowBuild?: AllowBuild;
  filesIndexFile: string;
  lockfileDir: string;
  onStart?: (totalSize: number | null, attempt: number) => void;
  onProgress?: (downloaded: number) => void;
  readManifest?: boolean;
  pkg: PkgNameVersion;
  appendManifest?: DependencyManifest;
}
type FetchFunction<FetcherResolution = Resolution$1, Options = FetchOptions, Result = FetchResult> = (cafs: Cafs, resolution: FetcherResolution, opts: Options) => Promise<Result>;
interface FetchResult {
  local?: boolean;
  manifest?: DependencyManifest;
  filesIndex: Record<string, string>;
  requiresBuild: boolean;
  integrity?: string;
}
interface GitFetcherOptions {
  allowBuild?: AllowBuild;
  readManifest?: boolean;
  filesIndexFile: string;
  pkg?: PkgNameVersion;
}
interface GitFetcherResult {
  filesIndex: Record<string, string>;
  manifest?: DependencyManifest;
  requiresBuild: boolean;
}
type GitFetcher = FetchFunction<GitResolution, GitFetcherOptions, GitFetcherResult>;
type BinaryFetcher = FetchFunction<BinaryResolution$1>;
interface DirectoryFetcherOptions {
  lockfileDir: string;
  readManifest?: boolean;
}
interface DirectoryFetcherResult {
  local: true;
  filesIndex: Record<string, string>;
  packageImportMethod: 'hardlink';
  manifest?: DependencyManifest;
  requiresBuild: boolean;
}
type DirectoryFetcher = FetchFunction<DirectoryResolution$1, DirectoryFetcherOptions, DirectoryFetcherResult>;
interface Fetchers {
  localTarball: FetchFunction;
  remoteTarball: FetchFunction;
  gitHostedTarball: FetchFunction;
  directory: DirectoryFetcher;
  git: GitFetcher;
  binary: BinaryFetcher;
}
interface CustomFetcherFactoryOptions {
  defaultFetchers: Fetchers;
}
type CustomFetcherFactory<Fetcher> = (opts: CustomFetcherFactoryOptions) => Fetcher;
interface CustomFetchers {
  localTarball?: CustomFetcherFactory<FetchFunction>;
  remoteTarball?: CustomFetcherFactory<FetchFunction>;
  gitHostedTarball?: CustomFetcherFactory<FetchFunction>;
  directory?: CustomFetcherFactory<DirectoryFetcher>;
  git?: CustomFetcherFactory<GitFetcher>;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+store-controller-types@1004.5.1/node_modules/@pnpm/store-controller-types/lib/index.d.ts
type FilesMap = Record<string, string>;
interface ImportOptions {
  disableRelinkLocalDirDeps?: boolean;
  filesMap: FilesMap;
  force: boolean;
  resolvedFrom: ResolvedFrom;
  keepModulesDir?: boolean;
}
type ImportIndexedPackageAsync = (to: string, opts: ImportOptions) => Promise<string | undefined>;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+patching.types@1000.1.0/node_modules/@pnpm/patching.types/lib/index.d.ts
interface PatchFile {
  path: string;
  hash: string;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+lockfile.types@1002.1.0/node_modules/@pnpm/lockfile.types/lib/index.d.ts
interface LockfileSettings {
  autoInstallPeers?: boolean;
  dedupePeers?: boolean;
  excludeLinksFromLockfile?: boolean;
  peersSuffixMaxLength?: number;
  injectWorkspacePackages?: boolean;
}
interface LockfileBase {
  catalogs?: CatalogSnapshots;
  ignoredOptionalDependencies?: string[];
  lockfileVersion: string;
  overrides?: Record<string, string>;
  packageExtensionsChecksum?: string;
  patchedDependencies?: Record<string, PatchFile>;
  pnpmfileChecksum?: string;
  settings?: LockfileSettings;
  time?: Record<string, string>;
}
interface LockfileObject extends LockfileBase {
  importers: Record<ProjectId, ProjectSnapshot>;
  packages?: PackageSnapshots;
}
interface LockfilePackageSnapshot {
  optional?: true;
  dependencies?: ResolvedDependencies;
  optionalDependencies?: ResolvedDependencies;
  transitivePeerDependencies?: string[];
}
interface LockfilePackageInfo {
  id?: string;
  patched?: true;
  hasBin?: true;
  name?: string;
  version?: string;
  resolution: LockfileResolution;
  peerDependencies?: {
    [name: string]: string;
  };
  peerDependenciesMeta?: {
    [name: string]: {
      optional: true;
    };
  };
  bundledDependencies?: string[] | boolean;
  engines?: Record<string, string> & {
    node: string;
  };
  os?: string[];
  cpu?: string[];
  libc?: string[];
  deprecated?: string;
}
interface ProjectSnapshotBase {
  dependenciesMeta?: DependenciesMeta;
  publishDirectory?: string;
}
interface ProjectSnapshot extends ProjectSnapshotBase {
  specifiers: ResolvedDependencies;
  dependencies?: ResolvedDependencies;
  optionalDependencies?: ResolvedDependencies;
  devDependencies?: ResolvedDependencies;
}
interface PackageSnapshots {
  [packagePath: DepPath]: PackageSnapshot;
}
/**
 * tarball hosted remotely
 */
interface TarballResolution {
  type?: undefined;
  tarball: string;
  integrity?: string;
  path?: string;
}
/**
 * directory on a file system
 */
interface DirectoryResolution {
  type: 'directory';
  directory: string;
}
/**
 * Git repository
 */
interface GitRepositoryResolution {
  type: 'git';
  repo: string;
  commit: string;
  path?: string;
}
interface BinaryResolution {
  type: 'binary';
  url: string;
  integrity: string;
  bin: string;
  archive: 'zip' | 'tarball';
}
interface PlatformAssetResolution {
  resolution: Resolution;
  targets: PlatformAssetTarget[];
}
type Resolution = TarballResolution | GitRepositoryResolution | DirectoryResolution | BinaryResolution;
interface VariationsResolution {
  type: 'variations';
  variants: PlatformAssetResolution[];
}
type LockfileResolution = Resolution | VariationsResolution | {
  integrity: string;
};
type PackageSnapshot = LockfilePackageInfo & LockfilePackageSnapshot;
/** @example
 * {
 *   "foo": "registry.npmjs.org/foo/1.0.1"
 * }
 */
type ResolvedDependencies = Record<string, string>;
interface CatalogSnapshots {
  [catalogName: string]: {
    [dependencyName: string]: ResolvedCatalogEntry;
  };
}
interface ResolvedCatalogEntry {
  /**
   * The real specifier that should be used for this dependency's catalog entry.
   * This would be the ^1.2.3 portion of:
   *
   * @example
   * catalog:
   *   foo: ^1.2.3
   */
  readonly specifier: string;
  /**
   * The concrete version that the requested specifier resolved to. Ex: 1.2.3
   */
  readonly version: string;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+hooks.types@1001.0.20/node_modules/@pnpm/hooks.types/lib/index.d.ts
interface PreResolutionHookContext {
  wantedLockfile: LockfileObject;
  currentLockfile: LockfileObject;
  existsCurrentLockfile: boolean;
  existsNonEmptyWantedLockfile: boolean;
  lockfileDir: string;
  storeDir: string;
  registries: Registries;
}
interface PreResolutionHookLogger {
  info: (message: string) => void;
  warn: (message: string) => void;
}
type PreResolutionHook = (ctx: PreResolutionHookContext, logger: PreResolutionHookLogger) => Promise<void>;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+logger@1001.0.1/node_modules/@pnpm/logger/lib/LogLevel.d.ts
type LogLevel = 'error' | 'warn' | 'info' | 'debug';
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+logger@1001.0.1/node_modules/@pnpm/logger/lib/LogBase.d.ts
interface OptionalErrorProperties {
  pkgsStack?: Array<{
    id: string;
    name: string;
    version: string;
  }>;
  hint?: string;
  package?: {
    name?: string;
    bareSpecifier?: string;
    version?: string;
  };
  err?: NodeJS.ErrnoException;
}
interface LogBaseTemplate extends OptionalErrorProperties {
  level?: LogLevel;
  prefix?: string;
  message?: string;
}
interface LogBaseDebug extends LogBaseTemplate {
  level: 'debug';
}
interface LogBaseError extends LogBaseTemplate {
  level: 'error';
}
interface LogBaseInfo extends LogBaseTemplate {
  level: 'info';
  prefix: string;
  message: string;
}
interface LogBaseWarn extends LogBaseTemplate {
  level: 'warn';
  prefix: string;
  message: string;
}
type LogBase = LogBaseDebug | LogBaseError | LogBaseInfo | LogBaseWarn;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/contextLogger.d.ts
interface ContextMessage {
  currentLockfileExists: boolean;
  storeDir: string;
  virtualStoreDir: string;
}
type ContextLog = {
  name: 'pnpm:context';
} & LogBase & ContextMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/deprecationLogger.d.ts
interface DeprecationMessage {
  pkgName: string;
  pkgVersion: string;
  pkgId: string;
  prefix: string;
  deprecated: string;
  depth: number;
}
type DeprecationLog = {
  name: 'pnpm:deprecation';
} & LogBase & DeprecationMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/fetchingProgressLogger.d.ts
interface FetchingProgressMessageBase {
  attempt?: number;
  downloaded?: number;
  packageId: string;
  size?: number | null;
  status?: 'started' | 'in_progress';
}
interface FetchingProgressMessageStarted extends FetchingProgressMessageBase {
  attempt: number;
  size: number | null;
  status: 'started';
}
interface FetchingProgressMessageInProgress extends FetchingProgressMessageBase {
  downloaded: number;
  status: 'in_progress';
}
type FetchingProgressMessage = FetchingProgressMessageStarted | FetchingProgressMessageInProgress;
type FetchingProgressLog = {
  name: 'pnpm:fetching-progress';
} & LogBase & FetchingProgressMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/hookLogger.d.ts
interface HookMessage {
  from: string;
  hook: string;
  message: string;
  prefix: string;
}
type HookLog = {
  name: 'pnpm:hook';
} & LogBase & HookMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/installCheckLogger.d.ts
interface InstallCheckMessage {
  code: string;
  pkgId: string;
}
type InstallCheckLog = {
  name: 'pnpm:install-check';
} & LogBase & InstallCheckMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/installingConfigDeps.d.ts
interface InstallingConfigDepsMessageBase {
  status?: 'started' | 'done';
}
interface InstallingConfigDepsStartedMessage extends InstallingConfigDepsMessageBase {
  status: 'started';
}
interface InstallingConfigDepsDoneMessage extends InstallingConfigDepsMessageBase {
  deps: Array<{
    name: string;
    version: string;
  }>;
  status: 'done';
}
type InstallingConfigDepsMessage = InstallingConfigDepsStartedMessage | InstallingConfigDepsDoneMessage;
type InstallingConfigDepsLog = {
  name: 'pnpm:installing-config-deps';
} & LogBase & InstallingConfigDepsMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/ignoredScriptsLogger.d.ts
interface IgnoredScriptsMessage {
  packageNames: string[];
}
type IgnoredScriptsLog = {
  name: 'pnpm:ignored-scripts';
} & LogBase & IgnoredScriptsMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/lifecycleLogger.d.ts
interface LifecycleMessageBase {
  depPath: string;
  stage: string;
  wd: string;
  exitCode?: number;
  line?: string;
  optional?: boolean;
  script?: string;
  stdio?: 'stdout' | 'stderr';
}
interface StdioLifecycleMessage extends LifecycleMessageBase {
  line: string;
  stdio: 'stdout' | 'stderr';
}
interface ExitLifecycleMessage extends LifecycleMessageBase {
  exitCode: number;
  optional: boolean;
}
interface ScriptLifecycleMessage extends LifecycleMessageBase {
  script: string;
  optional: boolean;
}
type LifecycleMessage = StdioLifecycleMessage | ExitLifecycleMessage | ScriptLifecycleMessage;
type LifecycleLog = {
  name: 'pnpm:lifecycle';
} & LogBase & LifecycleMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/linkLogger.d.ts
interface LinkMessage {
  target: string;
  link: string;
}
type LinkLog = {
  name: 'pnpm:link';
} & LogBase & LinkMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/packageImportMethodLogger.d.ts
interface PackageImportMethodMessage {
  method: 'clone' | 'hardlink' | 'copy';
}
type PackageImportMethodLog = {
  name: 'pnpm:package-import-method';
} & LogBase & PackageImportMethodMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/packageManifestLogger.d.ts
interface PackageManifestMessageBase {
  prefix: string;
  initial?: ProjectManifest;
  updated?: ProjectManifest;
}
interface PackageManifestMessageInitial extends PackageManifestMessageBase {
  initial: ProjectManifest;
}
interface PackageManifestMessageUpdated extends PackageManifestMessageBase {
  updated: ProjectManifest;
}
type PackageManifestMessage = PackageManifestMessageInitial | PackageManifestMessageUpdated;
type PackageManifestLog = {
  name: 'pnpm:package-manifest';
} & LogBase & PackageManifestMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/peerDependencyIssues.d.ts
interface PeerDependencyIssuesMessage {
  issuesByProjects: PeerDependencyIssuesByProjects;
}
type PeerDependencyIssuesLog = {
  name: 'pnpm:peer-dependency-issues';
} & LogBase & PeerDependencyIssuesMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/progressLogger.d.ts
type ProgressMessage = {
  packageId: string;
  requester: string;
  status: 'fetched' | 'found_in_store' | 'resolved';
} | {
  status: 'imported';
  method: string;
  requester: string;
  to: string;
};
type ProgressLog = {
  name: 'pnpm:progress';
} & LogBase & ProgressMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/registryLogger.d.ts
type RegistryLog = {
  name: 'pnpm:registry';
} & LogBase & {
  message: string;
};
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/requestRetryLogger.d.ts
interface RequestRetryError extends Error {
  httpStatusCode?: string;
  status?: string;
  errno?: number;
  code?: string;
}
interface RequestRetryMessage {
  attempt: number;
  error: RequestRetryError;
  maxRetries: number;
  method: string;
  timeout: number;
  url: string;
}
type RequestRetryLog = {
  name: 'pnpm:request-retry';
} & LogBase & RequestRetryMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/rootLogger.d.ts
type DependencyType = 'prod' | 'dev' | 'optional';
type RootMessage = {
  prefix: string;
} & ({
  added: {
    id?: string;
    name: string;
    realName: string;
    version?: string;
    dependencyType?: DependencyType;
    latest?: string;
    linkedFrom?: string;
  };
} | {
  removed: {
    name: string;
    version?: string;
    dependencyType?: DependencyType;
  };
});
type RootLog = {
  name: 'pnpm:root';
} & LogBase & RootMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/scopeLogger.d.ts
interface ScopeMessage {
  selected: number;
  total?: number;
  workspacePrefix?: string;
}
type ScopeLog = {
  name: 'pnpm:scope';
} & LogBase & ScopeMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/skippedOptionalDependencyLogger.d.ts
type SkippedOptionalDependencyLog = {
  name: 'pnpm:skipped-optional-dependency';
} & LogBase & SkippedOptionalDependencyMessage;
type SkippedOptionalDependencyMessage = {
  details?: string;
  parents?: Array<{
    id: string;
    name: string;
    version: string;
  }>;
  prefix: string;
} & ({
  package: {
    id: string;
    name: string;
    version: string;
  };
  reason: 'unsupported_engine' | 'unsupported_platform' | 'build_failure';
} | {
  package: {
    id?: never;
    name: string | undefined;
    version: string | undefined;
    bareSpecifier: string;
  };
  reason: 'resolution_failure';
});
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/stageLogger.d.ts
interface StageMessage {
  prefix: string;
  stage: 'resolution_started' | 'resolution_done' | 'importing_started' | 'importing_done';
}
type StageLog = {
  name: 'pnpm:stage';
} & LogBase & StageMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/statsLogger.d.ts
interface StatsMessageBase {
  prefix: string;
  added?: number;
  removed?: number;
}
interface StatsMessageAdded extends StatsMessageBase {
  added: number;
  removed?: never;
}
interface StatsMessageRemoved extends StatsMessageBase {
  added?: never;
  removed: number;
}
type StatsMessage = StatsMessageAdded | StatsMessageRemoved;
type StatsLog = {
  name: 'pnpm:stats';
} & LogBase & StatsMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/summaryLogger.d.ts
interface SummaryMessage {
  prefix: string;
}
type SummaryLog = {
  name: 'pnpm:summary';
} & LogBase & SummaryMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/updateCheckLogger.d.ts
interface UpdateCheckMessage {
  currentVersion: string;
  latestVersion: string;
}
type UpdateCheckLog = {
  name: 'pnpm:update-check';
} & LogBase & UpdateCheckMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/executionTimeLogger.d.ts
interface ExecutionTimeMessage {
  startedAt: number;
  endedAt: number;
}
type ExecutionTimeLog = {
  name: 'pnpm:execution-time';
} & LogBase & ExecutionTimeMessage;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+core-loggers@1001.0.9_@pnpm+logger@1001.0.1/node_modules/@pnpm/core-loggers/lib/index.d.ts
type Log = ContextLog | DeprecationLog | FetchingProgressLog | ExecutionTimeLog | HookLog | InstallCheckLog | InstallingConfigDepsLog | IgnoredScriptsLog | LifecycleLog | LinkLog | PackageManifestLog | PackageImportMethodLog | PeerDependencyIssuesLog | ProgressLog | RegistryLog | RequestRetryLog | RootLog | ScopeLog | SkippedOptionalDependencyLog | StageLog | StatsLog | SummaryLog | UpdateCheckLog;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+pnpmfile@1002.1.13_@pnpm+logger@1001.0.1/node_modules/@pnpm/pnpmfile/lib/Hooks.d.ts
interface HookContext {
  log: (message: string) => void;
}
interface Hooks$1 {
  readPackage?: (pkg: any, context: HookContext) => any;
  beforePacking?: (pkg: any, dir: string, context: HookContext) => any;
  preResolution?: PreResolutionHook;
  afterAllResolved?: (lockfile: LockfileObject, context: HookContext) => LockfileObject | Promise<LockfileObject>;
  filterLog?: (log: Log) => boolean;
  importPackage?: ImportIndexedPackageAsync;
  fetchers?: CustomFetchers;
  updateConfig?: (config: any) => any;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+pnpmfile@1002.1.13_@pnpm+logger@1001.0.1/node_modules/@pnpm/pnpmfile/lib/requireHooks.d.ts
type Cook<T extends (...args: any[]) => any> = (arg: Parameters<T>[0], ...otherArgs: any[]) => ReturnType<T>;
interface CookedHooks {
  readPackage?: Array<Cook<Required<Hooks$1>['readPackage']>>;
  beforePacking?: Array<Cook<Required<Hooks$1>['beforePacking']>>;
  preResolution?: Array<Cook<Required<Hooks$1>['preResolution']>>;
  afterAllResolved?: Array<Cook<Required<Hooks$1>['afterAllResolved']>>;
  filterLog?: Array<Cook<Required<Hooks$1>['filterLog']>>;
  updateConfig?: Array<Cook<Required<Hooks$1>['updateConfig']>>;
  importPackage?: ImportIndexedPackageAsync;
  fetchers?: CustomFetchers;
  calculatePnpmfileChecksum?: () => Promise<string>;
}
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+pnpmfile@1002.1.13_@pnpm+logger@1001.0.1/node_modules/@pnpm/pnpmfile/lib/index.d.ts
type Hooks = CookedHooks;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+config@1004.11.0_@pnpm+logger@1001.0.1/node_modules/@pnpm/config/lib/getOptionsFromRootManifest.d.ts
type OptionsFromRootManifest = {
  allowedDeprecatedVersions?: AllowedDeprecatedVersions;
  allowUnusedPatches?: boolean;
  ignorePatchFailures?: boolean;
  overrides?: Record<string, string>;
  neverBuiltDependencies?: string[];
  onlyBuiltDependencies?: string[];
  onlyBuiltDependenciesFile?: string;
  ignoredBuiltDependencies?: string[];
  packageExtensions?: Record<string, PackageExtension>;
  ignoredOptionalDependencies?: string[];
  patchedDependencies?: Record<string, string>;
  peerDependencyRules?: PeerDependencyRules;
  supportedArchitectures?: SupportedArchitectures;
  allowBuilds?: Record<string, boolean | string>;
  requiredScripts?: string[];
} & Pick<PnpmSettings, 'configDependencies' | 'auditConfig' | 'executionEnv' | 'updateConfig'>;
//#endregion
//#region ../../node_modules/.pnpm/@pnpm+config@1004.11.0_@pnpm+logger@1001.0.1/node_modules/@pnpm/config/lib/Config.d.ts
interface WantedPackageManager {
  name: string;
  version?: string;
}
type VerifyDepsBeforeRun = 'install' | 'warn' | 'error' | 'prompt' | false;
interface Config extends OptionsFromRootManifest {
  allProjects?: Project[];
  selectedProjectsGraph?: ProjectsGraph;
  allProjectsGraph?: ProjectsGraph;
  allowNew: boolean;
  autoInstallPeers?: boolean;
  bail: boolean;
  color: 'always' | 'auto' | 'never';
  cliOptions: Record<string, any>;
  useBetaCli: boolean;
  excludeLinksFromLockfile: boolean;
  extraBinPaths: string[];
  extraEnv: Record<string, string>;
  failIfNoMatch: boolean;
  filter: string[];
  filterProd: string[];
  rawLocalConfig: Record<string, any>;
  rawConfig: Record<string, any>;
  dryRun?: boolean;
  global?: boolean;
  dir: string;
  bin: string;
  verifyDepsBeforeRun?: VerifyDepsBeforeRun;
  ignoreDepScripts?: boolean;
  ignoreScripts?: boolean;
  ignoreCompatibilityDb?: boolean;
  includeWorkspaceRoot?: boolean;
  optimisticRepeatInstall?: boolean;
  save?: boolean;
  saveProd?: boolean;
  saveDev?: boolean;
  saveOptional?: boolean;
  savePeer?: boolean;
  saveCatalogName?: string;
  saveWorkspaceProtocol?: boolean | 'rolling';
  lockfileIncludeTarballUrl?: boolean;
  scriptShell?: string;
  stream?: boolean;
  pnpmExecPath: string;
  pnpmHomeDir: string;
  production?: boolean;
  fetchRetries?: number;
  fetchRetryFactor?: number;
  fetchRetryMintimeout?: number;
  fetchRetryMaxtimeout?: number;
  fetchTimeout?: number;
  saveExact?: boolean;
  savePrefix?: string;
  shellEmulator?: boolean;
  scriptsPrependNodePath?: boolean | 'warn-only';
  force?: boolean;
  depth?: number;
  engineStrict?: boolean;
  nodeVersion?: string;
  offline?: boolean;
  registry?: string;
  optional?: boolean;
  unsafePerm?: boolean;
  loglevel?: 'silent' | 'error' | 'warn' | 'info' | 'debug';
  frozenLockfile?: boolean;
  preferFrozenLockfile?: boolean;
  only?: 'prod' | 'production' | 'dev' | 'development';
  packageManager: {
    name: string;
    version: string;
  };
  wantedPackageManager?: WantedPackageManager;
  preferOffline?: boolean;
  sideEffectsCache?: boolean;
  sideEffectsCacheReadonly?: boolean;
  sideEffectsCacheRead?: boolean;
  sideEffectsCacheWrite?: boolean;
  shamefullyHoist?: boolean;
  dev?: boolean;
  ignoreCurrentSpecifiers?: boolean;
  recursive?: boolean;
  enablePrePostScripts?: boolean;
  useNodeVersion?: string;
  useStderr?: boolean;
  nodeLinker?: 'hoisted' | 'isolated' | 'pnp';
  preferSymlinkedExecutables?: boolean;
  resolutionMode?: 'highest' | 'time-based' | 'lowest-direct';
  registrySupportsTimeField?: boolean;
  failedToLoadBuiltInConfig: boolean;
  resolvePeersFromWorkspaceRoot?: boolean;
  deployAllFiles?: boolean;
  forceLegacyDeploy?: boolean;
  reporterHidePrefix?: boolean;
  httpProxy?: string;
  httpsProxy?: string;
  localAddress?: string;
  noProxy?: string | boolean;
  cert?: string | string[];
  key?: string;
  ca?: string | string[];
  strictSsl?: boolean;
  userAgent?: string;
  tag?: string;
  updateNotifier?: boolean;
  cacheDir: string;
  configDir: string;
  stateDir: string;
  storeDir?: string;
  virtualStoreDir?: string;
  enableGlobalVirtualStore?: boolean;
  verifyStoreIntegrity?: boolean;
  maxSockets?: number;
  networkConcurrency?: number;
  fetchingConcurrency?: number;
  lockfileOnly?: boolean;
  childConcurrency?: number;
  ignorePnpmfile?: boolean;
  pnpmfile: string[] | string;
  tryLoadDefaultPnpmfile?: boolean;
  hooks?: Hooks;
  finders?: Record<string, Finder>;
  packageImportMethod?: 'auto' | 'hardlink' | 'copy' | 'clone' | 'clone-or-copy';
  hoistPattern?: string[];
  publicHoistPattern?: string[] | string;
  hoistWorkspacePackages?: boolean;
  useStoreServer?: boolean;
  useRunningStoreServer?: boolean;
  workspaceConcurrency: number;
  workspaceDir?: string;
  workspacePackagePatterns?: string[];
  catalogs?: Catalogs;
  catalogMode?: 'strict' | 'prefer' | 'manual';
  cleanupUnusedCatalogs?: boolean;
  reporter?: string;
  aggregateOutput: boolean;
  linkWorkspacePackages: boolean | 'deep';
  injectWorkspacePackages?: boolean;
  preferWorkspacePackages: boolean;
  reverse: boolean;
  sort: boolean;
  strictPeerDependencies: boolean;
  lockfileDir?: string;
  modulesDir?: string;
  sharedWorkspaceLockfile?: boolean;
  useLockfile: boolean;
  useGitBranchLockfile: boolean;
  mergeGitBranchLockfiles?: boolean;
  mergeGitBranchLockfilesBranchPattern?: string[];
  globalPnpmfile?: string;
  npmPath?: string;
  gitChecks?: boolean;
  publishBranch?: string;
  recursiveInstall?: boolean;
  symlink: boolean;
  enablePnp?: boolean;
  enableModulesDir: boolean;
  modulesCacheMaxAge: number;
  dlxCacheMaxAge: number;
  embedReadme?: boolean;
  gitShallowHosts?: string[];
  legacyDirFiltering?: boolean;
  onlyBuiltDependencies?: string[];
  allowBuilds?: Record<string, boolean | string>;
  dedupePeerDependents?: boolean;
  dedupePeers?: boolean;
  patchesDir?: string;
  ignoreWorkspaceCycles?: boolean;
  disallowWorkspaceCycles?: boolean;
  packGzipLevel?: number;
  blockExoticSubdeps?: boolean;
  registries: Registries;
  sslConfigs: Record<string, SslConfig>;
  ignoreWorkspaceRootCheck: boolean;
  workspaceRoot: boolean;
  testPattern?: string[];
  changedFilesIgnorePattern?: string[];
  rootProjectManifestDir: string;
  rootProjectManifest?: ProjectManifest;
  userConfig: Record<string, string>;
  hoist: boolean;
  packageLock: boolean;
  pending: boolean;
  userconfig: string;
  workspacePrefix?: string;
  dedupeDirectDeps?: boolean;
  extendNodePath?: boolean;
  gitBranchLockfile?: boolean;
  globalBinDir?: string;
  globalDir?: string;
  globalPkgDir: string;
  lockfile?: boolean;
  dedupeInjectedDeps?: boolean;
  nodeOptions?: string;
  packageManagerStrict?: boolean;
  packageManagerStrictVersion?: boolean;
  virtualStoreDirMaxLength: number;
  peersSuffixMaxLength?: number;
  strictStorePkgContentCheck: boolean;
  managePackageManagerVersions: boolean;
  strictDepBuilds: boolean;
  syncInjectedDepsAfterScripts?: string[];
  initPackageManager: boolean;
  initType: 'commonjs' | 'module';
  dangerouslyAllowAllBuilds: boolean;
  ci: boolean;
  preserveAbsolutePaths?: boolean;
  minimumReleaseAge?: number;
  minimumReleaseAgeExclude?: string[];
  fetchWarnTimeoutMs?: number;
  fetchMinSpeedKiBps?: number;
  trustPolicy?: TrustPolicy;
  trustPolicyExclude?: string[];
  trustPolicyIgnoreAfter?: number;
  auditLevel?: 'low' | 'moderate' | 'high' | 'critical';
}
//#endregion
//#region src/hooks.d.ts
declare const hooks: {
  updateConfig(config: Partial<Config>): Partial<Config>;
};
//#endregion
//#region src/meta.d.ts
declare const meta: Readonly<{
  buildNumber: number;
  name: string;
  version: string;
}>;
//#endregion
//#region src/PnpmConfig.d.ts
type PnpmConfig = Config;
//#endregion
//#region src/PnpmUserConfig.d.ts
type PnpmUserConfig = Partial<PnpmConfig>;
/**
 * @namespace
 */
declare const PnpmUserConfig: Readonly<{
  /**
   * Merge two configs immutably. `extension` values win; `base` fills in
   * undefined slots. `allowBuilds` and `overrides` are deep-merged (extension
   * entries win). `minimumReleaseAgeExclude` is merged as a deduplicated union
   * of both arrays. A `hoistPattern` of `['*']` in extension is normalized to
   * `[]` following pnpm-plugin-better-defaults behavior.
   *
   * @param base
   * @param extension
   */
  merge(base: PnpmUserConfig, extension: PnpmUserConfig): PnpmUserConfig;
}>;
//#endregion
//#region src/PnpmHooks.d.ts
/** Hooks exported by this plugin's pnpmfile. */
interface PnpmHooks {
  updateConfig?: (config: PnpmUserConfig) => PnpmUserConfig | Promise<PnpmUserConfig>;
}
//#endregion
export { PnpmConfig, PnpmHooks, PnpmUserConfig, defaultConfig, hooks, meta };
//# sourceMappingURL=index.d.ts.map