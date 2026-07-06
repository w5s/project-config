import { type ESLintIgnoreOptions, eslintIgnores } from '@w5s/eslint-config-ignore';

export async function ignores(options: ignores.Options = {}) {
  const config = await eslintIgnores(options);
  return [config];
}

export namespace ignores {
  export type Options = ESLintIgnoreOptions;
}
