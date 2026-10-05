import { readFile } from 'node:fs/promises';
import nodePath from 'node:path';
import { describe, expect, it } from 'vitest';

import { block } from './block.js';
import { file } from './file.js';
import { getTestPath } from './testing/index.js';

describe(block, () => {
  const testPath = getTestPath('block-');

  describe('option state', () => {
    it('does not change the content when "absent" and not present', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content',
            '',
          ].join('\n'),
      });

      await block({
        block: 'test',
        path,
        state: 'absent',
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
        ].join('\n'),
      );
    });
    it('removes the content when "absent"', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content',
            '# BEGIN:managed-block',
            'test',
            '# END:managed-block',
          ].join('\n'),
      });

      await block({
        block: 'test',
        path,
        state: 'absent',
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
        ].join('\n'),
      );
    });
  });

  describe('option position', () => {
    it('places after end of file', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        insertPosition: ['after', 'EndOfFile'],
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
        ].join('\n'),
      );
    });

    it('places after regexp', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            '<head></head>',
            '<body>',
            '</body>',
            '<body>',
            '</body>',
          ].join('\n'),
      });

      await block({
        block: 'test',
        insertPosition: ['after', /<body>/],
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          '<head></head>',
          '<body>',
          '</body>',
          '<body>',
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
          '</body>',
        ].join('\n'),
      );
    });

    it('places before the begin of file', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        insertPosition: ['before', 'BeginningOfFile'],
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
          'some_content',
          '',
        ].join('\n'),
      );
    });
    it('places before regexp', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            '<head></head>',
            '<body>',
            '</body>',
            '<body>',
            '</body>',
          ].join('\n'),
      });

      await block({
        block: 'test',
        insertPosition: ['before', /<body>/],
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          '<head></head>',
          '<body>',
          '</body>',
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
          '<body>',
          '</body>',
        ].join('\n'),
      );
    });
  });

  describe('option marker', () => {
    it('uses a custom marker function', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        marker: (mark) => `### ${mark} custom`,
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '### Begin custom',
          'test',
          '### End custom',
        ].join('\n'),
      );
    });

    it('uses html markers for .md paths', async () => {
      const path = nodePath.join(testPath, 'readme.md');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '<!-- BEGIN:managed-block -->',
          'test',
          '<!-- END:managed-block -->',
        ].join('\n'),
      );
    });

    it('uses line markers for .ts paths', async () => {
      const path = nodePath.join(testPath, 'index.ts');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '// BEGIN:managed-block',
          'test',
          '// END:managed-block',
        ].join('\n'),
      );
    });

    it('uses block markers for .css paths', async () => {
      const path = nodePath.join(testPath, 'styles.css');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '/* BEGIN:managed-block */',
          'test',
          '/* END:managed-block */',
        ].join('\n'),
      );
    });

    it('uses topic with auto html style for AGENTS.md-like markers', async () => {
      const path = nodePath.join(testPath, 'AGENTS.md');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        marker: { topic: 'turborepo-agent-rules' },
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '<!-- BEGIN:turborepo-agent-rules -->',
          'test',
          '<!-- END:turborepo-agent-rules -->',
        ].join('\n'),
      );
    });

    it('allows explicit commentStyle to override the extension', async () => {
      const path = nodePath.join(testPath, 'readme.md');
      await file({
        path,
        state: 'present',
        update: () => 'some_content\n',
      });

      await block({
        block: 'test',
        marker: { commentStyle: '#' },
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '',
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
        ].join('\n'),
      );
    });

    it('appends a second topic without replacing an existing region', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content',
            '# BEGIN:first',
            'first-content',
            '# END:first',
            '',
          ].join('\n'),
      });

      await block({
        block: 'second-content',
        marker: { topic: 'second' },
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '# BEGIN:first',
          'first-content',
          '# END:first',
          '',
          '# BEGIN:second',
          'second-content',
          '# END:second',
        ].join('\n'),
      );
    });

    it('leaves a legacy MANAGED BLOCK region in place', async () => {
      const path = nodePath.join(testPath, 'file');
      await file({
        path,
        state: 'present',
        update: () =>
          [
            // Lines
            'some_content',
            '# BEGIN MANAGED BLOCK',
            'legacy',
            '# END MANAGED BLOCK',
          ].join('\n'),
      });

      await block({
        block: 'test',
        path,
      });
      await expect(readFile(path, 'utf8')).resolves.toEqual(
        [
          // Lines
          'some_content',
          '# BEGIN MANAGED BLOCK',
          'legacy',
          '# END MANAGED BLOCK',
          '# BEGIN:managed-block',
          'test',
          '# END:managed-block',
        ].join('\n'),
      );
    });
  });
});
