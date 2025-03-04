import * as eslint from 'eslint';
import { Linter } from 'eslint';
import * as _stylistic_eslint_plugin from '@stylistic/eslint-plugin';
import { StylisticCustomizeOptions } from '@stylistic/eslint-plugin';
import * as eslint_plugin_n from 'eslint-plugin-n';
import * as _typescript_eslint_parser from '@typescript-eslint/parser';
import * as _typescript_eslint_eslint_plugin_use_at_your_own_risk_rules from '@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules';
import * as _typescript_eslint_utils_ts_eslint from '@typescript-eslint/utils/ts-eslint';

declare function ignores(options?: ignores.Options): Promise<[{
    readonly ignores: Array<string>;
    readonly name: "w5s/ignore";
}]>;
declare namespace ignores {
    interface Options {
        ignores?: string[];
    }
}

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
        quotes: "single" | "double";
        jsx: true;
        semi: boolean;
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

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$7 {}
  }
}

interface RuleOptions$7 {
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

declare function jsonc(options?: jsonc.Options): Promise<readonly Config[]>;
declare namespace jsonc {
    type Rules = RuleOptions$7;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$6 {}
  }
}

interface RuleOptions$6 {
  /**
   * Checks that `@access` tags have a valid value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header
   */
  'jsdoc/check-access'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header
   */
  'jsdoc/check-alignment'?: Linter.RuleEntry<JsdocCheckAlignment>
  /**
   * @deprecated - Use `getJsdocProcessorPlugin` processor; ensures that (JavaScript) samples within `@example` tags adhere to ESLint rules.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header
   */
  'jsdoc/check-examples'?: Linter.RuleEntry<JsdocCheckExamples>
  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header
   */
  'jsdoc/check-indentation'?: Linter.RuleEntry<JsdocCheckIndentation>
  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header
   */
  'jsdoc/check-line-alignment'?: Linter.RuleEntry<JsdocCheckLineAlignment>
  /**
   * Checks for dupe `@param` names, that nested param names have roots, and that parameter names in function declarations match JSDoc param names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header
   */
  'jsdoc/check-param-names'?: Linter.RuleEntry<JsdocCheckParamNames>
  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header
   */
  'jsdoc/check-property-names'?: Linter.RuleEntry<JsdocCheckPropertyNames>
  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header
   */
  'jsdoc/check-syntax'?: Linter.RuleEntry<[]>
  /**
   * Reports invalid block tag names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header
   */
  'jsdoc/check-tag-names'?: Linter.RuleEntry<JsdocCheckTagNames>
  /**
   * Checks that any `@template` names are actually used in the connected `@typedef` or type alias.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-template-names.md#repos-sticky-header
   */
  'jsdoc/check-template-names'?: Linter.RuleEntry<[]>
  /**
   * Reports types deemed invalid (customizable and with defaults, for preventing and/or recommending replacements).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header
   */
  'jsdoc/check-types'?: Linter.RuleEntry<JsdocCheckTypes>
  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header
   */
  'jsdoc/check-values'?: Linter.RuleEntry<JsdocCheckValues>
  /**
   * Converts non-JSDoc comments preceding or following nodes into JSDoc ones
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/convert-to-jsdoc-comments.md#repos-sticky-header
   */
  'jsdoc/convert-to-jsdoc-comments'?: Linter.RuleEntry<JsdocConvertToJsdocComments>
  /**
   * Checks tags that are expected to be empty (e.g., `@abstract` or `@async`), reporting if they have content
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header
   */
  'jsdoc/empty-tags'?: Linter.RuleEntry<JsdocEmptyTags>
  /**
   * Reports use of JSDoc tags in non-tag positions (in the default "typescript" mode).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/escape-inline-tags.md#repos-sticky-header
   */
  'jsdoc/escape-inline-tags'?: Linter.RuleEntry<JsdocEscapeInlineTags>
  /**
   * Prohibits use of `@implements` on non-constructor functions (to enforce the tag only being used on classes/constructors).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header
   */
  'jsdoc/implements-on-classes'?: Linter.RuleEntry<JsdocImplementsOnClasses>
  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header
   */
  'jsdoc/imports-as-dependencies'?: Linter.RuleEntry<[]>
  /**
   * This rule reports doc comments that only restate their attached name.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header
   */
  'jsdoc/informative-docs'?: Linter.RuleEntry<JsdocInformativeDocs>
  /**
   * Enforces minimum number of newlines before JSDoc comment blocks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/lines-before-block.md#repos-sticky-header
   */
  'jsdoc/lines-before-block'?: Linter.RuleEntry<JsdocLinesBeforeBlock>
  /**
   * Enforces a regular expression pattern on descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header
   */
  'jsdoc/match-description'?: Linter.RuleEntry<JsdocMatchDescription>
  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header
   */
  'jsdoc/match-name'?: Linter.RuleEntry<JsdocMatchName>
  /**
   * Controls how and whether JSDoc blocks can be expressed as single or multiple line blocks.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header
   */
  'jsdoc/multiline-blocks'?: Linter.RuleEntry<JsdocMultilineBlocks>
  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a JSDoc block.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header
   */
  'jsdoc/no-bad-blocks'?: Linter.RuleEntry<JsdocNoBadBlocks>
  /**
   * If tags are present, this rule will prevent empty lines in the block description. If no tags are present, this rule will prevent extra empty lines in the block description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header
   */
  'jsdoc/no-blank-block-descriptions'?: Linter.RuleEntry<[]>
  /**
   * Removes empty blocks with nothing but possibly line breaks
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header
   */
  'jsdoc/no-blank-blocks'?: Linter.RuleEntry<JsdocNoBlankBlocks>
  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header
   */
  'jsdoc/no-defaults'?: Linter.RuleEntry<JsdocNoDefaults>
  /**
   * Reports when certain comment structures are always expected.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header
   */
  'jsdoc/no-missing-syntax'?: Linter.RuleEntry<JsdocNoMissingSyntax>
  /**
   * Prevents use of multiple asterisks at the beginning of lines.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header
   */
  'jsdoc/no-multi-asterisks'?: Linter.RuleEntry<JsdocNoMultiAsterisks>
  /**
   * Reports when certain comment structures are present.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header
   */
  'jsdoc/no-restricted-syntax'?: Linter.RuleEntry<JsdocNoRestrictedSyntax>
  /**
   * This rule reports types being used on `@param` or `@returns` (redundant with TypeScript).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header
   */
  'jsdoc/no-types'?: Linter.RuleEntry<JsdocNoTypes>
  /**
   * Besides some expected built-in types, prohibits any types not specified as globals or within `@typedef`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header
   */
  'jsdoc/no-undefined-types'?: Linter.RuleEntry<JsdocNoUndefinedTypes>
  /**
   * Prefer `@import` tags to inline `import()` statements.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/prefer-import-tag.md#repos-sticky-header
   */
  'jsdoc/prefer-import-tag'?: Linter.RuleEntry<JsdocPreferImportTag>
  /**
   * Reports use of `any` or `*` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-any-type.md#repos-sticky-header
   */
  'jsdoc/reject-any-type'?: Linter.RuleEntry<[]>
  /**
   * Reports use of `Function` type
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/reject-function-type.md#repos-sticky-header
   */
  'jsdoc/reject-function-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header
   */
  'jsdoc/require-asterisk-prefix'?: Linter.RuleEntry<JsdocRequireAsteriskPrefix>
  /**
   * Requires that all functions (and potentially other contexts) have a description.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header
   */
  'jsdoc/require-description'?: Linter.RuleEntry<JsdocRequireDescription>
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header
   */
  'jsdoc/require-description-complete-sentence'?: Linter.RuleEntry<JsdocRequireDescriptionCompleteSentence>
  /**
   * Requires that all functions (and potentially other contexts) have examples.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header
   */
  'jsdoc/require-example'?: Linter.RuleEntry<JsdocRequireExample>
  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header
   */
  'jsdoc/require-file-overview'?: Linter.RuleEntry<JsdocRequireFileOverview>
  /**
   * Requires a hyphen before the `@param` description (and optionally before `@property` descriptions).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header
   */
  'jsdoc/require-hyphen-before-param-description'?: Linter.RuleEntry<JsdocRequireHyphenBeforeParamDescription>
  /**
   * Checks for presence of JSDoc comments, on functions and potentially other contexts (optionally limited to exports).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header
   */
  'jsdoc/require-jsdoc'?: Linter.RuleEntry<JsdocRequireJsdoc>
  /**
   * Requires a description for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-description.md#repos-sticky-header
   */
  'jsdoc/require-next-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@next` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-next-type.md#repos-sticky-header
   */
  'jsdoc/require-next-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that all function parameters are documented with a `@param` tag.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header
   */
  'jsdoc/require-param'?: Linter.RuleEntry<JsdocRequireParam>
  /**
   * Requires that each `@param` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header
   */
  'jsdoc/require-param-description'?: Linter.RuleEntry<JsdocRequireParamDescription>
  /**
   * Requires that all `@param` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header
   */
  'jsdoc/require-param-name'?: Linter.RuleEntry<JsdocRequireParamName>
  /**
   * Requires that each `@param` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header
   */
  'jsdoc/require-param-type'?: Linter.RuleEntry<JsdocRequireParamType>
  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header
   */
  'jsdoc/require-property'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a `description` value.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header
   */
  'jsdoc/require-property-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that all `@property` tags have names.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header
   */
  'jsdoc/require-property-name'?: Linter.RuleEntry<[]>
  /**
   * Requires that each `@property` tag has a type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header
   */
  'jsdoc/require-property-type'?: Linter.RuleEntry<[]>
  /**
   * Requires that returns are documented with `@returns`.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header
   */
  'jsdoc/require-returns'?: Linter.RuleEntry<JsdocRequireReturns>
  /**
   * Requires a return statement in function body if a `@returns` tag is specified in JSDoc comment(and reports if multiple `@returns` tags are present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header
   */
  'jsdoc/require-returns-check'?: Linter.RuleEntry<JsdocRequireReturnsCheck>
  /**
   * Requires that the `@returns` tag has a `description` value (not including `void`/`undefined` type returns).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header
   */
  'jsdoc/require-returns-description'?: Linter.RuleEntry<JsdocRequireReturnsDescription>
  /**
   * Requires that `@returns` tag has type value (in curly brackets).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header
   */
  'jsdoc/require-returns-type'?: Linter.RuleEntry<JsdocRequireReturnsType>
  /**
   * Requires tags be present, optionally for specific contexts
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-tags.md#repos-sticky-header
   */
  'jsdoc/require-tags'?: Linter.RuleEntry<JsdocRequireTags>
  /**
   * Requires `@template` tags be present when type parameters are used.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template.md#repos-sticky-header
   */
  'jsdoc/require-template'?: Linter.RuleEntry<JsdocRequireTemplate>
  /**
   * Requires a description for `@template` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-template-description.md#repos-sticky-header
   */
  'jsdoc/require-template-description'?: Linter.RuleEntry<[]>
  /**
   * Requires that throw statements are documented with `@throws` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header
   */
  'jsdoc/require-throws'?: Linter.RuleEntry<JsdocRequireThrows>
  /**
   * Requires a description for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-description.md#repos-sticky-header
   */
  'jsdoc/require-throws-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@throws` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws-type.md#repos-sticky-header
   */
  'jsdoc/require-throws-type'?: Linter.RuleEntry<[]>
  /**
   * Requires yields are documented with `@yields` tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header
   */
  'jsdoc/require-yields'?: Linter.RuleEntry<JsdocRequireYields>
  /**
   * Ensures that if a `@yields` is present that a `yield` (or `yield` with a value) is present in the function body (or that if a `@next` is present that there is a yield with a return value present).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header
   */
  'jsdoc/require-yields-check'?: Linter.RuleEntry<JsdocRequireYieldsCheck>
  /**
   * Requires a description for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-description.md#repos-sticky-header
   */
  'jsdoc/require-yields-description'?: Linter.RuleEntry<[]>
  /**
   * Requires a type for `@yields` tags
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-type.md#repos-sticky-header
   */
  'jsdoc/require-yields-type'?: Linter.RuleEntry<[]>
  /**
   * Sorts tags by a specified sequence according to tag name, optionally adding line breaks between tag groups.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header
   */
  'jsdoc/sort-tags'?: Linter.RuleEntry<JsdocSortTags>
  /**
   * Enforces lines (or no lines) before, after, or between tags.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header
   */
  'jsdoc/tag-lines'?: Linter.RuleEntry<JsdocTagLines>
  /**
   * Auto-escape certain characters that are input within block and tag descriptions.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header
   */
  'jsdoc/text-escaping'?: Linter.RuleEntry<JsdocTextEscaping>
  /**
   * Formats JSDoc type values.
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/type-formatting.md#repos-sticky-header
   */
  'jsdoc/type-formatting'?: Linter.RuleEntry<JsdocTypeFormatting>
  /**
   * Requires all types/namepaths to be valid JSDoc, Closure compiler, or TypeScript types (configurable in settings).
   * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header
   */
  'jsdoc/valid-types'?: Linter.RuleEntry<JsdocValidTypes>
}

/* ======= Declarations ======= */
// ----- jsdoc/check-alignment -----
type JsdocCheckAlignment = []|[{
  
  innerIndent?: number
}]
// ----- jsdoc/check-examples -----
type JsdocCheckExamples = []|[{
  allowInlineConfig?: boolean
  baseConfig?: {
    [k: string]: unknown | undefined
  }
  captionRequired?: boolean
  checkDefaults?: boolean
  checkEslintrc?: boolean
  checkParams?: boolean
  checkProperties?: boolean
  configFile?: string
  exampleCodeRegex?: string
  matchingFileName?: string
  matchingFileNameDefaults?: string
  matchingFileNameParams?: string
  matchingFileNameProperties?: string
  noDefaultExampleRules?: boolean
  paddedIndent?: number
  rejectExampleCodeRegex?: string
  reportUnusedDisableDirectives?: boolean
}]
// ----- jsdoc/check-indentation -----
type JsdocCheckIndentation = []|[{
  
  excludeTags?: string[]
}]
// ----- jsdoc/check-line-alignment -----
type JsdocCheckLineAlignment = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  customSpacings?: {
    
    postDelimiter?: number
    
    postHyphen?: number
    
    postName?: number
    
    postTag?: number
    
    postType?: number
  }
  
  disableWrapIndent?: boolean
  
  preserveMainDescriptionPostDelimiter?: boolean
  
  tags?: string[]
  
  wrapIndent?: string
}]
// ----- jsdoc/check-param-names -----
type JsdocCheckParamNames = []|[{
  
  allowExtraTrailingParamDocs?: boolean
  
  checkDestructured?: boolean
  
  checkRestProperty?: boolean
  
  checkTypesPattern?: string
  
  disableExtraPropertyReporting?: boolean
  
  disableMissingParamChecks?: boolean
  
  enableFixer?: boolean
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/check-property-names -----
type JsdocCheckPropertyNames = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/check-tag-names -----
type JsdocCheckTagNames = []|[{
  
  definedTags?: string[]
  
  enableFixer?: boolean
  
  inlineTags?: string[]
  
  jsxTags?: boolean
  
  typed?: boolean
}]
// ----- jsdoc/check-types -----
type JsdocCheckTypes = []|[{
  
  exemptTagContexts?: {
    
    tag?: string
    
    types?: (boolean | string[])
  }[]
  
  noDefaults?: boolean
  
  unifyParentAndChildTypeChecks?: boolean
}]
// ----- jsdoc/check-values -----
type JsdocCheckValues = []|[{
  
  allowedAuthors?: string[]
  
  allowedLicenses?: (string[] | boolean)
  
  licensePattern?: string
  
  numericOnlyVariation?: boolean
}]
// ----- jsdoc/convert-to-jsdoc-comments -----
type JsdocConvertToJsdocComments = []|[{
  
  allowedPrefixes?: string[]
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  contextsBeforeAndAfter?: (string | {
    context?: string
    inlineCommentBlock?: boolean
  })[]
  
  enableFixer?: boolean
  
  enforceJsdocLineStyle?: ("multi" | "single")
  
  lineOrBlockStyle?: ("block" | "line" | "both")
}]
// ----- jsdoc/empty-tags -----
type JsdocEmptyTags = []|[{
  
  tags?: string[]
}]
// ----- jsdoc/escape-inline-tags -----
type JsdocEscapeInlineTags = []|[{
  
  allowedInlineTags?: string[]
  
  enableFixer?: boolean
  
  fixType?: ("backticks" | "backslash")
}]
// ----- jsdoc/implements-on-classes -----
type JsdocImplementsOnClasses = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/informative-docs -----
type JsdocInformativeDocs = []|[{
  
  aliases?: {
    [k: string]: string[]
  }
  
  excludedTags?: string[]
  
  uselessWords?: string[]
}]
// ----- jsdoc/lines-before-block -----
type JsdocLinesBeforeBlock = []|[{
  
  checkBlockStarts?: boolean
  
  excludedTags?: string[]
  
  ignoreSameLine?: boolean
  
  ignoreSingleLines?: boolean
  
  lines?: number
}]
// ----- jsdoc/match-description -----
type JsdocMatchDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  mainDescription?: (string | boolean | {
    match?: (string | boolean)
    message?: string
  })
  
  matchDescription?: string
  
  message?: string
  
  nonemptyTags?: boolean
  
  tags?: {
    [k: string]: (string | true | {
      match?: (string | true)
      message?: string
    })
  }
}]
// ----- jsdoc/match-name -----
type JsdocMatchName = []|[{
  
  match: {
    
    allowName?: string
    
    comment?: string
    
    context?: string
    
    disallowName?: string
    
    message?: string
    
    replacement?: string
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/multiline-blocks -----
type JsdocMultilineBlocks = []|[{
  
  allowMultipleTags?: boolean
  
  minimumLengthForMultiline?: number
  
  multilineTags?: ("*" | string[])
  
  noFinalLineText?: boolean
  
  noMultilineBlocks?: boolean
  
  noSingleLineBlocks?: boolean
  
  noZeroLineText?: boolean
  
  requireSingleLineUnderCount?: number
  
  singleLineTags?: string[]
}]
// ----- jsdoc/no-bad-blocks -----
type JsdocNoBadBlocks = []|[{
  
  ignore?: string[]
  
  preventAllMultiAsteriskBlocks?: boolean
}]
// ----- jsdoc/no-blank-blocks -----
type JsdocNoBlankBlocks = []|[{
  
  enableFixer?: boolean
}]
// ----- jsdoc/no-defaults -----
type JsdocNoDefaults = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  noOptionalParamNames?: boolean
}]
// ----- jsdoc/no-missing-syntax -----
type JsdocNoMissingSyntax = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
    message?: string
    minimum?: number
  })[]
}]
// ----- jsdoc/no-multi-asterisks -----
type JsdocNoMultiAsterisks = []|[{
  
  allowWhitespace?: boolean
  
  preventAtEnd?: boolean
  
  preventAtMiddleLines?: boolean
}]
// ----- jsdoc/no-restricted-syntax -----
type JsdocNoRestrictedSyntax = []|[{
  
  contexts: (string | {
    comment?: string
    context?: string
    message?: string
  })[]
}]
// ----- jsdoc/no-types -----
type JsdocNoTypes = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/no-undefined-types -----
type JsdocNoUndefinedTypes = []|[{
  
  checkUsedTypedefs?: boolean
  
  definedTypes?: string[]
  
  disableReporting?: boolean
  
  markVariablesAsUsed?: boolean
}]
// ----- jsdoc/prefer-import-tag -----
type JsdocPreferImportTag = []|[{
  
  enableFixer?: boolean
  
  exemptTypedefs?: boolean
  
  outputType?: ("named-import" | "namespaced-import")
}]
// ----- jsdoc/require-asterisk-prefix -----
type JsdocRequireAsteriskPrefix = []|[("always" | "never" | "any")]|[("always" | "never" | "any"), {
  
  tags?: {
    
    always?: string[]
    
    any?: string[]
    
    never?: string[]
  }
}]
// ----- jsdoc/require-description -----
type JsdocRequireDescription = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  descriptionStyle?: ("body" | "tag" | "any")
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-description-complete-sentence -----
type JsdocRequireDescriptionCompleteSentence = []|[{
  
  abbreviations?: string[]
  
  newlineBeforeCapsAssumesBadSentenceEnd?: boolean
  
  tags?: string[]
}]
// ----- jsdoc/require-example -----
type JsdocRequireExample = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  checkSetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  exemptNoArguments?: boolean
}]
// ----- jsdoc/require-file-overview -----
type JsdocRequireFileOverview = []|[{
  
  tags?: {
    [k: string]: {
      initialCommentsOnly?: boolean
      mustExist?: boolean
      preventDuplicates?: boolean
    }
  }
}]
// ----- jsdoc/require-hyphen-before-param-description -----
type JsdocRequireHyphenBeforeParamDescription = []|[("always" | "never")]|[("always" | "never"), {
  
  tags?: ({
    [k: string]: ("always" | "never")
  } | "any")
}]
// ----- jsdoc/require-jsdoc -----
type JsdocRequireJsdoc = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: (boolean | "no-setter")
  
  checkSetters?: (boolean | "no-getter")
  
  contexts?: (string | {
    context?: string
    inlineCommentBlock?: boolean
    minLineCount?: number
  })[]
  
  enableFixer?: boolean
  
  exemptEmptyConstructors?: boolean
  
  exemptEmptyFunctions?: boolean
  
  exemptOverloadedImplementations?: boolean
  
  fixerMessage?: string
  
  minLineCount?: number
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
  
  require?: {
    
    ArrowFunctionExpression?: boolean
    
    ClassDeclaration?: boolean
    
    ClassExpression?: boolean
    
    FunctionDeclaration?: boolean
    
    FunctionExpression?: boolean
    
    MethodDefinition?: boolean
  }
  
  skipInterveningOverloadedDeclarations?: boolean
}]
// ----- jsdoc/require-param -----
type JsdocRequireParam = []|[{
  
  autoIncrementBase?: number
  
  checkConstructors?: boolean
  
  checkDestructured?: boolean
  
  checkDestructuredRoots?: boolean
  
  checkGetters?: boolean
  
  checkRestProperty?: boolean
  
  checkSetters?: boolean
  
  checkTypesPattern?: string
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  enableFixer?: boolean
  
  enableRestElementFixer?: boolean
  
  enableRootFixer?: boolean
  
  exemptedBy?: string[]
  
  ignoreWhenAllParamsMissing?: boolean
  
  interfaceExemptsParamsCheck?: boolean
  
  unnamedRootBase?: string[]
  
  useDefaultObjectProperties?: boolean
}]
// ----- jsdoc/require-param-description -----
type JsdocRequireParamDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootDescription?: string
  
  setDefaultDestructuredRootDescription?: boolean
}]
// ----- jsdoc/require-param-name -----
type JsdocRequireParamName = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-param-type -----
type JsdocRequireParamType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  defaultDestructuredRootType?: string
  
  setDefaultDestructuredRootType?: boolean
}]
// ----- jsdoc/require-returns -----
type JsdocRequireReturns = []|[{
  
  checkConstructors?: boolean
  
  checkGetters?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
    forceRequireReturn?: boolean
  })[]
  
  enableFixer?: boolean
  
  exemptedBy?: string[]
  
  forceRequireReturn?: boolean
  
  forceReturnsWithAsync?: boolean
  
  publicOnly?: (boolean | {
    ancestorsOnly?: boolean
    cjs?: boolean
    esm?: boolean
    window?: boolean
  })
}]
// ----- jsdoc/require-returns-check -----
type JsdocRequireReturnsCheck = []|[{
  
  exemptAsync?: boolean
  
  exemptGenerators?: boolean
  
  noNativeTypes?: boolean
  
  reportMissingReturnForUndefinedTypes?: boolean
}]
// ----- jsdoc/require-returns-description -----
type JsdocRequireReturnsDescription = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-returns-type -----
type JsdocRequireReturnsType = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
}]
// ----- jsdoc/require-tags -----
type JsdocRequireTags = []|[{
  
  tags?: (string | {
    context?: string
    tag?: string
    [k: string]: unknown | undefined
  })[]
}]
// ----- jsdoc/require-template -----
type JsdocRequireTemplate = []|[{
  
  exemptedBy?: string[]
  
  requireSeparateTemplates?: boolean
}]
// ----- jsdoc/require-throws -----
type JsdocRequireThrows = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
}]
// ----- jsdoc/require-yields -----
type JsdocRequireYields = []|[{
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  exemptedBy?: string[]
  
  forceRequireNext?: boolean
  
  forceRequireYields?: boolean
  
  next?: boolean
  
  nextWithGeneratorTag?: boolean
  
  withGeneratorTag?: boolean
}]
// ----- jsdoc/require-yields-check -----
type JsdocRequireYieldsCheck = []|[{
  
  checkGeneratorsOnly?: boolean
  
  contexts?: (string | {
    comment?: string
    context?: string
  })[]
  
  next?: boolean
}]
// ----- jsdoc/sort-tags -----
type JsdocSortTags = []|[{
  
  alphabetizeExtras?: boolean
  
  linesBetween?: number
  
  reportIntraTagGroupSpacing?: boolean
  
  reportTagGroupSpacing?: boolean
  
  tagSequence?: {
    
    tags?: string[]
  }[]
}]
// ----- jsdoc/tag-lines -----
type JsdocTagLines = []|[("always" | "any" | "never")]|[("always" | "any" | "never"), {
  
  applyToEndTag?: boolean
  
  count?: number
  
  endLines?: (number | null)
  
  maxBlockLines?: (number | null)
  
  startLines?: (number | null)
  
  tags?: {
    [k: string]: {
      count?: number
      lines?: ("always" | "never" | "any")
    }
  }
}]
// ----- jsdoc/text-escaping -----
type JsdocTextEscaping = []|[{
  
  escapeHTML?: boolean
  
  escapeMarkdown?: boolean
}]
// ----- jsdoc/type-formatting -----
type JsdocTypeFormatting = []|[{
  
  arrayBrackets?: ("angle" | "square")
  
  enableFixer?: boolean
  
  genericDot?: boolean
  
  objectFieldIndent?: string
  
  objectFieldQuote?: ("double" | "single" | null)
  
  objectFieldSeparator?: ("comma" | "comma-and-linebreak" | "linebreak" | "semicolon" | "semicolon-and-linebreak")
  
  objectFieldSeparatorOptionalLinebreak?: boolean
  
  objectFieldSeparatorTrailingPunctuation?: boolean
  
  separatorForSingleObjectField?: boolean
  
  stringQuotes?: ("double" | "single")
  
  typeBracketSpacing?: string
  
  unionSpacing?: string
}]
// ----- jsdoc/valid-types -----
type JsdocValidTypes = []|[{
  
  allowEmptyNamepaths?: boolean
}]

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$5 {}
  }
}

interface RuleOptions$5 {
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
  alignMultilineFlowScalars?: boolean
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

/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
/* prettier-ignore */


declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions$4 {}
  }
}

interface RuleOptions$4 {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/better-regex.md
   */
  'unicorn/better-regex'?: Linter.RuleEntry<UnicornBetterRegex>
  /**
   * Enforce a specific parameter name in catch clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/catch-error-name.md
   */
  'unicorn/catch-error-name'?: Linter.RuleEntry<UnicornCatchErrorName>
  /**
   * Use destructured variables over properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-destructuring.md
   */
  'unicorn/consistent-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-empty-array-spread.md
   */
  'unicorn/consistent-empty-array-spread'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-existence-index-check.md
   */
  'unicorn/consistent-existence-index-check'?: Linter.RuleEntry<[]>
  /**
   * Move function definitions to the highest possible scope.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/consistent-function-scoping.md
   */
  'unicorn/consistent-function-scoping'?: Linter.RuleEntry<UnicornConsistentFunctionScoping>
  /**
   * Enforce correct `Error` subclassing.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/custom-error-definition.md
   */
  'unicorn/custom-error-definition'?: Linter.RuleEntry<[]>
  /**
   * Enforce no spaces between braces.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/empty-brace-spaces.md
   */
  'unicorn/empty-brace-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/error-message.md
   */
  'unicorn/error-message'?: Linter.RuleEntry<[]>
  /**
   * Require escape sequences to use uppercase values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/escape-case.md
   */
  'unicorn/escape-case'?: Linter.RuleEntry<[]>
  /**
   * Add expiration conditions to TODO comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/expiring-todo-comments.md
   */
  'unicorn/expiring-todo-comments'?: Linter.RuleEntry<UnicornExpiringTodoComments>
  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/explicit-length-check.md
   */
  'unicorn/explicit-length-check'?: Linter.RuleEntry<UnicornExplicitLengthCheck>
  /**
   * Enforce a case style for filenames.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/filename-case.md
   */
  'unicorn/filename-case'?: Linter.RuleEntry<UnicornFilenameCase>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#import-index
   * @deprecated
   */
  'unicorn/import-index'?: Linter.RuleEntry<[]>
  /**
   * Enforce specific import styles per module.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/import-style.md
   */
  'unicorn/import-style'?: Linter.RuleEntry<UnicornImportStyle>
  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/new-for-builtins.md
   */
  'unicorn/new-for-builtins'?: Linter.RuleEntry<[]>
  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-abusive-eslint-disable.md
   */
  'unicorn/no-abusive-eslint-disable'?: Linter.RuleEntry<[]>
  /**
   * Disallow anonymous functions and classes as the default export.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-anonymous-default-export.md
   */
  'unicorn/no-anonymous-default-export'?: Linter.RuleEntry<[]>
  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-callback-reference.md
   */
  'unicorn/no-array-callback-reference'?: Linter.RuleEntry<[]>
  /**
   * Prefer `for…of` over the `forEach` method.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md
   */
  'unicorn/no-array-for-each'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-array-instanceof
   * @deprecated
   */
  'unicorn/no-array-instanceof'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `this` argument in array methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-method-this-argument.md
   */
  'unicorn/no-array-method-this-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce combining multiple `Array#push()` into one call.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-push-push.md
   */
  'unicorn/no-array-push-push'?: Linter.RuleEntry<UnicornNoArrayPushPush>
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-reduce.md
   */
  'unicorn/no-array-reduce'?: Linter.RuleEntry<UnicornNoArrayReduce>
  /**
   * Disallow member access from await expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-expression-member.md
   */
  'unicorn/no-await-expression-member'?: Linter.RuleEntry<[]>
  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-await-in-promise-methods.md
   */
  'unicorn/no-await-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-console-spaces.md
   */
  'unicorn/no-console-spaces'?: Linter.RuleEntry<[]>
  /**
   * Do not use `document.cookie` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-document-cookie.md
   */
  'unicorn/no-document-cookie'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty files.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-empty-file.md
   */
  'unicorn/no-empty-file'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-fn-reference-in-iterator
   * @deprecated
   */
  'unicorn/no-fn-reference-in-iterator'?: Linter.RuleEntry<[]>
  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-for-loop.md
   */
  'unicorn/no-for-loop'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-hex-escape.md
   */
  'unicorn/no-hex-escape'?: Linter.RuleEntry<[]>
  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-instanceof-array.md
   */
  'unicorn/no-instanceof-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-fetch-options.md
   */
  'unicorn/no-invalid-fetch-options'?: Linter.RuleEntry<[]>
  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-invalid-remove-event-listener.md
   */
  'unicorn/no-invalid-remove-event-listener'?: Linter.RuleEntry<[]>
  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-keyword-prefix.md
   */
  'unicorn/no-keyword-prefix'?: Linter.RuleEntry<UnicornNoKeywordPrefix>
  /**
   * Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-length-as-slice-end.md
   */
  'unicorn/no-length-as-slice-end'?: Linter.RuleEntry<[]>
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-lonely-if.md
   */
  'unicorn/no-lonely-if'?: Linter.RuleEntry<[]>
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-magic-array-flat-depth.md
   */
  'unicorn/no-magic-array-flat-depth'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negated-condition.md
   */
  'unicorn/no-negated-condition'?: Linter.RuleEntry<[]>
  /**
   * Disallow negated expression in equality check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-negation-in-equality-check.md
   */
  'unicorn/no-negation-in-equality-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow nested ternary expressions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-nested-ternary.md
   */
  'unicorn/no-nested-ternary'?: Linter.RuleEntry<[]>
  /**
   * Disallow `new Array()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-array.md
   */
  'unicorn/no-new-array'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-new-buffer.md
   */
  'unicorn/no-new-buffer'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of the `null` literal.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-null.md
   */
  'unicorn/no-null'?: Linter.RuleEntry<UnicornNoNull>
  /**
   * Disallow the use of objects as default parameters.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-object-as-default-parameter.md
   */
  'unicorn/no-object-as-default-parameter'?: Linter.RuleEntry<[]>
  /**
   * Disallow `process.exit()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-process-exit.md
   */
  'unicorn/no-process-exit'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-reduce
   * @deprecated
   */
  'unicorn/no-reduce'?: Linter.RuleEntry<[]>
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-single-promise-in-promise-methods.md
   */
  'unicorn/no-single-promise-in-promise-methods'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes that only have static members.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-static-only-class.md
   */
  'unicorn/no-static-only-class'?: Linter.RuleEntry<[]>
  /**
   * Disallow `then` property.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-thenable.md
   */
  'unicorn/no-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning `this` to a variable.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-this-assignment.md
   */
  'unicorn/no-this-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-typeof-undefined.md
   */
  'unicorn/no-typeof-undefined'?: Linter.RuleEntry<UnicornNoTypeofUndefined>
  /**
   * Disallow awaiting non-promise values.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-await.md
   */
  'unicorn/no-unnecessary-await'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unnecessary-polyfills.md
   */
  'unicorn/no-unnecessary-polyfills'?: Linter.RuleEntry<UnicornNoUnnecessaryPolyfills>
  /**
   * Disallow unreadable array destructuring.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-array-destructuring.md
   */
  'unicorn/no-unreadable-array-destructuring'?: Linter.RuleEntry<[]>
  /**
   * Disallow unreadable IIFEs.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unreadable-iife.md
   */
  'unicorn/no-unreadable-iife'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#no-unsafe-regex
   * @deprecated
   */
  'unicorn/no-unsafe-regex'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused object properties.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-unused-properties.md
   */
  'unicorn/no-unused-properties'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless fallback when spreading in object literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-fallback-in-spread.md
   */
  'unicorn/no-useless-fallback-in-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless array length check.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-length-check.md
   */
  'unicorn/no-useless-length-check'?: Linter.RuleEntry<[]>
  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-promise-resolve-reject.md
   */
  'unicorn/no-useless-promise-resolve-reject'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary spread.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-spread.md
   */
  'unicorn/no-useless-spread'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless case in switch statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-switch-case.md
   */
  'unicorn/no-useless-switch-case'?: Linter.RuleEntry<[]>
  /**
   * Disallow useless `undefined`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-useless-undefined.md
   */
  'unicorn/no-useless-undefined'?: Linter.RuleEntry<UnicornNoUselessUndefined>
  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-zero-fractions.md
   */
  'unicorn/no-zero-fractions'?: Linter.RuleEntry<[]>
  /**
   * Enforce proper case for numeric literals.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/number-literal-case.md
   */
  'unicorn/number-literal-case'?: Linter.RuleEntry<[]>
  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/numeric-separators-style.md
   */
  'unicorn/numeric-separators-style'?: Linter.RuleEntry<UnicornNumericSeparatorsStyle>
  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-add-event-listener.md
   */
  'unicorn/prefer-add-event-listener'?: Linter.RuleEntry<UnicornPreferAddEventListener>
  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-find.md
   */
  'unicorn/prefer-array-find'?: Linter.RuleEntry<UnicornPreferArrayFind>
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat.md
   */
  'unicorn/prefer-array-flat'?: Linter.RuleEntry<UnicornPreferArrayFlat>
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-flat-map.md
   */
  'unicorn/prefer-array-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-index-of.md
   */
  'unicorn/prefer-array-index-of'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-array-some.md
   */
  'unicorn/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-at.md
   */
  'unicorn/prefer-at'?: Linter.RuleEntry<UnicornPreferAt>
  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-blob-reading-methods.md
   */
  'unicorn/prefer-blob-reading-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-code-point.md
   */
  'unicorn/prefer-code-point'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-dataset
   * @deprecated
   */
  'unicorn/prefer-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-date-now.md
   */
  'unicorn/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer default parameters over reassignment.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-default-parameters.md
   */
  'unicorn/prefer-default-parameters'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-append.md
   */
  'unicorn/prefer-dom-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-dataset.md
   */
  'unicorn/prefer-dom-node-dataset'?: Linter.RuleEntry<[]>
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-remove.md
   */
  'unicorn/prefer-dom-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.textContent` over `.innerText`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-dom-node-text-content.md
   */
  'unicorn/prefer-dom-node-text-content'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-event-key
   * @deprecated
   */
  'unicorn/prefer-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-event-target.md
   */
  'unicorn/prefer-event-target'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-exponentiation-operator
   * @deprecated
   */
  'unicorn/prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Prefer `export…from` when re-exporting.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-export-from.md
   */
  'unicorn/prefer-export-from'?: Linter.RuleEntry<UnicornPreferExportFrom>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-flat-map
   * @deprecated
   */
  'unicorn/prefer-flat-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-global-this.md
   */
  'unicorn/prefer-global-this'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-includes.md
   */
  'unicorn/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer reading a JSON file as a buffer.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-json-parse-buffer.md
   */
  'unicorn/prefer-json-parse-buffer'?: Linter.RuleEntry<[]>
  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-keyboard-event-key.md
   */
  'unicorn/prefer-keyboard-event-key'?: Linter.RuleEntry<[]>
  /**
   * Prefer using a logical operator over a ternary.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-logical-operator-over-ternary.md
   */
  'unicorn/prefer-logical-operator-over-ternary'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-min-max.md
   */
  'unicorn/prefer-math-min-max'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-math-trunc.md
   */
  'unicorn/prefer-math-trunc'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-dom-apis.md
   */
  'unicorn/prefer-modern-dom-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-modern-math-apis.md
   */
  'unicorn/prefer-modern-math-apis'?: Linter.RuleEntry<[]>
  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-module.md
   */
  'unicorn/prefer-module'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-native-coercion-functions.md
   */
  'unicorn/prefer-native-coercion-functions'?: Linter.RuleEntry<[]>
  /**
   * Prefer negative index over `.length - index` when possible.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-negative-index.md
   */
  'unicorn/prefer-negative-index'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-append
   * @deprecated
   */
  'unicorn/prefer-node-append'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-node-protocol.md
   */
  'unicorn/prefer-node-protocol'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-node-remove
   * @deprecated
   */
  'unicorn/prefer-node-remove'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Number` static properties over global ones.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-number-properties.md
   */
  'unicorn/prefer-number-properties'?: Linter.RuleEntry<UnicornPreferNumberProperties>
  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-object-from-entries.md
   */
  'unicorn/prefer-object-from-entries'?: Linter.RuleEntry<UnicornPreferObjectFromEntries>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-object-has-own
   * @deprecated
   */
  'unicorn/prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * Prefer omitting the `catch` binding parameter.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-optional-catch-binding.md
   */
  'unicorn/prefer-optional-catch-binding'?: Linter.RuleEntry<[]>
  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-prototype-methods.md
   */
  'unicorn/prefer-prototype-methods'?: Linter.RuleEntry<[]>
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-query-selector.md
   */
  'unicorn/prefer-query-selector'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-reflect-apply.md
   */
  'unicorn/prefer-reflect-apply'?: Linter.RuleEntry<[]>
  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-regexp-test.md
   */
  'unicorn/prefer-regexp-test'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-replace-all
   * @deprecated
   */
  'unicorn/prefer-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-has.md
   */
  'unicorn/prefer-set-has'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-set-size.md
   */
  'unicorn/prefer-set-size'?: Linter.RuleEntry<[]>
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-spread.md
   */
  'unicorn/prefer-spread'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-starts-ends-with
   * @deprecated
   */
  'unicorn/prefer-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-raw.md
   */
  'unicorn/prefer-string-raw'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-replace-all.md
   */
  'unicorn/prefer-string-replace-all'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-slice.md
   */
  'unicorn/prefer-string-slice'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-starts-ends-with.md
   */
  'unicorn/prefer-string-starts-ends-with'?: Linter.RuleEntry<[]>
  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-string-trim-start-end.md
   */
  'unicorn/prefer-string-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-structured-clone.md
   */
  'unicorn/prefer-structured-clone'?: Linter.RuleEntry<UnicornPreferStructuredClone>
  /**
   * Prefer `switch` over multiple `else-if`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-switch.md
   */
  'unicorn/prefer-switch'?: Linter.RuleEntry<UnicornPreferSwitch>
  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-ternary.md
   */
  'unicorn/prefer-ternary'?: Linter.RuleEntry<UnicornPreferTernary>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-text-content
   * @deprecated
   */
  'unicorn/prefer-text-content'?: Linter.RuleEntry<[]>
  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-top-level-await.md
   */
  'unicorn/prefer-top-level-await'?: Linter.RuleEntry<[]>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#prefer-trim-start-end
   * @deprecated
   */
  'unicorn/prefer-trim-start-end'?: Linter.RuleEntry<[]>
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prefer-type-error.md
   */
  'unicorn/prefer-type-error'?: Linter.RuleEntry<[]>
  /**
   * Prevent abbreviations.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations'?: Linter.RuleEntry<UnicornPreventAbbreviations>
  /**
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/deprecated-rules.md#regex-shorthand
   * @deprecated
   */
  'unicorn/regex-shorthand'?: Linter.RuleEntry<[]>
  /**
   * Enforce consistent relative URL style.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/relative-url-style.md
   */
  'unicorn/relative-url-style'?: Linter.RuleEntry<UnicornRelativeUrlStyle>
  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-array-join-separator.md
   */
  'unicorn/require-array-join-separator'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-number-to-fixed-digits-argument.md
   */
  'unicorn/require-number-to-fixed-digits-argument'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/require-post-message-target-origin.md
   */
  'unicorn/require-post-message-target-origin'?: Linter.RuleEntry<[]>
  /**
   * Enforce better string content.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/string-content.md
   */
  'unicorn/string-content'?: Linter.RuleEntry<UnicornStringContent>
  /**
   * Enforce consistent brace style for `case` clauses.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/switch-case-braces.md
   */
  'unicorn/switch-case-braces'?: Linter.RuleEntry<UnicornSwitchCaseBraces>
  /**
   * Fix whitespace-insensitive template indentation.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/template-indent.md
   */
  'unicorn/template-indent'?: Linter.RuleEntry<UnicornTemplateIndent>
  /**
   * Enforce consistent case for text encoding identifiers.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/text-encoding-identifier-case.md
   */
  'unicorn/text-encoding-identifier-case'?: Linter.RuleEntry<[]>
  /**
   * Require `new` when creating an error.
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/throw-new-error.md
   */
  'unicorn/throw-new-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- unicorn/better-regex -----
type UnicornBetterRegex = []|[{
  sortCharacterClasses?: boolean
}]
// ----- unicorn/catch-error-name -----
type UnicornCatchErrorName = []|[{
  name?: string
  ignore?: unknown[]
}]
// ----- unicorn/consistent-function-scoping -----
type UnicornConsistentFunctionScoping = []|[{
  checkArrowFunctions?: boolean
}]
// ----- unicorn/expiring-todo-comments -----
type UnicornExpiringTodoComments = []|[{
  terms?: string[]
  ignore?: unknown[]
  ignoreDatesOnPullRequests?: boolean
  allowWarningComments?: boolean
  date?: string
}]
// ----- unicorn/explicit-length-check -----
type UnicornExplicitLengthCheck = []|[{
  "non-zero"?: ("greater-than" | "not-equal")
}]
// ----- unicorn/filename-case -----
type UnicornFilenameCase = []|[({
  case?: ("camelCase" | "snakeCase" | "kebabCase" | "pascalCase")
  ignore?: unknown[]
  multipleFileExtensions?: boolean
} | {
  cases?: {
    camelCase?: boolean
    snakeCase?: boolean
    kebabCase?: boolean
    pascalCase?: boolean
  }
  ignore?: unknown[]
  multipleFileExtensions?: boolean
})]
// ----- unicorn/import-style -----
type UnicornImportStyle = []|[{
  checkImport?: boolean
  checkDynamicImport?: boolean
  checkExportFrom?: boolean
  checkRequire?: boolean
  extendDefaultStyles?: boolean
  styles?: _UnicornImportStyle_ModuleStyles
}]
type _UnicornImportStyleStyles = (false | _UnicornImportStyle_BooleanObject) | undefined
interface _UnicornImportStyle_ModuleStyles {
  [k: string]: _UnicornImportStyleStyles | undefined
}
interface _UnicornImportStyle_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/no-array-push-push -----
type UnicornNoArrayPushPush = []|[{
  ignore?: unknown[]
}]
// ----- unicorn/no-array-reduce -----
type UnicornNoArrayReduce = []|[{
  allowSimpleOperations?: boolean
}]
// ----- unicorn/no-keyword-prefix -----
type UnicornNoKeywordPrefix = []|[{
  
  disallowedPrefixes?: []|[string]
  checkProperties?: boolean
  onlyCamelCase?: boolean
}]
// ----- unicorn/no-null -----
type UnicornNoNull = []|[{
  checkStrictEquality?: boolean
}]
// ----- unicorn/no-typeof-undefined -----
type UnicornNoTypeofUndefined = []|[{
  checkGlobalVariables?: boolean
}]
// ----- unicorn/no-unnecessary-polyfills -----
type UnicornNoUnnecessaryPolyfills = []|[{
  targets: (string | unknown[] | {
    [k: string]: unknown | undefined
  })
}]
// ----- unicorn/no-useless-undefined -----
type UnicornNoUselessUndefined = []|[{
  checkArguments?: boolean
  checkArrowFunctionBody?: boolean
}]
// ----- unicorn/numeric-separators-style -----
type UnicornNumericSeparatorsStyle = []|[{
  binary?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  octal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  number?: {
    onlyIfContainsSeparator?: boolean
    minimumDigits?: number
    groupLength?: number
  }
  onlyIfContainsSeparator?: boolean
}]
// ----- unicorn/prefer-add-event-listener -----
type UnicornPreferAddEventListener = []|[{
  excludedPackages?: string[]
}]
// ----- unicorn/prefer-array-find -----
type UnicornPreferArrayFind = []|[{
  checkFromLast?: boolean
}]
// ----- unicorn/prefer-array-flat -----
type UnicornPreferArrayFlat = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-at -----
type UnicornPreferAt = []|[{
  getLastElementFunctions?: unknown[]
  checkAllIndexAccess?: boolean
}]
// ----- unicorn/prefer-export-from -----
type UnicornPreferExportFrom = []|[{
  ignoreUsedVariables?: boolean
}]
// ----- unicorn/prefer-number-properties -----
type UnicornPreferNumberProperties = []|[{
  checkInfinity?: boolean
  checkNaN?: boolean
}]
// ----- unicorn/prefer-object-from-entries -----
type UnicornPreferObjectFromEntries = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-structured-clone -----
type UnicornPreferStructuredClone = []|[{
  functions?: unknown[]
}]
// ----- unicorn/prefer-switch -----
type UnicornPreferSwitch = []|[{
  minimumCases?: number
  emptyDefaultCase?: ("no-default-comment" | "do-nothing-comment" | "no-default-case")
}]
// ----- unicorn/prefer-ternary -----
type UnicornPreferTernary = []|[("always" | "only-single-line")]
// ----- unicorn/prevent-abbreviations -----
type UnicornPreventAbbreviations = []|[{
  checkProperties?: boolean
  checkVariables?: boolean
  checkDefaultAndNamespaceImports?: (boolean | string)
  checkShorthandImports?: (boolean | string)
  checkShorthandProperties?: boolean
  checkFilenames?: boolean
  extendDefaultReplacements?: boolean
  replacements?: _UnicornPreventAbbreviations_Abbreviations
  extendDefaultAllowList?: boolean
  allowList?: _UnicornPreventAbbreviations_BooleanObject
  ignore?: unknown[]
}]
type _UnicornPreventAbbreviationsReplacements = (false | _UnicornPreventAbbreviations_BooleanObject) | undefined
interface _UnicornPreventAbbreviations_Abbreviations {
  [k: string]: _UnicornPreventAbbreviationsReplacements | undefined
}
interface _UnicornPreventAbbreviations_BooleanObject {
  [k: string]: boolean | undefined
}
// ----- unicorn/relative-url-style -----
type UnicornRelativeUrlStyle = []|[("never" | "always")]
// ----- unicorn/string-content -----
type UnicornStringContent = []|[{
  patterns?: {
    [k: string]: (string | {
      suggest: string
      fix?: boolean
      message?: string
    }) | undefined
  }
}]
// ----- unicorn/switch-case-braces -----
type UnicornSwitchCaseBraces = []|[("always" | "avoid")]
// ----- unicorn/template-indent -----
type UnicornTemplateIndent = []|[{
  indent?: (string | number)
  tags?: string[]
  functions?: string[]
  selectors?: string[]
  comments?: string[]
}]

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
   * Require that function overload signatures be consecutive
   * @see https://typescript-eslint.io/rules/adjacent-overload-signatures
   */
  'ts/adjacent-overload-signatures'?: Linter.RuleEntry<[]>
  /**
   * Require consistently using either `T[]` or `Array<T>` for arrays
   * @see https://typescript-eslint.io/rules/array-type
   */
  'ts/array-type'?: Linter.RuleEntry<TsArrayType>
  /**
   * Disallow awaiting a value that is not a Thenable
   * @see https://typescript-eslint.io/rules/await-thenable
   */
  'ts/await-thenable'?: Linter.RuleEntry<[]>
  /**
   * Disallow `@ts-<directive>` comments or require descriptions after directives
   * @see https://typescript-eslint.io/rules/ban-ts-comment
   */
  'ts/ban-ts-comment'?: Linter.RuleEntry<TsBanTsComment>
  /**
   * Disallow `// tslint:<rule-flag>` comments
   * @see https://typescript-eslint.io/rules/ban-tslint-comment
   */
  'ts/ban-tslint-comment'?: Linter.RuleEntry<[]>
  /**
   * Enforce that literals on classes are exposed in a consistent style
   * @see https://typescript-eslint.io/rules/class-literal-property-style
   */
  'ts/class-literal-property-style'?: Linter.RuleEntry<TsClassLiteralPropertyStyle>
  /**
   * Enforce that class methods utilize `this`
   * @see https://typescript-eslint.io/rules/class-methods-use-this
   */
  'ts/class-methods-use-this'?: Linter.RuleEntry<TsClassMethodsUseThis>
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
   * @see https://typescript-eslint.io/rules/consistent-generic-constructors
   */
  'ts/consistent-generic-constructors'?: Linter.RuleEntry<TsConsistentGenericConstructors>
  /**
   * Require or disallow the `Record` type
   * @see https://typescript-eslint.io/rules/consistent-indexed-object-style
   */
  'ts/consistent-indexed-object-style'?: Linter.RuleEntry<TsConsistentIndexedObjectStyle>
  /**
   * Require `return` statements to either always or never specify values
   * @see https://typescript-eslint.io/rules/consistent-return
   */
  'ts/consistent-return'?: Linter.RuleEntry<TsConsistentReturn>
  /**
   * Enforce consistent usage of type assertions
   * @see https://typescript-eslint.io/rules/consistent-type-assertions
   */
  'ts/consistent-type-assertions'?: Linter.RuleEntry<TsConsistentTypeAssertions>
  /**
   * Enforce type definitions to consistently use either `interface` or `type`
   * @see https://typescript-eslint.io/rules/consistent-type-definitions
   */
  'ts/consistent-type-definitions'?: Linter.RuleEntry<TsConsistentTypeDefinitions>
  /**
   * Enforce consistent usage of type exports
   * @see https://typescript-eslint.io/rules/consistent-type-exports
   */
  'ts/consistent-type-exports'?: Linter.RuleEntry<TsConsistentTypeExports>
  /**
   * Enforce consistent usage of type imports
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  'ts/consistent-type-imports'?: Linter.RuleEntry<TsConsistentTypeImports>
  /**
   * Enforce default parameters to be last
   * @see https://typescript-eslint.io/rules/default-param-last
   */
  'ts/default-param-last'?: Linter.RuleEntry<[]>
  /**
   * Enforce dot notation whenever possible
   * @see https://typescript-eslint.io/rules/dot-notation
   */
  'ts/dot-notation'?: Linter.RuleEntry<TsDotNotation>
  /**
   * Require explicit return types on functions and class methods
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
   */
  'ts/explicit-function-return-type'?: Linter.RuleEntry<TsExplicitFunctionReturnType>
  /**
   * Require explicit accessibility modifiers on class properties and methods
   * @see https://typescript-eslint.io/rules/explicit-member-accessibility
   */
  'ts/explicit-member-accessibility'?: Linter.RuleEntry<TsExplicitMemberAccessibility>
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  'ts/explicit-module-boundary-types'?: Linter.RuleEntry<TsExplicitModuleBoundaryTypes>
  /**
   * Require or disallow initialization in variable declarations
   * @see https://typescript-eslint.io/rules/init-declarations
   */
  'ts/init-declarations'?: Linter.RuleEntry<TsInitDeclarations>
  /**
   * Enforce a maximum number of parameters in function definitions
   * @see https://typescript-eslint.io/rules/max-params
   */
  'ts/max-params'?: Linter.RuleEntry<TsMaxParams>
  /**
   * Require a consistent member declaration order
   * @see https://typescript-eslint.io/rules/member-ordering
   */
  'ts/member-ordering'?: Linter.RuleEntry<TsMemberOrdering>
  /**
   * Enforce using a particular method signature syntax
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  'ts/method-signature-style'?: Linter.RuleEntry<TsMethodSignatureStyle>
  /**
   * Enforce naming conventions for everything across a codebase
   * @see https://typescript-eslint.io/rules/naming-convention
   */
  'ts/naming-convention'?: Linter.RuleEntry<TsNamingConvention>
  /**
   * Disallow generic `Array` constructors
   * @see https://typescript-eslint.io/rules/no-array-constructor
   */
  'ts/no-array-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the `delete` operator on array values
   * @see https://typescript-eslint.io/rules/no-array-delete
   */
  'ts/no-array-delete'?: Linter.RuleEntry<[]>
  /**
   * Require `.toString()` and `.toLocaleString()` to only be called on objects which provide useful information when stringified
   * @see https://typescript-eslint.io/rules/no-base-to-string
   */
  'ts/no-base-to-string'?: Linter.RuleEntry<TsNoBaseToString>
  /**
   * Disallow non-null assertion in locations that may be confusing
   * @see https://typescript-eslint.io/rules/no-confusing-non-null-assertion
   */
  'ts/no-confusing-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require expressions of type void to appear in statement position
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  'ts/no-confusing-void-expression'?: Linter.RuleEntry<TsNoConfusingVoidExpression>
  /**
   * Disallow using code marked as `@deprecated`
   * @see https://typescript-eslint.io/rules/no-deprecated
   */
  'ts/no-deprecated'?: Linter.RuleEntry<TsNoDeprecated>
  /**
   * Disallow duplicate class members
   * @see https://typescript-eslint.io/rules/no-dupe-class-members
   */
  'ts/no-dupe-class-members'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate enum member values
   * @see https://typescript-eslint.io/rules/no-duplicate-enum-values
   */
  'ts/no-duplicate-enum-values'?: Linter.RuleEntry<[]>
  /**
   * Disallow duplicate constituents of union or intersection types
   * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
   */
  'ts/no-duplicate-type-constituents'?: Linter.RuleEntry<TsNoDuplicateTypeConstituents>
  /**
   * Disallow using the `delete` operator on computed key expressions
   * @see https://typescript-eslint.io/rules/no-dynamic-delete
   */
  'ts/no-dynamic-delete'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty functions
   * @see https://typescript-eslint.io/rules/no-empty-function
   */
  'ts/no-empty-function'?: Linter.RuleEntry<TsNoEmptyFunction>
  /**
   * Disallow the declaration of empty interfaces
   * @see https://typescript-eslint.io/rules/no-empty-interface
   * @deprecated
   */
  'ts/no-empty-interface'?: Linter.RuleEntry<TsNoEmptyInterface>
  /**
   * Disallow accidentally using the "empty object" type
   * @see https://typescript-eslint.io/rules/no-empty-object-type
   */
  'ts/no-empty-object-type'?: Linter.RuleEntry<TsNoEmptyObjectType>
  /**
   * Disallow the `any` type
   * @see https://typescript-eslint.io/rules/no-explicit-any
   */
  'ts/no-explicit-any'?: Linter.RuleEntry<TsNoExplicitAny>
  /**
   * Disallow extra non-null assertions
   * @see https://typescript-eslint.io/rules/no-extra-non-null-assertion
   */
  'ts/no-extra-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow classes used as namespaces
   * @see https://typescript-eslint.io/rules/no-extraneous-class
   */
  'ts/no-extraneous-class'?: Linter.RuleEntry<TsNoExtraneousClass>
  /**
   * Require Promise-like statements to be handled appropriately
   * @see https://typescript-eslint.io/rules/no-floating-promises
   */
  'ts/no-floating-promises'?: Linter.RuleEntry<TsNoFloatingPromises>
  /**
   * Disallow iterating over an array with a for-in loop
   * @see https://typescript-eslint.io/rules/no-for-in-array
   */
  'ts/no-for-in-array'?: Linter.RuleEntry<[]>
  /**
   * Disallow the use of `eval()`-like functions
   * @see https://typescript-eslint.io/rules/no-implied-eval
   */
  'ts/no-implied-eval'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
   * @see https://typescript-eslint.io/rules/no-import-type-side-effects
   */
  'ts/no-import-type-side-effects'?: Linter.RuleEntry<[]>
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
   * @see https://typescript-eslint.io/rules/no-inferrable-types
   */
  'ts/no-inferrable-types'?: Linter.RuleEntry<TsNoInferrableTypes>
  /**
   * Disallow `this` keywords outside of classes or class-like objects
   * @see https://typescript-eslint.io/rules/no-invalid-this
   */
  'ts/no-invalid-this'?: Linter.RuleEntry<TsNoInvalidThis>
  /**
   * Disallow `void` type outside of generic or return types
   * @see https://typescript-eslint.io/rules/no-invalid-void-type
   */
  'ts/no-invalid-void-type'?: Linter.RuleEntry<TsNoInvalidVoidType>
  /**
   * Disallow function declarations that contain unsafe references inside loop statements
   * @see https://typescript-eslint.io/rules/no-loop-func
   */
  'ts/no-loop-func'?: Linter.RuleEntry<[]>
  /**
   * Disallow literal numbers that lose precision
   * @see https://typescript-eslint.io/rules/no-loss-of-precision
   * @deprecated
   */
  'ts/no-loss-of-precision'?: Linter.RuleEntry<[]>
  /**
   * Disallow magic numbers
   * @see https://typescript-eslint.io/rules/no-magic-numbers
   */
  'ts/no-magic-numbers'?: Linter.RuleEntry<TsNoMagicNumbers>
  /**
   * Disallow the `void` operator except when used to discard a value
   * @see https://typescript-eslint.io/rules/no-meaningless-void-operator
   */
  'ts/no-meaningless-void-operator'?: Linter.RuleEntry<TsNoMeaninglessVoidOperator>
  /**
   * Enforce valid definition of `new` and `constructor`
   * @see https://typescript-eslint.io/rules/no-misused-new
   */
  'ts/no-misused-new'?: Linter.RuleEntry<[]>
  /**
   * Disallow Promises in places not designed to handle them
   * @see https://typescript-eslint.io/rules/no-misused-promises
   */
  'ts/no-misused-promises'?: Linter.RuleEntry<TsNoMisusedPromises>
  /**
   * Disallow using the spread operator when it might cause unexpected behavior
   * @see https://typescript-eslint.io/rules/no-misused-spread
   */
  'ts/no-misused-spread'?: Linter.RuleEntry<TsNoMisusedSpread>
  /**
   * Disallow enums from having both number and string members
   * @see https://typescript-eslint.io/rules/no-mixed-enums
   */
  'ts/no-mixed-enums'?: Linter.RuleEntry<[]>
  /**
   * Disallow TypeScript namespaces
   * @see https://typescript-eslint.io/rules/no-namespace
   */
  'ts/no-namespace'?: Linter.RuleEntry<TsNoNamespace>
  /**
   * Disallow non-null assertions in the left operand of a nullish coalescing operator
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing
   */
  'ts/no-non-null-asserted-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions after an optional chain expression
   * @see https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
   */
  'ts/no-non-null-asserted-optional-chain'?: Linter.RuleEntry<[]>
  /**
   * Disallow non-null assertions using the `!` postfix operator
   * @see https://typescript-eslint.io/rules/no-non-null-assertion
   */
  'ts/no-non-null-assertion'?: Linter.RuleEntry<[]>
  /**
   * Disallow variable redeclaration
   * @see https://typescript-eslint.io/rules/no-redeclare
   */
  'ts/no-redeclare'?: Linter.RuleEntry<TsNoRedeclare>
  /**
   * Disallow members of unions and intersections that do nothing or override type information
   * @see https://typescript-eslint.io/rules/no-redundant-type-constituents
   */
  'ts/no-redundant-type-constituents'?: Linter.RuleEntry<[]>
  /**
   * Disallow invocation of `require()`
   * @see https://typescript-eslint.io/rules/no-require-imports
   */
  'ts/no-require-imports'?: Linter.RuleEntry<TsNoRequireImports>
  /**
   * Disallow specified modules when loaded by `import`
   * @see https://typescript-eslint.io/rules/no-restricted-imports
   */
  'ts/no-restricted-imports'?: Linter.RuleEntry<TsNoRestrictedImports>
  /**
   * Disallow certain types
   * @see https://typescript-eslint.io/rules/no-restricted-types
   */
  'ts/no-restricted-types'?: Linter.RuleEntry<TsNoRestrictedTypes>
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   * @see https://typescript-eslint.io/rules/no-shadow
   */
  'ts/no-shadow'?: Linter.RuleEntry<TsNoShadow>
  /**
   * Disallow aliasing `this`
   * @see https://typescript-eslint.io/rules/no-this-alias
   */
  'ts/no-this-alias'?: Linter.RuleEntry<TsNoThisAlias>
  /**
   * Disallow type aliases
   * @see https://typescript-eslint.io/rules/no-type-alias
   * @deprecated
   */
  'ts/no-type-alias'?: Linter.RuleEntry<TsNoTypeAlias>
  /**
   * Disallow unnecessary equality comparisons against boolean literals
   * @see https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare
   */
  'ts/no-unnecessary-boolean-literal-compare'?: Linter.RuleEntry<TsNoUnnecessaryBooleanLiteralCompare>
  /**
   * Disallow conditionals where the type is always truthy or always falsy
   * @see https://typescript-eslint.io/rules/no-unnecessary-condition
   */
  'ts/no-unnecessary-condition'?: Linter.RuleEntry<TsNoUnnecessaryCondition>
  /**
   * Disallow unnecessary assignment of constructor property parameter
   * @see https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
   */
  'ts/no-unnecessary-parameter-property-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary namespace qualifiers
   * @see https://typescript-eslint.io/rules/no-unnecessary-qualifier
   */
  'ts/no-unnecessary-qualifier'?: Linter.RuleEntry<[]>
  /**
   * Disallow unnecessary template expressions
   * @see https://typescript-eslint.io/rules/no-unnecessary-template-expression
   */
  'ts/no-unnecessary-template-expression'?: Linter.RuleEntry<[]>
  /**
   * Disallow type arguments that are equal to the default
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-arguments
   */
  'ts/no-unnecessary-type-arguments'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that do not change the type of an expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-assertion
   */
  'ts/no-unnecessary-type-assertion'?: Linter.RuleEntry<TsNoUnnecessaryTypeAssertion>
  /**
   * Disallow unnecessary constraints on generic types
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-constraint
   */
  'ts/no-unnecessary-type-constraint'?: Linter.RuleEntry<[]>
  /**
   * Disallow conversion idioms when they do not change the type or value of the expression
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-conversion
   */
  'ts/no-unnecessary-type-conversion'?: Linter.RuleEntry<[]>
  /**
   * Disallow type parameters that aren't used multiple times
   * @see https://typescript-eslint.io/rules/no-unnecessary-type-parameters
   */
  'ts/no-unnecessary-type-parameters'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a function with a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-argument
   */
  'ts/no-unsafe-argument'?: Linter.RuleEntry<[]>
  /**
   * Disallow assigning a value with type `any` to variables and properties
   * @see https://typescript-eslint.io/rules/no-unsafe-assignment
   */
  'ts/no-unsafe-assignment'?: Linter.RuleEntry<[]>
  /**
   * Disallow calling a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-call
   */
  'ts/no-unsafe-call'?: Linter.RuleEntry<[]>
  /**
   * Disallow unsafe declaration merging
   * @see https://typescript-eslint.io/rules/no-unsafe-declaration-merging
   */
  'ts/no-unsafe-declaration-merging'?: Linter.RuleEntry<[]>
  /**
   * Disallow comparing an enum value with a non-enum value
   * @see https://typescript-eslint.io/rules/no-unsafe-enum-comparison
   */
  'ts/no-unsafe-enum-comparison'?: Linter.RuleEntry<[]>
  /**
   * Disallow using the unsafe built-in Function type
   * @see https://typescript-eslint.io/rules/no-unsafe-function-type
   */
  'ts/no-unsafe-function-type'?: Linter.RuleEntry<[]>
  /**
   * Disallow member access on a value with type `any`
   * @see https://typescript-eslint.io/rules/no-unsafe-member-access
   */
  'ts/no-unsafe-member-access'?: Linter.RuleEntry<TsNoUnsafeMemberAccess>
  /**
   * Disallow returning a value with type `any` from a function
   * @see https://typescript-eslint.io/rules/no-unsafe-return
   */
  'ts/no-unsafe-return'?: Linter.RuleEntry<[]>
  /**
   * Disallow type assertions that narrow a type
   * @see https://typescript-eslint.io/rules/no-unsafe-type-assertion
   */
  'ts/no-unsafe-type-assertion'?: Linter.RuleEntry<[]>
  /**
   * Require unary negation to take a number
   * @see https://typescript-eslint.io/rules/no-unsafe-unary-minus
   */
  'ts/no-unsafe-unary-minus'?: Linter.RuleEntry<[]>
  /**
   * Disallow unused expressions
   * @see https://typescript-eslint.io/rules/no-unused-expressions
   */
  'ts/no-unused-expressions'?: Linter.RuleEntry<TsNoUnusedExpressions>
  /**
   * Disallow unused variables
   * @see https://typescript-eslint.io/rules/no-unused-vars
   */
  'ts/no-unused-vars'?: Linter.RuleEntry<TsNoUnusedVars>
  /**
   * Disallow the use of variables before they are defined
   * @see https://typescript-eslint.io/rules/no-use-before-define
   */
  'ts/no-use-before-define'?: Linter.RuleEntry<TsNoUseBeforeDefine>
  /**
   * Disallow unnecessary constructors
   * @see https://typescript-eslint.io/rules/no-useless-constructor
   */
  'ts/no-useless-constructor'?: Linter.RuleEntry<[]>
  /**
   * Disallow empty exports that don't change anything in a module file
   * @see https://typescript-eslint.io/rules/no-useless-empty-export
   */
  'ts/no-useless-empty-export'?: Linter.RuleEntry<[]>
  /**
   * Disallow `require` statements except in import statements
   * @see https://typescript-eslint.io/rules/no-var-requires
   * @deprecated
   */
  'ts/no-var-requires'?: Linter.RuleEntry<TsNoVarRequires>
  /**
   * Disallow using confusing built-in primitive class wrappers
   * @see https://typescript-eslint.io/rules/no-wrapper-object-types
   */
  'ts/no-wrapper-object-types'?: Linter.RuleEntry<[]>
  /**
   * Enforce non-null assertions over explicit type assertions
   * @see https://typescript-eslint.io/rules/non-nullable-type-assertion-style
   */
  'ts/non-nullable-type-assertion-style'?: Linter.RuleEntry<[]>
  /**
   * Disallow throwing non-`Error` values as exceptions
   * @see https://typescript-eslint.io/rules/only-throw-error
   */
  'ts/only-throw-error'?: Linter.RuleEntry<TsOnlyThrowError>
  /**
   * Require or disallow parameter properties in class constructors
   * @see https://typescript-eslint.io/rules/parameter-properties
   */
  'ts/parameter-properties'?: Linter.RuleEntry<TsParameterProperties>
  /**
   * Enforce the use of `as const` over literal type
   * @see https://typescript-eslint.io/rules/prefer-as-const
   */
  'ts/prefer-as-const'?: Linter.RuleEntry<[]>
  /**
   * Require destructuring from arrays and/or objects
   * @see https://typescript-eslint.io/rules/prefer-destructuring
   */
  'ts/prefer-destructuring'?: Linter.RuleEntry<TsPreferDestructuring>
  /**
   * Require each enum member value to be explicitly initialized
   * @see https://typescript-eslint.io/rules/prefer-enum-initializers
   */
  'ts/prefer-enum-initializers'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result
   * @see https://typescript-eslint.io/rules/prefer-find
   */
  'ts/prefer-find'?: Linter.RuleEntry<[]>
  /**
   * Enforce the use of `for-of` loop over the standard `for` loop where possible
   * @see https://typescript-eslint.io/rules/prefer-for-of
   */
  'ts/prefer-for-of'?: Linter.RuleEntry<[]>
  /**
   * Enforce using function types instead of interfaces with call signatures
   * @see https://typescript-eslint.io/rules/prefer-function-type
   */
  'ts/prefer-function-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce `includes` method over `indexOf` method
   * @see https://typescript-eslint.io/rules/prefer-includes
   */
  'ts/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Require all enum members to be literal values
   * @see https://typescript-eslint.io/rules/prefer-literal-enum-member
   */
  'ts/prefer-literal-enum-member'?: Linter.RuleEntry<TsPreferLiteralEnumMember>
  /**
   * Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
   * @see https://typescript-eslint.io/rules/prefer-namespace-keyword
   */
  'ts/prefer-namespace-keyword'?: Linter.RuleEntry<[]>
  /**
   * Enforce using the nullish coalescing operator instead of logical assignments or chaining
   * @see https://typescript-eslint.io/rules/prefer-nullish-coalescing
   */
  'ts/prefer-nullish-coalescing'?: Linter.RuleEntry<TsPreferNullishCoalescing>
  /**
   * Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects
   * @see https://typescript-eslint.io/rules/prefer-optional-chain
   */
  'ts/prefer-optional-chain'?: Linter.RuleEntry<TsPreferOptionalChain>
  /**
   * Require using Error objects as Promise rejection reasons
   * @see https://typescript-eslint.io/rules/prefer-promise-reject-errors
   */
  'ts/prefer-promise-reject-errors'?: Linter.RuleEntry<TsPreferPromiseRejectErrors>
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor
   * @see https://typescript-eslint.io/rules/prefer-readonly
   */
  'ts/prefer-readonly'?: Linter.RuleEntry<TsPreferReadonly>
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs
   * @see https://typescript-eslint.io/rules/prefer-readonly-parameter-types
   */
  'ts/prefer-readonly-parameter-types'?: Linter.RuleEntry<TsPreferReadonlyParameterTypes>
  /**
   * Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
   * @see https://typescript-eslint.io/rules/prefer-reduce-type-parameter
   */
  'ts/prefer-reduce-type-parameter'?: Linter.RuleEntry<[]>
  /**
   * Enforce `RegExp#exec` over `String#match` if no global flag is provided
   * @see https://typescript-eslint.io/rules/prefer-regexp-exec
   */
  'ts/prefer-regexp-exec'?: Linter.RuleEntry<[]>
  /**
   * Enforce that `this` is used when only `this` type is returned
   * @see https://typescript-eslint.io/rules/prefer-return-this-type
   */
  'ts/prefer-return-this-type'?: Linter.RuleEntry<[]>
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
   * @see https://typescript-eslint.io/rules/prefer-string-starts-ends-with
   */
  'ts/prefer-string-starts-ends-with'?: Linter.RuleEntry<TsPreferStringStartsEndsWith>
  /**
   * Enforce using `@ts-expect-error` over `@ts-ignore`
   * @see https://typescript-eslint.io/rules/prefer-ts-expect-error
   * @deprecated
   */
  'ts/prefer-ts-expect-error'?: Linter.RuleEntry<[]>
  /**
   * Require any function or method that returns a Promise to be marked async
   * @see https://typescript-eslint.io/rules/promise-function-async
   */
  'ts/promise-function-async'?: Linter.RuleEntry<TsPromiseFunctionAsync>
  /**
   * Enforce that `get()` types should be assignable to their equivalent `set()` type
   * @see https://typescript-eslint.io/rules/related-getter-setter-pairs
   */
  'ts/related-getter-setter-pairs'?: Linter.RuleEntry<[]>
  /**
   * Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
   * @see https://typescript-eslint.io/rules/require-array-sort-compare
   */
  'ts/require-array-sort-compare'?: Linter.RuleEntry<TsRequireArraySortCompare>
  /**
   * Disallow async functions which do not return promises and have no `await` expression
   * @see https://typescript-eslint.io/rules/require-await
   */
  'ts/require-await'?: Linter.RuleEntry<[]>
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`
   * @see https://typescript-eslint.io/rules/restrict-plus-operands
   */
  'ts/restrict-plus-operands'?: Linter.RuleEntry<TsRestrictPlusOperands>
  /**
   * Enforce template literal expressions to be of `string` type
   * @see https://typescript-eslint.io/rules/restrict-template-expressions
   */
  'ts/restrict-template-expressions'?: Linter.RuleEntry<TsRestrictTemplateExpressions>
  /**
   * Enforce consistent awaiting of returned promises
   * @see https://typescript-eslint.io/rules/return-await
   */
  'ts/return-await'?: Linter.RuleEntry<TsReturnAwait>
  /**
   * Enforce constituents of a type union/intersection to be sorted alphabetically
   * @see https://typescript-eslint.io/rules/sort-type-constituents
   * @deprecated
   */
  'ts/sort-type-constituents'?: Linter.RuleEntry<TsSortTypeConstituents>
  /**
   * Disallow certain types in boolean expressions
   * @see https://typescript-eslint.io/rules/strict-boolean-expressions
   */
  'ts/strict-boolean-expressions'?: Linter.RuleEntry<TsStrictBooleanExpressions>
  /**
   * Require switch-case statements to be exhaustive
   * @see https://typescript-eslint.io/rules/switch-exhaustiveness-check
   */
  'ts/switch-exhaustiveness-check'?: Linter.RuleEntry<TsSwitchExhaustivenessCheck>
  /**
   * Disallow certain triple slash directives in favor of ES6-style import declarations
   * @see https://typescript-eslint.io/rules/triple-slash-reference
   */
  'ts/triple-slash-reference'?: Linter.RuleEntry<TsTripleSlashReference>
  /**
   * Require type annotations in certain places
   * @see https://typescript-eslint.io/rules/typedef
   * @deprecated
   */
  'ts/typedef'?: Linter.RuleEntry<TsTypedef>
  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://typescript-eslint.io/rules/unbound-method
   */
  'ts/unbound-method'?: Linter.RuleEntry<TsUnboundMethod>
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter
   * @see https://typescript-eslint.io/rules/unified-signatures
   */
  'ts/unified-signatures'?: Linter.RuleEntry<TsUnifiedSignatures>
  /**
   * Enforce typing arguments in Promise rejection callbacks as `unknown`
   * @see https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable
   */
  'ts/use-unknown-in-catch-callback-variable'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- ts/array-type -----
type TsArrayType = []|[{
  
  default?: ("array" | "generic" | "array-simple")
  
  readonly?: ("array" | "generic" | "array-simple")
}]
// ----- ts/ban-ts-comment -----
type TsBanTsComment = []|[{
  
  minimumDescriptionLength?: number
  
  "ts-check"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-expect-error"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-ignore"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
  
  "ts-nocheck"?: (boolean | "allow-with-description" | {
    descriptionFormat?: string
  })
}]
// ----- ts/class-literal-property-style -----
type TsClassLiteralPropertyStyle = []|[("fields" | "getters")]
// ----- ts/class-methods-use-this -----
type TsClassMethodsUseThis = []|[{
  
  enforceForClassFields?: boolean
  
  exceptMethods?: string[]
  
  ignoreClassesThatImplementAnInterface?: (boolean | "public-fields")
  
  ignoreOverrideMethods?: boolean
}]
// ----- ts/consistent-generic-constructors -----
type TsConsistentGenericConstructors = []|[("type-annotation" | "constructor")]
// ----- ts/consistent-indexed-object-style -----
type TsConsistentIndexedObjectStyle = []|[("record" | "index-signature")]
// ----- ts/consistent-return -----
type TsConsistentReturn = []|[{
  treatUndefinedAsUnspecified?: boolean
}]
// ----- ts/consistent-type-assertions -----
type TsConsistentTypeAssertions = []|[({
  
  assertionStyle: "never"
} | {
  
  arrayLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
  
  assertionStyle?: ("as" | "angle-bracket")
  
  objectLiteralTypeAssertions?: ("allow" | "allow-as-parameter" | "never")
})]
// ----- ts/consistent-type-definitions -----
type TsConsistentTypeDefinitions = []|[("interface" | "type")]
// ----- ts/consistent-type-exports -----
type TsConsistentTypeExports = []|[{
  
  fixMixedExportsWithInlineTypeSpecifier?: boolean
}]
// ----- ts/consistent-type-imports -----
type TsConsistentTypeImports = []|[{
  
  disallowTypeAnnotations?: boolean
  
  fixStyle?: ("separate-type-imports" | "inline-type-imports")
  
  prefer?: ("type-imports" | "no-type-imports")
}]
// ----- ts/dot-notation -----
type TsDotNotation = []|[{
  
  allowIndexSignaturePropertyAccess?: boolean
  
  allowKeywords?: boolean
  
  allowPattern?: string
  
  allowPrivateClassPropertyAccess?: boolean
  
  allowProtectedClassPropertyAccess?: boolean
}]
// ----- ts/explicit-function-return-type -----
type TsExplicitFunctionReturnType = []|[{
  
  allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowExpressions?: boolean
  
  allowFunctionsWithoutTypeParameters?: boolean
  
  allowHigherOrderFunctions?: boolean
  
  allowIIFEs?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- ts/explicit-member-accessibility -----
type TsExplicitMemberAccessibility = []|[{
  
  accessibility?: ("explicit" | "no-public" | "off")
  
  ignoredMethodNames?: string[]
  
  overrides?: {
    
    accessors?: ("explicit" | "no-public" | "off")
    
    constructors?: ("explicit" | "no-public" | "off")
    
    methods?: ("explicit" | "no-public" | "off")
    
    parameterProperties?: ("explicit" | "no-public" | "off")
    
    properties?: ("explicit" | "no-public" | "off")
  }
}]
// ----- ts/explicit-module-boundary-types -----
type TsExplicitModuleBoundaryTypes = []|[{
  
  allowArgumentsExplicitlyTypedAsAny?: boolean
  
  allowDirectConstAssertionInArrowFunctions?: boolean
  
  allowedNames?: string[]
  
  allowHigherOrderFunctions?: boolean
  
  allowOverloadFunctions?: boolean
  
  allowTypedFunctionExpressions?: boolean
}]
// ----- ts/init-declarations -----
type TsInitDeclarations = ([]|["always"] | []|["never"]|["never", {
  ignoreForLoopInit?: boolean
}])
// ----- ts/max-params -----
type TsMaxParams = []|[{
  
  countVoidThis?: boolean
  
  max?: number
  
  maximum?: number
}]
// ----- ts/member-ordering -----
type TsMemberOrdering = []|[{
  
  classes?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  classExpressions?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  default?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization") | ("readonly-signature" | "signature" | "readonly-field" | "public-readonly-field" | "public-decorated-readonly-field" | "decorated-readonly-field" | "static-readonly-field" | "public-static-readonly-field" | "instance-readonly-field" | "public-instance-readonly-field" | "abstract-readonly-field" | "public-abstract-readonly-field" | "protected-readonly-field" | "protected-decorated-readonly-field" | "protected-static-readonly-field" | "protected-instance-readonly-field" | "protected-abstract-readonly-field" | "private-readonly-field" | "private-decorated-readonly-field" | "private-static-readonly-field" | "private-instance-readonly-field" | "#private-readonly-field" | "#private-static-readonly-field" | "#private-instance-readonly-field" | "field" | "public-field" | "public-decorated-field" | "decorated-field" | "static-field" | "public-static-field" | "instance-field" | "public-instance-field" | "abstract-field" | "public-abstract-field" | "protected-field" | "protected-decorated-field" | "protected-static-field" | "protected-instance-field" | "protected-abstract-field" | "private-field" | "private-decorated-field" | "private-static-field" | "private-instance-field" | "#private-field" | "#private-static-field" | "#private-instance-field" | "method" | "public-method" | "public-decorated-method" | "decorated-method" | "static-method" | "public-static-method" | "instance-method" | "public-instance-method" | "abstract-method" | "public-abstract-method" | "protected-method" | "protected-decorated-method" | "protected-static-method" | "protected-instance-method" | "protected-abstract-method" | "private-method" | "private-decorated-method" | "private-static-method" | "private-instance-method" | "#private-method" | "#private-static-method" | "#private-instance-method" | "call-signature" | "constructor" | "public-constructor" | "protected-constructor" | "private-constructor" | "accessor" | "public-accessor" | "public-decorated-accessor" | "decorated-accessor" | "static-accessor" | "public-static-accessor" | "instance-accessor" | "public-instance-accessor" | "abstract-accessor" | "public-abstract-accessor" | "protected-accessor" | "protected-decorated-accessor" | "protected-static-accessor" | "protected-instance-accessor" | "protected-abstract-accessor" | "private-accessor" | "private-decorated-accessor" | "private-static-accessor" | "private-instance-accessor" | "#private-accessor" | "#private-static-accessor" | "#private-instance-accessor" | "get" | "public-get" | "public-decorated-get" | "decorated-get" | "static-get" | "public-static-get" | "instance-get" | "public-instance-get" | "abstract-get" | "public-abstract-get" | "protected-get" | "protected-decorated-get" | "protected-static-get" | "protected-instance-get" | "protected-abstract-get" | "private-get" | "private-decorated-get" | "private-static-get" | "private-instance-get" | "#private-get" | "#private-static-get" | "#private-instance-get" | "set" | "public-set" | "public-decorated-set" | "decorated-set" | "static-set" | "public-static-set" | "instance-set" | "public-instance-set" | "abstract-set" | "public-abstract-set" | "protected-set" | "protected-decorated-set" | "protected-static-set" | "protected-instance-set" | "protected-abstract-set" | "private-set" | "private-decorated-set" | "private-static-set" | "private-instance-set" | "#private-set" | "#private-static-set" | "#private-instance-set" | "static-initialization" | "static-static-initialization" | "public-static-static-initialization" | "instance-static-initialization" | "public-instance-static-initialization" | "abstract-static-initialization" | "public-abstract-static-initialization" | "protected-static-static-initialization" | "protected-instance-static-initialization" | "protected-abstract-static-initialization" | "private-static-static-initialization" | "private-instance-static-initialization" | "#private-static-static-initialization" | "#private-instance-static-initialization")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  interfaces?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
  
  typeLiterals?: ("never" | (("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | {
    memberTypes?: ((("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor") | ("readonly-signature" | "signature" | "readonly-field" | "field" | "method" | "constructor")[])[] | "never")
    optionalityOrder?: ("optional-first" | "required-first")
    order?: ("alphabetically" | "alphabetically-case-insensitive" | "as-written" | "natural" | "natural-case-insensitive")
  })
}]
// ----- ts/method-signature-style -----
type TsMethodSignatureStyle = []|[("property" | "method")]
// ----- ts/naming-convention -----
type _TsNamingConventionFormatOptionsConfig = (_TsNamingConventionPredefinedFormats[] | null)
type _TsNamingConventionPredefinedFormats = ("camelCase" | "strictCamelCase" | "PascalCase" | "StrictPascalCase" | "snake_case" | "UPPER_CASE")
type _TsNamingConventionUnderscoreOptions = ("forbid" | "allow" | "require" | "requireDouble" | "allowDouble" | "allowSingleOrDouble")
type _TsNamingConvention_PrefixSuffixConfig = string[]
type _TsNamingConventionTypeModifiers = ("boolean" | "string" | "number" | "function" | "array")
type TsNamingConvention = ({
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
  selector: ("default" | "variableLike" | "memberLike" | "typeLike" | "method" | "property" | "accessor" | "variable" | "function" | "parameter" | "parameterProperty" | "classicAccessor" | "enumMember" | "classMethod" | "objectLiteralMethod" | "typeMethod" | "classProperty" | "objectLiteralProperty" | "typeProperty" | "autoAccessor" | "class" | "interface" | "typeAlias" | "enum" | "typeParameter" | "import")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "default"
  modifiers?: ("const" | "readonly" | "static" | "public" | "protected" | "private" | "#private" | "abstract" | "destructured" | "global" | "exported" | "unused" | "requiresQuotes" | "override" | "async" | "default" | "namespace")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "variableLike"
  modifiers?: ("unused" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "variable"
  modifiers?: ("const" | "destructured" | "exported" | "global" | "unused" | "async")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "function"
  modifiers?: ("exported" | "global" | "unused" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "parameter"
  modifiers?: ("destructured" | "unused")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "memberLike"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classProperty"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "objectLiteralProperty"
  modifiers?: ("public" | "requiresQuotes")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeProperty"
  modifiers?: ("public" | "readonly" | "requiresQuotes")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "parameterProperty"
  modifiers?: ("private" | "protected" | "public" | "readonly")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "property"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "readonly" | "requiresQuotes" | "static" | "override" | "async")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classMethod"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "objectLiteralMethod"
  modifiers?: ("public" | "requiresQuotes" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeMethod"
  modifiers?: ("public" | "requiresQuotes")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "method"
  modifiers?: ("abstract" | "private" | "#private" | "protected" | "public" | "requiresQuotes" | "static" | "override" | "async")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "classicAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "autoAccessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "accessor"
  modifiers?: ("abstract" | "private" | "protected" | "public" | "requiresQuotes" | "static" | "override")[]
  types?: _TsNamingConventionTypeModifiers[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "enumMember"
  modifiers?: ("requiresQuotes")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeLike"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "class"
  modifiers?: ("abstract" | "exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "interface"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeAlias"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "enum"
  modifiers?: ("exported" | "unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "typeParameter"
  modifiers?: ("unused")[]
} | {
  custom?: _TsNamingConvention_MatchRegexConfig
  failureMessage?: string
  format: _TsNamingConventionFormatOptionsConfig
  leadingUnderscore?: _TsNamingConventionUnderscoreOptions
  prefix?: _TsNamingConvention_PrefixSuffixConfig
  suffix?: _TsNamingConvention_PrefixSuffixConfig
  trailingUnderscore?: _TsNamingConventionUnderscoreOptions
  filter?: (string | _TsNamingConvention_MatchRegexConfig)
  selector: "import"
  modifiers?: ("default" | "namespace")[]
})[]
interface _TsNamingConvention_MatchRegexConfig {
  match: boolean
  regex: string
}
// ----- ts/no-base-to-string -----
type TsNoBaseToString = []|[{
  
  checkUnknown?: boolean
  
  ignoredTypeNames?: string[]
}]
// ----- ts/no-confusing-void-expression -----
type TsNoConfusingVoidExpression = []|[{
  
  ignoreArrowShorthand?: boolean
  
  ignoreVoidOperator?: boolean
  
  ignoreVoidReturningFunctions?: boolean
}]
// ----- ts/no-deprecated -----
type TsNoDeprecated = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- ts/no-duplicate-type-constituents -----
type TsNoDuplicateTypeConstituents = []|[{
  
  ignoreIntersections?: boolean
  
  ignoreUnions?: boolean
}]
// ----- ts/no-empty-function -----
type TsNoEmptyFunction = []|[{
  
  allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "private-constructors" | "protected-constructors" | "asyncFunctions" | "asyncMethods" | "decoratedFunctions" | "overrideMethods")[]
}]
// ----- ts/no-empty-interface -----
type TsNoEmptyInterface = []|[{
  
  allowSingleExtends?: boolean
}]
// ----- ts/no-empty-object-type -----
type TsNoEmptyObjectType = []|[{
  
  allowInterfaces?: ("always" | "never" | "with-single-extends")
  
  allowObjectTypes?: ("always" | "never")
  
  allowWithName?: string
}]
// ----- ts/no-explicit-any -----
type TsNoExplicitAny = []|[{
  
  fixToUnknown?: boolean
  
  ignoreRestArgs?: boolean
}]
// ----- ts/no-extraneous-class -----
type TsNoExtraneousClass = []|[{
  
  allowConstructorOnly?: boolean
  
  allowEmpty?: boolean
  
  allowStaticOnly?: boolean
  
  allowWithDecorator?: boolean
}]
// ----- ts/no-floating-promises -----
type TsNoFloatingPromises = []|[{
  
  allowForKnownSafeCalls?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowForKnownSafePromises?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkThenables?: boolean
  
  ignoreIIFE?: boolean
  
  ignoreVoid?: boolean
}]
// ----- ts/no-inferrable-types -----
type TsNoInferrableTypes = []|[{
  
  ignoreParameters?: boolean
  
  ignoreProperties?: boolean
}]
// ----- ts/no-invalid-this -----
type TsNoInvalidThis = []|[{
  capIsConstructor?: boolean
}]
// ----- ts/no-invalid-void-type -----
type TsNoInvalidVoidType = []|[{
  
  allowAsThisParameter?: boolean
  
  allowInGenericTypeArguments?: (boolean | [string, ...(string)[]])
}]
// ----- ts/no-magic-numbers -----
type TsNoMagicNumbers = []|[{
  detectObjects?: boolean
  enforceConst?: boolean
  ignore?: (number | string)[]
  ignoreArrayIndexes?: boolean
  ignoreDefaultValues?: boolean
  ignoreClassFieldInitialValues?: boolean
  
  ignoreEnums?: boolean
  
  ignoreNumericLiteralTypes?: boolean
  
  ignoreReadonlyClassProperties?: boolean
  
  ignoreTypeIndexes?: boolean
}]
// ----- ts/no-meaningless-void-operator -----
type TsNoMeaninglessVoidOperator = []|[{
  
  checkNever?: boolean
}]
// ----- ts/no-misused-promises -----
type TsNoMisusedPromises = []|[{
  
  checksConditionals?: boolean
  
  checksSpreads?: boolean
  
  checksVoidReturn?: (boolean | {
    
    arguments?: boolean
    
    attributes?: boolean
    
    inheritedMethods?: boolean
    
    properties?: boolean
    
    returns?: boolean
    
    variables?: boolean
  })
}]
// ----- ts/no-misused-spread -----
type TsNoMisusedSpread = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- ts/no-namespace -----
type TsNoNamespace = []|[{
  
  allowDeclarations?: boolean
  
  allowDefinitionFiles?: boolean
}]
// ----- ts/no-redeclare -----
type TsNoRedeclare = []|[{
  
  builtinGlobals?: boolean
  
  ignoreDeclarationMerge?: boolean
}]
// ----- ts/no-require-imports -----
type TsNoRequireImports = []|[{
  
  allow?: string[]
  
  allowAsImport?: boolean
}]
// ----- ts/no-restricted-imports -----
type TsNoRestrictedImports = ((string | {
  name: string
  message?: string
  importNames?: string[]
  allowImportNames?: string[]
  
  allowTypeImports?: boolean
})[] | []|[{
  paths?: (string | {
    name: string
    message?: string
    importNames?: string[]
    allowImportNames?: string[]
    
    allowTypeImports?: boolean
  })[]
  patterns?: (string[] | {
    
    importNames?: [string, ...(string)[]]
    
    allowImportNames?: [string, ...(string)[]]
    
    group?: [string, ...(string)[]]
    regex?: string
    importNamePattern?: string
    allowImportNamePattern?: string
    message?: string
    caseSensitive?: boolean
    
    allowTypeImports?: boolean
  }[])
}])
// ----- ts/no-restricted-types -----
type TsNoRestrictedTypes = []|[{
  
  types?: {
    [k: string]: (true | string | {
      
      fixWith?: string
      
      message?: string
      
      suggest?: string[]
    }) | undefined
  }
}]
// ----- ts/no-shadow -----
type TsNoShadow = []|[{
  
  allow?: string[]
  
  builtinGlobals?: boolean
  
  hoist?: ("all" | "functions" | "functions-and-types" | "never" | "types")
  
  ignoreFunctionTypeParameterNameValueShadow?: boolean
  
  ignoreOnInitialization?: boolean
  
  ignoreTypeValueShadow?: boolean
}]
// ----- ts/no-this-alias -----
type TsNoThisAlias = []|[{
  
  allowDestructuring?: boolean
  
  allowedNames?: string[]
}]
// ----- ts/no-type-alias -----
type TsNoTypeAlias = []|[{
  
  allowAliases?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowCallbacks?: ("always" | "never")
  
  allowConditionalTypes?: ("always" | "never")
  
  allowConstructors?: ("always" | "never")
  
  allowGenerics?: ("always" | "never")
  
  allowLiterals?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowMappedTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
  
  allowTupleTypes?: ("always" | "never" | "in-unions" | "in-intersections" | "in-unions-and-intersections")
}]
// ----- ts/no-unnecessary-boolean-literal-compare -----
type TsNoUnnecessaryBooleanLiteralCompare = []|[{
  
  allowComparingNullableBooleansToFalse?: boolean
  
  allowComparingNullableBooleansToTrue?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
}]
// ----- ts/no-unnecessary-condition -----
type TsNoUnnecessaryCondition = []|[{
  
  allowConstantLoopConditions?: (boolean | ("always" | "never" | "only-allowed-literals"))
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  checkTypePredicates?: boolean
}]
// ----- ts/no-unnecessary-type-assertion -----
type TsNoUnnecessaryTypeAssertion = []|[{
  
  checkLiteralConstAssertions?: boolean
  
  typesToIgnore?: string[]
}]
// ----- ts/no-unsafe-member-access -----
type TsNoUnsafeMemberAccess = []|[{
  
  allowOptionalChaining?: boolean
}]
// ----- ts/no-unused-expressions -----
type TsNoUnusedExpressions = []|[{
  allowShortCircuit?: boolean
  allowTernary?: boolean
  allowTaggedTemplates?: boolean
  enforceForJSX?: boolean
}]
// ----- ts/no-unused-vars -----
type TsNoUnusedVars = []|[(("all" | "local") | {
  
  args?: ("all" | "after-used" | "none")
  
  argsIgnorePattern?: string
  
  caughtErrors?: ("all" | "none")
  
  caughtErrorsIgnorePattern?: string
  
  destructuredArrayIgnorePattern?: string
  
  ignoreClassWithStaticInitBlock?: boolean
  
  ignoreRestSiblings?: boolean
  
  ignoreUsingDeclarations?: boolean
  
  reportUsedIgnorePattern?: boolean
  
  vars?: ("all" | "local")
  
  varsIgnorePattern?: string
})]
// ----- ts/no-use-before-define -----
type TsNoUseBeforeDefine = []|[("nofunc" | {
  
  allowNamedExports?: boolean
  
  classes?: boolean
  
  enums?: boolean
  
  functions?: boolean
  
  ignoreTypeReferences?: boolean
  
  typedefs?: boolean
  
  variables?: boolean
})]
// ----- ts/no-var-requires -----
type TsNoVarRequires = []|[{
  
  allow?: string[]
}]
// ----- ts/only-throw-error -----
type TsOnlyThrowError = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  allowRethrowing?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- ts/parameter-properties -----
type TsParameterProperties = []|[{
  
  allow?: ("readonly" | "private" | "protected" | "public" | "private readonly" | "protected readonly" | "public readonly")[]
  
  prefer?: ("class-property" | "parameter-property")
}]
// ----- ts/prefer-destructuring -----
type TsPreferDestructuring = []|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
})]|[({
  AssignmentExpression?: {
    array?: boolean
    object?: boolean
  }
  VariableDeclarator?: {
    array?: boolean
    object?: boolean
  }
} | {
  array?: boolean
  object?: boolean
}), {
  
  enforceForDeclarationWithTypeAnnotation?: boolean
  
  enforceForRenamedProperties?: boolean
}]
// ----- ts/prefer-literal-enum-member -----
type TsPreferLiteralEnumMember = []|[{
  
  allowBitwiseExpressions?: boolean
}]
// ----- ts/prefer-nullish-coalescing -----
type TsPreferNullishCoalescing = []|[{
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  ignoreBooleanCoercion?: boolean
  
  ignoreConditionalTests?: boolean
  
  ignoreIfStatements?: boolean
  
  ignoreMixedLogicalExpressions?: boolean
  
  ignorePrimitives?: ({
    
    bigint?: boolean
    
    boolean?: boolean
    
    number?: boolean
    
    string?: boolean
  } | true)
  
  ignoreTernaryTests?: boolean
}]
// ----- ts/prefer-optional-chain -----
type TsPreferOptionalChain = []|[{
  
  allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing?: boolean
  
  checkAny?: boolean
  
  checkBigInt?: boolean
  
  checkBoolean?: boolean
  
  checkNumber?: boolean
  
  checkString?: boolean
  
  checkUnknown?: boolean
  
  requireNullish?: boolean
}]
// ----- ts/prefer-promise-reject-errors -----
type TsPreferPromiseRejectErrors = []|[{
  
  allowEmptyReject?: boolean
  
  allowThrowingAny?: boolean
  
  allowThrowingUnknown?: boolean
}]
// ----- ts/prefer-readonly -----
type TsPreferReadonly = []|[{
  
  onlyInlineLambdas?: boolean
}]
// ----- ts/prefer-readonly-parameter-types -----
type TsPreferReadonlyParameterTypes = []|[{
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
  
  checkParameterProperties?: boolean
  
  ignoreInferredTypes?: boolean
  
  treatMethodsAsReadonly?: boolean
}]
// ----- ts/prefer-string-starts-ends-with -----
type TsPreferStringStartsEndsWith = []|[{
  
  allowSingleElementEquality?: ("always" | "never")
}]
// ----- ts/promise-function-async -----
type TsPromiseFunctionAsync = []|[{
  
  allowAny?: boolean
  
  allowedPromiseNames?: string[]
  
  checkArrowFunctions?: boolean
  
  checkFunctionDeclarations?: boolean
  
  checkFunctionExpressions?: boolean
  
  checkMethodDeclarations?: boolean
}]
// ----- ts/require-array-sort-compare -----
type TsRequireArraySortCompare = []|[{
  
  ignoreStringArrays?: boolean
}]
// ----- ts/restrict-plus-operands -----
type TsRestrictPlusOperands = []|[{
  
  allowAny?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumberAndString?: boolean
  
  allowRegExp?: boolean
  
  skipCompoundAssignments?: boolean
}]
// ----- ts/restrict-template-expressions -----
type TsRestrictTemplateExpressions = []|[{
  
  allowAny?: boolean
  
  allowArray?: boolean
  
  allowBoolean?: boolean
  
  allowNullish?: boolean
  
  allowNumber?: boolean
  
  allowRegExp?: boolean
  
  allowNever?: boolean
  
  allow?: (string | {
    from: "file"
    name: (string | [string, ...(string)[]])
    path?: string
  } | {
    from: "lib"
    name: (string | [string, ...(string)[]])
  } | {
    from: "package"
    name: (string | [string, ...(string)[]])
    package: string
  })[]
}]
// ----- ts/return-await -----
type TsReturnAwait = []|[(("always" | "error-handling-correctness-only" | "in-try-catch" | "never") & string)]
// ----- ts/sort-type-constituents -----
type TsSortTypeConstituents = []|[{
  
  caseSensitive?: boolean
  
  checkIntersections?: boolean
  
  checkUnions?: boolean
  
  groupOrder?: ("conditional" | "function" | "import" | "intersection" | "keyword" | "nullish" | "literal" | "named" | "object" | "operator" | "tuple" | "union")[]
}]
// ----- ts/strict-boolean-expressions -----
type TsStrictBooleanExpressions = []|[{
  
  allowAny?: boolean
  
  allowNullableBoolean?: boolean
  
  allowNullableEnum?: boolean
  
  allowNullableNumber?: boolean
  
  allowNullableObject?: boolean
  
  allowNullableString?: boolean
  
  allowNumber?: boolean
  
  allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean
  
  allowString?: boolean
}]
// ----- ts/switch-exhaustiveness-check -----
type TsSwitchExhaustivenessCheck = []|[{
  
  allowDefaultCaseForExhaustiveSwitch?: boolean
  
  considerDefaultExhaustiveForUnions?: boolean
  
  defaultCaseCommentPattern?: string
  
  requireDefaultForNonUnion?: boolean
}]
// ----- ts/triple-slash-reference -----
type TsTripleSlashReference = []|[{
  
  lib?: ("always" | "never")
  
  path?: ("always" | "never")
  
  types?: ("always" | "never" | "prefer-import")
}]
// ----- ts/typedef -----
type TsTypedef = []|[{
  
  arrayDestructuring?: boolean
  
  arrowParameter?: boolean
  
  memberVariableDeclaration?: boolean
  
  objectDestructuring?: boolean
  
  parameter?: boolean
  
  propertyDeclaration?: boolean
  
  variableDeclaration?: boolean
  
  variableDeclarationIgnoreFunction?: boolean
}]
// ----- ts/unbound-method -----
type TsUnboundMethod = []|[{
  
  ignoreStatic?: boolean
}]
// ----- ts/unified-signatures -----
type TsUnifiedSignatures = []|[{
  
  ignoreDifferentlyNamedParameters?: boolean
  
  ignoreOverloadsWithDifferentJSDoc?: boolean
}]

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
   * Enforce linebreaks after opening and before closing array brackets
   * @see https://eslint.style/rules/js/array-bracket-newline
   */
  'style/array-bracket-newline'?: Linter.RuleEntry<StyleArrayBracketNewline>
  /**
   * Enforce consistent spacing inside array brackets
   * @see https://eslint.style/rules/js/array-bracket-spacing
   */
  'style/array-bracket-spacing'?: Linter.RuleEntry<StyleArrayBracketSpacing>
  /**
   * Enforce line breaks after each array element
   * @see https://eslint.style/rules/js/array-element-newline
   */
  'style/array-element-newline'?: Linter.RuleEntry<StyleArrayElementNewline>
  /**
   * Require parentheses around arrow function arguments
   * @see https://eslint.style/rules/js/arrow-parens
   */
  'style/arrow-parens'?: Linter.RuleEntry<StyleArrowParens>
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions
   * @see https://eslint.style/rules/js/arrow-spacing
   */
  'style/arrow-spacing'?: Linter.RuleEntry<StyleArrowSpacing>
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block
   * @see https://eslint.style/rules/ts/block-spacing
   */
  'style/block-spacing'?: Linter.RuleEntry<StyleBlockSpacing>
  /**
   * Enforce consistent brace style for blocks
   * @see https://eslint.style/rules/ts/brace-style
   */
  'style/brace-style'?: Linter.RuleEntry<StyleBraceStyle>
  /**
   * Require or disallow trailing commas
   * @see https://eslint.style/rules/ts/comma-dangle
   */
  'style/comma-dangle'?: Linter.RuleEntry<StyleCommaDangle>
  /**
   * Enforce consistent spacing before and after commas
   * @see https://eslint.style/rules/ts/comma-spacing
   */
  'style/comma-spacing'?: Linter.RuleEntry<StyleCommaSpacing>
  /**
   * Enforce consistent comma style
   * @see https://eslint.style/rules/js/comma-style
   */
  'style/comma-style'?: Linter.RuleEntry<StyleCommaStyle>
  /**
   * Enforce consistent spacing inside computed property brackets
   * @see https://eslint.style/rules/js/computed-property-spacing
   */
  'style/computed-property-spacing'?: Linter.RuleEntry<StyleComputedPropertySpacing>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/plus/curly-newline
   */
  'style/curly-newline'?: Linter.RuleEntry<StyleCurlyNewline>
  /**
   * Enforce consistent newlines before and after dots
   * @see https://eslint.style/rules/js/dot-location
   */
  'style/dot-location'?: Linter.RuleEntry<StyleDotLocation>
  /**
   * Require or disallow newline at the end of files
   * @see https://eslint.style/rules/js/eol-last
   */
  'style/eol-last'?: Linter.RuleEntry<StyleEolLast>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  'style/func-call-spacing'?: Linter.RuleEntry<StyleFuncCallSpacing>
  /**
   * Enforce line breaks between arguments of a function call
   * @see https://eslint.style/rules/js/function-call-argument-newline
   */
  'style/function-call-argument-newline'?: Linter.RuleEntry<StyleFunctionCallArgumentNewline>
  /**
   * Require or disallow spacing between function identifiers and their invocations
   * @see https://eslint.style/rules/ts/function-call-spacing
   */
  'style/function-call-spacing'?: Linter.RuleEntry<StyleFunctionCallSpacing>
  /**
   * Enforce consistent line breaks inside function parentheses
   * @see https://eslint.style/rules/js/function-paren-newline
   */
  'style/function-paren-newline'?: Linter.RuleEntry<StyleFunctionParenNewline>
  /**
   * Enforce consistent spacing around `*` operators in generator functions
   * @see https://eslint.style/rules/js/generator-star-spacing
   */
  'style/generator-star-spacing'?: Linter.RuleEntry<StyleGeneratorStarSpacing>
  /**
   * Enforce the location of arrow function bodies
   * @see https://eslint.style/rules/js/implicit-arrow-linebreak
   */
  'style/implicit-arrow-linebreak'?: Linter.RuleEntry<StyleImplicitArrowLinebreak>
  /**
   * Enforce consistent indentation
   * @see https://eslint.style/rules/ts/indent
   */
  'style/indent'?: Linter.RuleEntry<StyleIndent>
  /**
   * Indentation for binary operators
   * @see https://eslint.style/rules/plus/indent-binary-ops
   */
  'style/indent-binary-ops'?: Linter.RuleEntry<StyleIndentBinaryOps>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-child-element-spacing
   */
  'style/jsx-child-element-spacing'?: Linter.RuleEntry<[]>
  /**
   * Enforce closing bracket location in JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-bracket-location
   */
  'style/jsx-closing-bracket-location'?: Linter.RuleEntry<StyleJsxClosingBracketLocation>
  /**
   * Enforce closing tag location for multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-closing-tag-location
   */
  'style/jsx-closing-tag-location'?: Linter.RuleEntry<StyleJsxClosingTagLocation>
  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
   * @see https://eslint.style/rules/jsx/jsx-curly-brace-presence
   */
  'style/jsx-curly-brace-presence'?: Linter.RuleEntry<StyleJsxCurlyBracePresence>
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-newline
   */
  'style/jsx-curly-newline'?: Linter.RuleEntry<StyleJsxCurlyNewline>
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
   * @see https://eslint.style/rules/jsx/jsx-curly-spacing
   */
  'style/jsx-curly-spacing'?: Linter.RuleEntry<StyleJsxCurlySpacing>
  /**
   * Enforce or disallow spaces around equal signs in JSX attributes
   * @see https://eslint.style/rules/jsx/jsx-equals-spacing
   */
  'style/jsx-equals-spacing'?: Linter.RuleEntry<StyleJsxEqualsSpacing>
  /**
   * Enforce proper position of the first property in JSX
   * @see https://eslint.style/rules/jsx/jsx-first-prop-new-line
   */
  'style/jsx-first-prop-new-line'?: Linter.RuleEntry<StyleJsxFirstPropNewLine>
  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see https://eslint.style/rules/jsx/jsx-function-call-newline
   */
  'style/jsx-function-call-newline'?: Linter.RuleEntry<StyleJsxFunctionCallNewline>
  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @see https://eslint.style/rules/jsx/jsx-indent
   * @deprecated
   */
  'style/jsx-indent'?: Linter.RuleEntry<StyleJsxIndent>
  /**
   * Enforce props indentation in JSX
   * @see https://eslint.style/rules/jsx/jsx-indent-props
   */
  'style/jsx-indent-props'?: Linter.RuleEntry<StyleJsxIndentProps>
  /**
   * Enforce maximum of props on a single line in JSX
   * @see https://eslint.style/rules/jsx/jsx-max-props-per-line
   */
  'style/jsx-max-props-per-line'?: Linter.RuleEntry<StyleJsxMaxPropsPerLine>
  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see https://eslint.style/rules/jsx/jsx-newline
   */
  'style/jsx-newline'?: Linter.RuleEntry<StyleJsxNewline>
  /**
   * Require one JSX element per line
   * @see https://eslint.style/rules/jsx/jsx-one-expression-per-line
   */
  'style/jsx-one-expression-per-line'?: Linter.RuleEntry<StyleJsxOneExpressionPerLine>
  /**
   * Enforce PascalCase for user-defined JSX components
   * @see https://eslint.style/rules/jsx/jsx-pascal-case
   */
  'style/jsx-pascal-case'?: Linter.RuleEntry<StyleJsxPascalCase>
  /**
   * Disallow multiple spaces between inline JSX props
   * @see https://eslint.style/rules/jsx/jsx-props-no-multi-spaces
   */
  'style/jsx-props-no-multi-spaces'?: Linter.RuleEntry<[]>
  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes
   * @see https://eslint.style/rules/js/jsx-quotes
   */
  'style/jsx-quotes'?: Linter.RuleEntry<StyleJsxQuotes>
  /**
   * Disallow extra closing tags for components without children
   * @see https://eslint.style/rules/jsx/jsx-self-closing-comp
   */
  'style/jsx-self-closing-comp'?: Linter.RuleEntry<StyleJsxSelfClosingComp>
  /**
   * Enforce props alphabetical sorting
   * @see https://eslint.style/rules/jsx/jsx-sort-props
   */
  'style/jsx-sort-props'?: Linter.RuleEntry<StyleJsxSortProps>
  /**
   * Enforce whitespace in and around the JSX opening and closing brackets
   * @see https://eslint.style/rules/jsx/jsx-tag-spacing
   */
  'style/jsx-tag-spacing'?: Linter.RuleEntry<StyleJsxTagSpacing>
  /**
   * Disallow missing parentheses around multiline JSX
   * @see https://eslint.style/rules/jsx/jsx-wrap-multilines
   */
  'style/jsx-wrap-multilines'?: Linter.RuleEntry<StyleJsxWrapMultilines>
  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces
   * @see https://eslint.style/rules/ts/key-spacing
   */
  'style/key-spacing'?: Linter.RuleEntry<StyleKeySpacing>
  /**
   * Enforce consistent spacing before and after keywords
   * @see https://eslint.style/rules/ts/keyword-spacing
   */
  'style/keyword-spacing'?: Linter.RuleEntry<StyleKeywordSpacing>
  /**
   * Enforce position of line comments
   * @see https://eslint.style/rules/js/line-comment-position
   */
  'style/line-comment-position'?: Linter.RuleEntry<StyleLineCommentPosition>
  /**
   * Enforce consistent linebreak style
   * @see https://eslint.style/rules/js/linebreak-style
   */
  'style/linebreak-style'?: Linter.RuleEntry<StyleLinebreakStyle>
  /**
   * Require empty lines around comments
   * @see https://eslint.style/rules/ts/lines-around-comment
   */
  'style/lines-around-comment'?: Linter.RuleEntry<StyleLinesAroundComment>
  /**
   * Require or disallow an empty line between class members
   * @see https://eslint.style/rules/ts/lines-between-class-members
   */
  'style/lines-between-class-members'?: Linter.RuleEntry<StyleLinesBetweenClassMembers>
  /**
   * Enforce a maximum line length
   * @see https://eslint.style/rules/js/max-len
   */
  'style/max-len'?: Linter.RuleEntry<StyleMaxLen>
  /**
   * Enforce a maximum number of statements allowed per line
   * @see https://eslint.style/rules/js/max-statements-per-line
   */
  'style/max-statements-per-line'?: Linter.RuleEntry<StyleMaxStatementsPerLine>
  /**
   * Require a specific member delimiter style for interfaces and type literals
   * @see https://eslint.style/rules/ts/member-delimiter-style
   */
  'style/member-delimiter-style'?: Linter.RuleEntry<StyleMemberDelimiterStyle>
  /**
   * Enforce a particular style for multiline comments
   * @see https://eslint.style/rules/js/multiline-comment-style
   */
  'style/multiline-comment-style'?: Linter.RuleEntry<StyleMultilineCommentStyle>
  /**
   * Enforce newlines between operands of ternary expressions
   * @see https://eslint.style/rules/js/multiline-ternary
   */
  'style/multiline-ternary'?: Linter.RuleEntry<StyleMultilineTernary>
  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments
   * @see https://eslint.style/rules/js/new-parens
   */
  'style/new-parens'?: Linter.RuleEntry<StyleNewParens>
  /**
   * Require a newline after each call in a method chain
   * @see https://eslint.style/rules/js/newline-per-chained-call
   */
  'style/newline-per-chained-call'?: Linter.RuleEntry<StyleNewlinePerChainedCall>
  /**
   * Disallow arrow functions where they could be confused with comparisons
   * @see https://eslint.style/rules/js/no-confusing-arrow
   */
  'style/no-confusing-arrow'?: Linter.RuleEntry<StyleNoConfusingArrow>
  /**
   * Disallow unnecessary parentheses
   * @see https://eslint.style/rules/ts/no-extra-parens
   */
  'style/no-extra-parens'?: Linter.RuleEntry<StyleNoExtraParens>
  /**
   * Disallow unnecessary semicolons
   * @see https://eslint.style/rules/ts/no-extra-semi
   */
  'style/no-extra-semi'?: Linter.RuleEntry<[]>
  /**
   * Disallow leading or trailing decimal points in numeric literals
   * @see https://eslint.style/rules/js/no-floating-decimal
   */
  'style/no-floating-decimal'?: Linter.RuleEntry<[]>
  /**
   * Disallow mixed binary operators
   * @see https://eslint.style/rules/js/no-mixed-operators
   */
  'style/no-mixed-operators'?: Linter.RuleEntry<StyleNoMixedOperators>
  /**
   * Disallow mixed spaces and tabs for indentation
   * @see https://eslint.style/rules/js/no-mixed-spaces-and-tabs
   */
  'style/no-mixed-spaces-and-tabs'?: Linter.RuleEntry<StyleNoMixedSpacesAndTabs>
  /**
   * Disallow multiple spaces
   * @see https://eslint.style/rules/js/no-multi-spaces
   */
  'style/no-multi-spaces'?: Linter.RuleEntry<StyleNoMultiSpaces>
  /**
   * Disallow multiple empty lines
   * @see https://eslint.style/rules/js/no-multiple-empty-lines
   */
  'style/no-multiple-empty-lines'?: Linter.RuleEntry<StyleNoMultipleEmptyLines>
  /**
   * Disallow all tabs
   * @see https://eslint.style/rules/js/no-tabs
   */
  'style/no-tabs'?: Linter.RuleEntry<StyleNoTabs>
  /**
   * Disallow trailing whitespace at the end of lines
   * @see https://eslint.style/rules/js/no-trailing-spaces
   */
  'style/no-trailing-spaces'?: Linter.RuleEntry<StyleNoTrailingSpaces>
  /**
   * Disallow whitespace before properties
   * @see https://eslint.style/rules/js/no-whitespace-before-property
   */
  'style/no-whitespace-before-property'?: Linter.RuleEntry<[]>
  /**
   * Enforce the location of single-line statements
   * @see https://eslint.style/rules/js/nonblock-statement-body-position
   */
  'style/nonblock-statement-body-position'?: Linter.RuleEntry<StyleNonblockStatementBodyPosition>
  /**
   * Enforce consistent line breaks after opening and before closing braces
   * @see https://eslint.style/rules/ts/object-curly-newline
   */
  'style/object-curly-newline'?: Linter.RuleEntry<StyleObjectCurlyNewline>
  /**
   * Enforce consistent spacing inside braces
   * @see https://eslint.style/rules/ts/object-curly-spacing
   */
  'style/object-curly-spacing'?: Linter.RuleEntry<StyleObjectCurlySpacing>
  /**
   * Enforce placing object properties on separate lines
   * @see https://eslint.style/rules/ts/object-property-newline
   */
  'style/object-property-newline'?: Linter.RuleEntry<StyleObjectPropertyNewline>
  /**
   * Require or disallow newlines around variable declarations
   * @see https://eslint.style/rules/js/one-var-declaration-per-line
   */
  'style/one-var-declaration-per-line'?: Linter.RuleEntry<StyleOneVarDeclarationPerLine>
  /**
   * Enforce consistent linebreak style for operators
   * @see https://eslint.style/rules/js/operator-linebreak
   */
  'style/operator-linebreak'?: Linter.RuleEntry<StyleOperatorLinebreak>
  /**
   * Require or disallow padding within blocks
   * @see https://eslint.style/rules/js/padded-blocks
   */
  'style/padded-blocks'?: Linter.RuleEntry<StylePaddedBlocks>
  /**
   * Require or disallow padding lines between statements
   * @see https://eslint.style/rules/ts/padding-line-between-statements
   */
  'style/padding-line-between-statements'?: Linter.RuleEntry<StylePaddingLineBetweenStatements>
  /**
   * Require quotes around object literal, type literal, interfaces and enums property names
   * @see https://eslint.style/rules/ts/quote-props
   */
  'style/quote-props'?: Linter.RuleEntry<StyleQuoteProps>
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   * @see https://eslint.style/rules/ts/quotes
   */
  'style/quotes'?: Linter.RuleEntry<StyleQuotes>
  /**
   * Enforce spacing between rest and spread operators and their expressions
   * @see https://eslint.style/rules/js/rest-spread-spacing
   */
  'style/rest-spread-spacing'?: Linter.RuleEntry<StyleRestSpreadSpacing>
  /**
   * Require or disallow semicolons instead of ASI
   * @see https://eslint.style/rules/ts/semi
   */
  'style/semi'?: Linter.RuleEntry<StyleSemi>
  /**
   * Enforce consistent spacing before and after semicolons
   * @see https://eslint.style/rules/js/semi-spacing
   */
  'style/semi-spacing'?: Linter.RuleEntry<StyleSemiSpacing>
  /**
   * Enforce location of semicolons
   * @see https://eslint.style/rules/js/semi-style
   */
  'style/semi-style'?: Linter.RuleEntry<StyleSemiStyle>
  /**
   * Enforce consistent spacing before blocks
   * @see https://eslint.style/rules/ts/space-before-blocks
   */
  'style/space-before-blocks'?: Linter.RuleEntry<StyleSpaceBeforeBlocks>
  /**
   * Enforce consistent spacing before function parenthesis
   * @see https://eslint.style/rules/ts/space-before-function-paren
   */
  'style/space-before-function-paren'?: Linter.RuleEntry<StyleSpaceBeforeFunctionParen>
  /**
   * Enforce consistent spacing inside parentheses
   * @see https://eslint.style/rules/js/space-in-parens
   */
  'style/space-in-parens'?: Linter.RuleEntry<StyleSpaceInParens>
  /**
   * Require spacing around infix operators
   * @see https://eslint.style/rules/ts/space-infix-ops
   */
  'style/space-infix-ops'?: Linter.RuleEntry<StyleSpaceInfixOps>
  /**
   * Enforce consistent spacing before or after unary operators
   * @see https://eslint.style/rules/js/space-unary-ops
   */
  'style/space-unary-ops'?: Linter.RuleEntry<StyleSpaceUnaryOps>
  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment
   * @see https://eslint.style/rules/js/spaced-comment
   */
  'style/spaced-comment'?: Linter.RuleEntry<StyleSpacedComment>
  /**
   * Enforce spacing around colons of switch statements
   * @see https://eslint.style/rules/js/switch-colon-spacing
   */
  'style/switch-colon-spacing'?: Linter.RuleEntry<StyleSwitchColonSpacing>
  /**
   * Require or disallow spacing around embedded expressions of template strings
   * @see https://eslint.style/rules/js/template-curly-spacing
   */
  'style/template-curly-spacing'?: Linter.RuleEntry<StyleTemplateCurlySpacing>
  /**
   * Require or disallow spacing between template tags and their literals
   * @see https://eslint.style/rules/js/template-tag-spacing
   */
  'style/template-tag-spacing'?: Linter.RuleEntry<StyleTemplateTagSpacing>
  /**
   * Require consistent spacing around type annotations
   * @see https://eslint.style/rules/ts/type-annotation-spacing
   */
  'style/type-annotation-spacing'?: Linter.RuleEntry<StyleTypeAnnotationSpacing>
  /**
   * Enforces consistent spacing inside TypeScript type generics
   * @see https://eslint.style/rules/plus/type-generic-spacing
   */
  'style/type-generic-spacing'?: Linter.RuleEntry<[]>
  /**
   * Expect space before the type declaration in the named tuple
   * @see https://eslint.style/rules/plus/type-named-tuple-spacing
   */
  'style/type-named-tuple-spacing'?: Linter.RuleEntry<[]>
  /**
   * Require parentheses around immediate `function` invocations
   * @see https://eslint.style/rules/js/wrap-iife
   */
  'style/wrap-iife'?: Linter.RuleEntry<StyleWrapIife>
  /**
   * Require parenthesis around regex literals
   * @see https://eslint.style/rules/js/wrap-regex
   */
  'style/wrap-regex'?: Linter.RuleEntry<[]>
  /**
   * Require or disallow spacing around the `*` in `yield*` expressions
   * @see https://eslint.style/rules/js/yield-star-spacing
   */
  'style/yield-star-spacing'?: Linter.RuleEntry<StyleYieldStarSpacing>
}

/* ======= Declarations ======= */
// ----- style/array-bracket-newline -----
type StyleArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- style/array-bracket-spacing -----
type StyleArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- style/array-element-newline -----
type StyleArrayElementNewline = []|[(_StyleArrayElementNewlineBasicConfig | {
  ArrayExpression?: _StyleArrayElementNewlineBasicConfig
  ArrayPattern?: _StyleArrayElementNewlineBasicConfig
})]
type _StyleArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  consistent?: boolean
  multiline?: boolean
  minItems?: (number | null)
})
// ----- style/arrow-parens -----
type StyleArrowParens = []|[("always" | "as-needed")]|[("always" | "as-needed"), {
  requireForBlockBody?: boolean
}]
// ----- style/arrow-spacing -----
type StyleArrowSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- style/block-spacing -----
type StyleBlockSpacing = []|[("always" | "never")]
// ----- style/brace-style -----
type StyleBraceStyle = []|[("1tbs" | "stroustrup" | "allman")]|[("1tbs" | "stroustrup" | "allman"), {
  allowSingleLine?: boolean
}]
// ----- style/comma-dangle -----
type StyleCommaDangle = []|[(_StyleCommaDangleValue | {
  arrays?: _StyleCommaDangleValueWithIgnore
  objects?: _StyleCommaDangleValueWithIgnore
  imports?: _StyleCommaDangleValueWithIgnore
  exports?: _StyleCommaDangleValueWithIgnore
  functions?: _StyleCommaDangleValueWithIgnore
  importAttributes?: _StyleCommaDangleValueWithIgnore
  dynamicImports?: _StyleCommaDangleValueWithIgnore
  enums?: _StyleCommaDangleValueWithIgnore
  generics?: _StyleCommaDangleValueWithIgnore
  tuples?: _StyleCommaDangleValueWithIgnore
})]
type _StyleCommaDangleValue = ("always-multiline" | "always" | "never" | "only-multiline")
type _StyleCommaDangleValueWithIgnore = ("always-multiline" | "always" | "never" | "only-multiline" | "ignore")
// ----- style/comma-spacing -----
type StyleCommaSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- style/comma-style -----
type StyleCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- style/computed-property-spacing -----
type StyleComputedPropertySpacing = []|[("always" | "never")]|[("always" | "never"), {
  enforceForClassMembers?: boolean
}]
// ----- style/curly-newline -----
type StyleCurlyNewline = []|[(("always" | "never") | {
  IfStatementConsequent?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  IfStatementAlternative?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  DoWhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForInStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForOfStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ForStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WhileStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  SwitchCase?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementHandler?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TryStatementFinalizer?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  BlockStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ArrowFunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionDeclaration?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  FunctionExpression?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  Property?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  ClassBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  StaticBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  WithStatement?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSEnumBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  TSModuleBlock?: (("always" | "never") | {
    multiline?: boolean
    minElements?: number
    consistent?: boolean
  })
  multiline?: boolean
  minElements?: number
  consistent?: boolean
})]
// ----- style/dot-location -----
type StyleDotLocation = []|[("object" | "property")]
// ----- style/eol-last -----
type StyleEolLast = []|[("always" | "never" | "unix" | "windows")]
// ----- style/func-call-spacing -----
type StyleFuncCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- style/function-call-argument-newline -----
type StyleFunctionCallArgumentNewline = []|[("always" | "never" | "consistent")]
// ----- style/function-call-spacing -----
type StyleFunctionCallSpacing = ([]|["never"] | []|["always"]|["always", {
  allowNewlines?: boolean
  optionalChain?: {
    before?: boolean
    after?: boolean
  }
}])
// ----- style/function-paren-newline -----
type StyleFunctionParenNewline = []|[(("always" | "never" | "consistent" | "multiline" | "multiline-arguments") | {
  minItems?: number
})]
// ----- style/generator-star-spacing -----
type StyleGeneratorStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
  named?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  anonymous?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
  method?: (("before" | "after" | "both" | "neither") | {
    before?: boolean
    after?: boolean
  })
})]
// ----- style/implicit-arrow-linebreak -----
type StyleImplicitArrowLinebreak = []|[("beside" | "below")]
// ----- style/indent -----
type StyleIndent = []|[("tab" | number)]|[("tab" | number), {
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
  offsetTernaryExpressionsOffsetCallExpressions?: boolean
  ignoredNodes?: string[]
  ignoreComments?: boolean
  tabLength?: number
}]
// ----- style/indent-binary-ops -----
type StyleIndentBinaryOps = []|[(number | "tab")]
// ----- style/jsx-closing-bracket-location -----
type StyleJsxClosingBracketLocation = []|[(("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | {
  location?: ("after-props" | "props-aligned" | "tag-aligned" | "line-aligned")
} | {
  nonEmpty?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
  selfClosing?: (("after-props" | "props-aligned" | "tag-aligned" | "line-aligned") | false)
})]
// ----- style/jsx-closing-tag-location -----
type StyleJsxClosingTagLocation = []|[("tag-aligned" | "line-aligned")]
// ----- style/jsx-curly-brace-presence -----
type StyleJsxCurlyBracePresence = []|[({
  props?: ("always" | "never" | "ignore")
  children?: ("always" | "never" | "ignore")
  propElementValues?: ("always" | "never" | "ignore")
} | ("always" | "never" | "ignore"))]
// ----- style/jsx-curly-newline -----
type StyleJsxCurlyNewline = []|[(("consistent" | "never") | {
  singleline?: ("consistent" | "require" | "forbid")
  multiline?: ("consistent" | "require" | "forbid")
})]
// ----- style/jsx-curly-spacing -----
type StyleJsxCurlySpacing = []|[((_StyleJsxCurlySpacing_BasicConfig & {
  attributes?: _StyleJsxCurlySpacingBasicConfigOrBoolean
  children?: _StyleJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never"))]|[((_StyleJsxCurlySpacing_BasicConfig & {
  attributes?: _StyleJsxCurlySpacingBasicConfigOrBoolean
  children?: _StyleJsxCurlySpacingBasicConfigOrBoolean
  [k: string]: unknown | undefined
}) | ("always" | "never")), {
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
}]
type _StyleJsxCurlySpacingBasicConfigOrBoolean = (_StyleJsxCurlySpacing_BasicConfig | boolean)
interface _StyleJsxCurlySpacing_BasicConfig {
  when?: ("always" | "never")
  allowMultiline?: boolean
  spacing?: {
    objectLiterals?: ("always" | "never")
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- style/jsx-equals-spacing -----
type StyleJsxEqualsSpacing = []|[("always" | "never")]
// ----- style/jsx-first-prop-new-line -----
type StyleJsxFirstPropNewLine = []|[("always" | "never" | "multiline" | "multiline-multiprop" | "multiprop")]
// ----- style/jsx-function-call-newline -----
type StyleJsxFunctionCallNewline = []|[("always" | "multiline")]
// ----- style/jsx-indent -----
type StyleJsxIndent = []|[("tab" | number)]|[("tab" | number), {
  checkAttributes?: boolean
  indentLogicalExpressions?: boolean
}]
// ----- style/jsx-indent-props -----
type StyleJsxIndentProps = []|[(("tab" | "first") | number | {
  indentMode?: (("tab" | "first") | number)
  ignoreTernaryOperator?: boolean
  [k: string]: unknown | undefined
})]
// ----- style/jsx-max-props-per-line -----
type StyleJsxMaxPropsPerLine = []|[({
  maximum?: {
    single?: number
    multi?: number
    [k: string]: unknown | undefined
  }
} | {
  maximum?: number
  when?: ("always" | "multiline")
})]
// ----- style/jsx-newline -----
type StyleJsxNewline = []|[{
  prevent?: boolean
  allowMultilines?: boolean
}]
// ----- style/jsx-one-expression-per-line -----
type StyleJsxOneExpressionPerLine = []|[{
  allow?: ("none" | "literal" | "single-child" | "single-line" | "non-jsx")
}]
// ----- style/jsx-pascal-case -----
type StyleJsxPascalCase = []|[{
  allowAllCaps?: boolean
  allowLeadingUnderscore?: boolean
  allowNamespace?: boolean
  ignore?: string[]
}]
// ----- style/jsx-quotes -----
type StyleJsxQuotes = []|[("prefer-single" | "prefer-double")]
// ----- style/jsx-self-closing-comp -----
type StyleJsxSelfClosingComp = []|[{
  component?: boolean
  html?: boolean
}]
// ----- style/jsx-sort-props -----
type StyleJsxSortProps = []|[{
  callbacksLast?: boolean
  shorthandFirst?: boolean
  shorthandLast?: boolean
  multiline?: ("ignore" | "first" | "last")
  ignoreCase?: boolean
  noSortAlphabetically?: boolean
  reservedFirst?: (unknown[] | boolean)
  locale?: string
}]
// ----- style/jsx-tag-spacing -----
type StyleJsxTagSpacing = []|[{
  closingSlash?: ("always" | "never" | "allow")
  beforeSelfClosing?: ("always" | "proportional-always" | "never" | "allow")
  afterOpening?: ("always" | "allow-multiline" | "never" | "allow")
  beforeClosing?: ("always" | "proportional-always" | "never" | "allow")
}]
// ----- style/jsx-wrap-multilines -----
type StyleJsxWrapMultilines = []|[{
  declaration?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  assignment?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  return?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  arrow?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  condition?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  logical?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  prop?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
  propertyValue?: ((true | false | "ignore" | "parens" | "parens-new-line") | (true | false | "ignore" | "parens" | "parens-new-line"))
}]
// ----- style/key-spacing -----
type StyleKeySpacing = []|[({
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
// ----- style/keyword-spacing -----
type StyleKeywordSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    abstract?: {
      before?: boolean
      after?: boolean
    }
    as?: {
      before?: boolean
      after?: boolean
    }
    async?: {
      before?: boolean
      after?: boolean
    }
    await?: {
      before?: boolean
      after?: boolean
    }
    boolean?: {
      before?: boolean
      after?: boolean
    }
    break?: {
      before?: boolean
      after?: boolean
    }
    byte?: {
      before?: boolean
      after?: boolean
    }
    case?: {
      before?: boolean
      after?: boolean
    }
    catch?: {
      before?: boolean
      after?: boolean
    }
    char?: {
      before?: boolean
      after?: boolean
    }
    class?: {
      before?: boolean
      after?: boolean
    }
    const?: {
      before?: boolean
      after?: boolean
    }
    continue?: {
      before?: boolean
      after?: boolean
    }
    debugger?: {
      before?: boolean
      after?: boolean
    }
    default?: {
      before?: boolean
      after?: boolean
    }
    delete?: {
      before?: boolean
      after?: boolean
    }
    do?: {
      before?: boolean
      after?: boolean
    }
    double?: {
      before?: boolean
      after?: boolean
    }
    else?: {
      before?: boolean
      after?: boolean
    }
    enum?: {
      before?: boolean
      after?: boolean
    }
    export?: {
      before?: boolean
      after?: boolean
    }
    extends?: {
      before?: boolean
      after?: boolean
    }
    false?: {
      before?: boolean
      after?: boolean
    }
    final?: {
      before?: boolean
      after?: boolean
    }
    finally?: {
      before?: boolean
      after?: boolean
    }
    float?: {
      before?: boolean
      after?: boolean
    }
    for?: {
      before?: boolean
      after?: boolean
    }
    from?: {
      before?: boolean
      after?: boolean
    }
    function?: {
      before?: boolean
      after?: boolean
    }
    get?: {
      before?: boolean
      after?: boolean
    }
    goto?: {
      before?: boolean
      after?: boolean
    }
    if?: {
      before?: boolean
      after?: boolean
    }
    implements?: {
      before?: boolean
      after?: boolean
    }
    import?: {
      before?: boolean
      after?: boolean
    }
    in?: {
      before?: boolean
      after?: boolean
    }
    instanceof?: {
      before?: boolean
      after?: boolean
    }
    int?: {
      before?: boolean
      after?: boolean
    }
    interface?: {
      before?: boolean
      after?: boolean
    }
    let?: {
      before?: boolean
      after?: boolean
    }
    long?: {
      before?: boolean
      after?: boolean
    }
    native?: {
      before?: boolean
      after?: boolean
    }
    new?: {
      before?: boolean
      after?: boolean
    }
    null?: {
      before?: boolean
      after?: boolean
    }
    of?: {
      before?: boolean
      after?: boolean
    }
    package?: {
      before?: boolean
      after?: boolean
    }
    private?: {
      before?: boolean
      after?: boolean
    }
    protected?: {
      before?: boolean
      after?: boolean
    }
    public?: {
      before?: boolean
      after?: boolean
    }
    return?: {
      before?: boolean
      after?: boolean
    }
    satisfies?: {
      before?: boolean
      after?: boolean
    }
    set?: {
      before?: boolean
      after?: boolean
    }
    short?: {
      before?: boolean
      after?: boolean
    }
    static?: {
      before?: boolean
      after?: boolean
    }
    super?: {
      before?: boolean
      after?: boolean
    }
    switch?: {
      before?: boolean
      after?: boolean
    }
    synchronized?: {
      before?: boolean
      after?: boolean
    }
    this?: {
      before?: boolean
      after?: boolean
    }
    throw?: {
      before?: boolean
      after?: boolean
    }
    throws?: {
      before?: boolean
      after?: boolean
    }
    transient?: {
      before?: boolean
      after?: boolean
    }
    true?: {
      before?: boolean
      after?: boolean
    }
    try?: {
      before?: boolean
      after?: boolean
    }
    typeof?: {
      before?: boolean
      after?: boolean
    }
    var?: {
      before?: boolean
      after?: boolean
    }
    void?: {
      before?: boolean
      after?: boolean
    }
    volatile?: {
      before?: boolean
      after?: boolean
    }
    while?: {
      before?: boolean
      after?: boolean
    }
    with?: {
      before?: boolean
      after?: boolean
    }
    yield?: {
      before?: boolean
      after?: boolean
    }
    type?: {
      before?: boolean
      after?: boolean
    }
  }
}]
// ----- style/line-comment-position -----
type StyleLineCommentPosition = []|[(("above" | "beside") | {
  position?: ("above" | "beside")
  ignorePattern?: string
  applyDefaultPatterns?: boolean
  applyDefaultIgnorePatterns?: boolean
})]
// ----- style/linebreak-style -----
type StyleLinebreakStyle = []|[("unix" | "windows")]
// ----- style/lines-around-comment -----
type StyleLinesAroundComment = []|[{
  beforeBlockComment?: boolean
  afterBlockComment?: boolean
  beforeLineComment?: boolean
  afterLineComment?: boolean
  allowBlockStart?: boolean
  allowBlockEnd?: boolean
  allowClassStart?: boolean
  allowClassEnd?: boolean
  allowObjectStart?: boolean
  allowObjectEnd?: boolean
  allowArrayStart?: boolean
  allowArrayEnd?: boolean
  allowInterfaceStart?: boolean
  allowInterfaceEnd?: boolean
  allowTypeStart?: boolean
  allowTypeEnd?: boolean
  allowEnumStart?: boolean
  allowEnumEnd?: boolean
  allowModuleStart?: boolean
  allowModuleEnd?: boolean
  ignorePattern?: string
  applyDefaultIgnorePatterns?: boolean
  afterHashbangComment?: boolean
}]
// ----- style/lines-between-class-members -----
type StyleLinesBetweenClassMembers = []|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never"))]|[({
  
  enforce: [{
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  }, ...({
    blankLine: ("always" | "never")
    prev: ("method" | "field" | "*")
    next: ("method" | "field" | "*")
  })[]]
} | ("always" | "never")), {
  exceptAfterSingleLine?: boolean
  exceptAfterOverload?: boolean
}]
// ----- style/max-len -----
type StyleMaxLen = []|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number)]|[({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), ({
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
} | number), {
  code?: number
  comments?: number
  tabWidth?: number
  ignorePattern?: string
  ignoreComments?: boolean
  ignoreStrings?: boolean
  ignoreUrls?: boolean
  ignoreTemplateLiterals?: boolean
  ignoreRegExpLiterals?: boolean
  ignoreTrailingComments?: boolean
}]
// ----- style/max-statements-per-line -----
type StyleMaxStatementsPerLine = []|[{
  max?: number
  ignoredNodes?: ("BreakStatement" | "ClassDeclaration" | "ContinueStatement" | "DebuggerStatement" | "DoWhileStatement" | "ExpressionStatement" | "ForInStatement" | "ForOfStatement" | "ForStatement" | "FunctionDeclaration" | "IfStatement" | "ImportDeclaration" | "LabeledStatement" | "ReturnStatement" | "SwitchStatement" | "ThrowStatement" | "TryStatement" | "VariableDeclaration" | "WhileStatement" | "WithStatement" | "ExportNamedDeclaration" | "ExportDefaultDeclaration" | "ExportAllDeclaration")[]
}]
// ----- style/member-delimiter-style -----
type StyleMemberDelimiterStyle = []|[{
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
  overrides?: {
    interface?: _StyleMemberDelimiterStyle_DelimiterConfig
    typeLiteral?: _StyleMemberDelimiterStyle_DelimiterConfig
  }
  multilineDetection?: ("brackets" | "last-member")
}]
interface _StyleMemberDelimiterStyle_DelimiterConfig {
  multiline?: {
    delimiter?: ("none" | "semi" | "comma")
    requireLast?: boolean
  }
  singleline?: {
    delimiter?: ("semi" | "comma")
    requireLast?: boolean
  }
}
// ----- style/multiline-comment-style -----
type StyleMultilineCommentStyle = ([]|[("starred-block" | "bare-block")] | []|["separate-lines"]|["separate-lines", {
  checkJSDoc?: boolean
}])
// ----- style/multiline-ternary -----
type StyleMultilineTernary = []|[("always" | "always-multiline" | "never")]|[("always" | "always-multiline" | "never"), {
  ignoreJSX?: boolean
  [k: string]: unknown | undefined
}]
// ----- style/new-parens -----
type StyleNewParens = []|[("always" | "never")]
// ----- style/newline-per-chained-call -----
type StyleNewlinePerChainedCall = []|[{
  ignoreChainWithDepth?: number
}]
// ----- style/no-confusing-arrow -----
type StyleNoConfusingArrow = []|[{
  allowParens?: boolean
  onlyOneSimpleParam?: boolean
}]
// ----- style/no-extra-parens -----
type StyleNoExtraParens = ([]|["functions"] | []|["all"]|["all", {
  conditionalAssign?: boolean
  ternaryOperandBinaryExpressions?: boolean
  nestedBinaryExpressions?: boolean
  returnAssign?: boolean
  ignoreJSX?: ("none" | "all" | "single-line" | "multi-line")
  enforceForArrowConditionals?: boolean
  enforceForSequenceExpressions?: boolean
  enforceForNewInMemberExpressions?: boolean
  enforceForFunctionPrototypeMethods?: boolean
  allowParensAfterCommentPattern?: string
}])
// ----- style/no-mixed-operators -----
type StyleNoMixedOperators = []|[{
  groups?: [("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"), ...(("+" | "-" | "*" | "/" | "%" | "**" | "&" | "|" | "^" | "~" | "<<" | ">>" | ">>>" | "==" | "!=" | "===" | "!==" | ">" | ">=" | "<" | "<=" | "&&" | "||" | "in" | "instanceof" | "?:" | "??"))[]][]
  allowSamePrecedence?: boolean
}]
// ----- style/no-mixed-spaces-and-tabs -----
type StyleNoMixedSpacesAndTabs = []|[("smart-tabs" | boolean)]
// ----- style/no-multi-spaces -----
type StyleNoMultiSpaces = []|[{
  exceptions?: {
    [k: string]: boolean
  }
  ignoreEOLComments?: boolean
  includeTabs?: boolean
}]
// ----- style/no-multiple-empty-lines -----
type StyleNoMultipleEmptyLines = []|[{
  max: number
  maxEOF?: number
  maxBOF?: number
}]
// ----- style/no-tabs -----
type StyleNoTabs = []|[{
  allowIndentationTabs?: boolean
}]
// ----- style/no-trailing-spaces -----
type StyleNoTrailingSpaces = []|[{
  skipBlankLines?: boolean
  ignoreComments?: boolean
}]
// ----- style/nonblock-statement-body-position -----
type StyleNonblockStatementBodyPosition = []|[("beside" | "below" | "any")]|[("beside" | "below" | "any"), {
  overrides?: {
    if?: ("beside" | "below" | "any")
    else?: ("beside" | "below" | "any")
    while?: ("beside" | "below" | "any")
    do?: ("beside" | "below" | "any")
    for?: ("beside" | "below" | "any")
  }
}]
// ----- style/object-curly-newline -----
type StyleObjectCurlyNewline = []|[((("always" | "never") | {
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
  TSTypeLiteral?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
  TSInterfaceBody?: (("always" | "never") | {
    multiline?: boolean
    minProperties?: number
    consistent?: boolean
  })
})]
// ----- style/object-curly-spacing -----
type StyleObjectCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
}]
// ----- style/object-property-newline -----
type StyleObjectPropertyNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
  allowMultiplePropertiesPerLine?: boolean
}]
// ----- style/one-var-declaration-per-line -----
type StyleOneVarDeclarationPerLine = []|[("always" | "initializations")]
// ----- style/operator-linebreak -----
type StyleOperatorLinebreak = []|[(("after" | "before" | "none") | null)]|[(("after" | "before" | "none") | null), {
  overrides?: {
    [k: string]: ("after" | "before" | "none" | "ignore") | undefined
  }
}]
// ----- style/padded-blocks -----
type StylePaddedBlocks = []|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
})]|[(("always" | "never") | {
  blocks?: ("always" | "never")
  switches?: ("always" | "never")
  classes?: ("always" | "never")
}), {
  allowSingleLineBlocks?: boolean
}]
// ----- style/padding-line-between-statements -----
type _StylePaddingLineBetweenStatementsPaddingType = ("any" | "never" | "always")
type _StylePaddingLineBetweenStatementsStatementType = (("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload") | [("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"), ...(("*" | "block-like" | "exports" | "require" | "directive" | "expression" | "iife" | "multiline-block-like" | "multiline-expression" | "multiline-const" | "multiline-export" | "multiline-let" | "multiline-var" | "singleline-const" | "singleline-export" | "singleline-let" | "singleline-var" | "block" | "empty" | "function" | "ts-method" | "break" | "case" | "class" | "const" | "continue" | "debugger" | "default" | "do" | "export" | "for" | "if" | "import" | "let" | "return" | "switch" | "throw" | "try" | "var" | "while" | "with" | "cjs-export" | "cjs-import" | "enum" | "interface" | "type" | "function-overload"))[]])
type StylePaddingLineBetweenStatements = {
  blankLine: _StylePaddingLineBetweenStatementsPaddingType
  prev: _StylePaddingLineBetweenStatementsStatementType
  next: _StylePaddingLineBetweenStatementsStatementType
}[]
// ----- style/quote-props -----
type StyleQuoteProps = ([]|[("always" | "as-needed" | "consistent" | "consistent-as-needed")] | []|[("always" | "as-needed" | "consistent" | "consistent-as-needed")]|[("always" | "as-needed" | "consistent" | "consistent-as-needed"), {
  keywords?: boolean
  unnecessary?: boolean
  numbers?: boolean
}])
// ----- style/quotes -----
type StyleQuotes = []|[("single" | "double" | "backtick")]|[("single" | "double" | "backtick"), ("avoid-escape" | {
  avoidEscape?: boolean
  allowTemplateLiterals?: boolean
  ignoreStringLiterals?: boolean
})]
// ----- style/rest-spread-spacing -----
type StyleRestSpreadSpacing = []|[("always" | "never")]
// ----- style/semi -----
type StyleSemi = ([]|["never"]|["never", {
  beforeStatementContinuationChars?: ("always" | "any" | "never")
}] | []|["always"]|["always", {
  omitLastInOneLineBlock?: boolean
  omitLastInOneLineClassBody?: boolean
}])
// ----- style/semi-spacing -----
type StyleSemiSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- style/semi-style -----
type StyleSemiStyle = []|[("last" | "first")]
// ----- style/space-before-blocks -----
type StyleSpaceBeforeBlocks = []|[(("always" | "never") | {
  keywords?: ("always" | "never" | "off")
  functions?: ("always" | "never" | "off")
  classes?: ("always" | "never" | "off")
})]
// ----- style/space-before-function-paren -----
type StyleSpaceBeforeFunctionParen = []|[(("always" | "never") | {
  anonymous?: ("always" | "never" | "ignore")
  named?: ("always" | "never" | "ignore")
  asyncArrow?: ("always" | "never" | "ignore")
})]
// ----- style/space-in-parens -----
type StyleSpaceInParens = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: ("{}" | "[]" | "()" | "empty")[]
}]
// ----- style/space-infix-ops -----
type StyleSpaceInfixOps = []|[{
  int32Hint?: boolean
}]
// ----- style/space-unary-ops -----
type StyleSpaceUnaryOps = []|[{
  words?: boolean
  nonwords?: boolean
  overrides?: {
    [k: string]: boolean | undefined
  }
}]
// ----- style/spaced-comment -----
type StyleSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
  line?: {
    exceptions?: string[]
    markers?: string[]
  }
  block?: {
    exceptions?: string[]
    markers?: string[]
    balanced?: boolean
  }
}]
// ----- style/switch-colon-spacing -----
type StyleSwitchColonSpacing = []|[{
  before?: boolean
  after?: boolean
}]
// ----- style/template-curly-spacing -----
type StyleTemplateCurlySpacing = []|[("always" | "never")]
// ----- style/template-tag-spacing -----
type StyleTemplateTagSpacing = []|[("always" | "never")]
// ----- style/type-annotation-spacing -----
type StyleTypeAnnotationSpacing = []|[{
  before?: boolean
  after?: boolean
  overrides?: {
    colon?: _StyleTypeAnnotationSpacing_SpacingConfig
    arrow?: _StyleTypeAnnotationSpacing_SpacingConfig
    variable?: _StyleTypeAnnotationSpacing_SpacingConfig
    parameter?: _StyleTypeAnnotationSpacing_SpacingConfig
    property?: _StyleTypeAnnotationSpacing_SpacingConfig
    returnType?: _StyleTypeAnnotationSpacing_SpacingConfig
  }
}]
interface _StyleTypeAnnotationSpacing_SpacingConfig {
  before?: boolean
  after?: boolean
}
// ----- style/wrap-iife -----
type StyleWrapIife = []|[("outside" | "inside" | "any")]|[("outside" | "inside" | "any"), {
  functionPrototypeMethods?: boolean
}]
// ----- style/yield-star-spacing -----
type StyleYieldStarSpacing = []|[(("before" | "after" | "both" | "neither") | {
  before?: boolean
  after?: boolean
})]

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
   * disallow `import` declarations which import missing modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-missing-import.md
   */
  'node/no-missing-import'?: Linter.RuleEntry<NodeNoMissingImport>
  /**
   * disallow `require()` expressions which import missing modules
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
   * disallow top-level `await` in published modules
   * @see https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-top-level-await.md
   */
  'node/no-top-level-await'?: Linter.RuleEntry<NodeNoTopLevelAwait>
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
  ignoreModuleItems?: ("_linklist" | "_stream_wrap" | "async_hooks.currentId" | "async_hooks.triggerId" | "buffer.Buffer()" | "new buffer.Buffer()" | "buffer.SlowBuffer" | "constants" | "crypto._toBuf" | "crypto.Credentials" | "crypto.DEFAULT_ENCODING" | "crypto.createCipher" | "crypto.createCredentials" | "crypto.createDecipher" | "crypto.fips" | "crypto.prng" | "crypto.pseudoRandomBytes" | "crypto.rng" | "domain" | "events.EventEmitter.listenerCount" | "events.listenerCount" | "freelist" | "fs.SyncWriteStream" | "fs.exists" | "fs.lchmod" | "fs.lchmodSync" | "http.createClient" | "module.Module.createRequireFromPath" | "module.Module.requireRepl" | "module.Module._debug" | "module.createRequireFromPath" | "module.requireRepl" | "module._debug" | "net._setSimultaneousAccepts" | "os.getNetworkInterfaces" | "os.tmpDir" | "path._makeLong" | "process.EventEmitter" | "process.assert" | "process.binding" | "process.env.NODE_REPL_HISTORY_FILE" | "process.report.triggerReport" | "punycode" | "readline.codePointAt" | "readline.getStringWidth" | "readline.isFullWidthCodePoint" | "readline.stripVTControlCharacters" | "repl.REPLServer" | "repl.Recoverable" | "repl.REPL_MODE_MAGIC" | "repl.builtinModules" | "safe-buffer.Buffer()" | "new safe-buffer.Buffer()" | "safe-buffer.SlowBuffer" | "sys" | "timers.enroll" | "timers.unenroll" | "tls.CleartextStream" | "tls.CryptoStream" | "tls.SecurePair" | "tls.convertNPNProtocols" | "tls.createSecurePair" | "tls.parseCertString" | "tty.setRawMode" | "url.parse" | "url.resolve" | "util.debug" | "util.error" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util.print" | "util.pump" | "util.puts" | "util._extend" | "vm.runInDebugContext" | "zlib.BrotliCompress()" | "zlib.BrotliDecompress()" | "zlib.Deflate()" | "zlib.DeflateRaw()" | "zlib.Gunzip()" | "zlib.Gzip()" | "zlib.Inflate()" | "zlib.InflateRaw()" | "zlib.Unzip()")[]
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
  ignores?: (string | {
    from?: "file"
    path?: string
    name?: string[]
  } | {
    from?: "lib"
    name?: string[]
  } | {
    from?: "package"
    package?: string
    name?: string[]
  })[]
}]
// ----- node/no-top-level-await -----
type NodeNoTopLevelAwait = []|[{
  ignoreBin?: boolean
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
  tryExtensions?: string[]
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
  ignores?: ("__filename" | "__dirname" | "require" | "require.cache" | "require.extensions" | "require.main" | "require.resolve" | "require.resolve.paths" | "module" | "module.children" | "module.exports" | "module.filename" | "module.id" | "module.isPreloading" | "module.loaded" | "module.parent" | "module.path" | "module.paths" | "module.require" | "exports" | "AbortController" | "AbortSignal" | "AbortSignal.abort" | "AbortSignal.timeout" | "AbortSignal.any" | "DOMException" | "FormData" | "Headers" | "MessageEvent" | "Navigator" | "Request" | "Response" | "WebAssembly" | "WebSocket" | "fetch" | "global" | "queueMicrotask" | "navigator" | "navigator.hardwareConcurrency" | "navigator.language" | "navigator.languages" | "navigator.platform" | "navigator.userAgent" | "structuredClone" | "localStorage" | "sessionStorage" | "Storage" | "Blob" | "new Buffer()" | "Buffer" | "Buffer.alloc" | "Buffer.allocUnsafe" | "Buffer.allocUnsafeSlow" | "Buffer.byteLength" | "Buffer.compare" | "Buffer.concat" | "Buffer.copyBytesFrom" | "Buffer.from" | "Buffer.isBuffer" | "Buffer.isEncoding" | "File" | "atob" | "btoa" | "console" | "console.profile" | "console.profileEnd" | "console.timeStamp" | "console.Console" | "console.assert" | "console.clear" | "console.count" | "console.countReset" | "console.debug" | "console.dir" | "console.dirxml" | "console.error" | "console.group" | "console.groupCollapsed" | "console.groupEnd" | "console.info" | "console.log" | "console.table" | "console.time" | "console.timeEnd" | "console.timeLog" | "console.trace" | "console.warn" | "crypto" | "crypto.subtle" | "crypto.subtle.decrypt" | "crypto.subtle.deriveBits" | "crypto.subtle.deriveKey" | "crypto.subtle.digest" | "crypto.subtle.encrypt" | "crypto.subtle.exportKey" | "crypto.subtle.generateKey" | "crypto.subtle.importKey" | "crypto.subtle.sign" | "crypto.subtle.unwrapKey" | "crypto.subtle.verify" | "crypto.subtle.wrapKey" | "crypto.getRandomValues" | "crypto.randomUUID" | "Crypto" | "CryptoKey" | "SubtleCrypto" | "CloseEvent" | "CustomEvent" | "Event" | "EventSource" | "EventTarget" | "PerformanceEntry" | "PerformanceMark" | "PerformanceMeasure" | "PerformanceObserver" | "PerformanceObserverEntryList" | "PerformanceResourceTiming" | "performance" | "performance.clearMarks" | "performance.clearMeasures" | "performance.clearResourceTimings" | "performance.eventLoopUtilization" | "performance.getEntries" | "performance.getEntriesByName" | "performance.getEntriesByType" | "performance.mark" | "performance.markResourceTiming" | "performance.measure" | "performance.nodeTiming" | "performance.nodeTiming.bootstrapComplete" | "performance.nodeTiming.environment" | "performance.nodeTiming.idleTime" | "performance.nodeTiming.loopExit" | "performance.nodeTiming.loopStart" | "performance.nodeTiming.nodeStart" | "performance.nodeTiming.uvMetricsInfo" | "performance.nodeTiming.v8Start" | "performance.now" | "performance.onresourcetimingbufferfull" | "performance.setResourceTimingBufferSize" | "performance.timeOrigin" | "performance.timerify" | "performance.toJSON" | "process" | "process.allowedNodeEnvironmentFlags" | "process.availableMemory" | "process.arch" | "process.argv" | "process.argv0" | "process.channel" | "process.config" | "process.connected" | "process.debugPort" | "process.env" | "process.execArgv" | "process.execPath" | "process.execve" | "process.exitCode" | "process.features.cached_builtins" | "process.features.debug" | "process.features.inspector" | "process.features.ipv6" | "process.features.require_module" | "process.features.tls" | "process.features.tls_alpn" | "process.features.tls_ocsp" | "process.features.tls_sni" | "process.features.typescript" | "process.features.uv" | "process.finalization.register" | "process.finalization.registerBeforeExit" | "process.finalization.unregister" | "process.getBuiltinModule" | "process.mainModule" | "process.noDeprecation" | "process.permission" | "process.pid" | "process.platform" | "process.ppid" | "process.ref" | "process.release" | "process.report" | "process.report.excludeEnv" | "process.sourceMapsEnabled" | "process.stdin" | "process.stdin.isRaw" | "process.stdin.isTTY" | "process.stdin.setRawMode" | "process.stdout" | "process.stdout.clearLine" | "process.stdout.clearScreenDown" | "process.stdout.columns" | "process.stdout.cursorTo" | "process.stdout.getColorDepth" | "process.stdout.getWindowSize" | "process.stdout.hasColors" | "process.stdout.isTTY" | "process.stdout.moveCursor" | "process.stdout.rows" | "process.stderr" | "process.stderr.clearLine" | "process.stderr.clearScreenDown" | "process.stderr.columns" | "process.stderr.cursorTo" | "process.stderr.getColorDepth" | "process.stderr.getWindowSize" | "process.stderr.hasColors" | "process.stderr.isTTY" | "process.stderr.moveCursor" | "process.stderr.rows" | "process.threadCpuUsage" | "process.throwDeprecation" | "process.title" | "process.traceDeprecation" | "process.version" | "process.versions" | "process.abort" | "process.chdir" | "process.constrainedMemory" | "process.cpuUsage" | "process.cwd" | "process.disconnect" | "process.dlopen" | "process.emitWarning" | "process.exit" | "process.getActiveResourcesInfo" | "process.getegid" | "process.geteuid" | "process.getgid" | "process.getgroups" | "process.getuid" | "process.hasUncaughtExceptionCaptureCallback" | "process.hrtime" | "process.hrtime.bigint" | "process.initgroups" | "process.kill" | "process.loadEnvFile" | "process.memoryUsage" | "process.rss" | "process.nextTick" | "process.resourceUsage" | "process.send" | "process.setegid" | "process.seteuid" | "process.setgid" | "process.setgroups" | "process.setuid" | "process.setSourceMapsEnabled" | "process.setUncaughtExceptionCaptureCallback" | "process.umask" | "process.unref" | "process.uptime" | "ReadableStream" | "ReadableStream.from" | "ReadableStreamDefaultReader" | "ReadableStreamBYOBReader" | "ReadableStreamDefaultController" | "ReadableByteStreamController" | "ReadableStreamBYOBRequest" | "WritableStream" | "WritableStreamDefaultWriter" | "WritableStreamDefaultController" | "TransformStream" | "TransformStreamDefaultController" | "ByteLengthQueuingStrategy" | "CountQueuingStrategy" | "TextEncoderStream" | "TextDecoderStream" | "CompressionStream" | "DecompressionStream" | "setInterval" | "clearInterval" | "setTimeout" | "clearTimeout" | "setImmediate" | "clearImmediate" | "URL" | "URL.canParse" | "URL.createObjectURL" | "URL.revokeObjectURL" | "URLSearchParams" | "TextDecoder" | "TextEncoder" | "BroadcastChannel" | "MessageChannel" | "MessagePort" | "assert" | "assert.Assert" | "assert.assert" | "assert.deepEqual" | "assert.deepStrictEqual" | "assert.doesNotMatch" | "assert.doesNotReject" | "assert.doesNotThrow" | "assert.equal" | "assert.fail" | "assert.ifError" | "assert.match" | "assert.notDeepEqual" | "assert.notDeepStrictEqual" | "assert.notEqual" | "assert.notStrictEqual" | "assert.ok" | "assert.partialDeepStrictEqual" | "assert.rejects" | "assert.strictEqual" | "assert.throws" | "assert.CallTracker" | "assert.strict" | "assert.strict.Assert" | "assert.strict.assert" | "assert.strict.deepEqual" | "assert.strict.deepStrictEqual" | "assert.strict.doesNotMatch" | "assert.strict.doesNotReject" | "assert.strict.doesNotThrow" | "assert.strict.equal" | "assert.strict.fail" | "assert.strict.ifError" | "assert.strict.match" | "assert.strict.notDeepEqual" | "assert.strict.notDeepStrictEqual" | "assert.strict.notEqual" | "assert.strict.notStrictEqual" | "assert.strict.ok" | "assert.strict.partialDeepStrictEqual" | "assert.strict.rejects" | "assert.strict.strictEqual" | "assert.strict.throws" | "assert.strict.CallTracker" | "assert/strict" | "assert/strict.Assert" | "assert/strict.assert" | "assert/strict.deepEqual" | "assert/strict.deepStrictEqual" | "assert/strict.doesNotMatch" | "assert/strict.doesNotReject" | "assert/strict.doesNotThrow" | "assert/strict.equal" | "assert/strict.fail" | "assert/strict.ifError" | "assert/strict.match" | "assert/strict.notDeepEqual" | "assert/strict.notDeepStrictEqual" | "assert/strict.notEqual" | "assert/strict.notStrictEqual" | "assert/strict.ok" | "assert/strict.partialDeepStrictEqual" | "assert/strict.rejects" | "assert/strict.strictEqual" | "assert/strict.throws" | "assert/strict.CallTracker" | "async_hooks" | "async_hooks.createHook" | "async_hooks.executionAsyncResource" | "async_hooks.executionAsyncId" | "async_hooks.triggerAsyncId" | "async_hooks.AsyncLocalStorage" | "async_hooks.AsyncLocalStorage.bind" | "async_hooks.AsyncLocalStorage.snapshot" | "async_hooks.AsyncResource" | "async_hooks.AsyncResource.bind" | "buffer" | "buffer.constants" | "buffer.INSPECT_MAX_BYTES" | "buffer.kMaxLength" | "buffer.kStringMaxLength" | "buffer.atob" | "buffer.btoa" | "buffer.isAscii" | "buffer.isUtf8" | "buffer.resolveObjectURL" | "buffer.transcode" | "buffer.SlowBuffer" | "buffer.Blob" | "new buffer.Buffer()" | "buffer.Buffer" | "buffer.Buffer.alloc" | "buffer.Buffer.allocUnsafe" | "buffer.Buffer.allocUnsafeSlow" | "buffer.Buffer.byteLength" | "buffer.Buffer.compare" | "buffer.Buffer.concat" | "buffer.Buffer.copyBytesFrom" | "buffer.Buffer.from" | "buffer.Buffer.isBuffer" | "buffer.Buffer.isEncoding" | "buffer.File" | "child_process" | "child_process.exec" | "child_process.execFile" | "child_process.fork" | "child_process.spawn" | "child_process.execFileSync" | "child_process.execSync" | "child_process.spawnSync" | "child_process.ChildProcess" | "cluster" | "cluster.isMaster" | "cluster.isPrimary" | "cluster.isWorker" | "cluster.schedulingPolicy" | "cluster.settings" | "cluster.worker" | "cluster.workers" | "cluster.disconnect" | "cluster.fork" | "cluster.setupMaster" | "cluster.setupPrimary" | "cluster.Worker" | "crypto.constants" | "crypto.fips" | "crypto.webcrypto" | "crypto.webcrypto.subtle" | "crypto.webcrypto.subtle.decrypt" | "crypto.webcrypto.subtle.deriveBits" | "crypto.webcrypto.subtle.deriveKey" | "crypto.webcrypto.subtle.digest" | "crypto.webcrypto.subtle.encrypt" | "crypto.webcrypto.subtle.exportKey" | "crypto.webcrypto.subtle.generateKey" | "crypto.webcrypto.subtle.importKey" | "crypto.webcrypto.subtle.sign" | "crypto.webcrypto.subtle.unwrapKey" | "crypto.webcrypto.subtle.verify" | "crypto.webcrypto.subtle.wrapKey" | "crypto.webcrypto.getRandomValues" | "crypto.webcrypto.randomUUID" | "crypto.checkPrime" | "crypto.checkPrimeSync" | "crypto.createCipher" | "crypto.createCipheriv" | "crypto.createDecipher" | "crypto.createDecipheriv" | "crypto.createDiffieHellman" | "crypto.createDiffieHellmanGroup" | "crypto.createECDH" | "crypto.createHash" | "crypto.createHmac" | "crypto.createPrivateKey" | "crypto.createPublicKey" | "crypto.createSecretKey" | "crypto.createSign" | "crypto.createVerify" | "crypto.diffieHellman" | "crypto.generateKey" | "crypto.generateKeyPair" | "crypto.generateKeyPairSync" | "crypto.generateKeySync" | "crypto.generatePrime" | "crypto.generatePrimeSync" | "crypto.getCipherInfo" | "crypto.getCiphers" | "crypto.getCurves" | "crypto.getDiffieHellman" | "crypto.getFips" | "crypto.getHashes" | "crypto.hash" | "crypto.hkdf" | "crypto.hkdfSync" | "crypto.pbkdf2" | "crypto.pbkdf2Sync" | "crypto.privateDecrypt" | "crypto.privateEncrypt" | "crypto.publicDecrypt" | "crypto.publicEncrypt" | "crypto.randomBytes" | "crypto.randomFillSync" | "crypto.randomFill" | "crypto.randomInt" | "crypto.scrypt" | "crypto.scryptSync" | "crypto.secureHeapUsed" | "crypto.setEngine" | "crypto.setFips" | "crypto.sign" | "crypto.timingSafeEqual" | "crypto.verify" | "crypto.Certificate" | "crypto.Certificate.exportChallenge" | "crypto.Certificate.exportPublicKey" | "crypto.Certificate.verifySpkac" | "crypto.Cipher" | "crypto.Decipher" | "crypto.DiffieHellman" | "crypto.DiffieHellmanGroup" | "crypto.ECDH" | "crypto.ECDH.convertKey" | "crypto.Hash()" | "new crypto.Hash()" | "crypto.Hash" | "crypto.Hmac()" | "new crypto.Hmac()" | "crypto.Hmac" | "crypto.KeyObject" | "crypto.KeyObject.from" | "crypto.Sign" | "crypto.Verify" | "crypto.X509Certificate" | "dgram" | "dgram.createSocket" | "dgram.Socket" | "diagnostics_channel" | "diagnostics_channel.hasSubscribers" | "diagnostics_channel.channel" | "diagnostics_channel.subscribe" | "diagnostics_channel.unsubscribe" | "diagnostics_channel.tracingChannel" | "diagnostics_channel.Channel" | "diagnostics_channel.TracingChannel" | "dns" | "dns.Resolver" | "dns.getServers" | "dns.lookup" | "dns.lookupService" | "dns.resolve" | "dns.resolve4" | "dns.resolve6" | "dns.resolveAny" | "dns.resolveCname" | "dns.resolveCaa" | "dns.resolveMx" | "dns.resolveNaptr" | "dns.resolveNs" | "dns.resolvePtr" | "dns.resolveSoa" | "dns.resolveSrv" | "dns.resolveTlsa" | "dns.resolveTxt" | "dns.reverse" | "dns.setDefaultResultOrder" | "dns.getDefaultResultOrder" | "dns.setServers" | "dns.promises" | "dns.promises.Resolver" | "dns.promises.cancel" | "dns.promises.getServers" | "dns.promises.lookup" | "dns.promises.lookupService" | "dns.promises.resolve" | "dns.promises.resolve4" | "dns.promises.resolve6" | "dns.promises.resolveAny" | "dns.promises.resolveCaa" | "dns.promises.resolveCname" | "dns.promises.resolveMx" | "dns.promises.resolveNaptr" | "dns.promises.resolveNs" | "dns.promises.resolvePtr" | "dns.promises.resolveSoa" | "dns.promises.resolveSrv" | "dns.promises.resolveTlsa" | "dns.promises.resolveTxt" | "dns.promises.reverse" | "dns.promises.setDefaultResultOrder" | "dns.promises.getDefaultResultOrder" | "dns.promises.setServers" | "dns/promises" | "dns/promises.Resolver" | "dns/promises.cancel" | "dns/promises.getServers" | "dns/promises.lookup" | "dns/promises.lookupService" | "dns/promises.resolve" | "dns/promises.resolve4" | "dns/promises.resolve6" | "dns/promises.resolveAny" | "dns/promises.resolveCaa" | "dns/promises.resolveCname" | "dns/promises.resolveMx" | "dns/promises.resolveNaptr" | "dns/promises.resolveNs" | "dns/promises.resolvePtr" | "dns/promises.resolveSoa" | "dns/promises.resolveSrv" | "dns/promises.resolveTlsa" | "dns/promises.resolveTxt" | "dns/promises.reverse" | "dns/promises.setDefaultResultOrder" | "dns/promises.getDefaultResultOrder" | "dns/promises.setServers" | "domain" | "domain.create" | "domain.Domain" | "events" | "events.Event" | "events.EventTarget" | "events.CustomEvent" | "events.NodeEventTarget" | "events.EventEmitter" | "events.EventEmitter.defaultMaxListeners" | "events.EventEmitter.errorMonitor" | "events.EventEmitter.captureRejections" | "events.EventEmitter.captureRejectionSymbol" | "events.EventEmitter.getEventListeners" | "events.EventEmitter.getMaxListeners" | "events.EventEmitter.once" | "events.EventEmitter.listenerCount" | "events.EventEmitter.on" | "events.EventEmitter.setMaxListeners" | "events.EventEmitter.addAbortListener" | "events.EventEmitterAsyncResource" | "events.EventEmitterAsyncResource.defaultMaxListeners" | "events.EventEmitterAsyncResource.errorMonitor" | "events.EventEmitterAsyncResource.captureRejections" | "events.EventEmitterAsyncResource.captureRejectionSymbol" | "events.EventEmitterAsyncResource.getEventListeners" | "events.EventEmitterAsyncResource.getMaxListeners" | "events.EventEmitterAsyncResource.once" | "events.EventEmitterAsyncResource.listenerCount" | "events.EventEmitterAsyncResource.on" | "events.EventEmitterAsyncResource.setMaxListeners" | "events.EventEmitterAsyncResource.addAbortListener" | "events.defaultMaxListeners" | "events.errorMonitor" | "events.captureRejections" | "events.captureRejectionSymbol" | "events.getEventListeners" | "events.getMaxListeners" | "events.once" | "events.listenerCount" | "events.on" | "events.setMaxListeners" | "events.addAbortListener" | "fs" | "fs.promises" | "fs.promises.FileHandle" | "fs.promises.access" | "fs.promises.appendFile" | "fs.promises.chmod" | "fs.promises.chown" | "fs.promises.constants" | "fs.promises.copyFile" | "fs.promises.cp" | "fs.promises.glob" | "fs.promises.lchmod" | "fs.promises.lchown" | "fs.promises.link" | "fs.promises.lstat" | "fs.promises.lutimes" | "fs.promises.mkdir" | "fs.promises.mkdtemp" | "fs.promises.open" | "fs.promises.opendir" | "fs.promises.readFile" | "fs.promises.readdir" | "fs.promises.readlink" | "fs.promises.realpath" | "fs.promises.rename" | "fs.promises.rm" | "fs.promises.rmdir" | "fs.promises.stat" | "fs.promises.statfs" | "fs.promises.symlink" | "fs.promises.truncate" | "fs.promises.unlink" | "fs.promises.utimes" | "fs.promises.watch" | "fs.promises.writeFile" | "fs.access" | "fs.appendFile" | "fs.chmod" | "fs.chown" | "fs.close" | "fs.copyFile" | "fs.cp" | "fs.createReadStream" | "fs.createWriteStream" | "fs.exists" | "fs.fchmod" | "fs.fchown" | "fs.fdatasync" | "fs.fstat" | "fs.fsync" | "fs.ftruncate" | "fs.futimes" | "fs.glob" | "fs.lchmod" | "fs.lchown" | "fs.link" | "fs.lstat" | "fs.lutimes" | "fs.mkdir" | "fs.mkdtemp" | "fs.native" | "fs.open" | "fs.openAsBlob" | "fs.opendir" | "fs.read" | "fs.readdir" | "fs.readFile" | "fs.readlink" | "fs.readv" | "fs.realpath" | "fs.realpath.native" | "fs.rename" | "fs.rm" | "fs.rmdir" | "fs.stat" | "fs.statfs" | "fs.symlink" | "fs.truncate" | "fs.unlink" | "fs.unwatchFile" | "fs.utimes" | "fs.watch" | "fs.watchFile" | "fs.write" | "fs.writeFile" | "fs.writev" | "fs.accessSync" | "fs.appendFileSync" | "fs.chmodSync" | "fs.chownSync" | "fs.closeSync" | "fs.copyFileSync" | "fs.cpSync" | "fs.existsSync" | "fs.fchmodSync" | "fs.fchownSync" | "fs.fdatasyncSync" | "fs.fstatSync" | "fs.fsyncSync" | "fs.ftruncateSync" | "fs.futimesSync" | "fs.globSync" | "fs.lchmodSync" | "fs.lchownSync" | "fs.linkSync" | "fs.lstatSync" | "fs.lutimesSync" | "fs.mkdirSync" | "fs.mkdtempSync" | "fs.opendirSync" | "fs.openSync" | "fs.readdirSync" | "fs.readFileSync" | "fs.readlinkSync" | "fs.readSync" | "fs.readvSync" | "fs.realpathSync" | "fs.realpathSync.native" | "fs.renameSync" | "fs.rmdirSync" | "fs.rmSync" | "fs.statfsSync" | "fs.statSync" | "fs.symlinkSync" | "fs.truncateSync" | "fs.unlinkSync" | "fs.utimesSync" | "fs.writeFileSync" | "fs.writeSync" | "fs.writevSync" | "fs.constants" | "fs.Dir" | "fs.Dirent" | "fs.FSWatcher" | "fs.StatWatcher" | "fs.ReadStream" | "fs.Stats()" | "new fs.Stats()" | "fs.Stats" | "fs.StatFs" | "fs.WriteStream" | "fs.common_objects" | "fs/promises" | "fs/promises.FileHandle" | "fs/promises.access" | "fs/promises.appendFile" | "fs/promises.chmod" | "fs/promises.chown" | "fs/promises.constants" | "fs/promises.copyFile" | "fs/promises.cp" | "fs/promises.glob" | "fs/promises.lchmod" | "fs/promises.lchown" | "fs/promises.link" | "fs/promises.lstat" | "fs/promises.lutimes" | "fs/promises.mkdir" | "fs/promises.mkdtemp" | "fs/promises.open" | "fs/promises.opendir" | "fs/promises.readFile" | "fs/promises.readdir" | "fs/promises.readlink" | "fs/promises.realpath" | "fs/promises.rename" | "fs/promises.rm" | "fs/promises.rmdir" | "fs/promises.stat" | "fs/promises.statfs" | "fs/promises.symlink" | "fs/promises.truncate" | "fs/promises.unlink" | "fs/promises.utimes" | "fs/promises.watch" | "fs/promises.writeFile" | "http2" | "http2.constants" | "http2.sensitiveHeaders" | "http2.createServer" | "http2.createSecureServer" | "http2.connect" | "http2.getDefaultSettings" | "http2.getPackedSettings" | "http2.getUnpackedSettings" | "http2.performServerHandshake" | "http2.Http2Session" | "http2.ServerHttp2Session" | "http2.ClientHttp2Session" | "http2.Http2Stream" | "http2.ClientHttp2Stream" | "http2.ServerHttp2Stream" | "http2.Http2Server" | "http2.Http2SecureServer" | "http2.Http2ServerRequest" | "http2.Http2ServerResponse" | "http" | "http.METHODS" | "http.STATUS_CODES" | "http.globalAgent" | "http.maxHeaderSize" | "http.createServer" | "http.get" | "http.request" | "http.validateHeaderName" | "http.validateHeaderValue" | "http.setMaxIdleHTTPParsers" | "http.Agent" | "http.ClientRequest" | "http.Server" | "http.ServerResponse" | "http.IncomingMessage" | "http.OutgoingMessage" | "http.WebSocket" | "_http_agent" | "_http_client" | "_http_common" | "_http_incoming" | "_http_outgoing" | "_http_server" | "https" | "https.globalAgent" | "https.createServer" | "https.get" | "https.request" | "https.Agent" | "https.Server" | "inspector" | "inspector.Session" | "inspector.Network.dataReceived" | "inspector.Network.dataSent" | "inspector.Network.loadingFailed" | "inspector.Network.loadingFinished" | "inspector.Network.requestWillBeSent" | "inspector.Network.responseReceived" | "inspector.NetworkResources.put" | "inspector.console" | "inspector.close" | "inspector.open" | "inspector.url" | "inspector.waitForDebugger" | "inspector/promises" | "inspector/promises.Session" | "inspector/promises.Network.dataReceived" | "inspector/promises.Network.dataSent" | "inspector/promises.Network.loadingFailed" | "inspector/promises.Network.loadingFinished" | "inspector/promises.Network.requestWillBeSent" | "inspector/promises.Network.responseReceived" | "inspector/promises.NetworkResources.put" | "inspector/promises.console" | "inspector/promises.close" | "inspector/promises.open" | "inspector/promises.url" | "inspector/promises.waitForDebugger" | "module.builtinModules" | "module.constants.compileCacheStatus" | "module.createRequire" | "module.createRequireFromPath" | "module.enableCompileCache" | "module.findPackageJSON" | "module.flushCompileCache" | "module.getCompileCacheDir" | "module.getSourceMapsSupport" | "module.isBuiltin" | "module.registerHooks" | "module.register" | "module.setSourceMapsSupport" | "module.stripTypeScriptTypes" | "module.syncBuiltinESMExports" | "module.findSourceMap" | "module.SourceMap" | "module.Module.builtinModules" | "module.Module.createRequire" | "module.Module.createRequireFromPath" | "module.Module.enableCompileCache" | "module.Module.findPackageJSON" | "module.Module.flushCompileCache" | "module.Module.getCompileCacheDir" | "module.Module.getSourceMapsSupport" | "module.Module.isBuiltin" | "module.Module.registerHooks" | "module.Module.register" | "module.Module.setSourceMapsSupport" | "module.Module.stripTypeScriptTypes" | "module.Module.syncBuiltinESMExports" | "module.Module.findSourceMap" | "module.Module.SourceMap" | "net" | "net.connect" | "net.createConnection" | "net.createServer" | "net.getDefaultAutoSelectFamily" | "net.setDefaultAutoSelectFamily" | "net.getDefaultAutoSelectFamilyAttemptTimeout" | "net.setDefaultAutoSelectFamilyAttemptTimeout" | "net.isIP" | "net.isIPv4" | "net.isIPv6" | "net.BlockList" | "net.BlockList.isBlockList" | "net.SocketAddress" | "net.SocketAddress.parse" | "net.Server" | "net.Socket" | "os" | "os.EOL" | "os.constants" | "os.constants.priority" | "os.devNull" | "os.availableParallelism" | "os.arch" | "os.cpus" | "os.endianness" | "os.freemem" | "os.getPriority" | "os.homedir" | "os.hostname" | "os.loadavg" | "os.machine" | "os.networkInterfaces" | "os.platform" | "os.release" | "os.setPriority" | "os.tmpdir" | "os.totalmem" | "os.type" | "os.uptime" | "os.userInfo" | "os.version" | "path" | "path.posix" | "path.posix.delimiter" | "path.posix.sep" | "path.posix.basename" | "path.posix.dirname" | "path.posix.extname" | "path.posix.format" | "path.posix.matchesGlob" | "path.posix.isAbsolute" | "path.posix.join" | "path.posix.normalize" | "path.posix.parse" | "path.posix.relative" | "path.posix.resolve" | "path.posix.toNamespacedPath" | "path.win32" | "path.win32.delimiter" | "path.win32.sep" | "path.win32.basename" | "path.win32.dirname" | "path.win32.extname" | "path.win32.format" | "path.win32.matchesGlob" | "path.win32.isAbsolute" | "path.win32.join" | "path.win32.normalize" | "path.win32.parse" | "path.win32.relative" | "path.win32.resolve" | "path.win32.toNamespacedPath" | "path.delimiter" | "path.sep" | "path.basename" | "path.dirname" | "path.extname" | "path.format" | "path.matchesGlob" | "path.isAbsolute" | "path.join" | "path.normalize" | "path.parse" | "path.relative" | "path.resolve" | "path.toNamespacedPath" | "path/posix" | "path/posix.delimiter" | "path/posix.sep" | "path/posix.basename" | "path/posix.dirname" | "path/posix.extname" | "path/posix.format" | "path/posix.matchesGlob" | "path/posix.isAbsolute" | "path/posix.join" | "path/posix.normalize" | "path/posix.parse" | "path/posix.relative" | "path/posix.resolve" | "path/posix.toNamespacedPath" | "path/win32" | "path/win32.delimiter" | "path/win32.sep" | "path/win32.basename" | "path/win32.dirname" | "path/win32.extname" | "path/win32.format" | "path/win32.matchesGlob" | "path/win32.isAbsolute" | "path/win32.join" | "path/win32.normalize" | "path/win32.parse" | "path/win32.relative" | "path/win32.resolve" | "path/win32.toNamespacedPath" | "perf_hooks" | "perf_hooks.performance" | "perf_hooks.performance.clearMarks" | "perf_hooks.performance.clearMeasures" | "perf_hooks.performance.clearResourceTimings" | "perf_hooks.performance.eventLoopUtilization" | "perf_hooks.performance.getEntries" | "perf_hooks.performance.getEntriesByName" | "perf_hooks.performance.getEntriesByType" | "perf_hooks.performance.mark" | "perf_hooks.performance.markResourceTiming" | "perf_hooks.performance.measure" | "perf_hooks.performance.nodeTiming" | "perf_hooks.performance.nodeTiming.bootstrapComplete" | "perf_hooks.performance.nodeTiming.environment" | "perf_hooks.performance.nodeTiming.idleTime" | "perf_hooks.performance.nodeTiming.loopExit" | "perf_hooks.performance.nodeTiming.loopStart" | "perf_hooks.performance.nodeTiming.nodeStart" | "perf_hooks.performance.nodeTiming.uvMetricsInfo" | "perf_hooks.performance.nodeTiming.v8Start" | "perf_hooks.performance.now" | "perf_hooks.performance.onresourcetimingbufferfull" | "perf_hooks.performance.setResourceTimingBufferSize" | "perf_hooks.performance.timeOrigin" | "perf_hooks.performance.timerify" | "perf_hooks.performance.toJSON" | "perf_hooks.createHistogram" | "perf_hooks.monitorEventLoopDelay" | "perf_hooks.PerformanceEntry" | "perf_hooks.PerformanceMark" | "perf_hooks.PerformanceMeasure" | "perf_hooks.PerformanceNodeEntry" | "perf_hooks.PerformanceNodeTiming" | "perf_hooks.PerformanceResourceTiming" | "perf_hooks.PerformanceObserver" | "perf_hooks.PerformanceObserverEntryList" | "perf_hooks.Histogram" | "perf_hooks.IntervalHistogram" | "perf_hooks.RecordableHistogram" | "punycode" | "punycode.ucs2" | "punycode.version" | "punycode.decode" | "punycode.encode" | "punycode.toASCII" | "punycode.toUnicode" | "querystring" | "querystring.decode" | "querystring.encode" | "querystring.escape" | "querystring.parse" | "querystring.stringify" | "querystring.unescape" | "readline" | "readline.promises" | "readline.promises.createInterface" | "readline.promises.Interface" | "readline.promises.Readline" | "readline.clearLine" | "readline.clearScreenDown" | "readline.createInterface" | "readline.cursorTo" | "readline.moveCursor" | "readline.Interface" | "readline.emitKeypressEvents" | "readline.InterfaceConstructor" | "readline/promises" | "readline/promises.createInterface" | "readline/promises.Interface" | "readline/promises.Readline" | "repl" | "repl.start" | "repl.writer" | "repl.REPLServer()" | "repl.REPLServer" | "repl.REPL_MODE_MAGIC" | "repl.REPL_MODE_SLOPPY" | "repl.REPL_MODE_STRICT" | "repl.Recoverable()" | "repl.Recoverable" | "repl.builtinModules" | "sea" | "sea.isSea" | "sea.getAsset" | "sea.getAssetAsBlob" | "sea.getRawAsset" | "sea.sea.isSea" | "sea.sea.getAsset" | "sea.sea.getAssetAsBlob" | "sea.sea.getRawAsset" | "stream" | "stream.promises" | "stream.promises.pipeline" | "stream.promises.finished" | "stream.finished" | "stream.pipeline" | "stream.compose" | "stream.duplexPair" | "stream.Readable" | "stream.Readable.from" | "stream.Readable.isDisturbed" | "stream.Readable.fromWeb" | "stream.Readable.toWeb" | "stream.Writable" | "stream.Writable.fromWeb" | "stream.Writable.toWeb" | "stream.Duplex" | "stream.Duplex.from" | "stream.Duplex.fromWeb" | "stream.Duplex.toWeb" | "stream.Transform" | "stream.isErrored" | "stream.isReadable" | "stream.addAbortSignal" | "stream.getDefaultHighWaterMark" | "stream.setDefaultHighWaterMark" | "stream/promises.pipeline" | "stream/promises.finished" | "stream/web" | "stream/web.ReadableStream" | "stream/web.ReadableStream.from" | "stream/web.ReadableStreamDefaultReader" | "stream/web.ReadableStreamBYOBReader" | "stream/web.ReadableStreamDefaultController" | "stream/web.ReadableByteStreamController" | "stream/web.ReadableStreamBYOBRequest" | "stream/web.WritableStream" | "stream/web.WritableStreamDefaultWriter" | "stream/web.WritableStreamDefaultController" | "stream/web.TransformStream" | "stream/web.TransformStreamDefaultController" | "stream/web.ByteLengthQueuingStrategy" | "stream/web.CountQueuingStrategy" | "stream/web.TextEncoderStream" | "stream/web.TextDecoderStream" | "stream/web.CompressionStream" | "stream/web.DecompressionStream" | "stream/consumers" | "stream/consumers.arrayBuffer" | "stream/consumers.blob" | "stream/consumers.buffer" | "stream/consumers.json" | "stream/consumers.text" | "string_decoder" | "string_decoder.StringDecoder" | "sqlite" | "sqlite.constants" | "sqlite.constants.SQLITE_CHANGESET_OMIT" | "sqlite.constants.SQLITE_CHANGESET_REPLACE" | "sqlite.constants.SQLITE_CHANGESET_ABORT" | "sqlite.backup" | "sqlite.DatabaseSync" | "sqlite.StatementSync" | "sqlite.SQLITE_CHANGESET_OMIT" | "sqlite.SQLITE_CHANGESET_REPLACE" | "sqlite.SQLITE_CHANGESET_ABORT" | "test" | "test.after" | "test.afterEach" | "test.assert" | "test.assert.register" | "test.before" | "test.beforeEach" | "test.describe" | "test.describe.only" | "test.describe.skip" | "test.describe.todo" | "test.it" | "test.it.only" | "test.it.skip" | "test.it.todo" | "test.mock" | "test.mock.fn" | "test.mock.getter" | "test.mock.method" | "test.mock.module" | "test.mock.reset" | "test.mock.restoreAll" | "test.mock.setter" | "test.mock.timers" | "test.mock.timers.enable" | "test.mock.timers.reset" | "test.mock.timers.tick" | "test.only" | "test.run" | "test.snapshot" | "test.snapshot.setDefaultSnapshotSerializers" | "test.snapshot.setResolveSnapshotPath" | "test.skip" | "test.suite" | "test.test" | "test.test.only" | "test.test.skip" | "test.test.todo" | "test.todo" | "timers" | "timers.Immediate" | "timers.Timeout" | "timers.setImmediate" | "timers.clearImmediate" | "timers.setInterval" | "timers.clearInterval" | "timers.setTimeout" | "timers.clearTimeout" | "timers.promises" | "timers.promises.setTimeout" | "timers.promises.setImmediate" | "timers.promises.setInterval" | "timers.promises.scheduler.wait" | "timers.promises.scheduler.yield" | "timers/promises" | "timers/promises.setTimeout" | "timers/promises.setImmediate" | "timers/promises.setInterval" | "timers/promises.scheduler.wait" | "timers/promises.scheduler.yield" | "tls" | "tls.checkServerIdentity" | "tls.connect" | "tls.createSecureContext" | "tls.createSecurePair" | "tls.createServer" | "tls.CryptoStream" | "tls.DEFAULT_CIPHERS" | "tls.DEFAULT_ECDH_CURVE" | "tls.DEFAULT_MAX_VERSION" | "tls.DEFAULT_MIN_VERSION" | "tls.getCACertificates" | "tls.getCiphers" | "tls.rootCertificates" | "tls.SecureContext" | "tls.SecurePair" | "tls.Server" | "tls.setDefaultCACertificates" | "tls.TLSSocket" | "trace_events" | "trace_events.createTracing" | "trace_events.getEnabledCategories" | "tty" | "tty.isatty" | "tty.ReadStream" | "tty.WriteStream" | "url" | "url.domainToASCII" | "url.domainToUnicode" | "url.fileURLToPath" | "url.format" | "url.pathToFileURL" | "url.urlToHttpOptions" | "url.URL" | "url.URL.canParse" | "url.URL.createObjectURL" | "url.URL.revokeObjectURL" | "url.URLPattern" | "url.URLSearchParams" | "url.Url" | "util.promisify" | "util.promisify.custom" | "util.callbackify" | "util.debuglog" | "util.debug" | "util.deprecate" | "util.diff" | "util.format" | "util.formatWithOptions" | "util.getCallSite" | "util.getCallSites" | "util.getSystemErrorName" | "util.getSystemErrorMap" | "util.getSystemErrorMessage" | "util.inherits" | "util.inspect" | "util.inspect.custom" | "util.inspect.defaultOptions" | "util.inspect.replDefaults" | "util.isDeepStrictEqual" | "util.parseArgs" | "util.parseEnv" | "util.setTraceSigInt" | "util.stripVTControlCharacters" | "util.styleText" | "util.toUSVString" | "util.transferableAbortController" | "util.transferableAbortSignal" | "util.aborted" | "util.MIMEType" | "util.MIMEParams" | "util.TextDecoder" | "util.TextEncoder" | "util.types" | "util.types.isExternal" | "util.types.isDate" | "util.types.isArgumentsObject" | "util.types.isBigIntObject" | "util.types.isBooleanObject" | "util.types.isNumberObject" | "util.types.isStringObject" | "util.types.isSymbolObject" | "util.types.isNativeError" | "util.types.isRegExp" | "util.types.isAsyncFunction" | "util.types.isGeneratorFunction" | "util.types.isGeneratorObject" | "util.types.isPromise" | "util.types.isMap" | "util.types.isSet" | "util.types.isMapIterator" | "util.types.isSetIterator" | "util.types.isWeakMap" | "util.types.isWeakSet" | "util.types.isArrayBuffer" | "util.types.isDataView" | "util.types.isSharedArrayBuffer" | "util.types.isProxy" | "util.types.isModuleNamespaceObject" | "util.types.isAnyArrayBuffer" | "util.types.isBoxedPrimitive" | "util.types.isArrayBufferView" | "util.types.isTypedArray" | "util.types.isUint8Array" | "util.types.isUint8ClampedArray" | "util.types.isUint16Array" | "util.types.isUint32Array" | "util.types.isInt8Array" | "util.types.isInt16Array" | "util.types.isInt32Array" | "util.types.isFloat16Array" | "util.types.isFloat32Array" | "util.types.isFloat64Array" | "util.types.isBigInt64Array" | "util.types.isBigUint64Array" | "util.types.isKeyObject" | "util.types.isCryptoKey" | "util.types.isWebAssemblyCompiledModule" | "util._extend" | "util.isArray" | "util.isBoolean" | "util.isBuffer" | "util.isDate" | "util.isError" | "util.isFunction" | "util.isNull" | "util.isNullOrUndefined" | "util.isNumber" | "util.isObject" | "util.isPrimitive" | "util.isRegExp" | "util.isString" | "util.isSymbol" | "util.isUndefined" | "util.log" | "util" | "util/types" | "util/types.isExternal" | "util/types.isDate" | "util/types.isArgumentsObject" | "util/types.isBigIntObject" | "util/types.isBooleanObject" | "util/types.isNumberObject" | "util/types.isStringObject" | "util/types.isSymbolObject" | "util/types.isNativeError" | "util/types.isRegExp" | "util/types.isAsyncFunction" | "util/types.isGeneratorFunction" | "util/types.isGeneratorObject" | "util/types.isPromise" | "util/types.isMap" | "util/types.isSet" | "util/types.isMapIterator" | "util/types.isSetIterator" | "util/types.isWeakMap" | "util/types.isWeakSet" | "util/types.isArrayBuffer" | "util/types.isDataView" | "util/types.isSharedArrayBuffer" | "util/types.isProxy" | "util/types.isModuleNamespaceObject" | "util/types.isAnyArrayBuffer" | "util/types.isBoxedPrimitive" | "util/types.isArrayBufferView" | "util/types.isTypedArray" | "util/types.isUint8Array" | "util/types.isUint8ClampedArray" | "util/types.isUint16Array" | "util/types.isUint32Array" | "util/types.isInt8Array" | "util/types.isInt16Array" | "util/types.isInt32Array" | "util/types.isFloat16Array" | "util/types.isFloat32Array" | "util/types.isFloat64Array" | "util/types.isBigInt64Array" | "util/types.isBigUint64Array" | "util/types.isKeyObject" | "util/types.isCryptoKey" | "util/types.isWebAssemblyCompiledModule" | "v8" | "v8.serialize" | "v8.deserialize" | "v8.Serializer" | "v8.Deserializer" | "v8.DefaultSerializer" | "v8.DefaultDeserializer" | "v8.promiseHooks" | "v8.promiseHooks.onInit" | "v8.promiseHooks.onSettled" | "v8.promiseHooks.onBefore" | "v8.promiseHooks.onAfter" | "v8.promiseHooks.createHook" | "v8.startupSnapshot" | "v8.startupSnapshot.addSerializeCallback" | "v8.startupSnapshot.addDeserializeCallback" | "v8.startupSnapshot.setDeserializeMainFunction" | "v8.startupSnapshot.isBuildingSnapshot" | "v8.cachedDataVersionTag" | "v8.getHeapCodeStatistics" | "v8.getHeapSnapshot" | "v8.getHeapSpaceStatistics" | "v8.getHeapStatistics" | "v8.isStringOneByteRepresentation" | "v8.queryObjects" | "v8.setFlagsFromString" | "v8.stopCoverage" | "v8.takeCoverage" | "v8.writeHeapSnapshot" | "v8.setHeapSnapshotNearHeapLimit" | "v8.GCProfiler" | "vm.constants" | "vm.compileFunction" | "vm.createContext" | "vm.isContext" | "vm.measureMemory" | "vm.runInContext" | "vm.runInNewContext" | "vm.runInThisContext" | "vm.Script" | "vm.Module" | "vm.SourceTextModule" | "vm.SyntheticModule" | "vm" | "wasi.WASI" | "wasi" | "worker_threads" | "worker_threads.parentPort" | "worker_threads.resourceLimits" | "worker_threads.SHARE_ENV" | "worker_threads.threadId" | "worker_threads.workerData" | "worker_threads.getEnvironmentData" | "worker_threads.getHeapStatistics" | "worker_threads.markAsUncloneable" | "worker_threads.markAsUntransferable" | "worker_threads.isInternalThread" | "worker_threads.isMainThread" | "worker_threads.isMarkedAsUntransferable" | "worker_threads.moveMessagePortToContext" | "worker_threads.postMessageToThread" | "worker_threads.receiveMessageOnPort" | "worker_threads.setEnvironmentData" | "worker_threads.BroadcastChannel" | "worker_threads.MessageChannel" | "worker_threads.MessagePort" | "worker_threads.Worker" | "zlib.brotliCompress" | "zlib.brotliCompressSync" | "zlib.brotliDecompress" | "zlib.brotliDecompressSync" | "zlib.constants" | "zlib.constants.ZSTD_e_continue" | "zlib.constants.ZSTD_e_flush" | "zlib.constants.ZSTD_e_end" | "zlib.constants.ZSTD_fast" | "zlib.constants.ZSTD_dfast" | "zlib.constants.ZSTD_greedy" | "zlib.constants.ZSTD_lazy" | "zlib.constants.ZSTD_lazy2" | "zlib.constants.ZSTD_btlazy2" | "zlib.constants.ZSTD_btopt" | "zlib.constants.ZSTD_btultra" | "zlib.constants.ZSTD_btultra2" | "zlib.constants.ZSTD_c_compressionLevel" | "zlib.constants.ZSTD_c_windowLog" | "zlib.constants.ZSTD_c_hashLog" | "zlib.constants.ZSTD_c_chainLog" | "zlib.constants.ZSTD_c_searchLog" | "zlib.constants.ZSTD_c_minMatch" | "zlib.constants.ZSTD_c_targetLength" | "zlib.constants.ZSTD_c_strategy" | "zlib.constants.ZSTD_c_enableLongDistanceMatching" | "zlib.constants.ZSTD_c_ldmHashLog" | "zlib.constants.ZSTD_c_ldmMinMatch" | "zlib.constants.ZSTD_c_ldmBucketSizeLog" | "zlib.constants.ZSTD_c_ldmHashRateLog" | "zlib.constants.ZSTD_c_contentSizeFlag" | "zlib.constants.ZSTD_c_checksumFlag" | "zlib.constants.ZSTD_c_dictIDFlag" | "zlib.constants.ZSTD_c_nbWorkers" | "zlib.constants.ZSTD_c_jobSize" | "zlib.constants.ZSTD_c_overlapLog" | "zlib.constants.ZSTD_d_windowLogMax" | "zlib.constants.ZSTD_CLEVEL_DEFAULT" | "zlib.constants.ZSTD_error_no_error" | "zlib.constants.ZSTD_error_GENERIC" | "zlib.constants.ZSTD_error_prefix_unknown" | "zlib.constants.ZSTD_error_version_unsupported" | "zlib.constants.ZSTD_error_frameParameter_unsupported" | "zlib.constants.ZSTD_error_frameParameter_windowTooLarge" | "zlib.constants.ZSTD_error_corruption_detected" | "zlib.constants.ZSTD_error_checksum_wrong" | "zlib.constants.ZSTD_error_literals_headerWrong" | "zlib.constants.ZSTD_error_dictionary_corrupted" | "zlib.constants.ZSTD_error_dictionary_wrong" | "zlib.constants.ZSTD_error_dictionaryCreation_failed" | "zlib.constants.ZSTD_error_parameter_unsupported" | "zlib.constants.ZSTD_error_parameter_combination_unsupported" | "zlib.constants.ZSTD_error_parameter_outOfBound" | "zlib.constants.ZSTD_error_tableLog_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooLarge" | "zlib.constants.ZSTD_error_maxSymbolValue_tooSmall" | "zlib.constants.ZSTD_error_stabilityCondition_notRespected" | "zlib.constants.ZSTD_error_stage_wrong" | "zlib.constants.ZSTD_error_init_missing" | "zlib.constants.ZSTD_error_memory_allocation" | "zlib.constants.ZSTD_error_workSpace_tooSmall" | "zlib.constants.ZSTD_error_dstSize_tooSmall" | "zlib.constants.ZSTD_error_srcSize_wrong" | "zlib.constants.ZSTD_error_dstBuffer_null" | "zlib.constants.ZSTD_error_noForwardProgress_destFull" | "zlib.constants.ZSTD_error_noForwardProgress_inputEmpty" | "zlib.crc32" | "zlib.createBrotliCompress" | "zlib.createBrotliDecompress" | "zlib.createDeflate" | "zlib.createDeflateRaw" | "zlib.createGunzip" | "zlib.createGzip" | "zlib.createInflate" | "zlib.createInflateRaw" | "zlib.createUnzip" | "zlib.createZstdCompress" | "zlib.createZstdDecompress" | "zlib.deflate" | "zlib.deflateRaw" | "zlib.deflateRawSync" | "zlib.deflateSync" | "zlib.gunzip" | "zlib.gunzipSync" | "zlib.gzip" | "zlib.gzipSync" | "zlib.inflate" | "zlib.inflateRaw" | "zlib.inflateRawSync" | "zlib.inflateSync" | "zlib.unzip" | "zlib.unzipSync" | "zlib.zstdCompress" | "zlib.zstdCompressSync" | "zlib.zstdDecompress" | "zlib.zstdDecompressSync" | "zlib.BrotliCompress()" | "zlib.BrotliCompress" | "zlib.BrotliDecompress()" | "zlib.BrotliDecompress" | "zlib.Deflate()" | "zlib.Deflate" | "zlib.DeflateRaw()" | "zlib.DeflateRaw" | "zlib.Gunzip()" | "zlib.Gunzip" | "zlib.Gzip()" | "zlib.Gzip" | "zlib.Inflate()" | "zlib.Inflate" | "zlib.InflateRaw()" | "zlib.InflateRaw" | "zlib.Unzip()" | "zlib.Unzip" | "zlib.ZstdCompress" | "zlib.ZstdDecompress" | "zlib.ZstdOptions" | "zlib" | "import.meta.resolve" | "import.meta.dirname" | "import.meta.filename" | "import.meta.main")[]
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
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/consistent-type-specifier-style.md
   */
  'import/consistent-type-specifier-style'?: Linter.RuleEntry<ImportConsistentTypeSpecifierStyle>
  /**
   * Ensure a default export is present, given a default import.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/default.md
   */
  'import/default'?: Linter.RuleEntry<[]>
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/dynamic-import-chunkname.md
   */
  'import/dynamic-import-chunkname'?: Linter.RuleEntry<ImportDynamicImportChunkname>
  /**
   * Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/enforce-node-protocol-usage.md
   */
  'import/enforce-node-protocol-usage'?: Linter.RuleEntry<ImportEnforceNodeProtocolUsage>
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/export.md
   */
  'import/export'?: Linter.RuleEntry<[]>
  /**
   * Ensure all exports appear after other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/exports-last.md
   */
  'import/exports-last'?: Linter.RuleEntry<[]>
  /**
   * Ensure consistent use of file extension within the import path.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/extensions.md
   */
  'import/extensions'?: Linter.RuleEntry<ImportExtensions>
  /**
   * Ensure all imports appear before other statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/first.md
   */
  'import/first'?: Linter.RuleEntry<ImportFirst>
  /**
   * Prefer named exports to be grouped together in a single export declaration
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/group-exports.md
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
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/max-dependencies.md
   */
  'import/max-dependencies'?: Linter.RuleEntry<ImportMaxDependencies>
  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/named.md
   */
  'import/named'?: Linter.RuleEntry<ImportNamed>
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/namespace.md
   */
  'import/namespace'?: Linter.RuleEntry<ImportNamespace>
  /**
   * Enforce a newline after import statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/newline-after-import.md
   */
  'import/newline-after-import'?: Linter.RuleEntry<ImportNewlineAfterImport>
  /**
   * Forbid import of modules using absolute paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-absolute-path.md
   */
  'import/no-absolute-path'?: Linter.RuleEntry<ImportNoAbsolutePath>
  /**
   * Forbid AMD `require` and `define` calls.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-amd.md
   */
  'import/no-amd'?: Linter.RuleEntry<[]>
  /**
   * Forbid anonymous values as default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-anonymous-default-export.md
   */
  'import/no-anonymous-default-export'?: Linter.RuleEntry<ImportNoAnonymousDefaultExport>
  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-commonjs.md
   */
  'import/no-commonjs'?: Linter.RuleEntry<ImportNoCommonjs>
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-cycle.md
   */
  'import/no-cycle'?: Linter.RuleEntry<ImportNoCycle>
  /**
   * Forbid default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-default-export.md
   */
  'import/no-default-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-deprecated.md
   */
  'import/no-deprecated'?: Linter.RuleEntry<[]>
  /**
   * Forbid repeated import of the same module in multiple places.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-duplicates.md
   */
  'import/no-duplicates'?: Linter.RuleEntry<ImportNoDuplicates>
  /**
   * Forbid `require()` calls with expressions.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-dynamic-require.md
   */
  'import/no-dynamic-require'?: Linter.RuleEntry<ImportNoDynamicRequire>
  /**
   * Forbid empty named import blocks.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-empty-named-blocks.md
   */
  'import/no-empty-named-blocks'?: Linter.RuleEntry<[]>
  /**
   * Forbid the use of extraneous packages.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-extraneous-dependencies.md
   */
  'import/no-extraneous-dependencies'?: Linter.RuleEntry<ImportNoExtraneousDependencies>
  /**
   * Forbid import statements with CommonJS module.exports.
   */
  'import/no-import-module-exports'?: Linter.RuleEntry<ImportNoImportModuleExports>
  /**
   * Forbid importing the submodules of other modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-internal-modules.md
   */
  'import/no-internal-modules'?: Linter.RuleEntry<ImportNoInternalModules>
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-mutable-exports.md
   */
  'import/no-mutable-exports'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as identifier of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default.md
   */
  'import/no-named-as-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid use of exported name as property of default export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-as-default-member.md
   */
  'import/no-named-as-default-member'?: Linter.RuleEntry<[]>
  /**
   * Forbid named default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-default.md
   */
  'import/no-named-default'?: Linter.RuleEntry<[]>
  /**
   * Forbid named exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-named-export.md
   */
  'import/no-named-export'?: Linter.RuleEntry<[]>
  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-namespace.md
   */
  'import/no-namespace'?: Linter.RuleEntry<ImportNoNamespace>
  /**
   * Forbid Node.js builtin modules.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-nodejs-modules.md
   */
  'import/no-nodejs-modules'?: Linter.RuleEntry<ImportNoNodejsModules>
  /**
   * Forbid importing packages through relative paths.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-relative-packages.md
   */
  'import/no-relative-packages'?: Linter.RuleEntry<ImportNoRelativePackages>
  /**
   * Forbid importing modules from parent directories.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-relative-parent-imports.md
   */
  'import/no-relative-parent-imports'?: Linter.RuleEntry<ImportNoRelativeParentImports>
  /**
   * Enforce which files can be imported in a given folder.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-restricted-paths.md
   */
  'import/no-restricted-paths'?: Linter.RuleEntry<ImportNoRestrictedPaths>
  /**
   * Forbid a module from importing itself.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-self-import.md
   */
  'import/no-self-import'?: Linter.RuleEntry<[]>
  /**
   * Forbid unassigned imports
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unassigned-import.md
   */
  'import/no-unassigned-import'?: Linter.RuleEntry<ImportNoUnassignedImport>
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unresolved.md
   */
  'import/no-unresolved'?: Linter.RuleEntry<ImportNoUnresolved>
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-unused-modules.md
   */
  'import/no-unused-modules'?: Linter.RuleEntry<ImportNoUnusedModules>
  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-useless-path-segments.md
   */
  'import/no-useless-path-segments'?: Linter.RuleEntry<ImportNoUselessPathSegments>
  /**
   * Forbid webpack loader syntax in imports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/no-webpack-loader-syntax.md
   */
  'import/no-webpack-loader-syntax'?: Linter.RuleEntry<[]>
  /**
   * Enforce a convention in module import order.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/order.md
   */
  'import/order'?: Linter.RuleEntry<ImportOrder>
  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/prefer-default-export.md
   */
  'import/prefer-default-export'?: Linter.RuleEntry<ImportPreferDefaultExport>
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see https://github.com/import-js/eslint-plugin-import/blob/v2.32.0/docs/rules/unambiguous.md
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
// ----- import/enforce-node-protocol-usage -----
type ImportEnforceNodeProtocolUsage = [("always" | "never")]
// ----- import/extensions -----
type ImportExtensions = ([]|[("always" | "ignorePackages" | "never")] | []|[("always" | "ignorePackages" | "never")]|[("always" | "ignorePackages" | "never"), {
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
  [k: string]: unknown | undefined
}] | []|[{
  pattern?: {
    [k: string]: ("always" | "ignorePackages" | "never")
  }
  checkTypeImports?: boolean
  ignorePackages?: boolean
  pathGroupOverrides?: {
    pattern: string
    patternOptions?: {
      [k: string]: unknown | undefined
    }
    action: ("enforce" | "ignore")
  }[]
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
  groups?: (("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type") | ("builtin" | "external" | "internal" | "unknown" | "parent" | "sibling" | "index" | "object" | "type")[])[]
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
  "newlines-between-types"?: ("ignore" | "always" | "always-and-inside-groups" | "never")
  consolidateIslands?: ("inside-groups" | "never")
  sortTypesGroup?: boolean
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
    readonly plugins: Record<string, eslint.ESLint.Plugin>;
    readonly rules: {
        'import/consistent-type-specifier-style'?: eslint.Linter.RuleEntry<undefined>;
        'import/default'?: eslint.Linter.RuleEntry<[]>;
        'import/dynamic-import-chunkname'?: eslint.Linter.RuleEntry<undefined>;
        'import/enforce-node-protocol-usage'?: eslint.Linter.RuleEntry<undefined>;
        'import/export'?: eslint.Linter.RuleEntry<[]>;
        'import/exports-last'?: eslint.Linter.RuleEntry<[]>;
        'import/extensions'?: eslint.Linter.RuleEntry<undefined>;
        'import/first'?: eslint.Linter.RuleEntry<undefined>;
        'import/group-exports'?: eslint.Linter.RuleEntry<[]>;
        'import/imports-first'?: eslint.Linter.RuleEntry<undefined>;
        'import/max-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        'import/named'?: eslint.Linter.RuleEntry<undefined>;
        'import/namespace'?: eslint.Linter.RuleEntry<undefined>;
        'import/newline-after-import'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-absolute-path'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-amd'?: eslint.Linter.RuleEntry<[]>;
        'import/no-anonymous-default-export'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-commonjs'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-cycle'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-default-export'?: eslint.Linter.RuleEntry<[]>;
        'import/no-deprecated'?: eslint.Linter.RuleEntry<[]>;
        'import/no-duplicates'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-dynamic-require'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-empty-named-blocks'?: eslint.Linter.RuleEntry<[]>;
        'import/no-extraneous-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-import-module-exports'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-internal-modules'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-mutable-exports'?: eslint.Linter.RuleEntry<[]>;
        'import/no-named-as-default'?: eslint.Linter.RuleEntry<[]>;
        'import/no-named-as-default-member'?: eslint.Linter.RuleEntry<[]>;
        'import/no-named-default'?: eslint.Linter.RuleEntry<[]>;
        'import/no-named-export'?: eslint.Linter.RuleEntry<[]>;
        'import/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-nodejs-modules'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-relative-packages'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-relative-parent-imports'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-restricted-paths'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-self-import'?: eslint.Linter.RuleEntry<[]>;
        'import/no-unassigned-import'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-unresolved'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-unused-modules'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-useless-path-segments'?: eslint.Linter.RuleEntry<undefined>;
        'import/no-webpack-loader-syntax'?: eslint.Linter.RuleEntry<[]>;
        'import/order'?: eslint.Linter.RuleEntry<undefined>;
        'import/prefer-default-export'?: eslint.Linter.RuleEntry<undefined>;
        'import/unambiguous'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
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
        readonly 'jsonc/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/valid-json-number'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/callback-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/exports-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/file-extension-in-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/global-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/handle-callback-err'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/hashbang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-callback-literal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-deprecated-api'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-exports-assign'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-extraneous-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-extraneous-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-hide-core-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-mixed-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-new-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-path-concat'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-process-env'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-restricted-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-restricted-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-sync'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-top-level-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-bin'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/node-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/buffer'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/console'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/process'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-decoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-encoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url-search-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-node-protocol'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-promises/dns'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/prefer-promises/fs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/process-exit-as-throw'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/shebang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/arrow-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/arrow-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/block-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/brace-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/computed-property-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/dot-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/eol-last'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/func-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-call-argument-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-paren-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/generator-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/implicit-arrow-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/indent-binary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-child-element-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/jsx-closing-bracket-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-closing-tag-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-brace-presence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-equals-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-first-prop-new-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-function-call-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-indent-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-max-props-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-one-expression-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-pascal-case'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-props-no-multi-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/jsx-quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-self-closing-comp'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-sort-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-wrap-multilines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/keyword-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/line-comment-position'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/linebreak-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/lines-around-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/lines-between-class-members'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/max-len'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/max-statements-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/member-delimiter-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/multiline-comment-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/multiline-ternary'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/new-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/newline-per-chained-call'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-confusing-arrow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-extra-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-extra-semi'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/no-floating-decimal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/no-mixed-operators'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-mixed-spaces-and-tabs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-multi-spaces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-tabs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-trailing-spaces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-whitespace-before-property'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/nonblock-statement-body-position'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/one-var-declaration-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/operator-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/padded-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/padding-line-between-statements'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/rest-spread-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-before-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-before-function-paren'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-in-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-infix-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/switch-colon-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/template-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/template-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/type-annotation-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/type-generic-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/type-named-tuple-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/wrap-iife'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/wrap-regex'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/yield-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/adjacent-overload-signatures'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/array-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/await-thenable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/ban-ts-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/ban-tslint-comment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/class-literal-property-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/class-methods-use-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-generic-constructors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-indexed-object-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-assertions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-definitions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/default-param-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/dot-notation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-function-return-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-member-accessibility'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-module-boundary-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/init-declarations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/max-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/member-ordering'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/method-signature-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/naming-convention'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-array-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-array-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-base-to-string'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-confusing-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-confusing-void-expression'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-deprecated'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dupe-class-members'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-enum-values'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dynamic-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-empty-function'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-interface'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-object-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-explicit-any'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-extra-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-extraneous-class'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-floating-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-for-in-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-implied-eval'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-import-type-side-effects'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-inferrable-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-void-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-loop-func'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-loss-of-precision'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-magic-numbers'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-meaningless-void-operator'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-new'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-misused-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-spread'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-mixed-enums'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-non-null-asserted-nullish-coalescing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-asserted-optional-chain'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-redeclare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-redundant-type-constituents'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-require-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-shadow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-this-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-type-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-boolean-literal-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-condition'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-parameter-property-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-qualifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-template-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-arguments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-assertion'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-type-constraint'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-conversion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-call'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-declaration-merging'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-enum-comparison'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-member-access'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unsafe-return'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-type-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-unary-minus'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unused-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unused-vars'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-use-before-define'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-useless-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-useless-empty-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-var-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-wrapper-object-types'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/non-nullable-type-assertion-style'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/only-throw-error'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/parameter-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-as-const'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-destructuring'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-enum-initializers'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-find'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-for-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-literal-enum-member'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-namespace-keyword'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-nullish-coalescing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-optional-chain'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-promise-reject-errors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly-parameter-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-reduce-type-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-regexp-exec'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-return-this-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-ts-expect-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/promise-function-async'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/related-getter-setter-pairs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/require-array-sort-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/require-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/restrict-plus-operands'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/restrict-template-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/return-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/sort-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/strict-boolean-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/switch-exhaustiveness-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/triple-slash-reference'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/typedef'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unbound-method'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unified-signatures'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/use-unknown-in-catch-callback-variable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/better-regex'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/catch-error-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/consistent-destructuring'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-empty-array-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-existence-index-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-function-scoping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/custom-error-definition'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/empty-brace-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/error-message'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/escape-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/expiring-todo-comments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/explicit-length-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/filename-case'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/import-index'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/import-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/new-for-builtins'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-abusive-eslint-disable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-anonymous-default-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-callback-reference'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-for-each'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-instanceof'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-method-this-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-push-push'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-array-reduce'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-await-expression-member'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-await-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-console-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-document-cookie'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-empty-file'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-fn-reference-in-iterator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-for-loop'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-hex-escape'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-instanceof-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-invalid-fetch-options'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-invalid-remove-event-listener'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-keyword-prefix'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-length-as-slice-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-lonely-if'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-magic-array-flat-depth'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-negated-condition'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-negation-in-equality-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-nested-ternary'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-new-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-new-buffer'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-null'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-object-as-default-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-reduce'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-single-promise-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-static-only-class'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-thenable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-this-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-typeof-undefined'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-unnecessary-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unnecessary-polyfills'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-unreadable-array-destructuring'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unreadable-iife'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unsafe-regex'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unused-properties'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-fallback-in-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-length-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-promise-resolve-reject'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-switch-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-undefined'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-zero-fractions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/number-literal-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/numeric-separators-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-add-event-listener'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-find'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-flat'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-flat-map'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-array-index-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-array-some'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-at'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-blob-reading-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-code-point'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dataset'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-date-now'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-default-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-append'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-dataset'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-remove'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-text-content'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-event-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-event-target'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-exponentiation-operator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-export-from'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-flat-map'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-global-this'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-json-parse-buffer'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-keyboard-event-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-logical-operator-over-ternary'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-math-min-max'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-math-trunc'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-modern-dom-apis'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-modern-math-apis'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-module'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-native-coercion-functions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-negative-index'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-append'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-protocol'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-remove'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-number-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-object-from-entries'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-object-has-own'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-optional-catch-binding'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-prototype-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-query-selector'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-reflect-apply'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-regexp-test'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-replace-all'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-set-has'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-set-size'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-raw'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-replace-all'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-slice'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-structured-clone'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-switch'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-ternary'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-text-content'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-top-level-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-type-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prevent-abbreviations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/regex-shorthand'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/relative-url-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/require-array-join-separator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/require-number-to-fixed-digits-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/require-post-message-target-origin'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/string-content'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/switch-case-braces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/template-indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/text-encoding-identifier-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/throw-new-error'?: eslint.Linter.RuleEntry<[]>;
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
        readonly 'jsdoc/check-access'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-examples'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-indentation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-line-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-param-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-property-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-syntax'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-tag-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-template-names'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/convert-to-jsdoc-comments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/empty-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/escape-inline-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/implements-on-classes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/imports-as-dependencies'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/informative-docs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/lines-before-block'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/multiline-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-bad-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-blank-block-descriptions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/no-blank-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-defaults'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-missing-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-multi-asterisks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-restricted-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-undefined-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/prefer-import-tag'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/reject-any-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/reject-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-asterisk-prefix'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description-complete-sentence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-example'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-file-overview'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-hyphen-before-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-jsdoc'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-next-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-next-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-param'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-property'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-name'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-returns'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-throws-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/sort-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/tag-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/text-escaping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/type-formatting'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/valid-types'?: eslint.Linter.RuleEntry<undefined>;
    };
}]>;
declare namespace imports {
    type Rules = RuleOptions;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

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
        readonly 'node/no-top-level-await'?: eslint.Linter.RuleEntry<undefined>;
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
    interface Options extends Omit<PluginOptionsBase<Rules>, 'files' | 'stylistic'> {
    }
}

declare function stylistic(options?: stylistic.Options): Promise<[{
    readonly name: "w5s/style/setup";
    readonly plugins: {
        readonly style: typeof _stylistic_eslint_plugin;
    };
}, {
    readonly name: "w5s/style/rules";
    readonly rules: {
        'style/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/arrow-parens'?: eslint.Linter.RuleEntry<undefined>;
        'style/arrow-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/block-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/brace-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        'style/comma-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/computed-property-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/dot-location'?: eslint.Linter.RuleEntry<undefined>;
        'style/eol-last'?: eslint.Linter.RuleEntry<undefined>;
        'style/func-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/function-call-argument-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/function-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/function-paren-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/generator-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/implicit-arrow-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        'style/indent'?: eslint.Linter.RuleEntry<undefined>;
        'style/indent-binary-ops'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-child-element-spacing'?: eslint.Linter.RuleEntry<[]>;
        'style/jsx-closing-bracket-location'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-closing-tag-location'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-curly-brace-presence'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-equals-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-first-prop-new-line'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-function-call-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-indent'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-indent-props'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-max-props-per-line'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-one-expression-per-line'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-pascal-case'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-props-no-multi-spaces'?: eslint.Linter.RuleEntry<[]>;
        'style/jsx-quotes'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-self-closing-comp'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-sort-props'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/jsx-wrap-multilines'?: eslint.Linter.RuleEntry<undefined>;
        'style/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/keyword-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/line-comment-position'?: eslint.Linter.RuleEntry<undefined>;
        'style/linebreak-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/lines-around-comment'?: eslint.Linter.RuleEntry<undefined>;
        'style/lines-between-class-members'?: eslint.Linter.RuleEntry<undefined>;
        'style/max-len'?: eslint.Linter.RuleEntry<undefined>;
        'style/max-statements-per-line'?: eslint.Linter.RuleEntry<undefined>;
        'style/member-delimiter-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/multiline-comment-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/multiline-ternary'?: eslint.Linter.RuleEntry<undefined>;
        'style/new-parens'?: eslint.Linter.RuleEntry<undefined>;
        'style/newline-per-chained-call'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-confusing-arrow'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-extra-parens'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-extra-semi'?: eslint.Linter.RuleEntry<[]>;
        'style/no-floating-decimal'?: eslint.Linter.RuleEntry<[]>;
        'style/no-mixed-operators'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-mixed-spaces-and-tabs'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-multi-spaces'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-tabs'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-trailing-spaces'?: eslint.Linter.RuleEntry<undefined>;
        'style/no-whitespace-before-property'?: eslint.Linter.RuleEntry<[]>;
        'style/nonblock-statement-body-position'?: eslint.Linter.RuleEntry<undefined>;
        'style/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        'style/one-var-declaration-per-line'?: eslint.Linter.RuleEntry<undefined>;
        'style/operator-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        'style/padded-blocks'?: eslint.Linter.RuleEntry<undefined>;
        'style/padding-line-between-statements'?: eslint.Linter.RuleEntry<undefined>;
        'style/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        'style/quotes'?: eslint.Linter.RuleEntry<undefined>;
        'style/rest-spread-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/semi'?: eslint.Linter.RuleEntry<undefined>;
        'style/semi-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/semi-style'?: eslint.Linter.RuleEntry<undefined>;
        'style/space-before-blocks'?: eslint.Linter.RuleEntry<undefined>;
        'style/space-before-function-paren'?: eslint.Linter.RuleEntry<undefined>;
        'style/space-in-parens'?: eslint.Linter.RuleEntry<undefined>;
        'style/space-infix-ops'?: eslint.Linter.RuleEntry<undefined>;
        'style/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        'style/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        'style/switch-colon-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/template-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/template-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/type-annotation-spacing'?: eslint.Linter.RuleEntry<undefined>;
        'style/type-generic-spacing'?: eslint.Linter.RuleEntry<[]>;
        'style/type-named-tuple-spacing'?: eslint.Linter.RuleEntry<[]>;
        'style/wrap-iife'?: eslint.Linter.RuleEntry<undefined>;
        'style/wrap-regex'?: eslint.Linter.RuleEntry<[]>;
        'style/yield-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
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
        readonly 'jsonc/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/valid-json-number'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/consistent-type-specifier-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/dynamic-import-chunkname'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/enforce-node-protocol-usage'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/exports-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/extensions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/first'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/group-exports'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/imports-first'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/max-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/named'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/newline-after-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-absolute-path'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-amd'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-anonymous-default-export'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-commonjs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-cycle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-default-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-deprecated'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-duplicates'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-dynamic-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-empty-named-blocks'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-extraneous-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-import-module-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-internal-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-mutable-exports'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-as-default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-as-default-member'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-nodejs-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-relative-packages'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-relative-parent-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-restricted-paths'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-self-import'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-unassigned-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-unresolved'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-unused-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-useless-path-segments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-webpack-loader-syntax'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/order'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/prefer-default-export'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/unambiguous'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/callback-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/exports-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/file-extension-in-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/global-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/handle-callback-err'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/hashbang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-callback-literal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-deprecated-api'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-exports-assign'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-extraneous-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-extraneous-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-hide-core-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-mixed-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-new-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-path-concat'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-process-env'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-restricted-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-restricted-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-sync'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-top-level-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-bin'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/node-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/buffer'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/console'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/process'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-decoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-encoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url-search-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-node-protocol'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-promises/dns'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/prefer-promises/fs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/process-exit-as-throw'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/shebang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/adjacent-overload-signatures'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/array-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/await-thenable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/ban-ts-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/ban-tslint-comment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/class-literal-property-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/class-methods-use-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-generic-constructors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-indexed-object-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-assertions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-definitions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/default-param-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/dot-notation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-function-return-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-member-accessibility'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-module-boundary-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/init-declarations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/max-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/member-ordering'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/method-signature-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/naming-convention'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-array-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-array-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-base-to-string'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-confusing-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-confusing-void-expression'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-deprecated'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dupe-class-members'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-enum-values'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dynamic-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-empty-function'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-interface'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-object-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-explicit-any'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-extra-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-extraneous-class'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-floating-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-for-in-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-implied-eval'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-import-type-side-effects'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-inferrable-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-void-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-loop-func'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-loss-of-precision'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-magic-numbers'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-meaningless-void-operator'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-new'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-misused-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-spread'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-mixed-enums'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-non-null-asserted-nullish-coalescing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-asserted-optional-chain'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-redeclare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-redundant-type-constituents'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-require-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-shadow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-this-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-type-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-boolean-literal-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-condition'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-parameter-property-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-qualifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-template-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-arguments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-assertion'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-type-constraint'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-conversion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-call'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-declaration-merging'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-enum-comparison'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-member-access'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unsafe-return'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-type-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-unary-minus'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unused-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unused-vars'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-use-before-define'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-useless-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-useless-empty-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-var-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-wrapper-object-types'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/non-nullable-type-assertion-style'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/only-throw-error'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/parameter-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-as-const'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-destructuring'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-enum-initializers'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-find'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-for-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-literal-enum-member'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-namespace-keyword'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-nullish-coalescing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-optional-chain'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-promise-reject-errors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly-parameter-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-reduce-type-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-regexp-exec'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-return-this-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-ts-expect-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/promise-function-async'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/related-getter-setter-pairs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/require-array-sort-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/require-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/restrict-plus-operands'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/restrict-template-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/return-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/sort-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/strict-boolean-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/switch-exhaustiveness-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/triple-slash-reference'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/typedef'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unbound-method'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unified-signatures'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/use-unknown-in-catch-callback-variable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/better-regex'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/catch-error-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/consistent-destructuring'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-empty-array-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-existence-index-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/consistent-function-scoping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/custom-error-definition'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/empty-brace-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/error-message'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/escape-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/expiring-todo-comments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/explicit-length-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/filename-case'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/import-index'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/import-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/new-for-builtins'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-abusive-eslint-disable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-anonymous-default-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-callback-reference'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-for-each'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-instanceof'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-method-this-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-array-push-push'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-array-reduce'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-await-expression-member'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-await-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-console-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-document-cookie'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-empty-file'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-fn-reference-in-iterator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-for-loop'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-hex-escape'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-instanceof-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-invalid-fetch-options'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-invalid-remove-event-listener'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-keyword-prefix'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-length-as-slice-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-lonely-if'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-magic-array-flat-depth'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-negated-condition'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-negation-in-equality-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-nested-ternary'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-new-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-new-buffer'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-null'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-object-as-default-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-reduce'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-single-promise-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-static-only-class'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-thenable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-this-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-typeof-undefined'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-unnecessary-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unnecessary-polyfills'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-unreadable-array-destructuring'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unreadable-iife'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unsafe-regex'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-unused-properties'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-fallback-in-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-length-check'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-promise-resolve-reject'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-switch-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/no-useless-undefined'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/no-zero-fractions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/number-literal-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/numeric-separators-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-add-event-listener'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-find'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-flat'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-array-flat-map'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-array-index-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-array-some'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-at'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-blob-reading-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-code-point'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dataset'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-date-now'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-default-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-append'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-dataset'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-remove'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-dom-node-text-content'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-event-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-event-target'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-exponentiation-operator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-export-from'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-flat-map'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-global-this'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-json-parse-buffer'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-keyboard-event-key'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-logical-operator-over-ternary'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-math-min-max'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-math-trunc'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-modern-dom-apis'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-modern-math-apis'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-module'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-native-coercion-functions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-negative-index'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-append'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-protocol'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-node-remove'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-number-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-object-from-entries'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-object-has-own'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-optional-catch-binding'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-prototype-methods'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-query-selector'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-reflect-apply'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-regexp-test'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-replace-all'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-set-has'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-set-size'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-spread'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-raw'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-replace-all'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-slice'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-string-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-structured-clone'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-switch'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-ternary'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/prefer-text-content'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-top-level-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prefer-type-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/prevent-abbreviations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/regex-shorthand'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/relative-url-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/require-array-join-separator'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/require-number-to-fixed-digits-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/require-post-message-target-origin'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/string-content'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/switch-case-braces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/template-indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'unicorn/text-encoding-identifier-case'?: eslint.Linter.RuleEntry<[]>;
        readonly 'unicorn/throw-new-error'?: eslint.Linter.RuleEntry<[]>;
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
        readonly 'jsdoc/check-access'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-examples'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-indentation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-line-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-param-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-property-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-syntax'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-tag-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-template-names'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/convert-to-jsdoc-comments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/empty-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/escape-inline-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/implements-on-classes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/imports-as-dependencies'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/informative-docs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/lines-before-block'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/multiline-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-bad-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-blank-block-descriptions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/no-blank-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-defaults'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-missing-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-multi-asterisks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-restricted-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-undefined-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/prefer-import-tag'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/reject-any-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/reject-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-asterisk-prefix'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description-complete-sentence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-example'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-file-overview'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-hyphen-before-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-jsdoc'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-next-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-next-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-param'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-property'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-name'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-returns'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-throws-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/sort-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/tag-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/text-escaping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/type-formatting'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/valid-types'?: eslint.Linter.RuleEntry<undefined>;
    };
}]>;
declare namespace stylistic {
    type Rules = RuleOptions$2;
    interface Options extends Pick<PluginOptionsBase<Rules>, 'rules'>, StylisticParameters {
    }
}

declare function ts(options?: ts.Options): Promise<[{
    readonly name: "w5s/ts/setup";
    readonly plugins: {
        readonly ts: {
            configs: Record<string, _typescript_eslint_utils_ts_eslint.ClassicConfig.Config>;
            meta: _typescript_eslint_utils_ts_eslint.FlatConfig.PluginMeta;
            rules: typeof _typescript_eslint_eslint_plugin_use_at_your_own_risk_rules;
        };
    };
}, {
    readonly files: (string | string[])[];
    readonly languageOptions: {
        readonly parser: typeof _typescript_eslint_parser;
        readonly parserOptions: {
            readonly sourceType: "module";
        };
    };
    readonly name: "w5s/ts/rules";
    readonly rules: {
        readonly 'ts/adjacent-overload-signatures'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/array-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/await-thenable'?: eslint.Linter.RuleEntry<[]>;
        'ts/ban-ts-comment': 0 | 2 | 1 | "off" | "warn" | "error" | [eslint.Linter.RuleSeverity, {
            minimumDescriptionLength?: number;
            "ts-check"?: (boolean | "allow-with-description" | {
                descriptionFormat?: string;
            });
            "ts-expect-error"?: (boolean | "allow-with-description" | {
                descriptionFormat?: string;
            });
            "ts-ignore"?: (boolean | "allow-with-description" | {
                descriptionFormat?: string;
            });
            "ts-nocheck"?: (boolean | "allow-with-description" | {
                descriptionFormat?: string;
            });
        }?] | ["warn", {
            readonly minimumDescriptionLength: 3;
            readonly 'ts-check': false;
            readonly 'ts-expect-error': "allow-with-description";
            readonly 'ts-ignore': "allow-with-description";
            readonly 'ts-nocheck': true;
        }];
        readonly 'ts/ban-tslint-comment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/class-literal-property-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/class-methods-use-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-generic-constructors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-indexed-object-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-assertions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-definitions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/default-param-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/dot-notation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-function-return-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-member-accessibility'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-module-boundary-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/init-declarations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/max-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/member-ordering'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/method-signature-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/naming-convention'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-array-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-array-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-base-to-string'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-confusing-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-confusing-void-expression'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-deprecated'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dupe-class-members'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-enum-values'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dynamic-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-empty-function'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-interface'?: eslint.Linter.RuleEntry<undefined>;
        'ts/no-empty-object-type': eslint.Linter.RuleEntry<undefined>;
        'ts/no-explicit-any': eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-extra-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-extraneous-class'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-floating-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-for-in-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-implied-eval'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-import-type-side-effects'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-inferrable-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-void-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-loop-func'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-loss-of-precision'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-magic-numbers'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-meaningless-void-operator'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-new'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-misused-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-spread'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-mixed-enums'?: eslint.Linter.RuleEntry<[]>;
        'ts/no-namespace': eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-non-null-asserted-nullish-coalescing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-asserted-optional-chain'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-redeclare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-redundant-type-constituents'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-require-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-shadow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-this-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-type-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-boolean-literal-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-condition'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-parameter-property-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-qualifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-template-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-arguments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-assertion'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-type-constraint'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-conversion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-call'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-declaration-merging'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-enum-comparison'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-member-access'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unsafe-return'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-type-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-unary-minus'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unused-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unused-vars'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-use-before-define'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-useless-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-useless-empty-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-var-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-wrapper-object-types'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/non-nullable-type-assertion-style'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/only-throw-error'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/parameter-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-as-const'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-destructuring'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-enum-initializers'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-find'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-for-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-literal-enum-member'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-namespace-keyword'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-nullish-coalescing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-optional-chain'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-promise-reject-errors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly-parameter-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-reduce-type-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-regexp-exec'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-return-this-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-ts-expect-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/promise-function-async'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/related-getter-setter-pairs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/require-array-sort-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/require-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/restrict-plus-operands'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/restrict-template-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/return-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/sort-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/strict-boolean-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/switch-exhaustiveness-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/triple-slash-reference'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/typedef'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unbound-method'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unified-signatures'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/use-unknown-in-catch-callback-variable'?: eslint.Linter.RuleEntry<[]>;
    };
}, ...{
    files: string[];
    name: string;
    rules: {
        [x: string]: any;
    };
}[]]>;
declare namespace ts {
    type Rules = RuleOptions$3;
    interface Options extends PluginOptionsBase<Rules> {
        typeChecked?: boolean;
    }
}

declare function unicorn(options?: unicorn.Options): Promise<[{
    readonly name: "w5s/unicorn/setup";
    readonly plugins: {
        readonly unicorn: eslint.ESLint.Plugin & {
            configs: {
                recommended: eslint.Linter.Config;
                all: eslint.Linter.Config;
                "flat/all": eslint.Linter.FlatConfig;
                "flat/recommended": eslint.Linter.FlatConfig;
            };
        };
    };
}, {
    readonly name: "w5s/unicorn/rules";
    readonly rules: {
        'unicorn/better-regex'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/catch-error-name'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/consistent-destructuring': eslint.Linter.RuleEntry<[]>;
        'unicorn/consistent-empty-array-spread'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/consistent-existence-index-check'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/consistent-function-scoping': eslint.Linter.RuleEntry<undefined>;
        'unicorn/custom-error-definition'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/empty-brace-spaces'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/error-message'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/escape-case'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/expiring-todo-comments'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/explicit-length-check'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/filename-case': eslint.Linter.RuleEntry<undefined>;
        'unicorn/import-index': eslint.Linter.RuleEntry<[]>;
        'unicorn/import-style'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/new-for-builtins': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-abusive-eslint-disable'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-anonymous-default-export'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-array-callback-reference': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-array-for-each': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-array-instanceof'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-array-method-this-argument': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-array-push-push'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-array-reduce': eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-await-expression-member'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-await-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-console-spaces': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-document-cookie'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-empty-file'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-fn-reference-in-iterator': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-for-loop'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-hex-escape'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-instanceof-array'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-invalid-fetch-options'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-invalid-remove-event-listener'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-keyword-prefix'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-length-as-slice-end'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-lonely-if'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-magic-array-flat-depth'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-negated-condition'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-negation-in-equality-check'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-nested-ternary': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-new-array'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-new-buffer'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-null': eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-object-as-default-parameter': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-process-exit': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-reduce'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-single-promise-in-promise-methods'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-static-only-class'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-thenable'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-this-assignment'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-typeof-undefined'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-unnecessary-await'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-unnecessary-polyfills'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-unreadable-array-destructuring': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-unreadable-iife'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-unsafe-regex'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-unused-properties': eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-fallback-in-spread'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-length-check'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-promise-resolve-reject'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-spread'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-switch-case'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/no-useless-undefined': eslint.Linter.RuleEntry<undefined>;
        'unicorn/no-zero-fractions'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/number-literal-case'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/numeric-separators-style'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-add-event-listener': eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-array-find'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-array-flat'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-array-flat-map'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-array-index-of'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-array-some'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-at'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-blob-reading-methods'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-code-point'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-dataset'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-date-now'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-default-parameters': eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-dom-node-append'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-dom-node-dataset'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-dom-node-remove'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-dom-node-text-content'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-event-key'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-event-target'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-exponentiation-operator'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-export-from'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-flat-map'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-global-this'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-json-parse-buffer'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-keyboard-event-key'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-logical-operator-over-ternary'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-math-min-max'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-math-trunc'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-modern-dom-apis'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-modern-math-apis'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-module'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-native-coercion-functions'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-negative-index'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-node-append'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-node-protocol'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-node-remove'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-number-properties'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-object-from-entries'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-object-has-own'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-optional-catch-binding'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-prototype-methods'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-query-selector'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-reflect-apply'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-regexp-test'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-replace-all'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-set-has': eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-set-size'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-spread'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-string-raw'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-string-replace-all'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-string-slice'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-string-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-structured-clone'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-switch'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-ternary'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/prefer-text-content'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-top-level-await'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-trim-start-end'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prefer-type-error'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/prevent-abbreviations': eslint.Linter.RuleEntry<undefined>;
        'unicorn/regex-shorthand'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/relative-url-style'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/require-array-join-separator'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/require-number-to-fixed-digits-argument'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/require-post-message-target-origin'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/string-content'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/switch-case-braces'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/template-indent'?: eslint.Linter.RuleEntry<undefined>;
        'unicorn/text-encoding-identifier-case'?: eslint.Linter.RuleEntry<[]>;
        'unicorn/throw-new-error': eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/auto'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-name-casing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
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
        readonly 'jsonc/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-array-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/sort-keys'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsonc/valid-json-number'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsonc/vue-custom-block/no-parsing-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/consistent-type-specifier-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/dynamic-import-chunkname'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/enforce-node-protocol-usage'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/exports-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/extensions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/first'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/group-exports'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/imports-first'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/max-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/named'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/newline-after-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-absolute-path'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-amd'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-anonymous-default-export'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-commonjs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-cycle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-default-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-deprecated'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-duplicates'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-dynamic-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-empty-named-blocks'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-extraneous-dependencies'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-import-module-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-internal-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-mutable-exports'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-as-default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-as-default-member'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-default'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-named-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-nodejs-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-relative-packages'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-relative-parent-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-restricted-paths'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-self-import'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/no-unassigned-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-unresolved'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-unused-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-useless-path-segments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/no-webpack-loader-syntax'?: eslint.Linter.RuleEntry<[]>;
        readonly 'import/order'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/prefer-default-export'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'import/unambiguous'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/callback-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/exports-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/file-extension-in-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/global-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/handle-callback-err'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/hashbang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-callback-literal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-deprecated-api'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-exports-assign'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-extraneous-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-extraneous-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-hide-core-modules'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-missing-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-mixed-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-new-require'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-path-concat'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-process-env'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-process-exit'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/no-restricted-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-restricted-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-sync'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-top-level-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-bin'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-import'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unpublished-require'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/es-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/no-unsupported-features/node-builtins'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/buffer'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/console'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/process'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-decoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/text-encoder'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-global/url-search-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-node-protocol'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'node/prefer-promises/dns'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/prefer-promises/fs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/process-exit-as-throw'?: eslint.Linter.RuleEntry<[]>;
        readonly 'node/shebang'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-bracket-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-bracket-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/array-element-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/arrow-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/arrow-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/block-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/brace-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-dangle'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/comma-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/computed-property-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/dot-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/eol-last'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/func-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-call-argument-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-call-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/function-paren-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/generator-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/implicit-arrow-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/indent-binary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-child-element-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/jsx-closing-bracket-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-closing-tag-location'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-brace-presence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-equals-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-first-prop-new-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-function-call-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-indent'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-indent-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-max-props-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-one-expression-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-pascal-case'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-props-no-multi-spaces'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/jsx-quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-self-closing-comp'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-sort-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/jsx-wrap-multilines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/key-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/keyword-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/line-comment-position'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/linebreak-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/lines-around-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/lines-between-class-members'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/max-len'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/max-statements-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/member-delimiter-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/multiline-comment-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/multiline-ternary'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/new-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/newline-per-chained-call'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-confusing-arrow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-extra-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-extra-semi'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/no-floating-decimal'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/no-mixed-operators'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-mixed-spaces-and-tabs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-multi-spaces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-multiple-empty-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-tabs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-trailing-spaces'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/no-whitespace-before-property'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/nonblock-statement-body-position'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-curly-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/object-property-newline'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/one-var-declaration-per-line'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/operator-linebreak'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/padded-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/padding-line-between-statements'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/quote-props'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/quotes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/rest-spread-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/semi-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-before-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-before-function-paren'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-in-parens'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-infix-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/space-unary-ops'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/spaced-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/switch-colon-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/template-curly-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/template-tag-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/type-annotation-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/type-generic-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/type-named-tuple-spacing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/wrap-iife'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'style/wrap-regex'?: eslint.Linter.RuleEntry<[]>;
        readonly 'style/yield-star-spacing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/adjacent-overload-signatures'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/array-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/await-thenable'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/ban-ts-comment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/ban-tslint-comment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/class-literal-property-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/class-methods-use-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-generic-constructors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-indexed-object-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-return'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-assertions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-definitions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-exports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/consistent-type-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/default-param-last'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/dot-notation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-function-return-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-member-accessibility'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/explicit-module-boundary-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/init-declarations'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/max-params'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/member-ordering'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/method-signature-style'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/naming-convention'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-array-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-array-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-base-to-string'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-confusing-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-confusing-void-expression'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-deprecated'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dupe-class-members'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-enum-values'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-duplicate-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-dynamic-delete'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-empty-function'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-interface'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-empty-object-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-explicit-any'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-extra-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-extraneous-class'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-floating-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-for-in-array'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-implied-eval'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-import-type-side-effects'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-inferrable-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-this'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-invalid-void-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-loop-func'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-loss-of-precision'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-magic-numbers'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-meaningless-void-operator'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-new'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-misused-promises'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-misused-spread'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-mixed-enums'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-namespace'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-non-null-asserted-nullish-coalescing'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-asserted-optional-chain'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-non-null-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-redeclare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-redundant-type-constituents'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-require-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-imports'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-restricted-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-shadow'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-this-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-type-alias'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-boolean-literal-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-condition'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-parameter-property-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-qualifier'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-template-expression'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-arguments'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-assertion'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unnecessary-type-constraint'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-conversion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unnecessary-type-parameters'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-argument'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-assignment'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-call'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-declaration-merging'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-enum-comparison'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-member-access'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unsafe-return'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-type-assertion'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unsafe-unary-minus'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-unused-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-unused-vars'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-use-before-define'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-useless-constructor'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-useless-empty-export'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/no-var-requires'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/no-wrapper-object-types'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/non-nullable-type-assertion-style'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/only-throw-error'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/parameter-properties'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-as-const'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-destructuring'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-enum-initializers'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-find'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-for-of'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-includes'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-literal-enum-member'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-namespace-keyword'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-nullish-coalescing'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-optional-chain'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-promise-reject-errors'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-readonly-parameter-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-reduce-type-parameter'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-regexp-exec'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-return-this-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/prefer-string-starts-ends-with'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/prefer-ts-expect-error'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/promise-function-async'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/related-getter-setter-pairs'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/require-array-sort-compare'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/require-await'?: eslint.Linter.RuleEntry<[]>;
        readonly 'ts/restrict-plus-operands'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/restrict-template-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/return-await'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/sort-type-constituents'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/strict-boolean-expressions'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/switch-exhaustiveness-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/triple-slash-reference'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/typedef'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unbound-method'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/unified-signatures'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'ts/use-unknown-in-catch-callback-variable'?: eslint.Linter.RuleEntry<[]>;
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
        readonly 'jsdoc/check-access'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-examples'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-indentation'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-line-alignment'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-param-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-property-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-syntax'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-tag-names'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-template-names'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/check-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/check-values'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/convert-to-jsdoc-comments'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/empty-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/escape-inline-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/implements-on-classes'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/imports-as-dependencies'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/informative-docs'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/lines-before-block'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/match-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/multiline-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-bad-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-blank-block-descriptions'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/no-blank-blocks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-defaults'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-missing-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-multi-asterisks'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-restricted-syntax'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/no-undefined-types'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/prefer-import-tag'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/reject-any-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/reject-function-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-asterisk-prefix'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-description-complete-sentence'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-example'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-file-overview'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-hyphen-before-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-jsdoc'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-next-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-next-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-param'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-name'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-param-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-property'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-name'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-property-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-returns'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-description'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-returns-type'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-template-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-throws-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-throws-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-check'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/require-yields-description'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/require-yields-type'?: eslint.Linter.RuleEntry<[]>;
        readonly 'jsdoc/sort-tags'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/tag-lines'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/text-escaping'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/type-formatting'?: eslint.Linter.RuleEntry<undefined>;
        readonly 'jsdoc/valid-types'?: eslint.Linter.RuleEntry<undefined>;
    };
}, {
    readonly name: "w5s/unicorn/overrides";
    readonly files: ["**/*.config.cjs", "**/*.config.js"];
    readonly rules: {
        readonly 'unicorn/prefer-module': "off";
    };
}]>;
declare namespace unicorn {
    type Rules = RuleOptions$4;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

declare function yml(options?: yml.Options): Promise<[Config, Config]>;
declare namespace yml {
    type Rules = RuleOptions$5;
    interface Options extends PluginOptionsBase<Rules> {
    }
}

interface DefineConfigOptions extends ignores.Options {
    import?: boolean | imports.Options;
    jsonc?: boolean | jsonc.Options;
    node?: boolean | node.Options;
    stylistic?: boolean | stylistic.Options;
    ts?: boolean | ts.Options;
    unicorn?: boolean | unicorn.Options;
    yml?: boolean | yml.Options;
}
declare function defineConfig(options?: DefineConfigOptions): Promise<Config[]>;

export { type DefineConfigOptions, defineConfig as default, defineConfig, ignores, imports, jsonc, node, stylistic, ts, unicorn, yml };
