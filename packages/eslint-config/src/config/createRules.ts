import { ESLintConfig } from '@w5s/dev';

export function createRules(prefix: string) {
  return ESLintConfig.renameRules({
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  }, {
    '': prefix,
  });
}
