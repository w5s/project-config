const { join } = require('path');
const { packageJson, copyFiles, json } = require('mrm-core');
const npm = require('../core/npm');

function task() {
  /** dependencies */

  // Dependencies
  npm.dependency({
    dev: false,
    name: ['concurrently', 'nodemon', 'dotenv'],
    state: 'present',
  });
  // Hapi
  npm.dependency({
    dev: false,
    name: ['@hapi/hapi'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['@types/hapi__hapi'],
    state: 'present',
  });
  // Glue
  npm.dependency({
    dev: false,
    name: ['@hapi/glue'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['@types/hapi__glue'],
    state: 'present',
  });
  // Pino
  npm.dependency({
    dev: false,
    name: ['hapi-pino', 'pino', 'rotating-file-stream'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['@types/hapi-pino', '@types/pino'],
    state: 'present',
  });
  // hapi-swagger
  npm.dependency({
    dev: false,
    name: ['joi', '@hapi/inert', '@hapi/vision', 'hapi-swagger'],
    state: 'present',
  });
  npm.dependency({
    dev: true,
    name: ['@types/hapi__inert', '@types/hapi__vision'],
    state: 'present',
  });
  // W5s libs
  npm.dependency({
    dev: false,
    name: ['@w5s/core', '@w5s/database-client', '@w5s/log'],
    state: 'present',
  });

  /** project structure */
  copyFiles(
    join(__dirname, 'templates'),
    [
      '.env',
      'src/index.ts',
      'src/app/config.ts',
      'src/app/route/health.ts',
      'src/bundle/health/data.ts',
      'src/bundle/health/index.ts',
      'src/bundle/health/repository.ts',
      'src/bundle/health/service.ts',
    ],
    {
      overwrite: true,
    }
  );
  copyFiles(join(__dirname, 'templates'), ['src/app/route/index.ts'], {
    overwrite: false,
  });

  /** Typescript setup */
  const tsConfig = json('tsconfig.json');
  tsConfig.merge({
    compilerOptions: {
      baseUrl: '.',
      paths: {
        'app/*': ['src/app/*'],
        'bundle/*': ['src/bundle/*'],
      },
    },
  });
  tsConfig.save();

  /** package setup */
  packageJson()
    .merge({
      config: {
        packageArchetype: 'application',
      },
      jest: {
        moduleNameMapper: {
          '^app/(.*)': '<rootDir>/src/app/$1',
          '^bundle/(.*)': '<rootDir>/src/bundle/$1',
        },
        modulePaths: ['<rootDir>/src'],
      },
      scripts: {
        build: 'tsc',
        dev: 'NODE_PATH=./lib concurrently "yarn start" "yarn build -- -w"',
        start: 'NODE_PATH=./lib nodemon -r dotenv/config lib/index.js dotenv_config_path=.env',
      },
    })
    .save();
}

task.description = 'Setup Hapi project';
module.exports = task;
