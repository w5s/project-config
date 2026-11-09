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
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/another-invalid'?: Linter.RuleEntry<RegexAnotherInvalid>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/another-required'?: Linter.RuleEntry<RegexAnotherRequired>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/avoid'?: Linter.RuleEntry<RegexAvoid>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/disuse'?: Linter.RuleEntry<RegexDisuse>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/invalid'?: Linter.RuleEntry<RegexInvalid>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/invalid-error'?: Linter.RuleEntry<RegexInvalidError>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/invalid-warn'?: Linter.RuleEntry<RegexInvalidWarn>
  /**
   * Invalid regular expressions to be reported
   * @see https://eslint-plugin-regex.github.io/docs/rules/invalid-regex-rule.html
   */
  'regex/other-invalid'?: Linter.RuleEntry<RegexOtherInvalid>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/other-required'?: Linter.RuleEntry<RegexOtherRequired>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/required'?: Linter.RuleEntry<RegexRequired>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/required-error'?: Linter.RuleEntry<RegexRequiredError>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/required-warn'?: Linter.RuleEntry<RegexRequiredWarn>
  /**
   * Required regular expressions to be looked
   * @see https://eslint-plugin-regex.github.io/docs/rules/required-regex-rule.html
   */
  'regex/use'?: Linter.RuleEntry<RegexUse>
}

/* ======= Declarations ======= */
// ----- regex/another-invalid -----
type RegexAnotherInvalid = []|[_RegexAnotherInvalid_InvalidRegularExpressions]|[_RegexAnotherInvalid_InvalidRegularExpressions, _RegexAnotherInvalid_IgnoreFilePattern1]
type _RegexAnotherInvalid_InvalidRegularExpressions = [(_RegexAnotherInvalid_InvalidPattern | _RegexAnotherInvalid_InvalidDetailedPattern), ...((_RegexAnotherInvalid_InvalidPattern | _RegexAnotherInvalid_InvalidDetailedPattern))[]]
type _RegexAnotherInvalid_InvalidPattern = string
type _RegexAnotherInvalid_InvalidPatternId = string
type _RegexAnotherInvalid_InvalidPattern1 = string
type _RegexAnotherInvalid_RegularExpressionAllowedFlags = string
type _RegexAnotherInvalid_Replacement = string
type _RegexAnotherInvalid_ReplacementFunction = string
type _RegexAnotherInvalid_InvalidMessage = string
type _RegexAnotherInvalid_IgnoreFilePattern = string
type _RegexAnotherInvalid_InspectFilePattern = string
type _RegexAnotherInvalid_IgnoreFilePattern1 = string
interface _RegexAnotherInvalid_InvalidDetailedPattern {
  id?: _RegexAnotherInvalid_InvalidPatternId
  regex: _RegexAnotherInvalid_InvalidPattern1
  flags?: _RegexAnotherInvalid_RegularExpressionAllowedFlags
  replacement?: (_RegexAnotherInvalid_Replacement | _RegexAnotherInvalid_DetailedReplacement)
  message?: _RegexAnotherInvalid_InvalidMessage
  files?: {
    ignore?: _RegexAnotherInvalid_IgnoreFilePattern
    inspect?: _RegexAnotherInvalid_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexAnotherInvalid_DetailedReplacement {
  function?: _RegexAnotherInvalid_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/another-required -----
type RegexAnotherRequired = []|[_RegexAnotherRequired_RequiredRegularExpressions]|[_RegexAnotherRequired_RequiredRegularExpressions, _RegexAnotherRequired_IgnoreFilePattern1]
type _RegexAnotherRequired_RequiredRegularExpressions = [(_RegexAnotherRequired_RequiredPattern | _RegexAnotherRequired_RequiredDetailedPattern), ...((_RegexAnotherRequired_RequiredPattern | _RegexAnotherRequired_RequiredDetailedPattern))[]]
type _RegexAnotherRequired_RequiredPattern = string
type _RegexAnotherRequired_RequiredPatternId = string
type _RegexAnotherRequired_RequiredPattern1 = string
type _RegexAnotherRequired_RegularExpressionAllowedFlags = string
type _RegexAnotherRequired_RequiredMessage = string
type _RegexAnotherRequired_IgnoreFilePattern = string
type _RegexAnotherRequired_InspectFilePattern = string
type _RegexAnotherRequired_IgnoreFilePattern1 = string
interface _RegexAnotherRequired_RequiredDetailedPattern {
  id?: _RegexAnotherRequired_RequiredPatternId
  regex: _RegexAnotherRequired_RequiredPattern1
  flags?: _RegexAnotherRequired_RegularExpressionAllowedFlags
  message?: _RegexAnotherRequired_RequiredMessage
  files?: {
    ignore?: _RegexAnotherRequired_IgnoreFilePattern
    inspect?: _RegexAnotherRequired_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- regex/avoid -----
type RegexAvoid = []|[_RegexAvoid_InvalidRegularExpressions]|[_RegexAvoid_InvalidRegularExpressions, _RegexAvoid_IgnoreFilePattern1]
type _RegexAvoid_InvalidRegularExpressions = [(_RegexAvoid_InvalidPattern | _RegexAvoid_InvalidDetailedPattern), ...((_RegexAvoid_InvalidPattern | _RegexAvoid_InvalidDetailedPattern))[]]
type _RegexAvoid_InvalidPattern = string
type _RegexAvoid_InvalidPatternId = string
type _RegexAvoid_InvalidPattern1 = string
type _RegexAvoid_RegularExpressionAllowedFlags = string
type _RegexAvoid_Replacement = string
type _RegexAvoid_ReplacementFunction = string
type _RegexAvoid_InvalidMessage = string
type _RegexAvoid_IgnoreFilePattern = string
type _RegexAvoid_InspectFilePattern = string
type _RegexAvoid_IgnoreFilePattern1 = string
interface _RegexAvoid_InvalidDetailedPattern {
  id?: _RegexAvoid_InvalidPatternId
  regex: _RegexAvoid_InvalidPattern1
  flags?: _RegexAvoid_RegularExpressionAllowedFlags
  replacement?: (_RegexAvoid_Replacement | _RegexAvoid_DetailedReplacement)
  message?: _RegexAvoid_InvalidMessage
  files?: {
    ignore?: _RegexAvoid_IgnoreFilePattern
    inspect?: _RegexAvoid_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexAvoid_DetailedReplacement {
  function?: _RegexAvoid_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/disuse -----
type RegexDisuse = []|[_RegexDisuse_InvalidRegularExpressions]|[_RegexDisuse_InvalidRegularExpressions, _RegexDisuse_IgnoreFilePattern1]
type _RegexDisuse_InvalidRegularExpressions = [(_RegexDisuse_InvalidPattern | _RegexDisuse_InvalidDetailedPattern), ...((_RegexDisuse_InvalidPattern | _RegexDisuse_InvalidDetailedPattern))[]]
type _RegexDisuse_InvalidPattern = string
type _RegexDisuse_InvalidPatternId = string
type _RegexDisuse_InvalidPattern1 = string
type _RegexDisuse_RegularExpressionAllowedFlags = string
type _RegexDisuse_Replacement = string
type _RegexDisuse_ReplacementFunction = string
type _RegexDisuse_InvalidMessage = string
type _RegexDisuse_IgnoreFilePattern = string
type _RegexDisuse_InspectFilePattern = string
type _RegexDisuse_IgnoreFilePattern1 = string
interface _RegexDisuse_InvalidDetailedPattern {
  id?: _RegexDisuse_InvalidPatternId
  regex: _RegexDisuse_InvalidPattern1
  flags?: _RegexDisuse_RegularExpressionAllowedFlags
  replacement?: (_RegexDisuse_Replacement | _RegexDisuse_DetailedReplacement)
  message?: _RegexDisuse_InvalidMessage
  files?: {
    ignore?: _RegexDisuse_IgnoreFilePattern
    inspect?: _RegexDisuse_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexDisuse_DetailedReplacement {
  function?: _RegexDisuse_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/invalid -----
type RegexInvalid = []|[_RegexInvalid_InvalidRegularExpressions]|[_RegexInvalid_InvalidRegularExpressions, _RegexInvalid_IgnoreFilePattern1]
type _RegexInvalid_InvalidRegularExpressions = [(_RegexInvalid_InvalidPattern | _RegexInvalid_InvalidDetailedPattern), ...((_RegexInvalid_InvalidPattern | _RegexInvalid_InvalidDetailedPattern))[]]
type _RegexInvalid_InvalidPattern = string
type _RegexInvalid_InvalidPatternId = string
type _RegexInvalid_InvalidPattern1 = string
type _RegexInvalid_RegularExpressionAllowedFlags = string
type _RegexInvalid_Replacement = string
type _RegexInvalid_ReplacementFunction = string
type _RegexInvalid_InvalidMessage = string
type _RegexInvalid_IgnoreFilePattern = string
type _RegexInvalid_InspectFilePattern = string
type _RegexInvalid_IgnoreFilePattern1 = string
interface _RegexInvalid_InvalidDetailedPattern {
  id?: _RegexInvalid_InvalidPatternId
  regex: _RegexInvalid_InvalidPattern1
  flags?: _RegexInvalid_RegularExpressionAllowedFlags
  replacement?: (_RegexInvalid_Replacement | _RegexInvalid_DetailedReplacement)
  message?: _RegexInvalid_InvalidMessage
  files?: {
    ignore?: _RegexInvalid_IgnoreFilePattern
    inspect?: _RegexInvalid_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexInvalid_DetailedReplacement {
  function?: _RegexInvalid_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/invalid-error -----
type RegexInvalidError = []|[_RegexInvalidError_InvalidRegularExpressions]|[_RegexInvalidError_InvalidRegularExpressions, _RegexInvalidError_IgnoreFilePattern1]
type _RegexInvalidError_InvalidRegularExpressions = [(_RegexInvalidError_InvalidPattern | _RegexInvalidError_InvalidDetailedPattern), ...((_RegexInvalidError_InvalidPattern | _RegexInvalidError_InvalidDetailedPattern))[]]
type _RegexInvalidError_InvalidPattern = string
type _RegexInvalidError_InvalidPatternId = string
type _RegexInvalidError_InvalidPattern1 = string
type _RegexInvalidError_RegularExpressionAllowedFlags = string
type _RegexInvalidError_Replacement = string
type _RegexInvalidError_ReplacementFunction = string
type _RegexInvalidError_InvalidMessage = string
type _RegexInvalidError_IgnoreFilePattern = string
type _RegexInvalidError_InspectFilePattern = string
type _RegexInvalidError_IgnoreFilePattern1 = string
interface _RegexInvalidError_InvalidDetailedPattern {
  id?: _RegexInvalidError_InvalidPatternId
  regex: _RegexInvalidError_InvalidPattern1
  flags?: _RegexInvalidError_RegularExpressionAllowedFlags
  replacement?: (_RegexInvalidError_Replacement | _RegexInvalidError_DetailedReplacement)
  message?: _RegexInvalidError_InvalidMessage
  files?: {
    ignore?: _RegexInvalidError_IgnoreFilePattern
    inspect?: _RegexInvalidError_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexInvalidError_DetailedReplacement {
  function?: _RegexInvalidError_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/invalid-warn -----
type RegexInvalidWarn = []|[_RegexInvalidWarn_InvalidRegularExpressions]|[_RegexInvalidWarn_InvalidRegularExpressions, _RegexInvalidWarn_IgnoreFilePattern1]
type _RegexInvalidWarn_InvalidRegularExpressions = [(_RegexInvalidWarn_InvalidPattern | _RegexInvalidWarn_InvalidDetailedPattern), ...((_RegexInvalidWarn_InvalidPattern | _RegexInvalidWarn_InvalidDetailedPattern))[]]
type _RegexInvalidWarn_InvalidPattern = string
type _RegexInvalidWarn_InvalidPatternId = string
type _RegexInvalidWarn_InvalidPattern1 = string
type _RegexInvalidWarn_RegularExpressionAllowedFlags = string
type _RegexInvalidWarn_Replacement = string
type _RegexInvalidWarn_ReplacementFunction = string
type _RegexInvalidWarn_InvalidMessage = string
type _RegexInvalidWarn_IgnoreFilePattern = string
type _RegexInvalidWarn_InspectFilePattern = string
type _RegexInvalidWarn_IgnoreFilePattern1 = string
interface _RegexInvalidWarn_InvalidDetailedPattern {
  id?: _RegexInvalidWarn_InvalidPatternId
  regex: _RegexInvalidWarn_InvalidPattern1
  flags?: _RegexInvalidWarn_RegularExpressionAllowedFlags
  replacement?: (_RegexInvalidWarn_Replacement | _RegexInvalidWarn_DetailedReplacement)
  message?: _RegexInvalidWarn_InvalidMessage
  files?: {
    ignore?: _RegexInvalidWarn_IgnoreFilePattern
    inspect?: _RegexInvalidWarn_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexInvalidWarn_DetailedReplacement {
  function?: _RegexInvalidWarn_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/other-invalid -----
type RegexOtherInvalid = []|[_RegexOtherInvalid_InvalidRegularExpressions]|[_RegexOtherInvalid_InvalidRegularExpressions, _RegexOtherInvalid_IgnoreFilePattern1]
type _RegexOtherInvalid_InvalidRegularExpressions = [(_RegexOtherInvalid_InvalidPattern | _RegexOtherInvalid_InvalidDetailedPattern), ...((_RegexOtherInvalid_InvalidPattern | _RegexOtherInvalid_InvalidDetailedPattern))[]]
type _RegexOtherInvalid_InvalidPattern = string
type _RegexOtherInvalid_InvalidPatternId = string
type _RegexOtherInvalid_InvalidPattern1 = string
type _RegexOtherInvalid_RegularExpressionAllowedFlags = string
type _RegexOtherInvalid_Replacement = string
type _RegexOtherInvalid_ReplacementFunction = string
type _RegexOtherInvalid_InvalidMessage = string
type _RegexOtherInvalid_IgnoreFilePattern = string
type _RegexOtherInvalid_InspectFilePattern = string
type _RegexOtherInvalid_IgnoreFilePattern1 = string
interface _RegexOtherInvalid_InvalidDetailedPattern {
  id?: _RegexOtherInvalid_InvalidPatternId
  regex: _RegexOtherInvalid_InvalidPattern1
  flags?: _RegexOtherInvalid_RegularExpressionAllowedFlags
  replacement?: (_RegexOtherInvalid_Replacement | _RegexOtherInvalid_DetailedReplacement)
  message?: _RegexOtherInvalid_InvalidMessage
  files?: {
    ignore?: _RegexOtherInvalid_IgnoreFilePattern
    inspect?: _RegexOtherInvalid_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
interface _RegexOtherInvalid_DetailedReplacement {
  function?: _RegexOtherInvalid_ReplacementFunction
  [k: string]: unknown | undefined
}
// ----- regex/other-required -----
type RegexOtherRequired = []|[_RegexOtherRequired_RequiredRegularExpressions]|[_RegexOtherRequired_RequiredRegularExpressions, _RegexOtherRequired_IgnoreFilePattern1]
type _RegexOtherRequired_RequiredRegularExpressions = [(_RegexOtherRequired_RequiredPattern | _RegexOtherRequired_RequiredDetailedPattern), ...((_RegexOtherRequired_RequiredPattern | _RegexOtherRequired_RequiredDetailedPattern))[]]
type _RegexOtherRequired_RequiredPattern = string
type _RegexOtherRequired_RequiredPatternId = string
type _RegexOtherRequired_RequiredPattern1 = string
type _RegexOtherRequired_RegularExpressionAllowedFlags = string
type _RegexOtherRequired_RequiredMessage = string
type _RegexOtherRequired_IgnoreFilePattern = string
type _RegexOtherRequired_InspectFilePattern = string
type _RegexOtherRequired_IgnoreFilePattern1 = string
interface _RegexOtherRequired_RequiredDetailedPattern {
  id?: _RegexOtherRequired_RequiredPatternId
  regex: _RegexOtherRequired_RequiredPattern1
  flags?: _RegexOtherRequired_RegularExpressionAllowedFlags
  message?: _RegexOtherRequired_RequiredMessage
  files?: {
    ignore?: _RegexOtherRequired_IgnoreFilePattern
    inspect?: _RegexOtherRequired_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- regex/required -----
type RegexRequired = []|[_RegexRequired_RequiredRegularExpressions]|[_RegexRequired_RequiredRegularExpressions, _RegexRequired_IgnoreFilePattern1]
type _RegexRequired_RequiredRegularExpressions = [(_RegexRequired_RequiredPattern | _RegexRequired_RequiredDetailedPattern), ...((_RegexRequired_RequiredPattern | _RegexRequired_RequiredDetailedPattern))[]]
type _RegexRequired_RequiredPattern = string
type _RegexRequired_RequiredPatternId = string
type _RegexRequired_RequiredPattern1 = string
type _RegexRequired_RegularExpressionAllowedFlags = string
type _RegexRequired_RequiredMessage = string
type _RegexRequired_IgnoreFilePattern = string
type _RegexRequired_InspectFilePattern = string
type _RegexRequired_IgnoreFilePattern1 = string
interface _RegexRequired_RequiredDetailedPattern {
  id?: _RegexRequired_RequiredPatternId
  regex: _RegexRequired_RequiredPattern1
  flags?: _RegexRequired_RegularExpressionAllowedFlags
  message?: _RegexRequired_RequiredMessage
  files?: {
    ignore?: _RegexRequired_IgnoreFilePattern
    inspect?: _RegexRequired_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- regex/required-error -----
type RegexRequiredError = []|[_RegexRequiredError_RequiredRegularExpressions]|[_RegexRequiredError_RequiredRegularExpressions, _RegexRequiredError_IgnoreFilePattern1]
type _RegexRequiredError_RequiredRegularExpressions = [(_RegexRequiredError_RequiredPattern | _RegexRequiredError_RequiredDetailedPattern), ...((_RegexRequiredError_RequiredPattern | _RegexRequiredError_RequiredDetailedPattern))[]]
type _RegexRequiredError_RequiredPattern = string
type _RegexRequiredError_RequiredPatternId = string
type _RegexRequiredError_RequiredPattern1 = string
type _RegexRequiredError_RegularExpressionAllowedFlags = string
type _RegexRequiredError_RequiredMessage = string
type _RegexRequiredError_IgnoreFilePattern = string
type _RegexRequiredError_InspectFilePattern = string
type _RegexRequiredError_IgnoreFilePattern1 = string
interface _RegexRequiredError_RequiredDetailedPattern {
  id?: _RegexRequiredError_RequiredPatternId
  regex: _RegexRequiredError_RequiredPattern1
  flags?: _RegexRequiredError_RegularExpressionAllowedFlags
  message?: _RegexRequiredError_RequiredMessage
  files?: {
    ignore?: _RegexRequiredError_IgnoreFilePattern
    inspect?: _RegexRequiredError_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- regex/required-warn -----
type RegexRequiredWarn = []|[_RegexRequiredWarn_RequiredRegularExpressions]|[_RegexRequiredWarn_RequiredRegularExpressions, _RegexRequiredWarn_IgnoreFilePattern1]
type _RegexRequiredWarn_RequiredRegularExpressions = [(_RegexRequiredWarn_RequiredPattern | _RegexRequiredWarn_RequiredDetailedPattern), ...((_RegexRequiredWarn_RequiredPattern | _RegexRequiredWarn_RequiredDetailedPattern))[]]
type _RegexRequiredWarn_RequiredPattern = string
type _RegexRequiredWarn_RequiredPatternId = string
type _RegexRequiredWarn_RequiredPattern1 = string
type _RegexRequiredWarn_RegularExpressionAllowedFlags = string
type _RegexRequiredWarn_RequiredMessage = string
type _RegexRequiredWarn_IgnoreFilePattern = string
type _RegexRequiredWarn_InspectFilePattern = string
type _RegexRequiredWarn_IgnoreFilePattern1 = string
interface _RegexRequiredWarn_RequiredDetailedPattern {
  id?: _RegexRequiredWarn_RequiredPatternId
  regex: _RegexRequiredWarn_RequiredPattern1
  flags?: _RegexRequiredWarn_RegularExpressionAllowedFlags
  message?: _RegexRequiredWarn_RequiredMessage
  files?: {
    ignore?: _RegexRequiredWarn_IgnoreFilePattern
    inspect?: _RegexRequiredWarn_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}
// ----- regex/use -----
type RegexUse = []|[_RegexUse_RequiredRegularExpressions]|[_RegexUse_RequiredRegularExpressions, _RegexUse_IgnoreFilePattern1]
type _RegexUse_RequiredRegularExpressions = [(_RegexUse_RequiredPattern | _RegexUse_RequiredDetailedPattern), ...((_RegexUse_RequiredPattern | _RegexUse_RequiredDetailedPattern))[]]
type _RegexUse_RequiredPattern = string
type _RegexUse_RequiredPatternId = string
type _RegexUse_RequiredPattern1 = string
type _RegexUse_RegularExpressionAllowedFlags = string
type _RegexUse_RequiredMessage = string
type _RegexUse_IgnoreFilePattern = string
type _RegexUse_InspectFilePattern = string
type _RegexUse_IgnoreFilePattern1 = string
interface _RegexUse_RequiredDetailedPattern {
  id?: _RegexUse_RequiredPatternId
  regex: _RegexUse_RequiredPattern1
  flags?: _RegexUse_RegularExpressionAllowedFlags
  message?: _RegexUse_RequiredMessage
  files?: {
    ignore?: _RegexUse_IgnoreFilePattern
    inspect?: _RegexUse_InspectFilePattern
    [k: string]: unknown | undefined
  }
  [k: string]: unknown | undefined
}