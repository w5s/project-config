/* eslint-disable n/no-sync */
import { readFileSync } from 'node:fs';
import nodePath from 'node:path';
import type { Options } from 'conventional-changelog-writer';
import { fileURLToPath } from 'node:url';
import { createTransform } from './transform.js';
import { Commit, CommitConventionalType } from './data.js';

export interface WriterOptions extends Options<Commit> {}

const _dirname = typeof __dirname === 'undefined' ? nodePath.dirname(fileURLToPath(import.meta.url)) : __dirname;
const basePath = nodePath.resolve(nodePath.dirname(_dirname), './template');

export const defaultDisplayTypes = CommitConventionalType.findWhere((_) => _.changelog);

export const createWriterOpts = async (): Promise<WriterOptions> => {
  const mainTemplate = readFileSync(`${basePath}/template.hbs`, 'utf8');
  const headerPartial = readFileSync(`${basePath}/header.hbs`, 'utf8');
  const commitPartial = readFileSync(`${basePath}/commit.hbs`, 'utf8');
  const footerPartial = readFileSync(`${basePath}/footer.hbs`, 'utf8');
  const author = readFileSync(`${basePath}/author.hbs`, 'utf8');

  return {
    transform: createTransform({
      displayTypes: defaultDisplayTypes,
    }),
    groupBy: 'type',
    commitGroupsSort: 'title',
    // @ts-ignore
    commitsSort: ['scope', 'subject'],
    noteGroupsSort: 'title',
    mainTemplate,
    headerPartial,
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
    footerPartial,
  };
};
