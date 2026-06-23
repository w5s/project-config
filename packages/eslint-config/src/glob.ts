import { Project } from '@w5s/dev';

export const sourceGlob = `**/${Project.extensionsToGlob(Project.sourceExtensions())}`;

export const esSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(['javascript', 'javascriptreact']))}`;

export const jsonSourceGlob = `**/${Project.extensionsToGlob(['.json', '.json5', '.jsonc'])}`;

export const tsSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(['typescript', 'typescriptreact']))}`;

export const ymlSourceGlob = `**/${Project.extensionsToGlob(Project.queryExtensions(['yaml']))}`;
