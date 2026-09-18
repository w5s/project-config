import { Project } from '@w5s/dev';

export const sourceGlob = Project.glob({ fileExtensions: [Project.sourceExtensions()], nested: true });

export const esSourceGlob = Project.glob({ fileExtensions: [Project.queryExtensions(['javascript', 'javascriptreact'])], nested: true });

export const jsxSourceGlob = Project.glob({ fileExtensions: [Project.queryExtensions(['javascriptreact', 'typescriptreact'])], nested: true });

export const jsonSourceGlob = Project.glob({ fileExtensions: [['.json', '.json5', '.jsonc']], nested: true });

export const tsSourceGlob = Project.glob({ fileExtensions: [Project.queryExtensions(['typescript', 'typescriptreact'])], nested: true });

export const ymlSourceGlob = Project.glob({ fileExtensions: [Project.queryExtensions(['yaml'])], nested: true });
