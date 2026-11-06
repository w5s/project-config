import { $ } from '@w5s/managed-script/zx';

import { npmRunAll } from '../internal/npmRunAll.js';

export async function main() {
  await npmRunAll($)('prepare');
}

if (import.meta.main) await main();
