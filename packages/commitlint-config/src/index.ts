const config = {
  extends: ['@commitlint/config-conventional'],
};
// FIXME: this is a workaround for commonjs loading
module.exports = config;

export default config;
