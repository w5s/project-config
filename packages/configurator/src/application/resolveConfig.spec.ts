import { describe, expect, it } from 'vitest';
import { resolveConfig } from './resolveConfig.js';

describe('resolveEffectiveConfig', () => {
  it('prefers args over env and config', () => {
    const resolved = resolveConfig(
      { preset: 'from-args', dryRun: true },
      { preset: 'from-env', dryRun: false },
      { config: { preset: 'from-config', dryRun: false }, configFile: undefined },
    );

    expect(resolved.config.preset).toBe('from-args');
    expect(resolved.config.dryRun).toBe(true);
  });

  it('prefers env over config', () => {
    const resolved = resolveConfig(
      {},
      { preset: 'from-env', dryRun: true },
      { config: { preset: 'from-config', dryRun: false }, configFile: undefined },
    );

    expect(resolved.config.preset).toBe('from-env');
    expect(resolved.config.dryRun).toBe(true);
  });

  it('uses config when args and env are missing', () => {
    const resolved = resolveConfig(
      {},
      {},
      { config: { preset: 'from-config', dryRun: true }, configFile: undefined },
    );

    expect(resolved.config.preset).toBe('from-config');
    expect(resolved.config.dryRun).toBe(true);
  });

  it('defaults dryRun to false when omitted everywhere', () => {
    const resolved = resolveConfig(
      {},
      {},
      { config: { preset: 'from-config' }, configFile: undefined },
    );

    expect(resolved.config.dryRun).toBe(false);
  });
});
