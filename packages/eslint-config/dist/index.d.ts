import * as eslint from 'eslint';
import { Linter } from 'eslint';
import * as eslint_plugin_jsonc from 'eslint-plugin-jsonc';
import * as eslint_plugin_jsonc_types from 'eslint-plugin-jsonc/types';
import * as jsonc_eslint_parser from 'jsonc-eslint-parser';
import * as eslint_plugin_jsonc_meta from 'eslint-plugin-jsonc/meta';
import { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import * as eslint_plugin_n from 'eslint-plugin-n';
import * as eslint_plugin_yml_lib_types_js from 'eslint-plugin-yml/lib/types.js';
import * as yaml_eslint_parser from 'yaml-eslint-parser';
import * as eslint_plugin_yml_lib_meta_js from 'eslint-plugin-yml/lib/meta.js';

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$3 {}
  }
}

interface RuleOptions$3 {
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

interface StylisticParameters extends Partial<StylisticConfig> {
}
interface StylisticConfig {
    enabled: boolean;
    indent: NonNullable<StylisticCustomizeOptions['indent']>;
    quotes: NonNullable<StylisticCustomizeOptions['quotes']>;
    jsx: NonNullable<StylisticCustomizeOptions['jsx']>;
    semi: NonNullable<StylisticCustomizeOptions['semi']>;
}
/**
 * @namespace
 */
declare const StylisticConfig: {
    /**
     * Default config
     */
    default: {
        enabled: true;
        indent: number;
        quotes: "single";
        jsx: true;
        semi: true;
    };
    /**
     * Return a new StylisticConfig from input
     *
     * @param input
     */
    from(input: boolean | StylisticParameters): StylisticConfig;
};

interface PluginOptionsBase<Rules> {
    files?: Linter.Config['files'];
    /**
     * Plugin rules
     */
    rules?: Rules;
    /**
     * Stylistic options
     */
    stylistic?: boolean | StylisticParameters;
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
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/comma-dangle'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, (undefined | {
            arrays?: undefined;
            objects?: undefined;
            imports?: undefined;
            exports?: undefined;
            functions?: undefined;
        })?];
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
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
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ({
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
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
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
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, {
            allowAllPropertiesOnSameLine?: boolean;
            allowMultiplePropertiesPerLine?: boolean;
        }?];
        'jsonc/quote-props'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "consistent" | "as-needed" | "consistent-as-needed")?, {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
        }?];
        'jsonc/quotes'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("single" | "double" | "backtick")?, ("avoid-escape" | {
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
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        'jsonc/comma-dangle'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, (undefined | {
            arrays?: undefined;
            objects?: undefined;
            imports?: undefined;
            exports?: undefined;
            functions?: undefined;
        })?];
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
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
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ({
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
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
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
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, {
            allowAllPropertiesOnSameLine?: boolean;
            allowMultiplePropertiesPerLine?: boolean;
        }?];
        'jsonc/quote-props'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "consistent" | "as-needed" | "consistent-as-needed")?, {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
        }?];
        'jsonc/quotes'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("single" | "double" | "backtick")?, ("avoid-escape" | {
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
        'jsonc/array-bracket-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            singleValue?: boolean;
            objectsInArrays?: boolean;
            arraysInArrays?: boolean;
        }?];
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        "jsonc/comma-dangle": eslint.Linter.RuleEntry<undefined>;
        'jsonc/comma-style'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("first" | "last")?, {
            exceptions?: {
                [k: string]: boolean | undefined;
            };
        }?];
        'jsonc/indent'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, (number | "tab")?, {
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
        'jsonc/key-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ({
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
        'jsonc/object-curly-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never" | {
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
        'jsonc/object-curly-spacing'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, ("always" | "never")?, {
            arraysInObjects?: boolean;
            objectsInObjects?: boolean;
        }?];
        'jsonc/object-property-newline'?: 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, {
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
    type Rules = RuleOptions$3;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$2 {}
  }
}

interface RuleOptions$2 {
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
    type Rules = RuleOptions$2;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

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
   * require `return` statements after callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/callback-return.md
   */
  'node/callback-return'?: Linter.RuleEntry<NodeCallbackReturn>
  /**
   * enforce either `module.exports` or `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/exports-style.md
   */
  'node/exports-style'?: Linter.RuleEntry<NodeExportsStyle>
  /**
   * enforce the style of file extensions in `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/file-extension-in-import.md
   */
  'node/file-extension-in-import'?: Linter.RuleEntry<NodeFileExtensionInImport>
  /**
   * require `require()` calls to be placed at top-level module scope
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md
   */
  'node/global-require'?: Linter.RuleEntry<[]>
  /**
   * require error handling in callbacks
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/handle-callback-err.md
   */
  'node/handle-callback-err'?: Linter.RuleEntry<NodeHandleCallbackErr>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   */
  'node/hashbang'?: Linter.RuleEntry<NodeHashbang>
  /**
   * enforce Node.js-style error-first callback pattern is followed
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-callback-literal.md
   */
  'node/no-callback-literal'?: Linter.RuleEntry<[]>
  /**
   * disallow deprecated APIs
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-deprecated-api.md
   */
  'node/no-deprecated-api'?: Linter.RuleEntry<NodeNoDeprecatedApi>
  /**
   * disallow the assignment to `exports`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md
   */
  'node/no-exports-assign'?: Linter.RuleEntry<[]>
  /**
   * disallow `import` declarations which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-import.md
   */
  'node/no-extraneous-import'?: Linter.RuleEntry<NodeNoExtraneousImport>
  /**
   * disallow `require()` expressions which import extraneous modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-extraneous-require.md
   */
  'node/no-extraneous-require'?: Linter.RuleEntry<NodeNoExtraneousRequire>
  /**
   * disallow third-party modules which are hiding core modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-hide-core-modules.md
   * @deprecated
   */
  'node/no-hide-core-modules'?: Linter.RuleEntry<NodeNoHideCoreModules>
  /**
   * disallow `import` declarations which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'node/no-missing-import'?: Linter.RuleEntry<NodeNoMissingImport>
  /**
   * disallow `require()` expressions which import non-existence modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-require.md
   */
  'node/no-missing-require'?: Linter.RuleEntry<NodeNoMissingRequire>
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md
   */
  'node/no-mixed-requires'?: Linter.RuleEntry<NodeNoMixedRequires>
  /**
   * disallow `new` operators with calls to `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-new-require.md
   */
  'node/no-new-require'?: Linter.RuleEntry<[]>
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-path-concat.md
   */
  'node/no-path-concat'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of `process.env`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-env.md
   */
  'node/no-process-env'?: Linter.RuleEntry<NodeNoProcessEnv>
  /**
   * disallow the use of `process.exit()`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md
   */
  'node/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * disallow specified modules when loaded by `import` declarations
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-import.md
   */
  'node/no-restricted-import'?: Linter.RuleEntry<NodeNoRestrictedImport>
  /**
   * disallow specified modules when loaded by `require`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-restricted-require.md
   */
  'node/no-restricted-require'?: Linter.RuleEntry<NodeNoRestrictedRequire>
  /**
   * disallow synchronous methods
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-sync.md
   */
  'node/no-sync'?: Linter.RuleEntry<NodeNoSync>
  /**
   * disallow `bin` files that npm ignores
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-bin.md
   */
  'node/no-unpublished-bin'?: Linter.RuleEntry<NodeNoUnpublishedBin>
  /**
   * disallow `import` declarations which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-import.md
   */
  'node/no-unpublished-import'?: Linter.RuleEntry<NodeNoUnpublishedImport>
  /**
   * disallow `require()` expressions which import private modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unpublished-require.md
   */
  'node/no-unpublished-require'?: Linter.RuleEntry<NodeNoUnpublishedRequire>
  /**
   * disallow unsupported ECMAScript built-ins on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-builtins.md
   */
  'node/no-unsupported-features/es-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsBuiltins>
  /**
   * disallow unsupported ECMAScript syntax on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/es-syntax.md
   */
  'node/no-unsupported-features/es-syntax'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesEsSyntax>
  /**
   * disallow unsupported Node.js built-in APIs on the specified version
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-unsupported-features/node-builtins.md
   */
  'node/no-unsupported-features/node-builtins'?: Linter.RuleEntry<NodeNoUnsupportedFeaturesNodeBuiltins>
  /**
   * enforce either `Buffer` or `require("buffer").Buffer`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/buffer.md
   */
  'node/prefer-global/buffer'?: Linter.RuleEntry<NodePreferGlobalBuffer>
  /**
   * enforce either `console` or `require("console")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/console.md
   */
  'node/prefer-global/console'?: Linter.RuleEntry<NodePreferGlobalConsole>
  /**
   * enforce either `process` or `require("process")`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/process.md
   */
  'node/prefer-global/process'?: Linter.RuleEntry<NodePreferGlobalProcess>
  /**
   * enforce either `TextDecoder` or `require("util").TextDecoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-decoder.md
   */
  'node/prefer-global/text-decoder'?: Linter.RuleEntry<NodePreferGlobalTextDecoder>
  /**
   * enforce either `TextEncoder` or `require("util").TextEncoder`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/text-encoder.md
   */
  'node/prefer-global/text-encoder'?: Linter.RuleEntry<NodePreferGlobalTextEncoder>
  /**
   * enforce either `URL` or `require("url").URL`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url.md
   */
  'node/prefer-global/url'?: Linter.RuleEntry<NodePreferGlobalUrl>
  /**
   * enforce either `URLSearchParams` or `require("url").URLSearchParams`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md
   */
  'node/prefer-global/url-search-params'?: Linter.RuleEntry<NodePreferGlobalUrlSearchParams>
  /**
   * enforce using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md
   */
  'node/prefer-node-protocol'?: Linter.RuleEntry<NodePreferNodeProtocol>
  /**
   * enforce `require("dns").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/dns.md
   */
  'node/prefer-promises/dns'?: Linter.RuleEntry<[]>
  /**
   * enforce `require("fs").promises`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md
   */
  'node/prefer-promises/fs'?: Linter.RuleEntry<[]>
  /**
   * require that `process.exit()` expressions use the same code path as `throw`
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md
   */
  'node/process-exit-as-throw'?: Linter.RuleEntry<[]>
  /**
   * require correct usage of hashbang
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/hashbang.md
   * @deprecated
   */
  'node/shebang'?: Linter.RuleEntry<NodeShebang>
}

/* ======= Declarations ======= */
// ----- node/callback-return -----
type NodeCallbackReturn = []|[string[]]
// ----- node/exports-style -----
type NodeExportsStyle = []|[("module.exports" | "exports")]|[("module.exports" | "exports"), {
  allowBatchAssign?: boolean
}]
// ----- node/file-extension-in-import -----
type NodeFileExtensionInImport = []|[("always" | "never")]|[("always" | "never"), {
  [k: string]: ("always" | "never") | undefined
}]
// ----- node/handle-callback-err -----
type NodeHandleCallbackErr = []|[string]
// ----- node/hashbang -----
type NodeHashbang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]
// ----- node/no-deprecated-api -----
type NodeNoDeprecatedApi = []|[{
  version?: string
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
  ignoreGlobalItems?: ("Buffer()" | "new Buffer()" | "COUNTER_NET_SERVER_CONNECTION" | "COUNTER_NET_SERVER_CONNECTION_CLOSE" | "COUNTER_HTTP_SERVER_REQUEST" | "COUNTER_HTTP_SERVER_RESPONSE" | "COUNTER_HTTP_CLIENT_REQUEST" | "COUNTER_HTTP_CLIENT_RESPONSE" | "GLOBAL" | "Intl.v8BreakIterator" | "require.extensions" | "root" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport")[]
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-extraneous-import -----
type NodeNoExtraneousImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
}]
// ----- node/no-extraneous-require -----
type NodeNoExtraneousRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
}]
// ----- node/no-hide-core-modules -----
type NodeNoHideCoreModules = []|[{
  allow?: ("assert" | "buffer" | "child_process" | "cluster" | "console" | "constants" | "crypto" | "dgram" | "dns" | "events" | "fs" | "http" | "https" | "module" | "net" | "os" | "path" | "querystring" | "readline" | "repl" | "stream" | "string_decoder" | "timers" | "tls" | "tty" | "url" | "util" | "vm" | "zlib")[]
  ignoreDirectDependencies?: boolean
  ignoreIndirectDependencies?: boolean
}]
// ----- node/no-missing-import -----
type NodeNoMissingImport = []|[{
  allowModules?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignoreTypeImport?: boolean
  tsconfigPath?: string
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
}]
// ----- node/no-missing-require -----
type NodeNoMissingRequire = []|[{
  allowModules?: string[]
  tryExtensions?: string[]
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  typescriptExtensionMap?: (unknown[][] | ("react" | "react-jsx" | "react-jsxdev" | "react-native" | "preserve"))
  tsconfigPath?: string
}]
// ----- node/no-mixed-requires -----
type NodeNoMixedRequires = []|[(boolean | {
  grouping?: boolean
  allowCall?: boolean
})]
// ----- node/no-process-env -----
type NodeNoProcessEnv = []|[{
  allowedVariables?: string[]
}]
// ----- node/no-restricted-import -----
type NodeNoRestrictedImport = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-restricted-require -----
type NodeNoRestrictedRequire = []|[(string | {
  name: (string | string[])
  message?: string
})[]]
// ----- node/no-sync -----
type NodeNoSync = []|[{
  allowAtRootLevel?: boolean
  ignores?: string[]
}]
// ----- node/no-unpublished-bin -----
type NodeNoUnpublishedBin = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  [k: string]: unknown | undefined
}]
// ----- node/no-unpublished-import -----
type NodeNoUnpublishedImport = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  ignoreTypeImport?: boolean
  ignorePrivate?: boolean
}]
// ----- node/no-unpublished-require -----
type NodeNoUnpublishedRequire = []|[{
  allowModules?: string[]
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  resolvePaths?: string[]
  resolverConfig?: {
    [k: string]: unknown | undefined
  }
  tryExtensions?: string[]
  ignorePrivate?: boolean
}]
// ----- node/no-unsupported-features/es-builtins -----
type NodeNoUnsupportedFeaturesEsBuiltins = []|[{
  version?: string
  ignores?: ("AggregateError" | "Array" | "Array.from" | "Array.isArray" | "Array.length" | "Array.of" | "Array.toLocaleString" | "ArrayBuffer" | "ArrayBuffer.isView" | "Atomics" | "Atomics.add" | "Atomics.and" | "Atomics.compareExchange" | "Atomics.exchange" | "Atomics.isLockFree" | "Atomics.load" | "Atomics.notify" | "Atomics.or" | "Atomics.store" | "Atomics.sub" | "Atomics.wait" | "Atomics.waitAsync" | "Atomics.xor" | "BigInt" | "BigInt.asIntN" | "BigInt.asUintN" | "BigInt64Array" | "BigInt64Array.BYTES_PER_ELEMENT" | "BigInt64Array.from" | "BigInt64Array.name" | "BigInt64Array.of" | "BigUint64Array" | "BigUint64Array.BYTES_PER_ELEMENT" | "BigUint64Array.from" | "BigUint64Array.name" | "BigUint64Array.of" | "Boolean" | "DataView" | "Date" | "Date.UTC" | "Date.now" | "Date.parse" | "Date.toLocaleDateString" | "Date.toLocaleString" | "Date.toLocaleTimeString" | "Error" | "Error.cause" | "EvalError" | "FinalizationRegistry" | "Float32Array" | "Float32Array.BYTES_PER_ELEMENT" | "Float32Array.from" | "Float32Array.name" | "Float32Array.of" | "Float64Array" | "Float64Array.BYTES_PER_ELEMENT" | "Float64Array.from" | "Float64Array.name" | "Float64Array.of" | "Function" | "Function.length" | "Function.name" | "Infinity" | "Int16Array" | "Int16Array.BYTES_PER_ELEMENT" | "Int16Array.from" | "Int16Array.name" | "Int16Array.of" | "Int32Array" | "Int32Array.BYTES_PER_ELEMENT" | "Int32Array.from" | "Int32Array.name" | "Int32Array.of" | "Int8Array" | "Int8Array.BYTES_PER_ELEMENT" | "Int8Array.from" | "Int8Array.name" | "Int8Array.of" | "Intl" | "Intl.Collator" | "Intl.DateTimeFormat" | "Intl.DisplayNames" | "Intl.ListFormat" | "Intl.Locale" | "Intl.NumberFormat" | "Intl.PluralRules" | "Intl.RelativeTimeFormat" | "Intl.Segmenter" | "Intl.Segments" | "Intl.getCanonicalLocales" | "Intl.supportedValuesOf" | "JSON" | "JSON.parse" | "JSON.stringify" | "Map" | "Map.groupBy" | "Math" | "Math.E" | "Math.LN10" | "Math.LN2" | "Math.LOG10E" | "Math.LOG2E" | "Math.PI" | "Math.SQRT1_2" | "Math.SQRT2" | "Math.abs" | "Math.acos" | "Math.acosh" | "Math.asin" | "Math.asinh" | "Math.atan" | "Math.atan2" | "Math.atanh" | "Math.cbrt" | "Math.ceil" | "Math.clz32" | "Math.cos" | "Math.cosh" | "Math.exp" | "Math.expm1" | "Math.floor" | "Math.fround" | "Math.hypot" | "Math.imul" | "Math.log" | "Math.log10" | "Math.log1p" | "Math.log2" | "Math.max" | "Math.min" | "Math.pow" | "Math.random" | "Math.round" | "Math.sign" | "Math.sin" | "Math.sinh" | "Math.sqrt" | "Math.tan" | "Math.tanh" | "Math.trunc" | "NaN" | "Number.EPSILON" | "Number.MAX_SAFE_INTEGER" | "Number.MAX_VALUE" | "Number.MIN_SAFE_INTEGER" | "Number.MIN_VALUE" | "Number.NEGATIVE_INFINITY" | "Number.NaN" | "Number.POSITIVE_INFINITY" | "Number.isFinite" | "Number.isInteger" | "Number.isNaN" | "Number.isSafeInteger" | "Number.parseFloat" | "Number.parseInt" | "Number.toLocaleString" | "Object.assign" | "Object.create" | "Object.defineGetter" | "Object.defineProperties" | "Object.defineProperty" | "Object.defineSetter" | "Object.entries" | "Object.freeze" | "Object.fromEntries" | "Object.getOwnPropertyDescriptor" | "Object.getOwnPropertyDescriptors" | "Object.getOwnPropertyNames" | "Object.getOwnPropertySymbols" | "Object.getPrototypeOf" | "Object.groupBy" | "Object.hasOwn" | "Object.is" | "Object.isExtensible" | "Object.isFrozen" | "Object.isSealed" | "Object.keys" | "Object.lookupGetter" | "Object.lookupSetter" | "Object.preventExtensions" | "Object.proto" | "Object.seal" | "Object.setPrototypeOf" | "Object.values" | "Promise" | "Promise.all" | "Promise.allSettled" | "Promise.any" | "Promise.race" | "Promise.reject" | "Promise.resolve" | "Proxy" | "Proxy.revocable" | "RangeError" | "ReferenceError" | "Reflect" | "Reflect.apply" | "Reflect.construct" | "Reflect.defineProperty" | "Reflect.deleteProperty" | "Reflect.get" | "Reflect.getOwnPropertyDescriptor" | "Reflect.getPrototypeOf" | "Reflect.has" | "Reflect.isExtensible" | "Reflect.ownKeys" | "Reflect.preventExtensions" | "Reflect.set" | "Reflect.setPrototypeOf" | "RegExp" | "RegExp.dotAll" | "RegExp.hasIndices" | "RegExp.input" | "RegExp.lastIndex" | "RegExp.lastMatch" | "RegExp.lastParen" | "RegExp.leftContext" | "RegExp.n" | "RegExp.rightContext" | "Set" | "SharedArrayBuffer" | "String" | "String.fromCharCode" | "String.fromCodePoint" | "String.length" | "String.localeCompare" | "String.raw" | "String.toLocaleLowerCase" | "String.toLocaleUpperCase" | "Symbol" | "Symbol.asyncIterator" | "Symbol.for" | "Symbol.hasInstance" | "Symbol.isConcatSpreadable" | "Symbol.iterator" | "Symbol.keyFor" | "Symbol.match" | "Symbol.matchAll" | "Symbol.replace" | "Symbol.search" | "Symbol.species" | "Symbol.split" | "Symbol.toPrimitive" | "Symbol.toStringTag" | "Symbol.unscopables" | "SyntaxError" | "TypeError" | "URIError" | "Uint16Array" | "Uint16Array.BYTES_PER_ELEMENT" | "Uint16Array.from" | "Uint16Array.name" | "Uint16Array.of" | "Uint32Array" | "Uint32Array.BYTES_PER_ELEMENT" | "Uint32Array.from" | "Uint32Array.name" | "Uint32Array.of" | "Uint8Array" | "Uint8Array.BYTES_PER_ELEMENT" | "Uint8Array.from" | "Uint8Array.name" | "Uint8Array.of" | "Uint8ClampedArray" | "Uint8ClampedArray.BYTES_PER_ELEMENT" | "Uint8ClampedArray.from" | "Uint8ClampedArray.name" | "Uint8ClampedArray.of" | "WeakMap" | "WeakRef" | "WeakSet" | "decodeURI" | "decodeURIComponent" | "encodeURI" | "encodeURIComponent" | "escape" | "eval" | "globalThis" | "isFinite" | "isNaN" | "parseFloat" | "parseInt" | "unescape")[]
}]
// ----- node/no-unsupported-features/es-syntax -----
type NodeNoUnsupportedFeaturesEsSyntax = []|[{
  version?: string
  ignores?: ("no-accessor-properties" | "accessor-properties" | "accessorProperties" | "no-arbitrary-module-namespace-names" | "arbitrary-module-namespace-names" | "arbitraryModuleNamespaceNames" | "no-array-from" | "array-from" | "arrayFrom" | "no-array-isarray" | "array-isarray" | "arrayIsarray" | "no-array-of" | "array-of" | "arrayOf" | "no-array-prototype-copywithin" | "array-prototype-copywithin" | "arrayPrototypeCopywithin" | "no-array-prototype-entries" | "array-prototype-entries" | "arrayPrototypeEntries" | "no-array-prototype-every" | "array-prototype-every" | "arrayPrototypeEvery" | "no-array-prototype-fill" | "array-prototype-fill" | "arrayPrototypeFill" | "no-array-prototype-filter" | "array-prototype-filter" | "arrayPrototypeFilter" | "no-array-prototype-find" | "array-prototype-find" | "arrayPrototypeFind" | "no-array-prototype-findindex" | "array-prototype-findindex" | "arrayPrototypeFindindex" | "no-array-prototype-findlast-findlastindex" | "array-prototype-findlast-findlastindex" | "arrayPrototypeFindlastFindlastindex" | "no-array-prototype-flat" | "array-prototype-flat" | "arrayPrototypeFlat" | "no-array-prototype-foreach" | "array-prototype-foreach" | "arrayPrototypeForeach" | "no-array-prototype-includes" | "array-prototype-includes" | "arrayPrototypeIncludes" | "no-array-prototype-indexof" | "array-prototype-indexof" | "arrayPrototypeIndexof" | "no-array-prototype-keys" | "array-prototype-keys" | "arrayPrototypeKeys" | "no-array-prototype-lastindexof" | "array-prototype-lastindexof" | "arrayPrototypeLastindexof" | "no-array-prototype-map" | "array-prototype-map" | "arrayPrototypeMap" | "no-array-prototype-reduce" | "array-prototype-reduce" | "arrayPrototypeReduce" | "no-array-prototype-reduceright" | "array-prototype-reduceright" | "arrayPrototypeReduceright" | "no-array-prototype-some" | "array-prototype-some" | "arrayPrototypeSome" | "no-array-prototype-toreversed" | "array-prototype-toreversed" | "arrayPrototypeToreversed" | "no-array-prototype-tosorted" | "array-prototype-tosorted" | "arrayPrototypeTosorted" | "no-array-prototype-tospliced" | "array-prototype-tospliced" | "arrayPrototypeTospliced" | "no-array-prototype-values" | "array-prototype-values" | "arrayPrototypeValues" | "no-array-prototype-with" | "array-prototype-with" | "arrayPrototypeWith" | "no-array-string-prototype-at" | "array-string-prototype-at" | "arrayStringPrototypeAt" | "no-arrow-functions" | "arrow-functions" | "arrowFunctions" | "no-async-functions" | "async-functions" | "asyncFunctions" | "no-async-iteration" | "async-iteration" | "asyncIteration" | "no-atomics-waitasync" | "atomics-waitasync" | "atomicsWaitasync" | "no-atomics" | "atomics" | "no-bigint" | "bigint" | "no-binary-numeric-literals" | "binary-numeric-literals" | "binaryNumericLiterals" | "no-block-scoped-functions" | "block-scoped-functions" | "blockScopedFunctions" | "no-block-scoped-variables" | "block-scoped-variables" | "blockScopedVariables" | "no-class-fields" | "class-fields" | "classFields" | "no-class-static-block" | "class-static-block" | "classStaticBlock" | "no-classes" | "classes" | "no-computed-properties" | "computed-properties" | "computedProperties" | "no-date-now" | "date-now" | "dateNow" | "no-date-prototype-getyear-setyear" | "date-prototype-getyear-setyear" | "datePrototypeGetyearSetyear" | "no-date-prototype-togmtstring" | "date-prototype-togmtstring" | "datePrototypeTogmtstring" | "no-default-parameters" | "default-parameters" | "defaultParameters" | "no-destructuring" | "destructuring" | "no-dynamic-import" | "dynamic-import" | "dynamicImport" | "no-error-cause" | "error-cause" | "errorCause" | "no-escape-unescape" | "escape-unescape" | "escapeUnescape" | "no-exponential-operators" | "exponential-operators" | "exponentialOperators" | "no-export-ns-from" | "export-ns-from" | "exportNsFrom" | "no-for-of-loops" | "for-of-loops" | "forOfLoops" | "no-function-declarations-in-if-statement-clauses-without-block" | "function-declarations-in-if-statement-clauses-without-block" | "functionDeclarationsInIfStatementClausesWithoutBlock" | "no-function-prototype-bind" | "function-prototype-bind" | "functionPrototypeBind" | "no-generators" | "generators" | "no-global-this" | "global-this" | "globalThis" | "no-hashbang" | "hashbang" | "no-import-meta" | "import-meta" | "importMeta" | "no-initializers-in-for-in" | "initializers-in-for-in" | "initializersInForIn" | "no-intl-datetimeformat-prototype-formatrange" | "intl-datetimeformat-prototype-formatrange" | "intlDatetimeformatPrototypeFormatrange" | "no-intl-datetimeformat-prototype-formattoparts" | "intl-datetimeformat-prototype-formattoparts" | "intlDatetimeformatPrototypeFormattoparts" | "no-intl-displaynames" | "intl-displaynames" | "intlDisplaynames" | "no-intl-getcanonicallocales" | "intl-getcanonicallocales" | "intlGetcanonicallocales" | "no-intl-listformat" | "intl-listformat" | "intlListformat" | "no-intl-locale" | "intl-locale" | "intlLocale" | "no-intl-numberformat-prototype-formatrange" | "intl-numberformat-prototype-formatrange" | "intlNumberformatPrototypeFormatrange" | "no-intl-numberformat-prototype-formatrangetoparts" | "intl-numberformat-prototype-formatrangetoparts" | "intlNumberformatPrototypeFormatrangetoparts" | "no-intl-numberformat-prototype-formattoparts" | "intl-numberformat-prototype-formattoparts" | "intlNumberformatPrototypeFormattoparts" | "no-intl-pluralrules-prototype-selectrange" | "intl-pluralrules-prototype-selectrange" | "intlPluralrulesPrototypeSelectrange" | "no-intl-pluralrules" | "intl-pluralrules" | "intlPluralrules" | "no-intl-relativetimeformat" | "intl-relativetimeformat" | "intlRelativetimeformat" | "no-intl-segmenter" | "intl-segmenter" | "intlSegmenter" | "no-intl-supportedvaluesof" | "intl-supportedvaluesof" | "intlSupportedvaluesof" | "no-json-superset" | "json-superset" | "jsonSuperset" | "no-json" | "json" | "no-keyword-properties" | "keyword-properties" | "keywordProperties" | "no-labelled-function-declarations" | "labelled-function-declarations" | "labelledFunctionDeclarations" | "no-legacy-object-prototype-accessor-methods" | "legacy-object-prototype-accessor-methods" | "legacyObjectPrototypeAccessorMethods" | "no-logical-assignment-operators" | "logical-assignment-operators" | "logicalAssignmentOperators" | "no-malformed-template-literals" | "malformed-template-literals" | "malformedTemplateLiterals" | "no-map" | "map" | "no-math-acosh" | "math-acosh" | "mathAcosh" | "no-math-asinh" | "math-asinh" | "mathAsinh" | "no-math-atanh" | "math-atanh" | "mathAtanh" | "no-math-cbrt" | "math-cbrt" | "mathCbrt" | "no-math-clz32" | "math-clz32" | "mathClz32" | "no-math-cosh" | "math-cosh" | "mathCosh" | "no-math-expm1" | "math-expm1" | "mathExpm1" | "no-math-fround" | "math-fround" | "mathFround" | "no-math-hypot" | "math-hypot" | "mathHypot" | "no-math-imul" | "math-imul" | "mathImul" | "no-math-log10" | "math-log10" | "mathLog10" | "no-math-log1p" | "math-log1p" | "mathLog1p" | "no-math-log2" | "math-log2" | "mathLog2" | "no-math-sign" | "math-sign" | "mathSign" | "no-math-sinh" | "math-sinh" | "mathSinh" | "no-math-tanh" | "math-tanh" | "mathTanh" | "no-math-trunc" | "math-trunc" | "mathTrunc" | "no-modules" | "modules" | "no-new-target" | "new-target" | "newTarget" | "new.target" | "no-nullish-coalescing-operators" | "nullish-coalescing-operators" | "nullishCoalescingOperators" | "no-number-epsilon" | "number-epsilon" | "numberEpsilon" | "no-number-isfinite" | "number-isfinite" | "numberIsfinite" | "no-number-isinteger" | "number-isinteger" | "numberIsinteger" | "no-number-isnan" | "number-isnan" | "numberIsnan" | "no-number-issafeinteger" | "number-issafeinteger" | "numberIssafeinteger" | "no-number-maxsafeinteger" | "number-maxsafeinteger" | "numberMaxsafeinteger" | "no-number-minsafeinteger" | "number-minsafeinteger" | "numberMinsafeinteger" | "no-number-parsefloat" | "number-parsefloat" | "numberParsefloat" | "no-number-parseint" | "number-parseint" | "numberParseint" | "no-numeric-separators" | "numeric-separators" | "numericSeparators" | "no-object-assign" | "object-assign" | "objectAssign" | "no-object-create" | "object-create" | "objectCreate" | "no-object-defineproperties" | "object-defineproperties" | "objectDefineproperties" | "no-object-defineproperty" | "object-defineproperty" | "objectDefineproperty" | "no-object-entries" | "object-entries" | "objectEntries" | "no-object-freeze" | "object-freeze" | "objectFreeze" | "no-object-fromentries" | "object-fromentries" | "objectFromentries" | "no-object-getownpropertydescriptor" | "object-getownpropertydescriptor" | "objectGetownpropertydescriptor" | "no-object-getownpropertydescriptors" | "object-getownpropertydescriptors" | "objectGetownpropertydescriptors" | "no-object-getownpropertynames" | "object-getownpropertynames" | "objectGetownpropertynames" | "no-object-getownpropertysymbols" | "object-getownpropertysymbols" | "objectGetownpropertysymbols" | "no-object-getprototypeof" | "object-getprototypeof" | "objectGetprototypeof" | "no-object-hasown" | "object-hasown" | "objectHasown" | "no-object-is" | "object-is" | "objectIs" | "no-object-isextensible" | "object-isextensible" | "objectIsextensible" | "no-object-isfrozen" | "object-isfrozen" | "objectIsfrozen" | "no-object-issealed" | "object-issealed" | "objectIssealed" | "no-object-keys" | "object-keys" | "objectKeys" | "no-object-map-groupby" | "object-map-groupby" | "objectMapGroupby" | "no-object-preventextensions" | "object-preventextensions" | "objectPreventextensions" | "no-object-seal" | "object-seal" | "objectSeal" | "no-object-setprototypeof" | "object-setprototypeof" | "objectSetprototypeof" | "no-object-super-properties" | "object-super-properties" | "objectSuperProperties" | "no-object-values" | "object-values" | "objectValues" | "no-octal-numeric-literals" | "octal-numeric-literals" | "octalNumericLiterals" | "no-optional-catch-binding" | "optional-catch-binding" | "optionalCatchBinding" | "no-optional-chaining" | "optional-chaining" | "optionalChaining" | "no-private-in" | "private-in" | "privateIn" | "no-promise-all-settled" | "promise-all-settled" | "promiseAllSettled" | "no-promise-any" | "promise-any" | "promiseAny" | "no-promise-prototype-finally" | "promise-prototype-finally" | "promisePrototypeFinally" | "no-promise-withresolvers" | "promise-withresolvers" | "promiseWithresolvers" | "no-promise" | "promise" | "no-property-shorthands" | "property-shorthands" | "propertyShorthands" | "no-proxy" | "proxy" | "no-reflect" | "reflect" | "no-regexp-d-flag" | "regexp-d-flag" | "regexpDFlag" | "no-regexp-lookbehind-assertions" | "regexp-lookbehind-assertions" | "regexpLookbehindAssertions" | "regexpLookbehind" | "no-regexp-named-capture-groups" | "regexp-named-capture-groups" | "regexpNamedCaptureGroups" | "no-regexp-prototype-compile" | "regexp-prototype-compile" | "regexpPrototypeCompile" | "no-regexp-prototype-flags" | "regexp-prototype-flags" | "regexpPrototypeFlags" | "no-regexp-s-flag" | "regexp-s-flag" | "regexpSFlag" | "regexpS" | "no-regexp-u-flag" | "regexp-u-flag" | "regexpUFlag" | "regexpU" | "no-regexp-unicode-property-escapes-2019" | "regexp-unicode-property-escapes-2019" | "regexpUnicodePropertyEscapes2019" | "no-regexp-unicode-property-escapes-2020" | "regexp-unicode-property-escapes-2020" | "regexpUnicodePropertyEscapes2020" | "no-regexp-unicode-property-escapes-2021" | "regexp-unicode-property-escapes-2021" | "regexpUnicodePropertyEscapes2021" | "no-regexp-unicode-property-escapes-2022" | "regexp-unicode-property-escapes-2022" | "regexpUnicodePropertyEscapes2022" | "no-regexp-unicode-property-escapes-2023" | "regexp-unicode-property-escapes-2023" | "regexpUnicodePropertyEscapes2023" | "no-regexp-unicode-property-escapes" | "regexp-unicode-property-escapes" | "regexpUnicodePropertyEscapes" | "regexpUnicodeProperties" | "no-regexp-v-flag" | "regexp-v-flag" | "regexpVFlag" | "no-regexp-y-flag" | "regexp-y-flag" | "regexpYFlag" | "regexpY" | "no-resizable-and-growable-arraybuffers" | "resizable-and-growable-arraybuffers" | "resizableAndGrowableArraybuffers" | "no-rest-parameters" | "rest-parameters" | "restParameters" | "no-rest-spread-properties" | "rest-spread-properties" | "restSpreadProperties" | "no-set" | "set" | "no-shadow-catch-param" | "shadow-catch-param" | "shadowCatchParam" | "no-shared-array-buffer" | "shared-array-buffer" | "sharedArrayBuffer" | "no-spread-elements" | "spread-elements" | "spreadElements" | "no-string-create-html-methods" | "string-create-html-methods" | "stringCreateHtmlMethods" | "no-string-fromcodepoint" | "string-fromcodepoint" | "stringFromcodepoint" | "no-string-prototype-codepointat" | "string-prototype-codepointat" | "stringPrototypeCodepointat" | "no-string-prototype-endswith" | "string-prototype-endswith" | "stringPrototypeEndswith" | "no-string-prototype-includes" | "string-prototype-includes" | "stringPrototypeIncludes" | "no-string-prototype-iswellformed-towellformed" | "string-prototype-iswellformed-towellformed" | "stringPrototypeIswellformedTowellformed" | "no-string-prototype-matchall" | "string-prototype-matchall" | "stringPrototypeMatchall" | "no-string-prototype-normalize" | "string-prototype-normalize" | "stringPrototypeNormalize" | "no-string-prototype-padstart-padend" | "string-prototype-padstart-padend" | "stringPrototypePadstartPadend" | "no-string-prototype-repeat" | "string-prototype-repeat" | "stringPrototypeRepeat" | "no-string-prototype-replaceall" | "string-prototype-replaceall" | "stringPrototypeReplaceall" | "no-string-prototype-startswith" | "string-prototype-startswith" | "stringPrototypeStartswith" | "no-string-prototype-substr" | "string-prototype-substr" | "stringPrototypeSubstr" | "no-string-prototype-trim" | "string-prototype-trim" | "stringPrototypeTrim" | "no-string-prototype-trimleft-trimright" | "string-prototype-trimleft-trimright" | "stringPrototypeTrimleftTrimright" | "no-string-prototype-trimstart-trimend" | "string-prototype-trimstart-trimend" | "stringPrototypeTrimstartTrimend" | "no-string-raw" | "string-raw" | "stringRaw" | "no-subclassing-builtins" | "subclassing-builtins" | "subclassingBuiltins" | "no-symbol-prototype-description" | "symbol-prototype-description" | "symbolPrototypeDescription" | "no-symbol" | "symbol" | "no-template-literals" | "template-literals" | "templateLiterals" | "no-top-level-await" | "top-level-await" | "topLevelAwait" | "no-trailing-commas" | "trailing-commas" | "trailingCommas" | "no-trailing-function-commas" | "trailing-function-commas" | "trailingFunctionCommas" | "trailingCommasInFunctions" | "no-typed-arrays" | "typed-arrays" | "typedArrays" | "no-unicode-codepoint-escapes" | "unicode-codepoint-escapes" | "unicodeCodepointEscapes" | "unicodeCodePointEscapes" | "no-weak-map" | "weak-map" | "weakMap" | "no-weak-set" | "weak-set" | "weakSet" | "no-weakrefs" | "weakrefs")[]
}]
// ----- node/no-unsupported-features/node-builtins -----
type NodeNoUnsupportedFeaturesNodeBuiltins = []|[{
  version?: string
  allowExperimental?: boolean
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.globalAgent" | "http.createServer" | "http.get" | "http.request" | "http.Agent" | "http.Server" | "inspector" | "inspector.Session" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.isBuiltin" | "module.register" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.isBuiltin" | "module.Module.register" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.SocketAddress" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "test" | "test.after" | "test.afterEach" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.rootCertificates" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.DEFAULT_CIPHERS" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.getCiphers" | "tls.SecureContext" | "tls.CryptoStream" | "tls.SecurePair" | "tls.Server" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.isMainThread" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.constants" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.deflate" | "zlib.deflateSync" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateSync" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib")[]
}]
// ----- node/prefer-global/buffer -----
type NodePreferGlobalBuffer = []|[("always" | "never")]
// ----- node/prefer-global/console -----
type NodePreferGlobalConsole = []|[("always" | "never")]
// ----- node/prefer-global/process -----
type NodePreferGlobalProcess = []|[("always" | "never")]
// ----- node/prefer-global/text-decoder -----
type NodePreferGlobalTextDecoder = []|[("always" | "never")]
// ----- node/prefer-global/text-encoder -----
type NodePreferGlobalTextEncoder = []|[("always" | "never")]
// ----- node/prefer-global/url -----
type NodePreferGlobalUrl = []|[("always" | "never")]
// ----- node/prefer-global/url-search-params -----
type NodePreferGlobalUrlSearchParams = []|[("always" | "never")]
// ----- node/prefer-node-protocol -----
type NodePreferNodeProtocol = []|[{
  version?: string
}]
// ----- node/shebang -----
type NodeShebang = []|[{
  convertPath?: ({
    
    [k: string]: [string, string]
  } | [{
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  }, ...({
    
    include: [string, ...(string)[]]
    exclude?: string[]
    
    replace: [string, string]
  })[]])
  ignoreUnpublished?: boolean
  additionalExecutables?: string[]
  executableMap?: {
    [k: string]: string
  }
}]

declare function node(options?: node.Options): Promise<[{
    readonly name: "w5s/node/setup";
    readonly plugins: {
        readonly node: eslint.ESLint.Plugin & {
            configs: eslint_plugin_n.Configs;
        };
    };
}, {
    readonly name: "w5s/node/rules";
    readonly rules: {
        readonly 'node/callback-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/exports-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/file-extension-in-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/global-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/handle-callback-err'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/hashbang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-callback-literal'?: eslint.Linter.RuleEntry<[]>;
        'node/no-deprecated-api': eslint.Linter.RuleEntry<undefined>;
        'node/no-exports-assign': eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-extraneous-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-extraneous-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-hide-core-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-mixed-requires'?: eslint.Linter.RuleEntry<undefined>;
        'node/no-new-require': eslint.Linter.RuleEntry<[]>;
        'node/no-path-concat': eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-process-env'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-restricted-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-restricted-require'?: eslint.Linter.RuleEntry<undefined>;
        'node/no-sync': eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-bin'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/node-builtins'?: eslint.Linter.RuleEntry<undefined>;
        'node/prefer-global/buffer': eslint.Linter.RuleEntry<undefined>;
        'node/prefer-global/console': eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/process'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-decoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-encoder'?: eslint.Linter.RuleEntry<undefined>;
        'node/prefer-global/url': eslint.Linter.RuleEntry<undefined>;
        'node/prefer-global/url-search-params': eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-node-protocol'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-promises/dns'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/prefer-promises/fs'?: eslint.Linter.RuleEntry<[]>;
        'node/process-exit-as-throw': eslint.Linter.RuleEntry<[]>;
        readonly 'node/shebang'?: eslint.Linter.RuleEntry<undefined>;
    };
}]>;
declare namespace node {
    type Rules = RuleOptions$1;
    interface Options extends Omit<PluginOptionsBase<Rules>, 'files'> {
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
   * require or disallow block style mappings.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html
   */
  'yml/block-mapping'?: Linter.RuleEntry<YmlBlockMapping>
  /**
   * enforce consistent line breaks after `:` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html
   */
  'yml/block-mapping-colon-indicator-newline'?: Linter.RuleEntry<YmlBlockMappingColonIndicatorNewline>
  /**
   * enforce consistent line breaks after `?` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html
   */
  'yml/block-mapping-question-indicator-newline'?: Linter.RuleEntry<YmlBlockMappingQuestionIndicatorNewline>
  /**
   * require or disallow block style sequences.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html
   */
  'yml/block-sequence'?: Linter.RuleEntry<YmlBlockSequence>
  /**
   * enforce consistent line breaks after `-` indicator
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html
   */
  'yml/block-sequence-hyphen-indicator-newline'?: Linter.RuleEntry<YmlBlockSequenceHyphenIndicatorNewline>
  /**
   * enforce YAML file extension
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html
   */
  'yml/file-extension'?: Linter.RuleEntry<YmlFileExtension>
  /**
   * enforce consistent line breaks inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html
   */
  'yml/flow-mapping-curly-newline'?: Linter.RuleEntry<YmlFlowMappingCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html
   */
  'yml/flow-mapping-curly-spacing'?: Linter.RuleEntry<YmlFlowMappingCurlySpacing>
  /**
   * enforce linebreaks after opening and before closing flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html
   */
  'yml/flow-sequence-bracket-newline'?: Linter.RuleEntry<YmlFlowSequenceBracketNewline>
  /**
   * enforce consistent spacing inside flow sequence brackets
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html
   */
  'yml/flow-sequence-bracket-spacing'?: Linter.RuleEntry<YmlFlowSequenceBracketSpacing>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html
   */
  'yml/indent'?: Linter.RuleEntry<YmlIndent>
  /**
   * enforce naming convention to key names
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html
   */
  'yml/key-name-casing'?: Linter.RuleEntry<YmlKeyNameCasing>
  /**
   * enforce consistent spacing between keys and values in mapping pairs
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html
   */
  'yml/key-spacing'?: Linter.RuleEntry<YmlKeySpacing>
  /**
   * disallow empty document
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html
   */
  'yml/no-empty-document'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping keys
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html
   */
  'yml/no-empty-key'?: Linter.RuleEntry<[]>
  /**
   * disallow empty mapping values
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html
   */
  'yml/no-empty-mapping-value'?: Linter.RuleEntry<[]>
  /**
   * disallow empty sequence entries
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html
   */
  'yml/no-empty-sequence-entry'?: Linter.RuleEntry<[]>
  /**
   * disallow irregular whitespace
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html
   */
  'yml/no-irregular-whitespace'?: Linter.RuleEntry<YmlNoIrregularWhitespace>
  /**
   * disallow multiple empty lines
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html
   */
  'yml/no-multiple-empty-lines'?: Linter.RuleEntry<YmlNoMultipleEmptyLines>
  /**
   * disallow tabs for indentation.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html
   */
  'yml/no-tab-indent'?: Linter.RuleEntry<[]>
  /**
   * disallow trailing zeros for floats
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html
   */
  'yml/no-trailing-zeros'?: Linter.RuleEntry<[]>
  /**
   * require or disallow plain style scalar.
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html
   */
  'yml/plain-scalar'?: Linter.RuleEntry<YmlPlainScalar>
  /**
   * enforce the consistent use of either double, or single quotes
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html
   */
  'yml/quotes'?: Linter.RuleEntry<YmlQuotes>
  /**
   * disallow mapping keys other than strings
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html
   */
  'yml/require-string-key'?: Linter.RuleEntry<[]>
  /**
   * require mapping keys to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html
   */
  'yml/sort-keys'?: Linter.RuleEntry<YmlSortKeys>
  /**
   * require sequence values to be sorted
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html
   */
  'yml/sort-sequence-values'?: Linter.RuleEntry<YmlSortSequenceValues>
  /**
   * enforce consistent spacing after the `#` in a comment
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html
   */
  'yml/spaced-comment'?: Linter.RuleEntry<YmlSpacedComment>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html
   */
  'yml/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- yml/block-mapping -----
type YmlBlockMapping = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yml/block-mapping-colon-indicator-newline -----
type YmlBlockMappingColonIndicatorNewline = []|[("always" | "never")]
// ----- yml/block-mapping-question-indicator-newline -----
type YmlBlockMappingQuestionIndicatorNewline = []|[("always" | "never")]
// ----- yml/block-sequence -----
type YmlBlockSequence = []|[(("always" | "never") | {
  singleline?: ("always" | "never" | "ignore")
  multiline?: ("always" | "never" | "ignore")
})]
// ----- yml/block-sequence-hyphen-indicator-newline -----
type YmlBlockSequenceHyphenIndicatorNewline = []|[("always" | "never")]|[("always" | "never"), {
  nestedHyphen?: ("always" | "never")
  blockMapping?: ("always" | "never")
}]
// ----- yml/file-extension -----
type YmlFileExtension = []|[{
  extension?: ("yaml" | "yml")
  caseSensitive?: boolean
}]
// ----- yml/flow-mapping-curly-newline -----
type YmlFlowMappingCurlyNewline = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]
// ----- yml/flow-mapping-curly-spacing -----
type YmlFlowMappingCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- yml/flow-sequence-bracket-newline -----
type YmlFlowSequenceBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- yml/flow-sequence-bracket-spacing -----
type YmlFlowSequenceBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- yml/indent -----
type YmlIndent = []|[number]|[number, {
  indentBlockSequences?: boolean
  indicatorValueIndent?: number
}]
// ----- yml/key-name-casing -----
type YmlKeyNameCasing = []|[{
  camelCase?: boolean
  PascalCase?: boolean
  SCREAMING_SNAKE_CASE?: boolean
  "kebab-case"?: boolean
  snake_case?: boolean
  ignores?: string[]
}]
// ----- yml/key-spacing -----
type YmlKeySpacing = []|[({
  align?: (("colon" | "value") | {
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
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
      on?: ("colon" | "value")
      mode?: ("strict" | "minimum")
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
    on?: ("colon" | "value")
    mode?: ("strict" | "minimum")
    beforeColon?: boolean
    afterColon?: boolean
  }
})]
// ----- yml/no-irregular-whitespace -----
type YmlNoIrregularWhitespace = []|[{
  skipComments?: boolean
  skipQuotedScalars?: boolean
}]
// ----- yml/no-multiple-empty-lines -----
type YmlNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- yml/plain-scalar -----
type YmlPlainScalar = []|[("always" | "never")]|[("always" | "never"), {
  ignorePatterns?: string[]
  overrides?: {
    mappingKey?: ("always" | "never" | null)
  }
}]
// ----- yml/quotes -----
type YmlQuotes = []|[{
  prefer?: ("double" | "single")
  avoidEscape?: boolean
}]
// ----- yml/sort-keys -----
type YmlSortKeys = ([{
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
// ----- yml/sort-sequence-values -----
type YmlSortSequenceValues = [{
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
// ----- yml/spaced-comment -----
type YmlSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]

declare function yml(options?: yml.Options): Promise<[{
    readonly name: "w5s/yml/setup";
    readonly plugins: {
        readonly yml: {
            meta: typeof eslint_plugin_yml_lib_meta_js;
            configs: {
                base: {
                    plugins: string[];
                    overrides: {
                        files: string[];
                        parser: string;
                        rules: {
                            "no-irregular-whitespace": string;
                            "no-unused-vars": string;
                            "spaced-comment": string;
                        };
                    }[];
                };
                recommended: {
                    extends: string[];
                    rules: {
                        "yml/no-empty-document": string;
                        "yml/no-empty-key": string;
                        "yml/no-empty-mapping-value": string;
                        "yml/no-empty-sequence-entry": string;
                        "yml/no-irregular-whitespace": string;
                        "yml/no-tab-indent": string;
                        "yml/vue-custom-block/no-parsing-error": string;
                    };
                };
                standard: {
                    extends: string[];
                    rules: {
                        "yml/block-mapping-question-indicator-newline": string;
                        "yml/block-mapping": string;
                        "yml/block-sequence-hyphen-indicator-newline": string;
                        "yml/block-sequence": string;
                        "yml/flow-mapping-curly-newline": string;
                        "yml/flow-mapping-curly-spacing": string;
                        "yml/flow-sequence-bracket-newline": string;
                        "yml/flow-sequence-bracket-spacing": string;
                        "yml/indent": string;
                        "yml/key-spacing": string;
                        "yml/no-empty-document": string;
                        "yml/no-empty-key": string;
                        "yml/no-empty-mapping-value": string;
                        "yml/no-empty-sequence-entry": string;
                        "yml/no-irregular-whitespace": string;
                        "yml/no-tab-indent": string;
                        "yml/plain-scalar": string;
                        "yml/quotes": string;
                        "yml/spaced-comment": string;
                        "yml/vue-custom-block/no-parsing-error": string;
                    };
                };
                prettier: {
                    extends: string[];
                    rules: {
                        "yml/block-mapping-colon-indicator-newline": string;
                        "yml/block-mapping-question-indicator-newline": string;
                        "yml/block-sequence-hyphen-indicator-newline": string;
                        "yml/flow-mapping-curly-newline": string;
                        "yml/flow-mapping-curly-spacing": string;
                        "yml/flow-sequence-bracket-newline": string;
                        "yml/flow-sequence-bracket-spacing": string;
                        "yml/indent": string;
                        "yml/key-spacing": string;
                        "yml/no-multiple-empty-lines": string;
                        "yml/no-trailing-zeros": string;
                        "yml/quotes": string;
                    };
                };
                "flat/base": ({
                    plugins: {
                        readonly yml: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof yaml_eslint_parser;
                    };
                    rules: {
                        "no-irregular-whitespace": "off";
                        "no-unused-vars": "off";
                        "spaced-comment": "off";
                    };
                    plugins?: undefined;
                })[];
                "flat/recommended": ({
                    plugins: {
                        readonly yml: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof yaml_eslint_parser;
                    };
                    rules: {
                        "no-irregular-whitespace": "off";
                        "no-unused-vars": "off";
                        "spaced-comment": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "yml/no-empty-document": "error";
                        "yml/no-empty-key": "error";
                        "yml/no-empty-mapping-value": "error";
                        "yml/no-empty-sequence-entry": "error";
                        "yml/no-irregular-whitespace": "error";
                        "yml/no-tab-indent": "error";
                        "yml/vue-custom-block/no-parsing-error": "error";
                    };
                })[];
                "flat/standard": ({
                    plugins: {
                        readonly yml: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof yaml_eslint_parser;
                    };
                    rules: {
                        "no-irregular-whitespace": "off";
                        "no-unused-vars": "off";
                        "spaced-comment": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "yml/block-mapping-question-indicator-newline": "error";
                        "yml/block-mapping": "error";
                        "yml/block-sequence-hyphen-indicator-newline": "error";
                        "yml/block-sequence": "error";
                        "yml/flow-mapping-curly-newline": "error";
                        "yml/flow-mapping-curly-spacing": "error";
                        "yml/flow-sequence-bracket-newline": "error";
                        "yml/flow-sequence-bracket-spacing": "error";
                        "yml/indent": "error";
                        "yml/key-spacing": "error";
                        "yml/no-empty-document": "error";
                        "yml/no-empty-key": "error";
                        "yml/no-empty-mapping-value": "error";
                        "yml/no-empty-sequence-entry": "error";
                        "yml/no-irregular-whitespace": "error";
                        "yml/no-tab-indent": "error";
                        "yml/plain-scalar": "error";
                        "yml/quotes": "error";
                        "yml/spaced-comment": "error";
                        "yml/vue-custom-block/no-parsing-error": "error";
                    };
                })[];
                "flat/prettier": ({
                    plugins: {
                        readonly yml: eslint.ESLint.Plugin;
                    };
                    files?: undefined;
                    languageOptions?: undefined;
                    rules?: undefined;
                } | {
                    files: string[];
                    languageOptions: {
                        parser: typeof yaml_eslint_parser;
                    };
                    rules: {
                        "no-irregular-whitespace": "off";
                        "no-unused-vars": "off";
                        "spaced-comment": "off";
                    };
                    plugins?: undefined;
                } | {
                    rules: {
                        "yml/block-mapping-colon-indicator-newline": "off";
                        "yml/block-mapping-question-indicator-newline": "off";
                        "yml/block-sequence-hyphen-indicator-newline": "off";
                        "yml/flow-mapping-curly-newline": "off";
                        "yml/flow-mapping-curly-spacing": "off";
                        "yml/flow-sequence-bracket-newline": "off";
                        "yml/flow-sequence-bracket-spacing": "off";
                        "yml/indent": "off";
                        "yml/key-spacing": "off";
                        "yml/no-multiple-empty-lines": "off";
                        "yml/no-trailing-zeros": "off";
                        "yml/quotes": "off";
                    };
                })[];
            };
            rules: {
                [key: string]: eslint_plugin_yml_lib_types_js.RuleModule;
            };
        };
    };
}, {
    readonly files: (string | string[])[];
    readonly languageOptions: {
        readonly parser: typeof yaml_eslint_parser;
    };
    readonly name: "w5s/yml/rules";
    readonly rules: {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-empty-document'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-mapping-value'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-empty-sequence-entry'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-irregular-whitespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-tab-indent'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
        readonly "no-irregular-whitespace": "off";
        readonly "no-unused-vars": "off";
        readonly "spaced-comment": "off";
    } | {
        "yml/block-mapping": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        'yml/block-mapping-question-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        "yml/block-sequence": eslint.Linter.RuleEntry<undefined>;
        'yml/block-sequence-hyphen-indicator-newline': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-mapping-curly-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-newline': eslint.Linter.RuleEntry<undefined>;
        'yml/flow-sequence-bracket-spacing': eslint.Linter.RuleEntry<undefined>;
        'yml/indent': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        'yml/key-spacing': eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'yml/no-tab-indent': eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        "yml/plain-scalar": eslint.Linter.RuleEntry<undefined>;
        'yml/quotes': eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        'yml/spaced-comment': eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/array-bracket-spacing': ["error", string];
        readonly 'yml/comma-dangle': ["error", string];
        readonly 'yml/comma-style': ["error", string];
        readonly 'yml/object-curly-newline': ["error", {
            consistent: boolean;
            multiline: boolean;
        }];
        readonly 'yml/object-curly-spacing': ["error", string];
        readonly 'yml/object-property-newline': ["error", {
            allowMultiplePropertiesPerLine: boolean;
        }];
        readonly 'yml/quote-props': "error";
    } | {
        readonly 'yml/block-mapping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-colon-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-mapping-question-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/block-sequence-hyphen-indicator-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/file-extension'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-mapping-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/flow-sequence-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-empty-document": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-key": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-mapping-value": eslint.Linter.RuleEntry<[]>;
        "yml/no-empty-sequence-entry": eslint.Linter.RuleEntry<[]>;
        "yml/no-irregular-whitespace": eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        "yml/no-tab-indent": eslint.Linter.RuleEntry<[]>;
        readonly 'yml/no-trailing-zeros'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/plain-scalar'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/require-string-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'yml/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/sort-sequence-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'yml/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        "yml/vue-custom-block/no-parsing-error": eslint.Linter.RuleEntry<[]>;
    };
}]>;
declare namespace yml {
    type Rules = RuleOptions;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

interface DefineConfigOptions {
    import?: boolean | imports.Options;
    jsonc?: boolean | jsonc.Options;
    node?: boolean | node.Options;
    yml?: boolean | yml.Options;
}
declare function defineConfig(options?: DefineConfigOptions): Promise<Config[]>;

export { type DefineConfigOptions, defineConfig as default, defineConfig, imports, jsonc, node, yml };
