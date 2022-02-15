const { off, warn, error } = require('./_rule');

module.exports = {
  env: {
    es6: true,
  },
  extends: [require.resolve('./node')], // TODO: remove that extends and provide a standalone configuration
  plugins: [],
  rules: {
    'accessor-pairs': error,
    'array-bracket-newline': off,
    'array-bracket-spacing': [error, 'never'],
    'array-callback-return': error,
    'array-element-newline': off,
    'arrow-body-style': [error, 'always'],
    'arrow-parens': [error, 'always'],
    'arrow-spacing': [error, { after: true, before: true }],
    'block-scoped-var': error,
    'block-spacing': [error, 'always'],
    'brace-style': [error, '1tbs', { allowSingleLine: false }],
    camelcase: off,
    'capitalized-comments': off,
    'class-methods-use-this': off,
    'comma-dangle': [error, 'always-multiline'],
    'comma-spacing': [error, { after: true, before: false }],
    'comma-style': [error, 'last'],
    complexity: [error, 20],
    'computed-property-spacing': [error, 'never'],
    'consistent-return': error,
    'consistent-this': [error, 'self'],
    'constructor-super': error,
    curly: error,
    'default-case': [error, { commentPattern: '^no default$' }], // require default case in switch statements or ignore by adding `//no default`
    'dot-location': [error, 'property'],
    'dot-notation': error,
    'eol-last': error,
    eqeqeq: [error, 'smart'],
    'for-direction': error,
    'func-call-spacing': [error, 'never'],
    'func-name-matching': error,
    'func-names': off,
    'func-style': off,
    'function-paren-newline': [error, 'consistent'],
    'generator-star-spacing': [error, { after: false, before: true }],
    'getter-return': [error, { allowImplicit: true }],
    'guard-for-in': error,
    'id-length': [error, { exceptions: ['t', '$', '_', 'x', 'y', 'z'], max: 50, min: 2, properties: 'never' }],
    'id-match': off,
    'implicit-arrow-linebreak': [error, 'beside'],
    indent: [error, 2],
    'init-declarations': off,
    'jsx-quotes': [error, 'prefer-double'],
    'key-spacing': [
      error,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    'keyword-spacing': [
      error,
      {
        after: true,
        before: true,
      },
    ],
    'line-comment-position': 0,
    'linebreak-style': [error, 'unix'],
    'lines-around-comment': [
      error,
      {
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    'lines-around-directive': [error, 'always'],
    'lines-between-class-members': [error, 'always', { exceptAfterSingleLine: true }],
    'max-len': [
      warn,
      {
        code: 160,
      },
    ],
    'max-nested-callbacks': [warn, { max: 5 }],
    'max-statements-per-line': [
      error,
      {
        max: 1,
      },
    ],
    'multiline-comment-style': off,
    'multiline-ternary': off,
    'new-cap': [
      off,
      {
        capIsNew: false,
        newIsCap: true,
      },
    ],
    'new-parens': error,
    'newline-after-var': off,
    'newline-before-return': error,
    'newline-per-chained-call': off,
    'no-alert': error,
    'no-array-constructor': error,
    'no-async-promise-executor': error,
    'no-await-in-loop': error,
    'no-caller': error,
    'no-case-declarations': error,
    'no-catch-shadow': error,
    'no-class-assign': error,
    'no-compare-neg-zero': error,
    'no-cond-assign': error,
    'no-confusing-arrow': error,
    'no-console': error,
    'no-const-assign': error,
    'no-constant-condition': warn,
    'no-continue': off,
    'no-control-regex': error,
    'no-debugger': error,
    'no-delete-var': error,
    'no-div-regex': error,
    'no-dupe-args': error,
    'no-dupe-class-members': error,
    'no-dupe-else-if': error,
    'no-dupe-keys': error,
    'no-duplicate-case': error,
    'no-duplicate-imports': off,
    'no-else-return': [error, { allowElseIf: false }],
    'no-empty': error,
    'no-empty-character-class': error,
    'no-empty-function': [error, { allow: ['arrowFunctions', 'functions', 'methods'] }],
    'no-empty-pattern': error,
    'no-eq-null': off,
    'no-eval': error,
    'no-ex-assign': error,
    'no-extend-native': error,
    'no-extra-bind': error,
    'no-extra-boolean-cast': error,
    'no-extra-parens': error,
    'no-extra-semi': error,
    'no-fallthrough': error,
    'no-floating-decimal': error,
    'no-func-assign': error,
    'no-global-assign': error,
    'no-implicit-coercion': error,
    'no-implicit-globals': off,
    'no-implied-eval': error,
    'no-import-assign': error,
    'no-inline-comments': off,
    'no-inner-declarations': error,
    'no-invalid-regexp': error,
    'no-invalid-this': off,
    'no-irregular-whitespace': error,
    'no-iterator': error,
    'no-label-var': error,
    'no-labels': error,
    'no-lone-blocks': error,
    'no-lonely-if': error,
    'no-loop-func': error,
    'no-loss-of-precision': error,
    'no-magic-numbers': off,
    'no-misleading-character-class': error,
    'no-mixed-spaces-and-tabs': error,
    'no-multi-spaces': [
      error,
      {
        ignoreEOLComments: false,
      },
    ],
    'no-multi-str': error,
    'no-multiple-empty-lines': [
      error,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 1,
      },
    ],
    'no-native-reassign': error,
    'no-negated-condition': off,
    'no-negated-in-lhs': error,
    'no-nested-ternary': off,
    'no-new': error,
    'no-new-func': error,
    'no-new-object': error,
    'no-new-require': error,
    'no-new-symbol': error,
    'no-new-wrappers': error,
    'no-obj-calls': error,
    'no-octal': error,
    'no-octal-escape': error,
    'no-param-reassign': [
      error,
      {
        props: false,
      },
    ],
    'no-plusplus': error,
    'no-promise-executor-return': error,
    'no-proto': error,
    'no-prototype-builtins': error,
    'no-redeclare': [
      error,
      {
        builtinGlobals: true,
      },
    ],
    'no-regex-spaces': error,
    'no-restricted-globals': off,
    'no-restricted-properties': [
      error,
      {
        message: 'arguments.callee is deprecated',
        object: 'arguments',
        property: 'callee',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'global',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'self',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isFinite instead',
        object: 'window',
        property: 'isFinite',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'global',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'self',
        property: 'isNaN',
      },
      {
        message: 'Please use Number.isNaN instead',
        object: 'window',
        property: 'isNaN',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineGetter__',
      },
      {
        message: 'Please use Object.defineProperty instead.',
        property: '__defineSetter__',
      },
      {
        message: 'Use the exponentiation operator (**) instead.',
        object: 'Math',
        property: 'pow',
      },
    ],
    'no-restricted-syntax': [
      error,
      {
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        selector: 'ForInStatement',
      },
      {
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        selector: 'LabeledStatement',
      },
      {
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        selector: 'WithStatement',
      },
    ],
    'no-return-assign': error,
    'no-return-await': error,
    'no-script-url': error,
    'no-self-assign': error,
    'no-self-compare': error,
    'no-sequences': error,
    'no-setter-return': error,
    'no-shadow': [
      error,
      {
        builtinGlobals: false,
        hoist: 'all',
      },
    ],
    'no-shadow-restricted-names': error,
    'no-spaced-func': error,
    'no-sparse-arrays': error,
    'no-sync': off,
    'no-tabs': error,
    'no-template-curly-in-string': error,
    'no-ternary': off,
    'no-this-before-super': error,
    'no-throw-literal': error,
    'no-trailing-spaces': error,
    'no-undef': error,
    'no-undef-init': error,
    'no-undefined': off,
    'no-underscore-dangle': off,
    'no-unexpected-multiline': error,
    'no-unmodified-loop-condition': error,
    'no-unneeded-ternary': off, // error,
    'no-unreachable': error,
    'no-unreachable-loop': error,
    'no-unsafe-finally': error,
    'no-unsafe-negation': error,
    'no-unsafe-optional-chaining': [error, { disallowArithmeticOperators: true }],
    'no-unused-expressions': [
      error,
      {
        allowShortCircuit: false,
        allowTaggedTemplates: true,
        allowTernary: false,
      },
    ],
    'no-unused-vars': [
      error,
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      error,
      {
        classes: false,
        functions: false,
        variables: false,
      },
    ],
    'no-useless-backreference': error,
    'no-useless-call': error,
    'no-useless-catch': error,
    'no-useless-computed-key': error,
    'no-useless-concat': error,
    'no-useless-constructor': error,
    'no-useless-escape': error,
    'no-useless-rename': [
      error,
      {
        ignoreDestructuring: false,
        ignoreExport: false,
        ignoreImport: false,
      },
    ],
    'no-useless-return': error,
    'no-var': error,
    'no-void': error,
    'no-warning-comments': [
      off,
      {
        location: 'start',
        terms: ['todo', '@todo'],
      },
    ],
    'no-whitespace-before-property': error,
    'no-with': error,
    'nonblock-statement-body-position': [error, 'below'],
    'object-curly-spacing': [off, 'never'],
    'object-property-newline': [
      error,
      {
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'object-shorthand': [error, 'always'],
    'one-var': [error, 'never'],
    'one-var-declaration-per-line': error,
    'operator-assignment': [error, 'always'],
    'operator-linebreak': [error, 'after'],
    'padded-blocks': [error, 'never'],
    'padding-line-between-statements': off,
    'prefer-arrow-callback': [
      error,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': error,
    'prefer-destructuring': off,
    'prefer-named-capture-group': off,
    'prefer-numeric-literals': error,
    'prefer-promise-reject-errors': error,
    'prefer-reflect': off,
    'prefer-rest-params': error,
    'prefer-spread': error,
    'prefer-template': error,
    'quote-props': [error, 'as-needed'],
    quotes: [error, 'single'],
    radix: error,
    'require-await': off, // https://github.com/airbnb/javascript/issues/2013
    'require-jsdoc': off,
    'require-yield': error,
    semi: [error, 'always'],
    'semi-spacing': [
      error,
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': [error, 'last'],
    'sort-keys': off /* [
      error,
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ], */,
    'sort-vars': error,
    'space-before-blocks': [error, 'always'],
    'space-before-function-paren': [error, 'always'],
    'space-in-parens': [error, 'never'],
    'space-infix-ops': error,
    'space-unary-ops': [
      error,
      {
        nonwords: false,
        words: true,
      },
    ],
    'spaced-comment': [
      error,
      'always',
      {
        block: {
          balanced: true,
          exceptions: ['*'],
          markers: ['*package', '!', ',', ':', '::', 'flow-include'],
        },
        line: {
          markers: ['*package', '!', '/', ',', '='],
        },
      },
    ],
    strict: [error, 'never'],
    'switch-colon-spacing': [
      error,
      {
        after: true,
        before: false,
      },
    ],
    'symbol-description': error,
    'template-tag-spacing': [error, 'never'],
    'unicode-bom': [error, 'never'],
    'use-isnan': error,
    'valid-jsdoc': off,
    'valid-typeof': [error, { requireStringLiterals: true }],
    'vars-on-top': error,
    'wrap-iife': [error, 'inside'],
    'wrap-regex': off,
    yoda: off,
  },
};
