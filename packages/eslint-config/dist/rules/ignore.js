"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_fs_1 = require("node:fs");
const find_up_1 = __importDefault(require("find-up"));
const parse_gitignore_1 = __importDefault(require("parse-gitignore"));
const node_path_1 = require("node:path");
const getGitignore = (prefix = '') => {
    const cwd = process.cwd();
    const gitIgnoreFile = find_up_1.default.sync((0, node_path_1.join)(prefix, '.gitignore'), { cwd });
    if (gitIgnoreFile != null) {
        const { patterns } = parse_gitignore_1.default.parse((0, node_fs_1.readFileSync)(gitIgnoreFile));
        const returnValue = patterns.map((pattern) => (0, node_path_1.join)(prefix, pattern));
        return returnValue;
    }
    return [];
};
const config = {
    ignorePatterns: [
        '!.*',
        '.yarn',
        '.common/',
        '.config/package-lock.json',
        '.config/yarn.lock',
        '.go/',
        '.modules/',
        '.pnpm-store/',
        '.venv/',
        'deprecated/',
        'angular.json',
        'esbuild.js',
        'package-lock.json',
        'pnpm-lock.yaml',
        'slim.report.json',
        'test-output/',
        'venv/',
        'yarn.lock',
        '_generated_/',
        '**/vendor/**',
        '**/vendors/**',
        '*.min.*',
        '*.toml',
        ...getGitignore(),
        ...getGitignore('android'),
        ...getGitignore('ios'),
    ],
};
module.exports = config;
