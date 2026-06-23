import rootConfig from '../../eslint.config.js';
import { globalIgnores } from 'eslint/config';

export default [
  globalIgnores(['_tests/**/*', '**/typegen/'], 'Ignore Test Directory'),
  ...rootConfig, {
    rules: {
      'ts/naming-convention': 'off',
      'ts/no-unsafe-argument': 'off',
      'ts/no-unsafe-return': 'off',
      'ts/no-unsafe-assignment': 'off',
      'ts/no-unsafe-member-access': 'off',
      'ts/no-unsafe-call': 'off',
    // 'sort-keys/sort-keys-fix': 'error',
    },
  }];
