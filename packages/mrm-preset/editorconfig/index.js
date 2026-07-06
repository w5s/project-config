const { blockSync } = require('@w5s/configurator-core');
const { readFileSync } = require('node:fs');

const { vscodeRecommendedExtension } = require('../core/vscode.js');

function task() {
  const templateContent = readFileSync(require.resolve('./_editorconfig'), 'utf8').slice(0, -1);

  blockSync({
    block: templateContent,
    insertPosition: ['before', 'BeginningOfFile'],
    path: '.editorconfig',
  });

  vscodeRecommendedExtension({
    name: 'editorconfig.editorconfig',
    state: 'present',
  });
}

task.description = 'Adds EditorConfig file';

module.exports = task;
