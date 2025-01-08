'use strict';

// src/index.ts
var prettierConfig = {
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: ["*.css", "*.scss"],
      options: {
        trailingComma: "none"
      }
    }
  ]
};
var index_default = prettierConfig;

module.exports = index_default;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map