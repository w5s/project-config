import { describe, expect, it } from 'vitest';

import { ScriptInvocation } from './ScriptInvocation.js';

describe('ScriptInvocation', () => {
  describe(ScriptInvocation.create, () => {
    it('appends posix-quoted arguments to a shell command', () => {
      expect(ScriptInvocation.create(
        { configDir: undefined, configFile: undefined, run: 'my-command' },
        ['--watch', 'hello world', "it's"],
      )).toEqual({
        target: { run: String.raw`my-command '--watch' 'hello world' 'it'\''s'` },
      });
    });

    it('leaves a shell command unchanged when there are no extra arguments', () => {
      expect(ScriptInvocation.create(
        { configDir: undefined, configFile: undefined, run: 'my-command' },
        [],
      )).toEqual({
        target: { run: 'my-command' },
      });
    });

    it('appends CLI arguments to runner argv without shell quoting', () => {
      expect(ScriptInvocation.create(
        { args: ['script.js'], configDir: undefined, configFile: undefined, runner: 'node' },
        ['hello world', "it's"],
      )).toEqual({
        target: { args: ['script.js', 'hello world', "it's"], runner: 'node' },
      });
    });
  });
  describe(ScriptInvocation.format, () => {
    it('returns the shell command, including already quoted arguments', () => {
      const invocation = ScriptInvocation.create(
        { configDir: undefined, configFile: undefined, run: 'my-command' },
        ['--watch', 'hello world', "it's"],
      );
      expect(ScriptInvocation.format(invocation)).toBe(String.raw`my-command '--watch' 'hello world' 'it'\''s'`);
    });

    it('quotes only runner argv parts that are not shell-safe', () => {
      const invocation = ScriptInvocation.create(
        { args: ['script.js', '--fix'], configDir: undefined, configFile: undefined, runner: 'node' },
        ['hello world', "it's"],
      );
      expect(ScriptInvocation.format(invocation)).toBe(String.raw`node script.js --fix 'hello world' 'it'\''s'`);
    });

    it('quotes a runner path that contains spaces', () => {
      const invocation = ScriptInvocation.create(
        { args: [], configDir: undefined, configFile: undefined, runner: '/Program Files/node' },
        [],
      );
      expect(ScriptInvocation.format(invocation)).toBe("'/Program Files/node'");
    });
  });
});
