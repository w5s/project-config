module.exports = {
  plugins: ['json-format'],
  settings: {
    'json/ignore-files': ['**/package-lock.json'],
    'json/json-with-comments-files': ['**/tsconfig.json', '.vscode/**'],
    'json/sort-package-json': 'standard',
  },
};
