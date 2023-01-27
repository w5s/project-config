import type { Options } from 'conventional-changelog-writer';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createTransform } from './transform.js';

export interface WriterOptions extends Options {}

const basePath = resolve(__dirname, './templates');

const template = readFileSync(`${basePath}/template.hbs`, 'utf8');
const header = readFileSync(`${basePath}/header.hbs`, 'utf8');
const commit = readFileSync(`${basePath}/commit.hbs`, 'utf8');
const footer = readFileSync(`${basePath}/footer.hbs`, 'utf8');
const author = readFileSync(`${basePath}/author.hbs`, 'utf8');

export const writerOpts: WriterOptions = {
  transform: createTransform({}),
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  mainTemplate: template,
  headerPartial: header,
  commitPartial: commit.replace(/{{gitUserInfo}}/g, author),
  footerPartial: footer,
};
