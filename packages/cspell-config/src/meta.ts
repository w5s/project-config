/* eslint-disable ts/naming-convention */
declare global {
  const __PACKAGE_NAME__: string;
  const __PACKAGE_VERSION__: string;
  const __PACKAGE_BUILD_NUMBER__: string;
}

export const meta = Object.freeze({
  name: __PACKAGE_NAME__,
  version: __PACKAGE_VERSION__,
  buildNumber: __PACKAGE_BUILD_NUMBER__,
});
