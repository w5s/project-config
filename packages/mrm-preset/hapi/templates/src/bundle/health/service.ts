// Business logic module

import { HealthStatus } from './data';

export type HealthStatusService = {
  get(): HealthStatus;
};

export function HealthStatusService(): HealthStatusService {
  function get(): HealthStatus {
    return HealthStatus.Pass;
  }

  return {
    get,
  };
}
