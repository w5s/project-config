'use strict';

// src/index.ts
var prettierConfig = {
  singleQuote: true,
  trailingComma: "es5",
  overrides: [
    {
      files: ["*.css", "*.scss"],
      options: {
        trailingComma: "none"
      }
    }
  ]
};
var src_default = prettierConfig;

module.exports = src_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map