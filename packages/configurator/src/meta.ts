export const meta = Object.freeze({
  // @ts-ignore - these variables are injected at build time
  name: (typeof __PACKAGE_NAME__ === 'undefined' ? '' : __PACKAGE_NAME__) as string,
  // @ts-ignore - these variables are injected at build time
  version: (typeof __PACKAGE_VERSION__ === 'undefined' ? '' : __PACKAGE_VERSION__) as string,
  // @ts-ignore - these variables are injected at build time
  buildNumber: 1 as number, // (typeof __PACKAGE_BUILD_NUMBER__ === 'undefined' ? 0 : __PACKAGE_BUILD_NUMBER__) as number,
  binaryLabel: 'W5S Configurator',
  binaryName: 'configurator',
  // @ts-ignore - these variables are injected at build time
  binaryVersion: (typeof __PACKAGE_VERSION__ === 'undefined' ? '' : __PACKAGE_VERSION__) as string,
});
