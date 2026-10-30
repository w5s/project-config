export interface ScriptNameResolverOptions {
  readonly env: NodeJS.ProcessEnv;
  readonly scriptName: string | undefined;
}

/**
 * Resolves the script name to run.
 *
 * Priority: first positional CLI argument > `npm_lifecycle_event` env var.
 *
 * `MANAGED_SCRIPT_NAME` is deliberately not read: it is only provided to the spawned script, so that
 * an inherited value can never shadow the name of a nested invocation.
 */
export const ScriptNameResolver = {
  resolve({ env, scriptName }: ScriptNameResolverOptions): string | undefined {
    return scriptName ?? env['npm_lifecycle_event'];
  },
};
