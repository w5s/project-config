import type { Linter } from 'eslint';

// Extracted from airbnb base but not used at the moment
export const esStylistic = () => ({
  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  // TODO: enable requireReturnForObjectLiteral?
  'arrow-body-style': ['error', 'as-needed', {
    requireReturnForObjectLiteral: false,
  }],

  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  'arrow-parens': ['error', 'always'],

  // require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': ['error', { after: true, before: true }],

  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  'generator-star-spacing': ['error', { after: true, before: false }],

  // disallow unnecessary parentheses (stylistic)
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': ['off', 'all', {
    conditionalAssign: true,
    enforceForArrowConditionals: false,
    ignoreJSX: 'all', // delegate to eslint-plugin-react
    nestedBinaryExpressions: false,
    returnAssign: false,
  }],

  // disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': ['error', {
    ignoreEOLComments: false,
  }],

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': ['error', 'always', {
    avoidQuotes: true,
    ignoreConstructors: false,
  }],

  // suggest using arrow functions as callbacks
  'prefer-arrow-callback': ['error', {
    allowNamedFunctions: false,
    allowUnboundThis: true,
  }],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': ['error', {
    AssignmentExpression: {
      array: true,
      object: false,
    },
    VariableDeclarator: {
      array: false,
      object: true,
    },
  }, {
    enforceForRenamedProperties: false,
  }],

  // enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  'rest-spread-spacing': ['error', 'never'],

  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': ['off', {
    ignoreCase: false,
    ignoreDeclarationSort: false,
    ignoreMemberSort: false,
    memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
  }],

  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': 'error',

  // Unicode BOM handling
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],

  // enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],
} satisfies Linter.RulesRecord);

export default esStylistic;
