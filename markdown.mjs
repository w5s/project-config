// import path from 'node:path';
import markdownMagicModule from 'markdown-magic';
import markdownPackageJSONModule from 'markdown-magic-package-json';
import markdownListModule from 'markdown-magic-subpackage-list';

const markdownMagic = markdownMagicModule.default ?? markdownMagicModule;
const markdownPackageJSON = markdownPackageJSONModule.default ?? markdownPackageJSONModule;
const markdownList = markdownListModule.default ?? markdownListModule;
const runMarkdownMagic = markdownMagic.markdownMagic ?? markdownMagic;

// const markdownPath = path.join(__dirname, 'README.md');
runMarkdownMagic(['**/*.md', '!node_modules/**', '!packages/**'], {
  transforms: {
    PKG_JSON: markdownPackageJSON,
    SUBPACKAGE_LIST: markdownList,
  },
});
