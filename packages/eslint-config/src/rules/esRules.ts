import { bestPractices } from './esRules/bestPractices.js';
import { errors } from './esRules/errors.js';
import { overrides } from './esRules/overrides.js';
export const esRules = () => ({
  ...bestPractices(),
  ...errors(),
  ...overrides(),
});
