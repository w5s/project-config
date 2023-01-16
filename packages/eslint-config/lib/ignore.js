"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_fs_1 = require("node:fs");
const find_up_1 = __importDefault(require("find-up"));
const parse_gitignore_1 = __importDefault(require("parse-gitignore"));
const getGitignore = () => {
    const found = find_up_1.default.sync('.gitignore');
    if (found != null) {
        return parse_gitignore_1.default.parse((0, node_fs_1.readFileSync)(found)).patterns;
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
        '*.toml',
        ...getGitignore(),
    ],
};
module.exports = config;
