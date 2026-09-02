export interface ScriptNameResolverOptions {
  readonly env: NodeJS.ProcessEnv;
  readonly scriptName: string | undefined;
}

/**
 * Resolves the script name to run.
 *
 * Priority: `--name,-n` CLI argument > `MANAGED_SCRIPT_NAME` env var > `npm_lifecycle_event` env var.
 */
export const ScriptNameResolver = {
  resolve({ env, scriptName }: ScriptNameResolverOptions): string | undefined {
    return scriptName ?? env['MANAGED_SCRIPT_NAME'] ?? env['npm_lifecycle_event'];
  },
};
