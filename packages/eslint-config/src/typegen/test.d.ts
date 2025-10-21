/* eslint-disable unicorn/no-abusive-eslint-disable */
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
   * require .spec test file pattern
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md
   */
  'test/consistent-test-filename'?: Linter.RuleEntry<TestConsistentTestFilename>
  /**
   * enforce using test or it but not both
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
   */
  'test/consistent-test-it'?: Linter.RuleEntry<TestConsistentTestIt>
  /**
   * enforce having expectation in test body
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md
   */
  'test/expect-expect'?: Linter.RuleEntry<TestExpectExpect>
  /**
   * enforce a maximum number of expect per test
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md
   */
  'test/max-expects'?: Linter.RuleEntry<TestMaxExpects>
  /**
   * require describe block to be less than set max value or default value
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md
   */
  'test/max-nested-describe'?: Linter.RuleEntry<TestMaxNestedDescribe>
  /**
   * disallow alias methods
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md
   */
  'test/no-alias-methods'?: Linter.RuleEntry<[]>
  /**
   * disallow commented out tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md
   */
  'test/no-commented-out-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional expects
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md
   */
  'test/no-conditional-expect'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
   */
  'test/no-conditional-in-test'?: Linter.RuleEntry<[]>
  /**
   * disallow conditional tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md
   */
  'test/no-conditional-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow disabled tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md
   */
  'test/no-disabled-tests'?: Linter.RuleEntry<[]>
  /**
   * disallow using a callback in asynchronous tests and hooks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md
   * @deprecated
   */
  'test/no-done-callback'?: Linter.RuleEntry<[]>
  /**
   * disallow duplicate hooks and teardown hooks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
   */
  'test/no-duplicate-hooks'?: Linter.RuleEntry<[]>
  /**
   * disallow focused tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md
   */
  'test/no-focused-tests'?: Linter.RuleEntry<TestNoFocusedTests>
  /**
   * disallow setup and teardown hooks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md
   */
  'test/no-hooks'?: Linter.RuleEntry<TestNoHooks>
  /**
   * disallow identical titles
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md
   */
  'test/no-identical-title'?: Linter.RuleEntry<[]>
  /**
   * disallow importing `node:test`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md
   */
  'test/no-import-node-test'?: Linter.RuleEntry<[]>
  /**
   * disallow string interpolation in snapshots
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md
   */
  'test/no-interpolation-in-snapshots'?: Linter.RuleEntry<[]>
  /**
   * disallow large snapshots
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md
   */
  'test/no-large-snapshots'?: Linter.RuleEntry<TestNoLargeSnapshots>
  /**
   * disallow importing from __mocks__ directory
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md
   */
  'test/no-mocks-import'?: Linter.RuleEntry<[]>
  /**
   * disallow the use of certain matchers
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md
   */
  'test/no-restricted-matchers'?: Linter.RuleEntry<TestNoRestrictedMatchers>
  /**
   * disallow specific `vi.` methods
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md
   */
  'test/no-restricted-vi-methods'?: Linter.RuleEntry<TestNoRestrictedViMethods>
  /**
   * disallow using `expect` outside of `it` or `test` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md
   */
  'test/no-standalone-expect'?: Linter.RuleEntry<TestNoStandaloneExpect>
  /**
   * disallow using `test` as a prefix
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md
   */
  'test/no-test-prefixes'?: Linter.RuleEntry<[]>
  /**
   * disallow return statements in tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
   */
  'test/no-test-return-statement'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `afterAll` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-all-blocks.md
   */
  'test/padding-around-after-all-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `afterEach` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-each-blocks.md
   */
  'test/padding-around-after-each-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around vitest functions
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-all.md
   */
  'test/padding-around-all'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `beforeAll` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-all-blocks.md
   */
  'test/padding-around-before-all-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `beforeEach` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-each-blocks.md
   */
  'test/padding-around-before-each-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `describe` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-describe-blocks.md
   */
  'test/padding-around-describe-blocks'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `expect` groups
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-expect-groups.md
   */
  'test/padding-around-expect-groups'?: Linter.RuleEntry<[]>
  /**
   * Enforce padding around `test` blocks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-test-blocks.md
   */
  'test/padding-around-test-blocks'?: Linter.RuleEntry<[]>
  /**
   * enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
   */
  'test/prefer-called-with'?: Linter.RuleEntry<[]>
  /**
   * enforce using the built-in comparison matchers
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
   */
  'test/prefer-comparison-matcher'?: Linter.RuleEntry<[]>
  /**
   * enforce using `each` rather than manual loops
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
   */
  'test/prefer-each'?: Linter.RuleEntry<[]>
  /**
   * enforce using the built-in quality matchers
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
   */
  'test/prefer-equality-matcher'?: Linter.RuleEntry<[]>
  /**
   * enforce using expect assertions instead of callbacks
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
   */
  'test/prefer-expect-assertions'?: Linter.RuleEntry<TestPreferExpectAssertions>
  /**
   * enforce using `expect().resolves` over `expect(await ...)` syntax
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
   */
  'test/prefer-expect-resolves'?: Linter.RuleEntry<[]>
  /**
   * enforce having hooks in consistent order
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
   */
  'test/prefer-hooks-in-order'?: Linter.RuleEntry<[]>
  /**
   * enforce having hooks before any test cases
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
   */
  'test/prefer-hooks-on-top'?: Linter.RuleEntry<[]>
  /**
   * enforce lowercase titles
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
   */
  'test/prefer-lowercase-title'?: Linter.RuleEntry<TestPreferLowercaseTitle>
  /**
   * enforce mock resolved/rejected shorthands for promises
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
   */
  'test/prefer-mock-promise-shorthand'?: Linter.RuleEntry<[]>
  /**
   * enforce including a hint with external snapshots
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
   */
  'test/prefer-snapshot-hint'?: Linter.RuleEntry<TestPreferSnapshotHint>
  /**
   * enforce using `vi.spyOn`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
   */
  'test/prefer-spy-on'?: Linter.RuleEntry<[]>
  /**
   * enforce using `toBe(true)` and `toBe(false)` over matchers that coerce types to boolean
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-boolean-matchers.md
   */
  'test/prefer-strict-boolean-matchers'?: Linter.RuleEntry<[]>
  /**
   * enforce strict equal over equal
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
   */
  'test/prefer-strict-equal'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBe()
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md
   */
  'test/prefer-to-be'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBeFalsy()
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md
   */
  'test/prefer-to-be-falsy'?: Linter.RuleEntry<[]>
  /**
   * enforce using toBeObject()
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md
   */
  'test/prefer-to-be-object'?: Linter.RuleEntry<[]>
  /**
   * enforce using `toBeTruthy`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md
   */
  'test/prefer-to-be-truthy'?: Linter.RuleEntry<[]>
  /**
   * enforce using toContain()
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md
   */
  'test/prefer-to-contain'?: Linter.RuleEntry<[]>
  /**
   * enforce using toHaveLength()
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md
   */
  'test/prefer-to-have-length'?: Linter.RuleEntry<[]>
  /**
   * enforce using `test.todo`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
   */
  'test/prefer-todo'?: Linter.RuleEntry<[]>
  /**
   * require `vi.mocked()` over `fn as Mock`
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md
   */
  'test/prefer-vi-mocked'?: Linter.RuleEntry<[]>
  /**
   * require setup and teardown to be within a hook
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md
   */
  'test/require-hook'?: Linter.RuleEntry<TestRequireHook>
  /**
   * require local Test Context for concurrent snapshot tests
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md
   */
  'test/require-local-test-context-for-concurrent-snapshots'?: Linter.RuleEntry<[]>
  /**
   * enforce using type parameters with vitest mock functions
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-mock-type-parameters.md
   */
  'test/require-mock-type-parameters'?: Linter.RuleEntry<TestRequireMockTypeParameters>
  /**
   * require toThrow() to be called with an error message
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
   */
  'test/require-to-throw-message'?: Linter.RuleEntry<[]>
  /**
   * enforce that all tests are in a top-level describe
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
   */
  'test/require-top-level-describe'?: Linter.RuleEntry<TestRequireTopLevelDescribe>
  /**
   * enforce valid describe callback
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md
   */
  'test/valid-describe-callback'?: Linter.RuleEntry<[]>
  /**
   * enforce valid `expect()` usage
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md
   */
  'test/valid-expect'?: Linter.RuleEntry<TestValidExpect>
  /**
   * require promises that have expectations in their chain to be valid
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect-in-promise.md
   */
  'test/valid-expect-in-promise'?: Linter.RuleEntry<[]>
  /**
   * enforce valid titles
   * @see https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
   */
  'test/valid-title'?: Linter.RuleEntry<TestValidTitle>
}

/* ======= Declarations ======= */
// ----- test/consistent-test-filename -----
type TestConsistentTestFilename = []|[{
  pattern?: string
  allTestPattern?: string
}]
// ----- test/consistent-test-it -----
type TestConsistentTestIt = []|[{
  fn?: ("test" | "it")
  withinDescribe?: ("test" | "it")
}]
// ----- test/expect-expect -----
type TestExpectExpect = []|[{
  assertFunctionNames?: string[]
  additionalTestBlockFunctions?: string[]
}]
// ----- test/max-expects -----
type TestMaxExpects = []|[{
  max?: number
}]
// ----- test/max-nested-describe -----
type TestMaxNestedDescribe = []|[{
  max?: number
}]
// ----- test/no-focused-tests -----
type TestNoFocusedTests = []|[{
  fixable?: boolean
}]
// ----- test/no-hooks -----
type TestNoHooks = []|[{
  allow?: unknown[]
}]
// ----- test/no-large-snapshots -----
type TestNoLargeSnapshots = []|[{
  maxSize?: number
  inlineMaxSize?: number
  allowedSnapshots?: {
    [k: string]: unknown[] | undefined
  }
}]
// ----- test/no-restricted-matchers -----
type TestNoRestrictedMatchers = []|[{
  [k: string]: (string | null) | undefined
}]
// ----- test/no-restricted-vi-methods -----
type TestNoRestrictedViMethods = []|[{
  [k: string]: (string | null) | undefined
}]
// ----- test/no-standalone-expect -----
type TestNoStandaloneExpect = []|[{
  additionalTestBlockFunctions?: string[]
}]
// ----- test/prefer-expect-assertions -----
type TestPreferExpectAssertions = []|[{
  onlyFunctionsWithAsyncKeyword?: boolean
  onlyFunctionsWithExpectInLoop?: boolean
  onlyFunctionsWithExpectInCallback?: boolean
}]
// ----- test/prefer-lowercase-title -----
type TestPreferLowercaseTitle = []|[{
  ignore?: ("describe" | "test" | "it")[]
  allowedPrefixes?: string[]
  ignoreTopLevelDescribe?: boolean
  lowercaseFirstCharacterOnly?: boolean
}]
// ----- test/prefer-snapshot-hint -----
type TestPreferSnapshotHint = []|[("always" | "multi")]
// ----- test/require-hook -----
type TestRequireHook = []|[{
  allowedFunctionCalls?: string[]
}]
// ----- test/require-mock-type-parameters -----
type TestRequireMockTypeParameters = []|[{
  checkImportFunctions?: boolean
}]
// ----- test/require-top-level-describe -----
type TestRequireTopLevelDescribe = []|[{
  maxNumberOfTopLevelDescribes?: number
}]
// ----- test/valid-expect -----
type TestValidExpect = []|[{
  alwaysAwait?: boolean
  asyncMatchers?: string[]
  minArgs?: number
  maxArgs?: number
}]
// ----- test/valid-title -----
type TestValidTitle = []|[{
  ignoreTypeOfDescribeName?: boolean
  allowArguments?: boolean
  disallowedWords?: string[]
  [k: string]: (string | [string]|[string, string] | {
    [k: string]: (string | [string]|[string, string]) | undefined
  })
}]