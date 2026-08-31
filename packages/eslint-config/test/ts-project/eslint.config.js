import { defineConfig } from '../../dist/index.js';
import testConfig from '../testRules.js';

export default [
  ...(await defineConfig()),
  testConfig,
];
