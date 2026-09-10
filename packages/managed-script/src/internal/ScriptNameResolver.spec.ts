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

  it('falls back to MANAGED_SCRIPT_NAME when no CLI argument is given', () => {
    expect(
      ScriptNameResolver.resolve({
        env: { MANAGED_SCRIPT_NAME: 'from-env', npm_lifecycle_event: 'from-npm' },
        scriptName: undefined,
      }),
    ).toBe('from-env');
  });

  it('falls back to npm_lifecycle_event when neither CLI argument nor MANAGED_SCRIPT_NAME is set', () => {
    expect(
      ScriptNameResolver.resolve({
        env: { npm_lifecycle_event: 'from-npm' },
        scriptName: undefined,
      }),
    ).toBe('from-npm');
  });

  it('returns undefined when nothing resolves', () => {
    expect(ScriptNameResolver.resolve({ env: {}, scriptName: undefined })).toBeUndefined();
  });
});
