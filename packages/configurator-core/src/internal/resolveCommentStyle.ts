import nodePath from 'node:path';

export type ResolvedCommentStyle = '#' | '/*' | '//' | '<!--';

/* cspell:ignore containerfile */
const HASH_BASENAMES = new Set(['containerfile', 'dockerfile', 'gemfile', 'makefile']);

const HTML_EXTENSIONS = new Set(['htm', 'html', 'md', 'mdx', 'svg', 'xml']);
const LINE_EXTENSIONS = new Set([
  'c',
  'cjs',
  'cpp',
  'cs',
  'cts',
  'go',
  'h',
  'java',
  'js',
  'jsx',
  'kt',
  'mjs',
  'mts',
  'rs',
  'swift',
  'ts',
  'tsx',
]);
const BLOCK_EXTENSIONS = new Set(['css', 'less', 'sass', 'scss']);

/**
 * Resolve comment style from the file path when `commentStyle` is `'auto'`.
 *
 * @param path File path used to infer the comment style.
 */
export function resolveCommentStyle(path: string): ResolvedCommentStyle {
  const basename = nodePath.basename(path);
  const basenameLower = basename.toLowerCase();

  if (basename.startsWith('.') || HASH_BASENAMES.has(basenameLower)) {
    return '#';
  }

  const extension = nodePath.extname(basename).slice(1).toLowerCase();
  if (HTML_EXTENSIONS.has(extension)) {
    return '<!--';
  }
  if (LINE_EXTENSIONS.has(extension)) {
    return '//';
  }
  if (BLOCK_EXTENSIONS.has(extension)) {
    return '/*';
  }

  // py, rb, sh, toml, yaml, yml, json, no extension, and unknown → #
  return '#';
}
