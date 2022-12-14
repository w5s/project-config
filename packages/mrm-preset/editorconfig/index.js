const { ini } = require('mrm-core');
const createDebug = require('debug');
const { vscodeRecommendedExtension } = require('../core/vscode.js');

/**
 *
 * @param {Record<string, Partial<{
 *   charset: string,
 *   continuation_indent_size: number,
 *   curly_bracket_next_line: boolean,
 *   end_of_line: 'lf'|'crlf',
 *   indent_brace_style: 'Stroustrup',
 *   indent_size: number,
 *   indent_style: 'tab'|'space',
 *   insert_final_newline: boolean|'ignore',
 *   max_line_length: number,
 *   quote_type: 'single'|'double',
 *   root: boolean,
 *   spaces_around_brackets: 'outside',
 *   spaces_around_operators: boolean,
 *   trim_trailing_whitespace: boolean,
 * }>>} defaults
 */
function createEditorConfig(defaults) {
  const debug = createDebug('mrm-editorconfig');

  /**
   * @param {string} section
   * @param {defaults} existing
   */
  function mergeSection(section, existing = {}) {
    return Object.assign(existing, defaults[section] || {});
  }

  function task() {
    const editorConfigFile = ini('.editorconfig', 'http://editorconfig.org');

    Object.keys(defaults).forEach((name) => {
      const values = mergeSection(name, editorConfigFile.get(name));
      debug('section %s: %o', name, values);
      editorConfigFile.set(name, values);
    });

    editorConfigFile.save();

    vscodeRecommendedExtension({
      name: 'editorconfig.editorconfig',
      state: 'present',
    });
  }

  task.description = 'Adds EditorConfig file';

  return task;
}

module.exports = createEditorConfig({
  '*': {
    // eslint-disable-next-line unicorn/text-encoding-identifier-case
    charset: 'utf-8',
    continuation_indent_size: 4,
    curly_bracket_next_line: false,
    end_of_line: 'lf',
    indent_brace_style: 'Stroustrup',
    indent_size: 2,
    indent_style: 'space',
    insert_final_newline: true,
    spaces_around_brackets: 'outside',
    spaces_around_operators: true,
    trim_trailing_whitespace: true,
  },
  '*.{json,json5,webmanifest}': {
    indent_size: 2,
    indent_style: 'space',
    insert_final_newline: 'ignore',
  },
  '*.{yml,yaml}': {
    indent_size: 2,
    indent_style: 'space',
  },
  '*.{bat,reg,ps1,vbs,cs,cmd,fs,ahk}': {
    end_of_line: 'crlf',
  },
  '*.{sh,zsh}': {
    end_of_line: 'lf',
  },
  '*.{css,sass,scss,less,pcss}': {
    indent_size: 2,
    indent_style: 'space',
    max_line_length: 120,
    quote_type: 'single',
  },
  '*.{js,jsx,jsm,ts,tsx,cjs,cjs,cjsx,cts,ctsx,mjs,mts,mtsx,js.hbs}': {
    indent_size: 2,
    indent_style: 'space',
    max_line_length: 120,
    quote_type: 'single',
  },
  '*.{htm,html,svg,vue}': {
    indent_size: 2,
    indent_style: 'space',
  },
  '*.{md,mdwn,mdown,markdown,mdx,apib}': {
    indent_size: 4,
    indent_style: 'space',
    insert_final_newline: true,
    trim_trailing_whitespace: false,
  },
  '*.{py,robot}': {
    indent_size: 4,
    indent_style: 'space',
  },
  Makefile: {
    indent_style: 'tab',
  },
  _global: {
    root: true,
  },
});
