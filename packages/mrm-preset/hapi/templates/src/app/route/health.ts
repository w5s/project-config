import { ServerRoute } from '@hapi/hapi';
import * as Joi from 'joi';
import { HealthStatusService, HealthStatus } from 'bundle/health';

// https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html

export const get = {
  method: 'GET',
  path: '/health',
  handler: () => {
    const healthStatusService = HealthStatusService();

    return {
      status: healthStatusService.get(),
    };
  },
  options: {
    tags: ['api'],
    description: 'Return Health check status',
    notes: 'See https://tools.ietf.org/id/draft-inadarei-api-health-check-01.html for information',
    response: {
      schema: Joi.object({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        status: Joi.string().valid(...Object.values(HealthStatus)),
      }).label('HealthStatus'),
    },
  },
};

export const routes: ReadonlyArray<ServerRoute> = [get];
