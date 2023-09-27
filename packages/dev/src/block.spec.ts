import { beforeEach, describe, expect, it } from 'vitest';
import { mkdir, rmdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { block } from './block.js';
import { file } from './file.js';

describe('block', () => {
  let testPath = '';

  beforeEach(async () => {
    testPath = `.cache/test-block-${Math.random().toString(36)}`;
    try {
      await rmdir(testPath, { recursive: true });
    } catch {
      /* empty */
    }
    await mkdir(testPath, { recursive: true });
  });

  describe('option state', () => {
    it('does not change the content when "absent" and not present', async () => {
      const path = join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content\n\n',
          ].join(''),
      });

      await block({
        path,
        block: 'test',
        state: 'absent',
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content\n\n',
        ].join('')
      );
    });
    it('removes the content when "absent"', async () => {
      const path = join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content\n\n',
            '# BEGIN MANAGED BLOCK\n',
            'test\n',
            '# END MANAGED BLOCK',
          ].join(''),
      });

      await block({
        path,
        block: 'test',
        state: 'absent',
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content\n\n',
        ].join('')
      );
    });
  });

  describe('option position', () => {
    it('places before the after end of file', async () => {
      const path = join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        path,
        block: 'test',
        insertPosition: ['after', 'EndOfFile'],
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content\n\n',
          '# BEGIN MANAGED BLOCK\n',
          'test\n',
          '# END MANAGED BLOCK',
        ].join('')
      );
    });
    it('places after the begin of file', async () => {
      const path = join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        path,
        block: 'test',
        insertPosition: ['before', 'BeginningOfFile'],
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          '# BEGIN MANAGED BLOCK\n',
          'test\n',
          '# END MANAGED BLOCK\n',
          'some_content\n',
        ].join('')
      );
    });
  });
  describe('option marker', () => {
    it('places before the after end of file', async () => {
      const path = join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        path,
        block: 'test',
        marker: (marker) => `### ${marker} custom`,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content\n\n',
          '### Begin custom\n',
          'test\n',
          '### End custom',
        ].join('')
      );
    });
  });
});
