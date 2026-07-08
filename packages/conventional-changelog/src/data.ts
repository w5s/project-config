export interface Commit {
  body: Commit.Field;
  footer: Commit.Field;
  hash: null | string;
  header: Commit.Field;
  mentions: Array<string>;
  merge: Commit.Field;
  notes: Array<Commit.Note>;
  references: Array<Commit.Reference>;
  revert: Commit.Revert | null;
  scope: null | string;
  subject: null | string;
  type: null | string;
}

export namespace Commit {
  export type Field = null | string;

  export interface Note {
    text: string;
    title: string;
  }

  export interface Reference {
    action: Field;
    issue: string;
    owner: Field;
    prefix: string;
    raw: string;
    repository: Field;
  }

  export interface Revert {
    [field: string]: Field | undefined;
    hash?: Field | undefined;
    header?: Field | undefined;
  }
}

export type CommitConventionalType =
  | 'build'
  | 'chore'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip';

export const CommitConventionalType = (() => {
  const enumObject = Object.freeze({
    Build: 'build',
    Chore: 'chore',
    CI: 'ci',
    Docs: 'docs',
    Feat: 'feat',
    Fix: 'fix',
    Perf: 'perf',
    Refactor: 'refactor',
    Revert: 'revert',
    Style: 'style',
    Test: 'test',
    WIP: 'wip',
  });
  // eslint-disable-next-line unicorn/no-array-sort
  const enumValues: ReadonlyArray<CommitConventionalType> = Object.freeze(Object.values(enumObject).sort((left, right) => left.localeCompare(right)));
  const enumValuesSet = new Set(enumValues);

  const typeData: Record<CommitConventionalType, CommitConventionalTypeData> = {
    build: {
      'changelog': false,
      'emoji': '👷',
      'en-US': 'Build System',
    },
    chore: {
      'changelog': false,
      'emoji': '🎫',
      'en-US': 'Chores',
    },
    ci: {
      'changelog': false,
      'emoji': '🔧',
      'en-US': 'Continuous Integration',
    },
    docs: {
      'changelog': false,
      'emoji': '📝',
      'en-US': 'Documentation',
    },
    feat: {
      'changelog': true,
      'emoji': '✨',
      'en-US': 'Features',
    },
    fix: {
      'changelog': true,
      'emoji': '🐛',
      'en-US': 'Bug Fixes',
    },
    perf: {
      'changelog': true,
      'emoji': '⚡',
      'en-US': 'Performance Improvements',
    },
    refactor: {
      'changelog': false,
      'emoji': '♻',
      'en-US': 'Code Refactoring',
    },
    revert: {
      'changelog': true,
      'emoji': '⏪',
      'en-US': 'Reverts',
    },
    style: {
      'changelog': false,
      'emoji': '💄',
      'en-US': 'Styles',
    },
    test: {
      'changelog': false,
      'emoji': '✅',
      'en-US': 'Tests',
    },
    wip: {
      'changelog': false,
      'emoji': '🚧',
      'en-US': 'Work in progress',
    },
  };

  function hasInstance(anyValue: unknown): anyValue is CommitConventionalType {
    return typeof anyValue === 'string' && enumValuesSet.has(anyValue as unknown as CommitConventionalType);
  }

  function getData(commitType: CommitConventionalType): CommitConventionalTypeData {
    return typeData[commitType];
  }

  function parse(anyValue: string): CommitConventionalType | undefined {
    return hasInstance(anyValue) ? anyValue : undefined;
  }

  function values() {
    return enumValues;
  }

  function findWhere(predicate: (data: CommitConventionalTypeData) => boolean): Array<CommitConventionalType> {
    return enumValues.filter((enumValue) => predicate(getData(enumValue)));
  }

  return { ...enumObject, findWhere, getData, hasInstance, parse, values };
})();

export interface CommitConventionalTypeData {
  'changelog': boolean;
  'emoji': string;
  'en-US': string;
}
