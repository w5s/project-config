import { Project } from '@w5s/dev';

export const sourceGlob = Project.extensionsToGlob(Project.sourceExtensions(), { nested: true });

export const esSourceGlob = Project.extensionsToGlob(Project.queryExtensions(['javascript', 'javascriptreact']), { nested: true });

export const jsxSourceGlob = Project.extensionsToGlob(Project.queryExtensions(['javascriptreact', 'typescriptreact']), { nested: true });

export const jsonSourceGlob = Project.extensionsToGlob(['.json', '.json5', '.jsonc'], { nested: true });

export const tsSourceGlob = Project.extensionsToGlob(Project.queryExtensions(['typescript', 'typescriptreact']), { nested: true });

export const ymlSourceGlob = Project.extensionsToGlob(Project.queryExtensions(['yaml']), { nested: true });
