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

export { index_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map