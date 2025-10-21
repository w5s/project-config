export default {
  rules: {
    // '@typescript-eslint/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'off',
  },
  languageOptions: {
    globals: {
      context: 'readonly',
      describe: 'readonly',
      expect: 'readonly',
      it: 'readonly',
      test: 'readonly',
    },
  },
};
