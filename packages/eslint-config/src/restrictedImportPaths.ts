import type { RestrictedImportPaths } from './type.js';
/* eslint-disable perfectionist/sort-objects */

/**
 * This file contains the list of restricted import paths used in the ESLint configuration.
 *
 * @see https://eslint.org/docs/latest/rules/no-restricted-imports
 */
export const restrictedImportPaths: Readonly<RestrictedImportPaths> = Object.freeze([
  // List of restricted import
  { name: 'moment', message: 'Use Temporal, date-fns, or luxon.' },
  { name: 'jquery', message: 'Use native DOM APIs.' },
  { name: 'underscore', message: 'Use native APIs or es-toolkit.' },
  { name: 'bluebird', message: 'Use native Promise.' },
  { name: 'request', message: 'Use fetch or undici.' },
  { name: 'request-promise', message: 'Use fetch or undici.' },
  { name: 'node-fetch', message: 'Use global fetch (Node 18+).' },
  { name: 'isomorphic-fetch', message: 'Use global fetch.' },
  { name: 'whatwg-fetch', message: 'Use global fetch.' },
  { name: 'rxjs/Rx', message: 'Import from "rxjs" or "rxjs/operators".' },
]);
