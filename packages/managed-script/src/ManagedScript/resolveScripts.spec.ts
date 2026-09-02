import { describe, expect, it } from 'vitest';

import { resolveScripts } from './resolveScripts.js';

describe(resolveScripts, () => {
  it('keeps the highest-priority declaration and records each script origin', () => {
    const resolved = resolveScripts({
      config: { scripts: { build: 'from-project', test: 'from-project' } },
      configFile: '/project/managed-script.config.json',
      layers: [
        {
          config: { scripts: { build: 'from-project', test: 'from-project' } },
          configFile: 'managed-script.config',
          source: 'main',
        },
        {
          config: { scripts: { build: 'from-shared', lint: 'from-shared' } },
          configFile: '/shared-config/managed-script.config.json',
          source: 'extends',
        },
      ],
    });

    expect(resolved.scripts).toEqual({
      build: { command: 'from-project', configDir: '.', configFile: 'managed-script.config' },
      lint: { command: 'from-shared', configDir: '/shared-config', configFile: '/shared-config/managed-script.config.json' },
      test: { command: 'from-project', configDir: '.', configFile: 'managed-script.config' },
    });
  });
});
