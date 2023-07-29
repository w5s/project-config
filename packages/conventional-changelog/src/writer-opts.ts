import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import type { Options } from 'conventional-changelog-writer';
import { createTransform } from './transform.js';
import { CommitConventionalType } from './data.js';

export interface WriterOptions extends Options {}

const basePath = resolve(dirname(__dirname), './template');

const mainTemplate = readFileSync(`${basePath}/template.hbs`, 'utf8');
const headerPartial = readFileSync(`${basePath}/header.hbs`, 'utf8');
const commitPartial = readFileSync(`${basePath}/commit.hbs`, 'utf8');
const footerPartial = readFileSync(`${basePath}/footer.hbs`, 'utf8');
const author = readFileSync(`${basePath}/author.hbs`, 'utf8');

export const defaultDisplayTypes = CommitConventionalType.findWhere((_) => _.changelog);

export const writerOpts: WriterOptions = {
  transform: createTransform({
    displayTypes: defaultDisplayTypes,
  }),
  groupBy: 'type',
  commitGroupsSort: 'title',
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  mainTemplate,
  headerPartial,
  // eslint-disable-next-line unicorn/prefer-string-replace-all
  commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
  footerPartial,
};
