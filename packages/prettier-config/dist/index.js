// src/index.ts
var prettierConfig = {
  singleQuote: true,
  trailingCommas: "always",
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

export { src_default as default };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map