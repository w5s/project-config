# Documentation

## Setup Renovate

1. Open the project on gitlab website
2. Go to CI/CD > Schedules
3. Configure job
    * Set `Interval pattern` to `0 * * * *`
    * Add variables `RENOVATE` to `ON`

## Setup NPM Release

1. Open the project on gitlab website -OR- open the organization for global settings
2. Configure GitLab CI environment variables to allow script to push (tags for example)
    1. Set `CI_EMAIL` to a valid email.
    2. Set `CI_USERNAME` to a valid name.
3. Configure GitLab CI environment variables to allow publishing on NPM registry
    1. Open [https://npmjs.com](https://npmjs.com)
    2. Go to the "Access token" section and generate a new 'Read & Write Token'
    3. Add the `NPM_TOKEN` environment variable containing the created token
