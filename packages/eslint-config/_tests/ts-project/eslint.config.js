/* eslint-env node */
import baseConfig from '../../dist/index.js';
import testConfig from '../testRules.js';

export default [
  ...(await baseConfig()),
  testConfig,
  {
    // parserOptions: {
    //   project: require.resolve('./tsconfig.json'),
    // },
  },
];
