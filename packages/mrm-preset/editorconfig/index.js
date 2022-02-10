const { ini } = require('mrm-core');
const createDebug = require('debug');
const { vscodeRecommendedExtension } = require('../core/vscode');

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

    vscodeRecommendedExtension(['editorconfig.editorconfig']);
  }

  task.description = 'Adds EditorConfig file';

  return task;
}

module.exports = createEditorConfig({
  '*': {
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
  '*.json': {
    indent_size: 2,
    indent_style: 'space',
    insert_final_newline: 'ignore',
  },
  '*.yml': {
    indent_size: 2,
    indent_style: 'space',
  },
  '*.{bat,reg,ps1,vbs,cs,,fs,ahk}': {
    end_of_line: 'crlf',
  },
  '*.{css,scss,less}': {
    indent_size: 2,
    indent_style: 'space',
    max_line_length: 120,
    quote_type: 'single',
  },
  '*.{js,jsx,ts,tsx,js.hbs}': {
    indent_size: 2,
    indent_style: 'space',
    max_line_length: 120,
    quote_type: 'single',
  },
  '*.{md,mdwn,mdown,markdown,apib}': {
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
