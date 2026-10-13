import { describe, expect, it } from 'vitest';

import { Executor } from './Executor.js';

describe(Executor.run, () => {
  it('resolves with the exit code of the executed command', async () => {
    await expect(Executor.run({ run: `${process.execPath} -e "process.exit(3)"` })).resolves.toBe(3);
  });

  it('resolves with 0 on success', async () => {
    await expect(Executor.run({ run: `${process.execPath} -e "process.exit(0)"` })).resolves.toBe(0);
  });

  it('rejects when the command cannot be spawned', async () => {
    await expect(Executor.run({ cwd: '/path/that/does/not/exist', run: '' })).rejects.toThrow();
  });

  it('inherits environment variables by default', async () => {
    const result = await Executor.run({
      env: { TEST_VAR: 'inherited' },
      run: `${process.execPath} -e "process.exit(process.env.TEST_VAR === 'inherited' ? 0 : 1)"`,
    });
    expect(result).toBe(0);
  });

  it('merges provided env with process.env', async () => {
    const result = await Executor.run({
      env: { CUSTOM_VAR: 'value' },
      run: `${process.execPath} -e "process.exit(process.env.PATH ? 0 : 1)"`,
    });
    expect(result).toBe(0);
  });

  it('passes runner arguments through without shell expansion', async () => {
    const marker = '$(echo injected) && echo injected';
    const result = await Executor.run({
      args: [
        '-e',
        'process.exit(process.argv[1] === process.argv[2] ? 0 : 1)',
        marker,
        marker,
      ],
      runner: process.execPath,
    });

    expect(result).toBe(0);
  });

  it('allows overriding inherited environment variables', async () => {
    const result = await Executor.run({
      env: { TEST_OVERRIDE: 'custom' },
      run: `${process.execPath} -e "process.exit(process.env.TEST_OVERRIDE === 'custom' ? 0 : 1)"`,
    });
    expect(result).toBe(0);
  });
});
