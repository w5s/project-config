import type { Commit as CommitDefault } from 'conventional-commits-parser';

export type Commit = CommitDefault<never> & {
  hash?: string;
};

export type CommitConventionalType =
  | 'build'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip'
  | 'chore';

export const CommitConventionalType = (() => {
  const enumObject = Object.freeze({
    Build: 'build',
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
    Chore: 'chore',
  });
  const enumValues: readonly CommitConventionalType[] = Object.freeze(Object.values(enumObject).sort());
  const enumValuesSet = new Set(enumValues);

  const typeData: Record<CommitConventionalType, CommitConventionalTypeData> = {
    feat: {
      'emoji': '✨',
      'en-US': 'Features',
      'changelog': true,
    },
    fix: {
      'emoji': '🐛',
      'en-US': 'Bug Fixes',
      'changelog': true,
    },
    build: {
      'emoji': '👷',
      'en-US': 'Build System',
      'changelog': false,
    },
    chore: {
      'emoji': '🎫',
      'en-US': 'Chores',
      'changelog': false,
    },
    ci: {
      'emoji': '🔧',
      'en-US': 'Continuous Integration',
      'changelog': false,
    },
    docs: {
      'emoji': '📝',
      'en-US': 'Documentation',
      'changelog': false,
    },
    test: {
      'emoji': '✅',
      'en-US': 'Tests',
      'changelog': false,
    },
    perf: {
      'emoji': '⚡',
      'en-US': 'Performance Improvements',
      'changelog': true,
    },
    refactor: {
      'emoji': '♻',
      'en-US': 'Code Refactoring',
      'changelog': false,
    },
    revert: {
      'emoji': '⏪',
      'en-US': 'Reverts',
      'changelog': true,
    },
    style: {
      'emoji': '💄',
      'en-US': 'Styles',
      'changelog': false,
    },
    wip: {
      'emoji': '🚧',
      'en-US': 'Work in progress',
      'changelog': false,
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

  function findWhere(predicate: (data: CommitConventionalTypeData) => boolean): CommitConventionalType[] {
    return enumValues.filter((enumValue) => predicate(getData(enumValue)));
  }

  return { ...enumObject, hasInstance, getData, values, parse, findWhere };
})();

export interface CommitConventionalTypeData {
  'emoji': string;
  'en-US': string;
  'changelog': boolean;
}
