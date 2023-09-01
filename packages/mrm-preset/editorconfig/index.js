const { readFileSync } = require('node:fs');

const { vscodeRecommendedExtension } = require('../core/vscode.js');
const block = require('../core/block.js');

function task() {
  const templateContent = readFileSync(require.resolve('./_editorconfig'), 'utf8');

  block({
    block: templateContent,
    path: '.editorconfig',
  });

  vscodeRecommendedExtension({
    name: 'editorconfig.editorconfig',
    state: 'present',
  });
}

task.description = 'Adds EditorConfig file';

module.exports = task;
