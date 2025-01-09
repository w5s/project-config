import * as eslint from 'eslint';
import { Linter } from 'eslint';
import * as eslint_plugin_jsonc from 'eslint-plugin-jsonc';
import * as eslint_plugin_jsonc_types from 'eslint-plugin-jsonc/types';
import * as jsonc_eslint_parser from 'jsonc-eslint-parser';
import * as eslint_plugin_jsonc_meta from 'eslint-plugin-jsonc/meta';

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$1 {}
  }
}

interface RuleOptions$1 {
  /**
   * enforce line breaks after opening and before closing array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
   */
  'jsonc/array-bracket-newline'?: Linter.RuleEntry<JsoncArrayBracketNewline>
  /**
   * disallow or enforce spaces inside of brackets
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
   */
  'jsonc/array-bracket-spacing'?: Linter.RuleEntry<JsoncArrayBracketSpacing>
  /**
   * enforce line breaks between array elements
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
   */
  'jsonc/array-element-newline'?: Linter.RuleEntry<JsoncArrayElementNewline>
  /**
   * apply jsonc rules similar to your configured ESLint core rules
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html
   */
  'jsonc/auto'?: Linter.RuleEntry<[]>
  /**
   * require or disallow trailing commas
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html
   */
  'jsonc/comma-dangle'?: Linter.RuleEntry<JsoncCommaDangle>
  /**
   * enforce consistent comma style
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
   */
  'jsonc/comma-style'?: Linter.RuleEntry<JsoncCommaStyle>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
   */
  'jsonc/indent'?: Linter.RuleEntry<JsoncIndent>
  /**
   * enforce naming convention to property key names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html
   */
  'jsonc/key-name-casing'?: Linter.RuleEntry<JsoncKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in object literal properties
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
   */
  'jsonc/key-spacing'?: Linter.RuleEntry<JsoncKeySpacing>
  /**
   * disallow BigInt literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html
   */
  'jsonc/no-bigint-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow binary expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html
   */
  'jsonc/no-binary-expression'?: Linter.RuleEntry<[]>
  /**
   * disallow binary numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html
   */
  'jsonc/no-binary-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow comments
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html
   */
  'jsonc/no-comments'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate keys in object literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html
   */
  'jsonc/no-dupe-keys'?: Linter.RuleEntry<[]>
  /**
   * disallow escape sequences in identifiers.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html
   */
  'jsonc/no-escape-sequence-in-identifier'?: Linter.RuleEntry<[]>
  /**
   * disallow leading or trailing decimal points in numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html
   */
  'jsonc/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * disallow hexadecimal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html
   */
  'jsonc/no-hexadecimal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow Infinity
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html
   */
  'jsonc/no-infinity'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html
   */
  'jsonc/no-irregular-whitespace'?: Linter.RuleEntry<JsoncNoIrregularWhitespace>
  /**
   * disallow multiline strings
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html
   */
  'jsonc/no-multi-str'?: Linter.RuleEntry<[]>
  /**
   * disallow NaN
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html
   */
  'jsonc/no-nan'?: Linter.RuleEntry<[]>
  /**
   * disallow number property keys
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html
   */
  'jsonc/no-number-props'?: Linter.RuleEntry<[]>
  /**
   * disallow numeric separators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html
   */
  'jsonc/no-numeric-separators'?: Linter.RuleEntry<[]>
  /**
   * disallow legacy octal literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html
   */
  'jsonc/no-octal'?: Linter.RuleEntry<[]>
  /**
   * disallow octal escape sequences in string literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
   */
  'jsonc/no-octal-escape'?: Linter.RuleEntry<[]>
  /**
   * disallow octal numeric literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html
   */
  'jsonc/no-octal-numeric-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow parentheses around the expression
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html
   */
  'jsonc/no-parenthesized'?: Linter.RuleEntry<[]>
  /**
   * disallow plus sign
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html
   */
  'jsonc/no-plus-sign'?: Linter.RuleEntry<[]>
  /**
   * disallow RegExp literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html
   */
  'jsonc/no-regexp-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow sparse arrays
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html
   */
  'jsonc/no-sparse-arrays'?: Linter.RuleEntry<[]>
  /**
   * disallow template literals
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html
   */
  'jsonc/no-template-literals'?: Linter.RuleEntry<[]>
  /**
   * disallow `undefined`
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html
   */
  'jsonc/no-undefined-value'?: Linter.RuleEntry<[]>
  /**
   * disallow Unicode code point escape sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html
   */
  'jsonc/no-unicode-codepoint-escapes'?: Linter.RuleEntry<[]>
  /**
   * disallow unnecessary escape usage
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html
   */
  'jsonc/no-useless-escape'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
   */
  'jsonc/object-curly-newline'?: Linter.RuleEntry<JsoncObjectCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
   */
  'jsonc/object-curly-spacing'?: Linter.RuleEntry<JsoncObjectCurlySpacing>
  /**
   * enforce placing object properties on separate lines
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
   */
  'jsonc/object-property-newline'?: Linter.RuleEntry<JsoncObjectPropertyNewline>
  /**
   * require quotes around object literal property names
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html
   */
  'jsonc/quote-props'?: Linter.RuleEntry<JsoncQuoteProps>
  /**
   * enforce use of double or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html
   */
  'jsonc/quotes'?: Linter.RuleEntry<JsoncQuotes>
  /**
   * require array values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html
   */
  'jsonc/sort-array-values'?: Linter.RuleEntry<JsoncSortArrayValues>
  /**
   * require object keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
   */
  'jsonc/sort-keys'?: Linter.RuleEntry<JsoncSortKeys>
  /**
   * disallow spaces after unary operators
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html
   */
  'jsonc/space-unary-ops'?: Linter.RuleEntry<JsoncSpaceUnaryOps>
  /**
   * disallow invalid number for JSON
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html
   */
  'jsonc/valid-json-number'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html
   */
  'jsonc/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- jsonc/array-bracket-newline -----
type JsoncArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- jsonc/array-bracket-spacing -----
type JsoncArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- jsonc/array-element-newline -----
type JsoncArrayElementNewline = []|[(_JsoncArrayElementNewlineBasicConfig | {
  ArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  JSONArrayExpression?: _JsoncArrayElementNewlineBasicConfig
  ArrayPattern?: _JsoncArrayElementNewlineBasicConfig
})]
type _JsoncArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- jsonc/comma-dangle -----
type JsoncCommaDangle = []|[(_JsoncCommaDangleValue | {
  arrays?: _JsoncCommaDangleValueWithIgnore
  objects?: _JsoncCommaDangleValueWithIgnore
  imports?: _JsoncCommaDangleValueWithIgnore
  exports?: _JsoncCommaDangleValueWithIgnore
  functions?: _JsoncCommaDangleValueWithIgnore
})]
type _JsoncCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _JsoncCommaDangleValueWithIgnore = ("always-multiline" | "always" | "ignore" | "never" | "only-multiline")
// ----- jsonc/comma-style -----
type JsoncCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- jsonc/indent -----
type JsoncIndent = []|[("tab" | number)]|[("tab" | number), {
  SwitchCase?: number
  VariableDeclarator?: ((number | ("first" | "off")) | {
    var?: (number | ("first" | "off"))
    let?: (number | ("first" | "off"))
    const?: (number | ("first" | "off"))
  })
  outerIIFEBody?: (number | "off")
  MemberExpression?: (number | "off")
  FunctionDeclaration?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  FunctionExpression?: {
    parameters?: (number | ("first" | "off"))
    body?: number
  }
  StaticBlock?: {
    body?: number
  }
  CallExpression?: {
    arguments?: (number | ("first" | "off"))
  }
  ArrayExpression?: (number | ("first" | "off"))
  ObjectExpression?: (number | ("first" | "off"))
  ImportDeclaration?: (number | ("first" | "off"))
  flatTernaryExpressions?: boolean
  offsetTernaryExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
}]
// ----- jsonc/key-name-casing -----
type JsoncKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]
// ----- jsonc/key-spacing -----
type JsoncKeySpacing = []|[({
  align?: (("colon" | "value") | {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeColon?: boolean
  afterColon?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    align?: (("colon" | "value") | {
      mode?: ("strict" | "minimum")
      on?: ("colon" | "value")
      beforeColon?: boolean
      afterColon?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
  align?: {
    mode?: ("strict" | "minimum")
    on?: ("colon" | "value")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- jsonc/no-irregular-whitespace -----
type JsoncNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipStrings?: boolean
  skipTemplates?: boolean
  skipRegExps?: boolean
  skipJSXText?: boolean
}]
// ----- jsonc/object-curly-newline -----
type JsoncObjectCurlyNewline = []|[((("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
}) | {
  ObjectExpression?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ObjectPattern?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ImportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  ExportDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- jsonc/object-curly-spacing -----
type JsoncObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- jsonc/object-property-newline -----
type JsoncObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- jsonc/quote-props -----
type JsoncQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- jsonc/quotes -----
type JsoncQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
})]
// ----- jsonc/sort-array-values -----
type JsoncSortArrayValues = [{
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
}, ...({
  pathPattern: string
  order: ((string | {
    valuePattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minValues?: number
})[]]
// ----- jsonc/sort-keys -----
type JsoncSortKeys = ([{
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}, ...({
  pathPattern: string
  hasProperties?: string[]
  order: ((string | {
    keyPattern?: string
    order?: {
      type?: ("asc" | "desc")
      caseSensitive?: boolean
      natural?: boolean
    }
  })[] | {
    type?: ("asc" | "desc")
    caseSensitive?: boolean
    natural?: boolean
  })
  minKeys?: number
  allowLineSeparatedGroups?: boolean
})[]] | []|[("asc" | "desc")]|[("asc" | "desc"), {
  caseSensitive?: boolean
  natural?: boolean
  minKeys?: number
  allowLineSeparatedGroups?: boolean
}])
// ----- jsonc/space-unary-ops -----
type JsoncSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]

interface Config extends Omit<Linter.Config<Linter.RulesRecord>, 'plugins'> {
    plugins?: Record<string, any>;
}

declare function jsonc(options?: jsonc.Options): Promise<[{
    readonly name: "w5s/jsonc/setup";
    readonly plugins: {
        readonly jsonc: {
            meta: typeof eslint_plugin_jsonc_meta;
            configs: {
                base: {
                    plugins: string[];
                    overrides: {
                        files: string[];
                        parser: string;
                        rules: {
                            strict: string;
                            "no-unused-expressions": string;
                            "no-unused-vars": string;
                        };
                    }[];
                };
                "auto-config": {
                    extends: string[];
                    rules: {
                        "jsonc/auto": string;
                    };
                };
                "recommended-with-json": {
                    extends: string[];
                    rules: {
                        "jsonc/comma-dangle": string;
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-comments": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                "recommended-with-jsonc": {
                    extends: string[];
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/no-hexadecimal-numeric-literals": string;
                        "jsonc/no-infinity": string;
                        "jsonc/no-multi-str": string;
                        "jsonc/no-nan": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-plus-sign": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/valid-json-number": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                "recommended-with-json5": {
                    extends: string[];
                    rules: {
                        "jsonc/no-bigint-literals": string;
                        "jsonc/no-binary-expression": string;
                        "jsonc/no-binary-numeric-literals": string;
                        "jsonc/no-dupe-keys": string;
                        "jsonc/no-escape-sequence-in-identifier": string;
                        "jsonc/no-number-props": string;
                        "jsonc/no-numeric-separators": string;
                        "jsonc/no-octal-numeric-literals": string;
                        "jsonc/no-octal": string;
                        "jsonc/no-parenthesized": string;
                        "jsonc/no-regexp-literals": string;
                        "jsonc/no-sparse-arrays": string;
                        "jsonc/no-template-literals": string;
                        "jsonc/no-undefined-value": string;
                        "jsonc/no-unicode-codepoint-escapes": string;
                        "jsonc/no-useless-escape": string;
                        "jsonc/space-unary-ops": string;
                        "jsonc/vue-custom-block/no-parsing-error": string;
                    };
                };
                prettier: {
                    extends: string[];
                    rules: {
                        "jsonc/array-bracket-newline": string;
                        "jsonc/array-bracket-spacing": string;
                        "jsonc/array-element-newline": string;
                        "jsonc/comma-dangle": string;
                        "jsonc/comma-style": string;
                        "jsonc/indent": string;
                        "jsonc/key-spacing": string;
                        "jsonc/no-floating-decimal": string;
                        "jsonc/object-curly-newline": string;
                        "jsonc/object-curly-spacing": string;
                        "jsonc/object-property-newline": string;
                        "jsonc/quote-props": string;
                        "jsonc/quotes": string;
                        "jsonc/space-unary-ops": string;
                    };
                };
                all: {
                    extends: string[];
                    rules: {
                        [x: string]: string;
                    };
                };
                "flat/base": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                })[];
                "flat/recommended-with-json": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/comma-dangle": "error";
                        "jsonc/no-bigint-literals": "error";
                        "jsonc/no-binary-expression": "error";
                        "jsonc/no-binary-numeric-literals": "error";
                        "jsonc/no-comments": "error";
                        "jsonc/no-dupe-keys": "error";
                        "jsonc/no-escape-sequence-in-identifier": "error";
                        "jsonc/no-floating-decimal": "error";
                        "jsonc/no-hexadecimal-numeric-literals": "error";
                        "jsonc/no-infinity": "error";
                        "jsonc/no-multi-str": "error";
                        "jsonc/no-nan": "error";
                        "jsonc/no-number-props": "error";
                        "jsonc/no-numeric-separators": "error";
                        "jsonc/no-octal-numeric-literals": "error";
                        "jsonc/no-octal": "error";
                        "jsonc/no-parenthesized": "error";
                        "jsonc/no-plus-sign": "error";
                        "jsonc/no-regexp-literals": "error";
                        "jsonc/no-sparse-arrays": "error";
                        "jsonc/no-template-literals": "error";
                        "jsonc/no-undefined-value": "error";
                        "jsonc/no-unicode-codepoint-escapes": "error";
                        "jsonc/no-useless-escape": "error";
                        "jsonc/quote-props": "error";
                        "jsonc/quotes": "error";
                        "jsonc/space-unary-ops": "error";
                        "jsonc/valid-json-number": "error";
                        "jsonc/vue-custom-block/no-parsing-error": "error";
                    };
                })[];
                "flat/recommended-with-jsonc": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/no-bigint-literals": "error";
                        "jsonc/no-binary-expression": "error";
                        "jsonc/no-binary-numeric-literals": "error";
                        "jsonc/no-dupe-keys": "error";
                        "jsonc/no-escape-sequence-in-identifier": "error";
                        "jsonc/no-floating-decimal": "error";
                        "jsonc/no-hexadecimal-numeric-literals": "error";
                        "jsonc/no-infinity": "error";
                        "jsonc/no-multi-str": "error";
                        "jsonc/no-nan": "error";
                        "jsonc/no-number-props": "error";
                        "jsonc/no-numeric-separators": "error";
                        "jsonc/no-octal-numeric-literals": "error";
                        "jsonc/no-octal": "error";
                        "jsonc/no-parenthesized": "error";
                        "jsonc/no-plus-sign": "error";
                        "jsonc/no-regexp-literals": "error";
                        "jsonc/no-sparse-arrays": "error";
                        "jsonc/no-template-literals": "error";
                        "jsonc/no-undefined-value": "error";
                        "jsonc/no-unicode-codepoint-escapes": "error";
                        "jsonc/no-useless-escape": "error";
                        "jsonc/quote-props": "error";
                        "jsonc/quotes": "error";
                        "jsonc/space-unary-ops": "error";
                        "jsonc/valid-json-number": "error";
                        "jsonc/vue-custom-block/no-parsing-error": "error";
                    };
                })[];
                "flat/recommended-with-json5": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/no-bigint-literals": "error";
                        "jsonc/no-binary-expression": "error";
                        "jsonc/no-binary-numeric-literals": "error";
                        "jsonc/no-dupe-keys": "error";
                        "jsonc/no-escape-sequence-in-identifier": "error";
                        "jsonc/no-number-props": "error";
                        "jsonc/no-numeric-separators": "error";
                        "jsonc/no-octal-numeric-literals": "error";
                        "jsonc/no-octal": "error";
                        "jsonc/no-parenthesized": "error";
                        "jsonc/no-regexp-literals": "error";
                        "jsonc/no-sparse-arrays": "error";
                        "jsonc/no-template-literals": "error";
                        "jsonc/no-undefined-value": "error";
                        "jsonc/no-unicode-codepoint-escapes": "error";
                        "jsonc/no-useless-escape": "error";
                        "jsonc/space-unary-ops": "error";
                        "jsonc/vue-custom-block/no-parsing-error": "error";
                    };
                })[];
                "flat/prettier": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "jsonc/array-bracket-newline": "off";
                        "jsonc/array-bracket-spacing": "off";
                        "jsonc/array-element-newline": "off";
                        "jsonc/comma-dangle": "off";
                        "jsonc/comma-style": "off";
                        "jsonc/indent": "off";
                        "jsonc/key-spacing": "off";
                        "jsonc/no-floating-decimal": "off";
                        "jsonc/object-curly-newline": "off";
                        "jsonc/object-curly-spacing": "off";
                        "jsonc/object-property-newline": "off";
                        "jsonc/quote-props": "off";
                        "jsonc/quotes": "off";
                        "jsonc/space-unary-ops": "off";
                    };
                })[];
                "flat/all": ({
                    plugins: {
                        readonly jsonc: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof jsonc_eslint_parser;
                    };
                    rules: {
                        strict: "off";
                        "no-unused-expressions": "off";
                        "no-unused-vars": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        [x: string]: eslint.Linter.RuleEntry<any[]>;
                    };
                })[];
            };
            rules: {
                [key: string]: eslint_plugin_jsonc_types.RuleModule;
            };
            parseForESLint: typeof eslint_plugin_jsonc.parseForESLint;
            parseJSON: typeof jsonc_eslint_parser.parseJSON;
            traverseNodes: typeof eslint_plugin_jsonc.traverseNodes;
            getStaticJSONValue: typeof eslint_plugin_jsonc.getStaticJSONValue;
        };
    };
}, {
    readonly files: (string | string[])[];
    readonly languageOptions: {
        readonly parser: typeof jsonc_eslint_parser;
    };
    readonly name: "w5s/jsonc/rules";
    readonly rules: {
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/comma-dangle'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, (undefined | {
            arrays?: undefined;
            objects?: undefined;
            imports?: undefined;
            exports?: undefined;
            functions?: undefined;
        })?];
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
            SwitchCase?: number;
            VariableDeclarator?: ((number | ("first" | "off")) | {
                var?: (number | ("first" | "off"));
                let?: (number | ("first" | "off"));
                const?: (number | ("first" | "off"));
            });
            outerIIFEBody?: (number | "off");
            MemberExpression?: (number | "off");
            FunctionDeclaration?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            FunctionExpression?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            StaticBlock?: {
                body?: number;
            };
            CallExpression?: {
                arguments?: (number | ("first" | "off"));
            };
            ArrayExpression?: (number | ("first" | "off"));
            ObjectExpression?: (number | ("first" | "off"));
            ImportDeclaration?: (number | ("first" | "off"));
            flatTernaryExpressions?: boolean;
            offsetTernaryExpressions?: boolean;
            ignoredNodes?: string[];
            ignoreComments?: boolean;
        }?];
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ({
            align?: (("colon" | "value") | {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            });
            mode?: ("strict" | "minimum");
            beforeColon?: boolean;
            afterColon?: boolean;
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                align?: (("colon" | "value") | {
                    mode?: ("strict" | "minimum");
                    on?: ("colon" | "value");
                    beforeColon?: boolean;
                    afterColon?: boolean;
                });
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            align?: {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        })?];
        readonly 'jsonc/no-bigint-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-binary-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-binary-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-comments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-dupe-keys'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-escape-sequence-in-identifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-floating-decimal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-hexadecimal-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-infinity'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/no-multi-str'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-nan'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-number-props'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-numeric-separators'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal-escape'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-parenthesized'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-plus-sign'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-regexp-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-sparse-arrays'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-template-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-undefined-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-unicode-codepoint-escapes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-useless-escape'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
        } | {
            ObjectExpression?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ObjectPattern?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ImportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ExportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
        })?];
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, {
            allowAllPropertiesOnSameLine?: boolean;
            allowMultiplePropertiesPerLine?: boolean;
        }?];
        'jsonc/quote-props'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "consistent" | "as-needed" | "consistent-as-needed")?, {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
        }?];
        'jsonc/quotes'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("single" | "double" | "backtick")?, ("avoid-escape" | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
        })?];
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/valid-json-number'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/comma-dangle'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, (undefined | {
            arrays?: undefined;
            objects?: undefined;
            imports?: undefined;
            exports?: undefined;
            functions?: undefined;
        })?];
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
            SwitchCase?: number;
            VariableDeclarator?: ((number | ("first" | "off")) | {
                var?: (number | ("first" | "off"));
                let?: (number | ("first" | "off"));
                const?: (number | ("first" | "off"));
            });
            outerIIFEBody?: (number | "off");
            MemberExpression?: (number | "off");
            FunctionDeclaration?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            FunctionExpression?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            StaticBlock?: {
                body?: number;
            };
            CallExpression?: {
                arguments?: (number | ("first" | "off"));
            };
            ArrayExpression?: (number | ("first" | "off"));
            ObjectExpression?: (number | ("first" | "off"));
            ImportDeclaration?: (number | ("first" | "off"));
            flatTernaryExpressions?: boolean;
            offsetTernaryExpressions?: boolean;
            ignoredNodes?: string[];
            ignoreComments?: boolean;
        }?];
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ({
            align?: (("colon" | "value") | {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            });
            mode?: ("strict" | "minimum");
            beforeColon?: boolean;
            afterColon?: boolean;
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                align?: (("colon" | "value") | {
                    mode?: ("strict" | "minimum");
                    on?: ("colon" | "value");
                    beforeColon?: boolean;
                    afterColon?: boolean;
                });
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            align?: {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        })?];
        readonly 'jsonc/no-bigint-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-binary-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-binary-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-comments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-dupe-keys'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-escape-sequence-in-identifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-floating-decimal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-hexadecimal-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-infinity'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/no-multi-str'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-nan'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-number-props'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-numeric-separators'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal-escape'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal-numeric-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-parenthesized'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-plus-sign'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-regexp-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-sparse-arrays'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-template-literals'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-undefined-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-unicode-codepoint-escapes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-useless-escape'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
        } | {
            ObjectExpression?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ObjectPattern?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ImportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ExportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
        })?];
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, {
            allowAllPropertiesOnSameLine?: boolean;
            allowMultiplePropertiesPerLine?: boolean;
        }?];
        'jsonc/quote-props'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "consistent" | "as-needed" | "consistent-as-needed")?, {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
        }?];
        'jsonc/quotes'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("single" | "double" | "backtick")?, ("avoid-escape" | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
        })?];
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/valid-json-number'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly strict: "off";
        readonly "no-unused-expressions": "off";
        readonly "no-unused-vars": "off";
    } | {
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        "jsonc/comma-dangle": eslint.Linter.RuleEntry<undefined>;
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
            SwitchCase?: number;
            VariableDeclarator?: ((number | ("first" | "off")) | {
                var?: (number | ("first" | "off"));
                let?: (number | ("first" | "off"));
                const?: (number | ("first" | "off"));
            });
            outerIIFEBody?: (number | "off");
            MemberExpression?: (number | "off");
            FunctionDeclaration?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            FunctionExpression?: {
                parameters?: (number | ("first" | "off"));
                body?: number;
            };
            StaticBlock?: {
                body?: number;
            };
            CallExpression?: {
                arguments?: (number | ("first" | "off"));
            };
            ArrayExpression?: (number | ("first" | "off"));
            ObjectExpression?: (number | ("first" | "off"));
            ImportDeclaration?: (number | ("first" | "off"));
            flatTernaryExpressions?: boolean;
            offsetTernaryExpressions?: boolean;
            ignoredNodes?: string[];
            ignoreComments?: boolean;
        }?];
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ({
            align?: (("colon" | "value") | {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            });
            mode?: ("strict" | "minimum");
            beforeColon?: boolean;
            afterColon?: boolean;
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                align?: (("colon" | "value") | {
                    mode?: ("strict" | "minimum");
                    on?: ("colon" | "value");
                    beforeColon?: boolean;
                    afterColon?: boolean;
                });
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        } | {
            singleLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            multiLine?: {
                mode?: ("strict" | "minimum");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
            align?: {
                mode?: ("strict" | "minimum");
                on?: ("colon" | "value");
                beforeColon?: boolean;
                afterColon?: boolean;
            };
        })?];
        "jsonc/no-bigint-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-binary-expression": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-binary-numeric-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-comments": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-dupe-keys": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-escape-sequence-in-identifier": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-floating-decimal": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-hexadecimal-numeric-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-infinity": eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        "jsonc/no-multi-str": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-nan": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-number-props": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-numeric-separators": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-octal": eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/no-octal-escape'?: eslint.Linter.RuleEntry<[]>;
        "jsonc/no-octal-numeric-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-parenthesized": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-plus-sign": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-regexp-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-sparse-arrays": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-template-literals": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-undefined-value": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-unicode-codepoint-escapes": eslint.Linter.RuleEntry<[]>;
        "jsonc/no-useless-escape": eslint.Linter.RuleEntry<[]>;
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
        } | {
            ObjectExpression?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ObjectPattern?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ImportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
            ExportDeclaration?: (("always" | "never") | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
            });
        })?];
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "error" | "warn" | [eslint.Linter.RuleSeverity, {
            allowAllPropertiesOnSameLine?: boolean;
            allowMultiplePropertiesPerLine?: boolean;
        }?];
        "jsonc/quote-props": eslint.Linter.RuleEntry<undefined>;
        "jsonc/quotes": eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        "jsonc/space-unary-ops": eslint.Linter.RuleEntry<undefined>;
        "jsonc/valid-json-number": eslint.Linter.RuleEntry<[]>;
        "jsonc/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    };
}]>;
declare namespace jsonc {
    type Rules = RuleOptions$1;
    interface Options {
        files?: Config['files'];
        rules?: Rules;
        rulesStylistic?: boolean;
    }
}

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

interface RuleOptions {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/default.md
   */
  'import/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname'?: Linter.RuleEntry<ImportDynamicImportChunkname>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/export.md
   */
  'import/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/exports-last.md
   */
  'import/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/extensions.md
   */
  'import/extensions'?: Linter.RuleEntry<ImportExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/group-exports.md
   */
  'import/group-exports'?: Linter.RuleEntry<[]>
  /**
   * Replaced by `import/first`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md
   * @deprecated
   */
  'import/imports-first'?: Linter.RuleEntry<ImportImportsFirst>
  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/max-dependencies.md
   */
  'import/max-dependencies'?: Linter.RuleEntry<ImportMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/named.md
   */
  'import/named'?: Linter.RuleEntry<ImportNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/namespace.md
   */
  'import/namespace'?: Linter.RuleEntry<ImportNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path'?: Linter.RuleEntry<ImportNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-amd.md
   */
  'import/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export'?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-commonjs.md
   */
  'import/no-commonjs'?: Linter.RuleEntry<ImportNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-cycle.md
   */
  'import/no-cycle'?: Linter.RuleEntry<ImportNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-deprecated.md
   */
  'import/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require'?: Linter.RuleEntry<ImportNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-empty-named-blocks.md
   */
  'import/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies'?: Linter.RuleEntry<ImportNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   */
  'import/no-import-module-exports'?: Linter.RuleEntry<ImportNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules'?: Linter.RuleEntry<ImportNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-named-export.md
   */
  'import/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-namespace.md
   */
  'import/no-namespace'?: Linter.RuleEntry<ImportNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules'?: Linter.RuleEntry<ImportNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages'?: Linter.RuleEntry<ImportNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports'?: Linter.RuleEntry<ImportNoRelativeParentImports>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths'?: Linter.RuleEntry<ImportNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-self-import.md
   */
  'import/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import'?: Linter.RuleEntry<ImportNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unresolved.md
   */
  'import/no-unresolved'?: Linter.RuleEntry<ImportNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules'?: Linter.RuleEntry<ImportNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments'?: Linter.RuleEntry<ImportNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/order.md
   */
  'import/order'?: Linter.RuleEntry<ImportOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export'?: Linter.RuleEntry<ImportPreferDefaultExport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.31.0/docs/rules/unambiguous.md
   */
  'import/unambiguous'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- import/consistent-type-specifier-style -----
type ImportConsistentTypeSpecifierStyle = []|[("prefer-inline" | "prefer-top-level")]
// ----- import/dynamic-import-chunkname -----
type ImportDynamicImportChunkname = []|[{
  importFunctions?: string[]
  allowEmpty?: boolean
  webpackChunknameFormat?: string
  [k: string]: unknown | undefined
}]
// ----- import/extensions -----
type ImportExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  [k: string]: unknown | undefined
}] | []|[{
  [k: string]: ("always" | "ignorePackages" | "never")
}] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  [k: string]: ("always" | "ignorePackages" | "never")
}])
// ----- import/first -----
type ImportFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/imports-first -----
type ImportImportsFirst = []|[("absolute-first" | "disable-absolute-first")]
// ----- import/max-dependencies -----
type ImportMaxDependencies = []|[{
  max?: number
  ignoreTypeImports?: boolean
}]
// ----- import/named -----
type ImportNamed = []|[{
  commonjs?: boolean
}]
// ----- import/namespace -----
type ImportNamespace = []|[{
  
  allowComputed?: boolean
}]
// ----- import/newline-after-import -----
type ImportNewlineAfterImport = []|[{
  count?: number
  exactCount?: boolean
  considerComments?: boolean
}]
// ----- import/no-absolute-path -----
type ImportNoAbsolutePath = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-anonymous-default-export -----
type ImportNoAnonymousDefaultExport = []|[{
  
  allowArray?: boolean
  
  allowArrowFunction?: boolean
  
  allowCallExpression?: boolean
  
  allowAnonymousClass?: boolean
  
  allowAnonymousFunction?: boolean
  
  allowLiteral?: boolean
  
  allowObject?: boolean
  
  allowNew?: boolean
}]
// ----- import/no-commonjs -----
type ImportNoCommonjs = ([]|["allow-primitive-modules"] | []|[{
  allowPrimitiveModules?: boolean
  allowRequire?: boolean
  allowConditionalRequire?: boolean
}])
// ----- import/no-cycle -----
type ImportNoCycle = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  maxDepth?: (number | "∞")
  
  ignoreExternal?: boolean
  
  allowUnsafeDynamicCyclicDependency?: boolean
  
  disableScc?: boolean
}]
// ----- import/no-duplicates -----
type ImportNoDuplicates = []|[{
  considerQueryString?: boolean
  "prefer-inline"?: boolean
}]
// ----- import/no-dynamic-require -----
type ImportNoDynamicRequire = []|[{
  esmodule?: boolean
}]
// ----- import/no-extraneous-dependencies -----
type ImportNoExtraneousDependencies = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  bundledDependencies?: (boolean | unknown[])
  packageDir?: (string | unknown[])
  includeInternal?: boolean
  includeTypes?: boolean
}]
// ----- import/no-import-module-exports -----
type ImportNoImportModuleExports = []|[{
  exceptions?: unknown[]
}]
// ----- import/no-internal-modules -----
type ImportNoInternalModules = []|[({
  allow?: string[]
} | {
  forbid?: string[]
})]
// ----- import/no-namespace -----
type ImportNoNamespace = []|[{
  ignore?: string[]
  [k: string]: unknown | undefined
}]
// ----- import/no-nodejs-modules -----
type ImportNoNodejsModules = []|[{
  allow?: string[]
}]
// ----- import/no-relative-packages -----
type ImportNoRelativePackages = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-relative-parent-imports -----
type ImportNoRelativeParentImports = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
}]
// ----- import/no-restricted-paths -----
type ImportNoRestrictedPaths = []|[{
  
  zones?: [{
    target?: (string | string[])
    from?: (string | string[])
    except?: string[]
    message?: string
  }, ...({
    target?: (string | string[])
    from?: (string | string[])
    except?: string[]
    message?: string
  })[]]
  basePath?: string
}]
// ----- import/no-unassigned-import -----
type ImportNoUnassignedImport = []|[{
  devDependencies?: (boolean | unknown[])
  optionalDependencies?: (boolean | unknown[])
  peerDependencies?: (boolean | unknown[])
  allow?: string[]
}]
// ----- import/no-unresolved -----
type ImportNoUnresolved = []|[{
  commonjs?: boolean
  amd?: boolean
  esmodule?: boolean
  
  ignore?: [string, ...(string)[]]
  caseSensitive?: boolean
  caseSensitiveStrict?: boolean
}]
// ----- import/no-unused-modules -----
type ImportNoUnusedModules = []|[({
  unusedExports: true
  src?: {
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
} | {
  missingExports: true
  [k: string]: unknown | undefined
})]
// ----- import/no-useless-path-segments -----
type ImportNoUselessPathSegments = []|[{
  commonjs?: boolean
  noUselessIndex?: boolean
}]
// ----- import/order -----
type ImportOrder = []|[{
  groups?: unknown[]
  pathGroupsExcludedImportTypes?: unknown[]
  distinctGroup?: boolean
  pathGroups?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    group: ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")
    position?: ("after" | "before")
  }[]
  "newlines-between"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  named?: (boolean | {
    enabled?: boolean
    import?: boolean
    export?: boolean
    require?: boolean
    cjsExports?: boolean
    types?: ("mixed" | "types-first" | "types-last")
  })
  alphabetize?: {
    caseInsensitive?: boolean
    order?: ("ignore" | "asc" | "desc")
    orderImportKind?: ("ignore" | "asc" | "desc")
  }
  warnOnUnassignedImports?: boolean
}]
// ----- import/prefer-default-export -----
type ImportPreferDefaultExport = []|[{
  target?: ("single" | "any")
}]

declare function imports(options?: imports.Options): Promise<[{
    readonly name: "w5s/import/rules";
    readonly plugins: any;
    readonly rules: any;
}]>;
declare namespace imports {
    type Rules = RuleOptions;
    interface Options {
        rules?: Rules;
        rulesStylistic?: boolean;
    }
}

interface DefineConfigOptions {
    import?: boolean | imports.Options;
    jsonc?: boolean | jsonc.Options;
}
declare function defineConfig(options?: DefineConfigOptions): Promise<Config[]>;

export { type DefineConfigOptions, defineConfig as default, defineConfig, imports, jsonc };
