export interface LanguageIdMap {
  css: true;
  graphql: true;
  javascript: true;
  javascriptreact: true;
  jpeg: true;
  json: true;
  jsonc: true;
  less: true;
  markdown: true;
  sass: true;
  scss: true;
  typescript: true;
  typescriptreact: true;
  vue: true;
  yaml: true;
}

/**
 * A list of "vscode-like" language identifiers (i.e. "javascript", "javascriptreact")
 */
export type LanguageId = keyof LanguageIdMap;
