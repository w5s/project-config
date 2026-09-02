import { describe, expect, it } from 'vitest';

import { Executor } from './Executor.js';

describe(Executor.run, () => {
  it('resolves with the exit code of the executed command', async () => {
    await expect(Executor.run(`${process.execPath} -e "process.exit(3)"`)).resolves.toBe(3);
  });

  it('resolves with 0 on success', async () => {
    await expect(Executor.run(`${process.execPath} -e "process.exit(0)"`)).resolves.toBe(0);
  });

  it('rejects when the command cannot be spawned', async () => {
    await expect(Executor.run('', { cwd: '/path/that/does/not/exist' })).rejects.toThrow();
  });

  it('inherits environment variables by default', async () => {
    const result = await Executor.run(
      `${process.execPath} -e "process.exit(process.env.TEST_VAR === 'inherited' ? 0 : 1)"`,
      { env: { TEST_VAR: 'inherited' } },
    );
    await expect(result).toBe(0);
  });

  it('merges provided env with process.env', async () => {
    const result = await Executor.run(
      `${process.execPath} -e "process.exit(process.env.PATH ? 0 : 1)"`,
      { env: { CUSTOM_VAR: 'value' } },
    );
    await expect(result).toBe(0);
  });

  it('allows overriding inherited environment variables', async () => {
    const result = await Executor.run(
      `${process.execPath} -e "process.exit(process.env.TEST_OVERRIDE === 'custom' ? 0 : 1)"`,
      { env: { TEST_OVERRIDE: 'custom' } },
    );
    await expect(result).toBe(0);
  });
});
