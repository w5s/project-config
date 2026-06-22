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
   * Disallow dependencies in favor of more performant or secure alternatives
   */
  'e18e/ban-dependencies'?: Linter.RuleEntry<E18EBanDependencies>
  /**
   * Disallow `delete` on properties — V8 deoptimizes the object to dictionary mode
   */
  'e18e/no-delete-property'?: Linter.RuleEntry<[]>
  /**
   * Prefer optimized alternatives to `indexOf()` equality checks
   */
  'e18e/no-indexof-equality'?: Linter.RuleEntry<[]>
  /**
   * Disallow spreading the accumulator inside a `reduce` callback (O(N²) growth)
   */
  'e18e/no-spread-in-reduce'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.at() over length-based indexing
   */
  'e18e/prefer-array-at'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.fill() over Array.from or map with constant values
   */
  'e18e/prefer-array-fill'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.from(iterable, mapper) over [...iterable].map(mapper) to avoid intermediate array allocation
   */
  'e18e/prefer-array-from-map'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.some() over Array.find() and Array.filter().length checks when checking for element existence
   */
  'e18e/prefer-array-some'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.toReversed() over copying and reversing arrays
   */
  'e18e/prefer-array-to-reversed'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.toSorted() over copying and sorting arrays
   */
  'e18e/prefer-array-to-sorted'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.toSpliced() over copying and splicing arrays
   */
  'e18e/prefer-array-to-spliced'?: Linter.RuleEntry<[]>
  /**
   * Prefer Date.now() over new Date().getTime() and +new Date()
   */
  'e18e/prefer-date-now'?: Linter.RuleEntry<[]>
  /**
   * Prefer the exponentiation operator ** over Math.pow()
   */
  'e18e/prefer-exponentiation-operator'?: Linter.RuleEntry<[]>
  /**
   * Prefer Array.prototype.flatMap() over .map(fn).flat() to avoid the intermediate array
   */
  'e18e/prefer-flatmap-over-map-flat'?: Linter.RuleEntry<[]>
  /**
   * Prefer `Map.prototype.getOrInsert()` over reading an entry with a default and writing it back
   */
  'e18e/prefer-get-or-insert'?: Linter.RuleEntry<[]>
  /**
   * Prefer .includes() over indexOf() comparisons for arrays and strings
   */
  'e18e/prefer-includes'?: Linter.RuleEntry<[]>
  /**
   * Prefer String.prototype.{includes,startsWith,endsWith} over equivalent regex.test() calls
   */
  'e18e/prefer-includes-over-regex-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer inline equality checks over temporary object creation for simple comparisons
   */
  'e18e/prefer-inline-equality'?: Linter.RuleEntry<[]>
  /**
   * Prefer nullish coalescing operator (?? and ??=) over verbose null checks
   */
  'e18e/prefer-nullish-coalescing'?: Linter.RuleEntry<[]>
  /**
   * Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call() and obj.hasOwnProperty()
   */
  'e18e/prefer-object-has-own'?: Linter.RuleEntry<[]>
  /**
   * prefer `RegExp.test()` over `String.match()` and `RegExp.exec()` when only checking for match existence
   */
  'e18e/prefer-regex-test'?: Linter.RuleEntry<[]>
  /**
   * Prefer spread syntax over Array.concat(), Array.from(), Object.assign({}, ...), and Function.apply()
   */
  'e18e/prefer-spread-syntax'?: Linter.RuleEntry<[]>
  /**
   * Prefer hoisting an `Intl.Collator` instance over calling localeCompare in a sort callback
   */
  'e18e/prefer-static-collator'?: Linter.RuleEntry<[]>
  /**
   * Prefer defining regular expressions at module scope to avoid re-compilation on every function call
   */
  'e18e/prefer-static-regex'?: Linter.RuleEntry<[]>
  /**
   * Prefer String.fromCharCode() over String.fromCodePoint() for code points below 0x10000
   */
  'e18e/prefer-string-fromcharcode'?: Linter.RuleEntry<[]>
  /**
   * Prefer passing function and arguments directly to setTimeout/setInterval instead of wrapping in an arrow function or using bind
   */
  'e18e/prefer-timer-args'?: Linter.RuleEntry<[]>
  /**
   * Prefer URL.canParse() over try-catch blocks for URL validation
   */
  'e18e/prefer-url-canparse'?: Linter.RuleEntry<[]>
}

/* ======= Declarations ======= */
// ----- e18e/ban-dependencies -----
type E18EBanDependencies = []|[{
  
  presets?: string[]
  
  modules?: string[]
  
  allowed?: string[]
}]