import type { RestrictedGlobals } from './type.js';

/**
 * Default restricted globals used by the ESLint rule no-restricted-globals.
 *
 * @see https://eslint.org/docs/latest/rules/no-restricted-globals
 */
export const restrictedGlobals: Readonly<RestrictedGlobals> = Object.freeze([
  // List of restricted globals
  {
    message:
          'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    name: 'isFinite',
  },
  {
    message:
          'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    name: 'isNaN',
  },
]);
