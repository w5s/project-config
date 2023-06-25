"use strict";
const prettierConfig = {
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
module.exports = prettierConfig;
//# sourceMappingURL=index.cjs.map
