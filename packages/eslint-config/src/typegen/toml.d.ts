/* eslint-disable */
/* prettier-ignore */
import type { Linter } from 'eslint'

declare module 'eslint' {
  namespace Linter {
    interface RulesRecord extends RuleOptions {}
  }
}

export interface RuleOptions {
  /**
   * enforce linebreaks after opening and before closing array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-newline.html
   */
  'toml/array-bracket-newline'?: Linter.RuleEntry<TomlArrayBracketNewline>
  /**
   * enforce consistent spacing inside array brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-bracket-spacing.html
   */
  'toml/array-bracket-spacing'?: Linter.RuleEntry<TomlArrayBracketSpacing>
  /**
   * enforce line breaks between array elements
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/array-element-newline.html
   */
  'toml/array-element-newline'?: Linter.RuleEntry<TomlArrayElementNewline>
  /**
   * enforce consistent comma style in array
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/comma-style.html
   */
  'toml/comma-style'?: Linter.RuleEntry<TomlCommaStyle>
  /**
   * enforce consistent indentation
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/indent.html
   */
  'toml/indent'?: Linter.RuleEntry<TomlIndent>
  /**
   * enforce linebreaks after opening and before closing braces
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-newline.html
   */
  'toml/inline-table-curly-newline'?: Linter.RuleEntry<TomlInlineTableCurlyNewline>
  /**
   * enforce consistent spacing inside braces
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-curly-spacing.html
   */
  'toml/inline-table-curly-spacing'?: Linter.RuleEntry<TomlInlineTableCurlySpacing>
  /**
   * enforce placing inline table key-value pairs on separate lines
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/inline-table-key-value-newline.html
   */
  'toml/inline-table-key-value-newline'?: Linter.RuleEntry<TomlInlineTableKeyValueNewline>
  /**
   * enforce consistent spacing between keys and values in key/value pairs
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/key-spacing.html
   */
  'toml/key-spacing'?: Linter.RuleEntry<TomlKeySpacing>
  /**
   * disallow defining pair keys out-of-order
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/keys-order.html
   */
  'toml/keys-order'?: Linter.RuleEntry<[]>
  /**
   * disallow mixed data types in array
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-mixed-type-in-array.html
   */
  'toml/no-mixed-type-in-array'?: Linter.RuleEntry<TomlNoMixedTypeInArray>
  /**
   * disallow hexadecimal, octal and binary integer
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-non-decimal-integer.html
   */
  'toml/no-non-decimal-integer'?: Linter.RuleEntry<TomlNoNonDecimalInteger>
  /**
   * disallow spacing around infix operators
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-space-dots.html
   */
  'toml/no-space-dots'?: Linter.RuleEntry<[]>
  /**
   * disallow number separators that to not enhance readability.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/no-unreadable-number-separator.html
   */
  'toml/no-unreadable-number-separator'?: Linter.RuleEntry<[]>
  /**
   * require or disallow padding lines between pairs
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-pairs.html
   */
  'toml/padding-line-between-pairs'?: Linter.RuleEntry<[]>
  /**
   * require or disallow padding lines between tables
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/padding-line-between-tables.html
   */
  'toml/padding-line-between-tables'?: Linter.RuleEntry<[]>
  /**
   * disallow precision of fractional seconds greater than the specified value.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-fractional-seconds.html
   */
  'toml/precision-of-fractional-seconds'?: Linter.RuleEntry<TomlPrecisionOfFractionalSeconds>
  /**
   * disallow precision of integer greater than the specified value.
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/precision-of-integer.html
   */
  'toml/precision-of-integer'?: Linter.RuleEntry<TomlPrecisionOfInteger>
  /**
   * require or disallow quotes around keys
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/quoted-keys.html
   */
  'toml/quoted-keys'?: Linter.RuleEntry<TomlQuotedKeys>
  /**
   * require spacing around equals sign
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/space-eq-sign.html
   * @deprecated
   */
  'toml/space-eq-sign'?: Linter.RuleEntry<[]>
  /**
   * enforce consistent spacing after the `#` in a comment
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/spaced-comment.html
   */
  'toml/spaced-comment'?: Linter.RuleEntry<TomlSpacedComment>
  /**
   * enforce consistent spacing inside table brackets
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/table-bracket-spacing.html
   */
  'toml/table-bracket-spacing'?: Linter.RuleEntry<TomlTableBracketSpacing>
  /**
   * disallow defining tables out-of-order
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/tables-order.html
   */
  'toml/tables-order'?: Linter.RuleEntry<[]>
  /**
   * disallow parsing errors in Vue custom blocks
   * @see https://ota-meshi.github.io/eslint-plugin-toml/rules/vue-custom-block/no-parsing-error.html
   */
  'toml/vue-custom-block/no-parsing-error'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- toml/array-bracket-newline -----
type TomlArrayBracketNewline = []|[(("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})]
// ----- toml/array-bracket-spacing -----
type TomlArrayBracketSpacing = []|[("always" | "never")]|[("always" | "never"), {
  singleValue?: boolean
  objectsInArrays?: boolean
  arraysInArrays?: boolean
}]
// ----- toml/array-element-newline -----
type TomlArrayElementNewline = []|[(_TomlArrayElementNewlineBasicConfig | {
  ArrayExpression?: _TomlArrayElementNewlineBasicConfig
  ArrayPattern?: _TomlArrayElementNewlineBasicConfig
  TOMLArray?: _TomlArrayElementNewlineBasicConfig
})]
type _TomlArrayElementNewlineBasicConfig = (("always" | "never" | "consistent") | {
  multiline?: boolean
  minItems?: (number | null)
})
// ----- toml/comma-style -----
type TomlCommaStyle = []|[("first" | "last")]|[("first" | "last"), {
  exceptions?: {
    [k: string]: boolean | undefined
  }
}]
// ----- toml/indent -----
type TomlIndent = []|[("tab" | number)]|[("tab" | number), {
  subTables?: number
  keyValuePairs?: number
}]
// ----- toml/inline-table-curly-newline -----
type TomlInlineTableCurlyNewline = []|[(("always" | "never") | {
  multiline?: boolean
  minProperties?: number
  consistent?: boolean
})]
// ----- toml/inline-table-curly-spacing -----
type TomlInlineTableCurlySpacing = []|[("always" | "never")]|[("always" | "never"), {
  arraysInObjects?: boolean
  objectsInObjects?: boolean
  emptyObjects?: ("ignore" | "always" | "never")
}]
// ----- toml/inline-table-key-value-newline -----
type TomlInlineTableKeyValueNewline = []|[{
  allowAllPropertiesOnSameLine?: boolean
}]
// ----- toml/key-spacing -----
type TomlKeySpacing = []|[({
  align?: (("equal" | "value") | {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  })
  mode?: ("strict" | "minimum")
  beforeEqual?: boolean
  afterEqual?: boolean
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    align?: (("equal" | "value") | {
      on?: ("equal" | "value")
      mode?: ("strict" | "minimum")
      beforeEqual?: boolean
      afterEqual?: boolean
    })
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
} | {
  singleLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  multiLine?: {
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
  align?: {
    on?: ("equal" | "value")
    mode?: ("strict" | "minimum")
    beforeEqual?: boolean
    afterEqual?: boolean
  }
})]
// ----- toml/no-mixed-type-in-array -----
type TomlNoMixedTypeInArray = []|[{
  typeMap?: {
    string?: string
    boolean?: string
    integer?: string
    float?: string
    offsetDateTime?: string
    localDateTime?: string
    localDate?: string
    localTime?: string
    array?: string
    inlineTable?: string
  }
}]
// ----- toml/no-non-decimal-integer -----
type TomlNoNonDecimalInteger = []|[{
  allowHexadecimal?: boolean
  allowOctal?: boolean
  allowBinary?: boolean
}]
// ----- toml/precision-of-fractional-seconds -----
type TomlPrecisionOfFractionalSeconds = []|[{
  max?: number
}]
// ----- toml/precision-of-integer -----
type TomlPrecisionOfInteger = []|[{
  maxBit?: number
}]
// ----- toml/quoted-keys -----
type TomlQuotedKeys = []|[{
  prefer?: ("as-needed" | "always")
  numbers?: boolean
}]
// ----- toml/spaced-comment -----
type TomlSpacedComment = []|[("always" | "never")]|[("always" | "never"), {
  exceptions?: string[]
  markers?: string[]
}]
// ----- toml/table-bracket-spacing -----
type TomlTableBracketSpacing = []|[("always" | "never")]