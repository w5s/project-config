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
      build: { configDir: '.', configFile: 'managed-script.config', run: 'from-project' },
      lint: { configDir: '/shared-config', configFile: '/shared-config/managed-script.config.json', run: 'from-shared' },
      test: { configDir: '.', configFile: 'managed-script.config', run: 'from-project' },
    });
  });

  it('keeps a runner and copies its args from the highest-priority layer', () => {
    const resolved = resolveScripts({
      config: { scripts: { build: { args: ['project.js'], runner: 'node' } } },
      configFile: '/project/managed-script.config.json',
      layers: [
        {
          config: { scripts: { build: { args: ['project.js'], runner: 'node' } } },
          configFile: 'managed-script.config',
          source: 'main',
        },
        {
          config: { scripts: { build: { args: ['shared.js'], runner: 'node' } } },
          configFile: '/shared-config/managed-script.config.json',
          source: 'extends',
        },
      ],
    });

    expect(resolved.scripts['build']).toEqual({
      args: ['project.js'],
      configDir: '.',
      configFile: 'managed-script.config',
      runner: 'node',
    });
  });

  it('defaults omitted runner args to an empty list', () => {
    const resolved = resolveScripts({
      config: { scripts: { build: { runner: 'node' } } },
      configFile: undefined,
      layers: [],
    });

    expect(resolved.scripts['build']).toEqual({
      args: [],
      configDir: undefined,
      configFile: undefined,
      runner: 'node',
    });
  });

  it('rejects a script that is neither a command string nor a runner', () => {
    expect(() => resolveScripts({
      config: { scripts: { build: 1 as never } },
      configFile: undefined,
      layers: [],
    })).toThrow('Script "build" must be a shell command string or an object with "run", or "runner" and "args".');
  });

  it('rejects a runner that is empty', () => {
    expect(() => resolveScripts({
      config: { scripts: { build: { runner: '' } } },
      configFile: undefined,
      layers: [],
    })).toThrow('Script "build" runner must be a non-empty string.');
  });

  it('accepts the object form of a shell command', () => {
    const resolved = resolveScripts({
      config: { scripts: { build: { run: 'make' } } },
      configFile: undefined,
      layers: [],
    });

    expect(resolved.scripts['build']).toEqual({ configDir: undefined, configFile: undefined, run: 'make' });
  });

  it('rejects unknown options and mixed run/runner', () => {
    expect(() => resolveScripts({
      config: { scripts: { build: { run: 'make', timeout: 1 } as never } },
      configFile: undefined,
      layers: [],
    })).toThrow('Script "build" has unknown option(s): timeout.');
    expect(() => resolveScripts({
      config: { scripts: { build: { run: 'make', runner: 'node' } as never } },
      configFile: undefined,
      layers: [],
    })).toThrow('Script "build" cannot mix "run" with "runner" or "args".');
  });

  it('rejects runner args that are not an array of strings', () => {
    expect(() => resolveScripts({
      config: { scripts: { build: { args: 'script.js' as never, runner: 'node' } } },
      configFile: undefined,
      layers: [],
    })).toThrow('Script "build" args must be an array of strings.');
  });
});
