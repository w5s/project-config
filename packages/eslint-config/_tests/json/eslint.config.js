/* eslint-env node */
import baseConfig from '../../dist/index.js';

export default [
  ...(await baseConfig()),
];
