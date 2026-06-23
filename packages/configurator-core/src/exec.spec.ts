import { describe, it, expect } from 'vitest';
import { exec, execSync } from './exec.js';

describe(execSync, () => {
  it('should return stdout and stderr as strings', () => {
    const command = 'echo';
    const args = ['hello'];
    const result = execSync(command, args);

    expect(result).toHaveProperty('stdout');
    expect(result).toHaveProperty('stderr');
    expect(result.stdout).toBe('hello\n');
    expect(result.stderr).toBe('');
  });
});

describe(exec, () => {
  it('should return a promise resolving to stdout and stderr', async () => {
    const command = 'echo';
    const args = ['hello'];
    const result = await exec(command, args);

    expect(result).toHaveProperty('stdout');
    expect(result).toHaveProperty('stderr');
    expect(result.stdout).toBe('hello\n');
    expect(result.stderr).toBe('');
  });
});
