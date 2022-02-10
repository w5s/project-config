import { compose } from '@hapi/glue';
import { serverConfig } from './app/config';
import { routes } from './app/route';

export async function main(): Promise<void> {
  const server = await compose(serverConfig.manifest, serverConfig.composeOptions);

  for (const route of routes) {
    server.route(route);
  }

  // Starting server
  await server.start();
}

if (require.main === module) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main();
}
