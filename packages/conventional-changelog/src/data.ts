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
      emoji: '✨',
      'en-US': 'Features',
    },
    fix: {
      emoji: '🐛',
      'en-US': 'Bug Fixes',
    },
    build: {
      emoji: '👷',
      'en-US': 'Build System',
    },
    chore: {
      emoji: '🎫',
      'en-US': 'Chores',
    },
    ci: {
      emoji: '🔧',
      'en-US': 'Continuous Integration',
    },
    docs: {
      emoji: '📝',
      'en-US': 'Documentation',
    },
    test: {
      emoji: '✅',
      'en-US': 'Tests',
    },
    perf: {
      emoji: '⚡',
      'en-US': 'Performance Improvements',
    },
    refactor: {
      emoji: '♻',
      'en-US': 'Code Refactoring',
    },
    revert: {
      emoji: '⏪',
      'en-US': 'Reverts',
    },
    style: {
      emoji: '💄',
      'en-US': 'Styles',
    },
    wip: {
      emoji: '🚧',
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

  return { ...enumObject, hasInstance, getData, values, parse };
})();

export interface CommitConventionalTypeData {
  emoji: string;
  'en-US': string;
}
