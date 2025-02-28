export function createRules(prefix: string) {
  return {
    [`${prefix}no-unused-vars`]: ['error', { argsIgnorePattern: '^_' }],
  };
}
