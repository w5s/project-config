"use strict";
const dev_1 = require("@w5s/dev");
const yamlExtensions = dev_1.Project.queryExtensions(['yaml']);
const config = {
    extends: ['plugin:yml/standard', 'plugin:yml/prettier'],
    overrides: [
        {
            files: [
                ...yamlExtensions.map((ext) => `docker-compose*${ext}`),
                ...yamlExtensions.map((ext) => `compose-*${ext}`),
                ...yamlExtensions.map((ext) => `compose${ext}`),
            ],
            rules: {
                'yml/no-empty-mapping-value': 'off',
            },
        },
    ],
    parser: 'yaml-eslint-parser',
    plugins: ['yml'],
};
module.exports = config;
