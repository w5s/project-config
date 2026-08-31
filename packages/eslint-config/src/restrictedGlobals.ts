import type { RestrictedGlobals } from './type.js';

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
