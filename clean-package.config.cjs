const cleanPackageConfig = {
  extends: ['clean-package/common'],
  indent: 2,
  remove: ['commitlint', 'devDependencies', 'packageManager', 'stylelint'],
};

module.exports = cleanPackageConfig;
