import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { describe, test } from 'vitest';

import {
  applyMetadata,
  findSkillFiles,
  formatRepository,
  resolveMetadata,
  syncSkillMetadata,
  yamlScalar,
} from '../scripts/skill-metadata.ts';

const metadata = {
  author: 'Jane Doe <jane@example.com>',
  license: 'MIT',
  package: '@acme/skills',
  repository: 'https://github.com/acme/repo',
  version: '1.2.3',
};

/**
 * Creates a workspace: <root>/package.json (+ .git marker), <root>/packages/pkg/{package.json,skills/demo/SKILL.md}
 *
 * @param options
 * @param options.root extra fields of the root package.json
 * @param options.pkg extra fields of the package package.json
 * @param options.skill content of the demo SKILL.md
 */
function createWorkspace({
  pkg = {},
  root = {},
  skill = '---\nname: demo\ndescription: Demo\n---\n\n# Demo\n',
}: { pkg?: Record<string, unknown>; root?: Record<string, unknown>; skill?: string } = {}) {
  const dir = mkdtempSync(path.join(tmpdir(), 'skill-metadata-'));
  const packageDir = path.join(dir, 'packages', 'pkg');
  mkdirSync(path.join(dir, '.git'));
  mkdirSync(path.join(packageDir, 'skills', 'demo'), { recursive: true });
  writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: 'root', ...root }));
  writeFileSync(path.join(packageDir, 'package.json'), JSON.stringify({ name: '@acme/skills', version: '1.2.3', ...pkg }));
  const skillFile = path.join(packageDir, 'skills', 'demo', 'SKILL.md');
  writeFileSync(skillFile, skill);
  return { cleanup: () => rmSync(dir, { force: true, recursive: true }), dir, packageDir, skillFile };
}

describe('yamlScalar', () => {
  test('keeps simple values plain', () => {
    assert.equal(yamlScalar('MIT'), 'MIT');
    assert.equal(yamlScalar('1.0.0-alpha.1'), '1.0.0-alpha.1');
    assert.equal(yamlScalar('Jane Doe <jane@example.com>'), 'Jane Doe <jane@example.com>');
    assert.equal(yamlScalar('https://github.com/acme/repo'), 'https://github.com/acme/repo');
  });

  test('quotes values that YAML would misread', () => {
    assert.equal(yamlScalar('@acme/skills'), "'@acme/skills'");
    assert.equal(yamlScalar('1.0'), "'1.0'");
    assert.equal(yamlScalar('true'), "'true'");
    assert.equal(yamlScalar('a: b'), "'a: b'");
    assert.equal(yamlScalar('a #b'), "'a #b'");
    assert.equal(yamlScalar("it's: here"), "'it''s: here'");
  });
});

describe('formatRepository', () => {
  test('normalizes common forms', () => {
    assert.equal(formatRepository({ type: 'git', url: 'git+https://github.com/a/b.git' }), 'https://github.com/a/b');
    assert.equal(formatRepository('github:a/b'), 'https://github.com/a/b');
    assert.equal(formatRepository('a/b'), 'https://github.com/a/b');
    assert.equal(formatRepository('git@github.com:a/b.git'), 'https://github.com/a/b');
    assert.equal(formatRepository('git://github.com/a/b.git'), 'https://github.com/a/b');
    assert.equal(formatRepository('https://github.com/a/b'), 'https://github.com/a/b');
  });

  test('returns undefined when missing', () => {
    assert.equal(formatRepository(undefined), undefined);
    assert.equal(formatRepository({}), undefined);
    assert.equal(formatRepository(''), undefined);
  });
});

describe('applyMetadata', () => {
  test('adds license and a metadata block when missing', () => {
    assert.equal(
      applyMetadata('---\nname: demo\ndescription: Demo\n---\n\n# Demo\n', metadata),
      [
        '---',
        'name: demo',
        'description: Demo',
        'license: MIT',
        'metadata:',
        '  author: Jane Doe <jane@example.com>',
        '  version: 1.2.3',
        '  repository: https://github.com/acme/repo',
        "  package: '@acme/skills'",
        '---',
        '',
        '# Demo',
        '',
      ].join('\n'),
    );
  });

  test('updates managed keys in place and preserves the others', () => {
    const input = [
      '---',
      'name: demo',
      'license: Apache-2.0',
      'compatibility: Needs git',
      'metadata:',
      '  tags: a, b',
      '  version: 0.0.1',
      '  category: development',
      '---',
      '',
      'body',
    ].join('\n');
    assert.equal(
      applyMetadata(input, metadata),
      [
        '---',
        'name: demo',
        'license: MIT',
        'compatibility: Needs git',
        'metadata:',
        '  tags: a, b',
        '  version: 1.2.3',
        '  category: development',
        '  author: Jane Doe <jane@example.com>',
        '  repository: https://github.com/acme/repo',
        "  package: '@acme/skills'",
        '---',
        '',
        'body',
      ].join('\n'),
    );
  });

  test('is idempotent', () => {
    const once = applyMetadata('---\nname: demo\n---\nbody\n', metadata);
    assert.equal(applyMetadata(once, metadata), once);
  });

  test('does not touch keys without a resolved value', () => {
    const input = '---\nname: demo\nmetadata:\n  author: Someone\n---\nbody\n';
    assert.equal(applyMetadata(input, { version: '2.0.0' }), '---\nname: demo\nmetadata:\n  author: Someone\n  version: 2.0.0\n---\nbody\n');
  });

  test('preserves CRLF line endings', () => {
    const output = applyMetadata('---\r\nname: demo\r\n---\r\nbody\r\n', { version: '2.0.0' });
    assert.equal(output, '---\r\nname: demo\r\nmetadata:\r\n  version: 2.0.0\r\n---\r\nbody\r\n');
  });

  test('keeps the body untouched, even when it contains delimiters', () => {
    const input = '---\nname: demo\n---\n\ntext\n\n---\n\nmetadata:\n';
    const output = applyMetadata(input, { license: 'MIT' });
    assert.equal(output, '---\nname: demo\nlicense: MIT\n---\n\ntext\n\n---\n\nmetadata:\n');
  });

  test('returns content without frontmatter as is', () => {
    assert.equal(applyMetadata('# No frontmatter\n', metadata), '# No frontmatter\n');
    assert.equal(applyMetadata('---\nname: unterminated\n', metadata), '---\nname: unterminated\n');
  });
});

describe('resolveMetadata', () => {
  test('reads the package manifest', () => {
    const workspace = createWorkspace({
      pkg: {
        author: { email: 'jane@example.com', name: 'Jane Doe' },
        license: 'ISC',
        repository: { directory: 'packages/pkg', type: 'git', url: 'git+https://github.com/acme/repo.git' },
      },
    });
    try {
      assert.deepEqual(resolveMetadata(workspace.packageDir), {
        author: 'Jane Doe <jane@example.com>',
        license: 'ISC',
        package: '@acme/skills',
        repository: 'https://github.com/acme/repo',
        version: '1.2.3',
      });
    } finally {
      workspace.cleanup();
    }
  });

  test('falls back to the workspace root for missing fields, but never for version/name', () => {
    const workspace = createWorkspace({
      pkg: { version: undefined },
      root: { author: 'Root <root@example.com>', license: 'MIT', repository: 'github:acme/root', version: '9.9.9' },
    });
    try {
      assert.deepEqual(resolveMetadata(workspace.packageDir), {
        author: 'Root <root@example.com>',
        license: 'MIT',
        package: '@acme/skills',
        repository: 'https://github.com/acme/root',
        version: undefined,
      });
    } finally {
      workspace.cleanup();
    }
  });
});

describe('syncSkillMetadata', () => {
  test('writes the metadata, then reports nothing to do', () => {
    const workspace = createWorkspace({ pkg: { author: 'Jane Doe', license: 'MIT', repository: 'github:acme/repo' } });
    try {
      assert.deepEqual(syncSkillMetadata({ packageDir: workspace.packageDir }), [workspace.skillFile]);
      const content = readFileSync(workspace.skillFile, 'utf8');
      assert.match(content, /^license: MIT$/m);
      assert.match(content, /^ {2}version: 1\.2\.3$/m);
      assert.deepEqual(syncSkillMetadata({ packageDir: workspace.packageDir }), []);
      assert.equal(readFileSync(workspace.skillFile, 'utf8'), content);
    } finally {
      workspace.cleanup();
    }
  });

  test('follows a version bump', () => {
    const workspace = createWorkspace();
    try {
      syncSkillMetadata({ packageDir: workspace.packageDir });
      writeFileSync(
        path.join(workspace.packageDir, 'package.json'),
        JSON.stringify({ name: '@acme/skills', version: '1.3.0-alpha.0' }),
      );
      syncSkillMetadata({ packageDir: workspace.packageDir });
      assert.match(readFileSync(workspace.skillFile, 'utf8'), /^ {2}version: 1\.3\.0-alpha\.0$/m);
    } finally {
      workspace.cleanup();
    }
  });

  test('check mode reports without writing', () => {
    const workspace = createWorkspace();
    try {
      const before = readFileSync(workspace.skillFile, 'utf8');
      assert.deepEqual(syncSkillMetadata({ check: true, packageDir: workspace.packageDir }), [workspace.skillFile]);
      assert.equal(readFileSync(workspace.skillFile, 'utf8'), before);
    } finally {
      workspace.cleanup();
    }
  });

  test('ignores directories without SKILL.md and packages without skills', () => {
    const workspace = createWorkspace();
    try {
      mkdirSync(path.join(workspace.packageDir, 'skills', 'empty'));
      writeFileSync(path.join(workspace.packageDir, 'skills', '.keep'), '');
      assert.deepEqual(findSkillFiles(workspace.packageDir), [workspace.skillFile]);
      assert.deepEqual(findSkillFiles(path.join(workspace.dir, 'packages')), []);
    } finally {
      workspace.cleanup();
    }
  });
});
