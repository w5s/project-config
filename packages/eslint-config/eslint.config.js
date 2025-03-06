import rootConfig from '../../eslint.config.js';

export default [...rootConfig, {
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
