import { $ } from '@w5s/managed-script/zx';

export async function npmRunAll(scriptPrefix: string) {
  await $`pnpm run "/^${scriptPrefix}:.*/"`;
}
