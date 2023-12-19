const fs = require('node:fs');
const { file, packageJson } = require('mrm-core');
const pkg = require('./pkg.js');
const npm = require('./npm.js');
const project = require('./project.js');

/**
 * @param {{
 *   state: 'present'|'absent'
 * }} options
 */
function vitest({ state }) {
  const hasVitest = state === 'present';
  const hasWorkspace = pkg.hasWorkspaces(packageJson());
  const vitestScript = 'vitest run';
  const update = (/** @type {string|undefined} */ _) =>
    hasVitest ? vitestScript : _ === vitestScript ? pkg.emptyScript : _;

  // Dependencies
  npm.dependency({
    dev: true,
    name: ['vite', 'vitest'],
    state: hasVitest ? 'present' : 'absent',
  });

  /** @type {string|undefined} */
  let viteVersion;
  /** @type {string|undefined} */
  let vitestVersion;
  pkg.withPackageJson((packageFile) => {
    viteVersion = packageFile.get('devDependencies.vite');
    vitestVersion = packageFile.get('devDependencies.vitest');
    pkg.script(packageFile, {
      name: `${project.test}:root`,
      update,
      state: hasWorkspace ? 'absent' : 'present',
    });
  });

  pkg.forEachWorkspace(({ projectDir, packageFile }) => {
    const hasSrc = fs.existsSync(`${projectDir}/src`);
    const packageState = hasVitest && hasSrc ? 'present' : 'absent';
    pkg.value(packageFile, {
      path: 'devDependencies.vite',
      state: packageState,
      update: (_) => _ ?? viteVersion,
    });
    pkg.value(packageFile, {
      path: 'devDependencies.vitest',
      state: packageState,
      update: (_) => _ ?? vitestVersion,
    });
    pkg.script(packageFile, {
      name: `${project.test}:src`,
      update,
      state: packageState,
    });
    const viteConfig = file(`${projectDir}/vite.config.mts`);
    if (packageState === 'absent') {
      viteConfig.delete();
    } else if (!viteConfig.exists()) {
      viteConfig.save(
        `/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
  test: {},
});
`
      );
    }
  });
}

module.exports = {
  vitest,
};
