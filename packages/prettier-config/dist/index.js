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
export {
  prettierConfig as default
};
//# sourceMappingURL=index.js.map
