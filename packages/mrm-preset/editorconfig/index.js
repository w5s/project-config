const { readFileSync } = require('node:fs');
const { blockSync } = require('@w5s/dev');
const { vscodeRecommendedExtension } = require('../core/vscode.js');

function task() {
  const templateContent = readFileSync(require.resolve('./_editorconfig'), 'utf8');

  blockSync({
    block: templateContent,
    path: '.editorconfig',
    insertPosition: ['after', 'EndOfFile'],
  });

  vscodeRecommendedExtension({
    name: 'editorconfig.editorconfig',
    state: 'present',
  });
}

task.description = 'Adds EditorConfig file';

module.exports = task;
