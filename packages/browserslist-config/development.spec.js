const browserslist = require('browserslist');
const config = require('./development.js');

describe('browserlist latest config', () => {
  it('should not resolve to empty list', () => {
    const browsers = browserslist(config);
    expect(browsers).not.toHaveLength(0);
  });

  it('should contain minimalist configuration', () => {
    const browsers = browserslist(config);
    expect(Array.from(new Set(browsers.map((_) => _.split(' ')[0])))).toEqual(['chrome', 'firefox', 'safari']);
  });
});
