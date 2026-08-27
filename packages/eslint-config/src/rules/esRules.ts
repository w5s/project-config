import { lazy } from '../internal/lazy.js';
import { bestPractices } from './airbnb-base/bestPractices.js';
import { errors } from './airbnb-base/errors.js';
import { es6 } from './airbnb-base/es6.js';
import { overrides } from './airbnb-base/overrides.js';
import { strict } from './airbnb-base/strict.js';
import { variables } from './airbnb-base/variables.js';

export const esRules = lazy(() => ({
  ...bestPractices(),
  ...errors(),
  ...es6(),
  ...strict(),
  ...variables(),

  // Must be last
  ...overrides(),
}));
