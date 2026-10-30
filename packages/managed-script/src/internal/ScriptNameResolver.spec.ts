import { describe, expect, it } from 'vitest';

import { ScriptNameResolver } from './ScriptNameResolver.js';

describe(ScriptNameResolver.resolve, () => {
  it('returns the CLI argument when set, regardless of env vars', () => {
    expect(
      ScriptNameResolver.resolve({
        env: { MANAGED_SCRIPT_NAME: 'from-env', npm_lifecycle_event: 'from-npm' },
        scriptName: 'build',
      }),
    ).toBe('build');
  });

  it('falls back to npm_lifecycle_event when no CLI argument is given, ignoring MANAGED_SCRIPT_NAME', () => {
    expect(
      ScriptNameResolver.resolve({
        env: { MANAGED_SCRIPT_NAME: 'from-env', npm_lifecycle_event: 'from-npm' },
        scriptName: undefined,
      }),
    ).toBe('from-npm');
  });

  it('does not read MANAGED_SCRIPT_NAME', () => {
    expect(ScriptNameResolver.resolve({ env: { MANAGED_SCRIPT_NAME: 'from-env' }, scriptName: undefined })).toBeUndefined();
  });

  it('returns undefined when nothing resolves', () => {
    expect(ScriptNameResolver.resolve({ env: {}, scriptName: undefined })).toBeUndefined();
  });
});
