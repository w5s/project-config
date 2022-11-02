const browserslist = require('browserslist');
const config = require('./default.js');

describe('browserlist default config', () => {
  it('should not resolve to empty list', () => {
    const browsers = browserslist(config);
    expect(browsers).not.toHaveLength(0);
  });
  it('should contain chrome', () => {
    const browsers = browserslist(config);
    expect(browsers.filter((_) => _.startsWith('chrome '))).not.toHaveLength(0);
  });
  it('should contain firefox', () => {
    const browsers = browserslist(config);
    expect(browsers.filter((_) => _.startsWith('firefox '))).not.toHaveLength(0);
  });
  it('should contain ios safari', () => {
    const browsers = browserslist(config);
    expect(browsers.filter((_) => _.startsWith('ios_saf '))).not.toHaveLength(0);
  });
});
