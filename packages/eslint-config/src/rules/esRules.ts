import { bestPractices } from './esRules/bestPractices.js';
import { errors } from './esRules/errors.js';
import { es6 } from './esRules/es6.js';
import { overrides } from './esRules/overrides.js';
import { strict } from './esRules/strict.js';
import { variables } from './esRules/variables.js';

export const esRules = () => ({
  ...bestPractices(),
  ...errors(),
  ...es6(),
  ...strict(),
  ...variables(),

  // Must be last
  ...overrides(),
});
