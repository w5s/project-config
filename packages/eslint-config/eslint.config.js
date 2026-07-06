import { globalIgnores } from 'eslint/config';

import rootConfig from '../../eslint.config.js';

export default [
  globalIgnores(['_tests/**/*', '**/typegen/'], 'Ignore Test Directory'),
  ...rootConfig, {
    rules: {
      'ts/naming-convention': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-call': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-return': 'off',
    // 'sort-keys/sort-keys-fix': 'error',
    },
  }];
