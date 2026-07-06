import { readFileSync } from 'node:fs';
import nodePath from 'node:path';
import { fileURLToPath } from 'node:url';

import { type Commit, CommitConventionalType } from './data.js';
import { type CommitTransformFunction, createTransform } from './transform.js';

export interface WriterOptions {
  commitGroupsSort?: false | readonly string[] | string | undefined;
  commitPartial?: string | undefined;
  commitsSort?: false | readonly string[] | string | undefined;
  footerPartial?: string | undefined;
  groupBy?: false | string | undefined;
  headerPartial?: string | undefined;
  mainTemplate?: string | undefined;
  noteGroupsSort?: false | readonly string[] | string | undefined;
  transform?: CommitTransformFunction<Commit> | undefined;
}

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
    commitGroupsSort: 'title',
    // eslint-disable-next-line unicorn/prefer-string-replace-all
    commitPartial: commitPartial.replace(/{{gitUserInfo}}/g, author),
    // @ts-ignore FIXME: unknown error
    commitsSort: ['scope', 'subject'],
    footerPartial,
    groupBy: 'type',
    headerPartial,
    mainTemplate,
    noteGroupsSort: 'title',
    transform: createTransform({
      displayTypes: defaultDisplayTypes,
    }),
  };
};
