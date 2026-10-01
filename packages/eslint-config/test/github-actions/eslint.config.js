import { defineConfig } from '../../dist/index.js';

export default [...(await defineConfig())];
