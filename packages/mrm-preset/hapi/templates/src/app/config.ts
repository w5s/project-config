/* eslint-disable no-process-env */
import * as fs from 'fs';
import * as path from 'path';
import * as Hapi from '@hapi/hapi';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiPino from 'hapi-pino';
import * as rfs from 'rotating-file-stream';
import type * as HapiGlue from '@hapi/glue';

export const Env = {
  getPort(): string {
    return process.env.HAPI_PORT ?? '3000';
  },
  getHost(): string {
    return process.env.HAPI_HOST ?? 'localhost';
  },
  getLogFolder(): string | undefined {
    return process.env.HAPI_LOGFOLDER;
  },
  getNodeEnv(): string {
    return process.env.NODE_ENV ?? 'local';
  },
  getTLSKeyPath(): string {
    return process.env.TLS_KEY_PATH ?? '';
  },
  getTLSCertPath(): string {
    return process.env.TLS_CERT_PATH ?? '';
  },
};

const swaggerOptions: HapiSwagger.RegisterOptions = {
  info: {
    title: `TODO API`, // TODO: configure that
    version: '1.0', // TODO: configure that
  },
};

const server = {
  port: Env.getPort(),
  host: Env.getHost(),
  tls:
    Env.getPort() === '443'
      ? {
          key: Env.getTLSKeyPath().length > 0 ? fs.readFileSync(Env.getTLSKeyPath()) : '',
          cert: Env.getTLSCertPath().length > 0 ? fs.readFileSync(Env.getTLSCertPath()) : '',
        }
      : false,
  routes: {
    cors: true,
  },
};

const pad = (num: number): string => {
  return (num > 9 ? '' : '0') + String(num);
};
const generator = (time: number | Date, index?: number) => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!time || !(time instanceof Date)) return path.join(Env.getLogFolder() ?? '', 'subscription_service.log');

  const year = time.getFullYear();
  const month = pad(time.getMonth() + 1);
  const day = pad(time.getDate());
  const hour = pad(time.getHours());
  const minute = pad(time.getMinutes());

  return path.join(Env.getLogFolder() ?? '', `subscription_service-${year}-${month}-${day}-${hour}-${minute}.log`);
};

const stream = rfs.createStream(generator, {
  interval: '1d',
  maxFiles: 10,
});

const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
  {
    plugin: HapiPino,
    options: {
      prettyPrint: Env.getNodeEnv() !== 'production',
      stream: Env.getLogFolder().length > 0 ? stream : undefined,
    },
  },
  {
    plugin: Inert,
  },
  {
    plugin: Vision,
  },
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
];

export const serverConfig: {
  composeOptions: HapiGlue.Options;
  manifest: HapiGlue.Manifest;
} = {
  composeOptions: {
    relativeTo: __dirname,
  },
  manifest: {
    server,
    register: {
      plugins,
    },
  },
};
