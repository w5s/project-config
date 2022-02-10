import { ServerRoute } from '@hapi/hapi';
import * as health from './health';

export const routes: ServerRoute[] = [...health.routes];
