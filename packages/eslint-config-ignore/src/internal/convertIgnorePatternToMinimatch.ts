/**
 * Converts a gitignore-style pattern to an ESLint-compatible minimatch pattern.
 *
 * Ported from `@eslint/config-helpers` (eslint/rewrite).
 *
 * @see https://github.com/eslint/rewrite/blob/main/packages/config-helpers/src/ignore-file.js
 * @param pattern The .eslintignore or .gitignore pattern to convert.
 * @returns The converted minimatch pattern.
 */
export function convertIgnorePatternToMinimatch(pattern: string): string {
  const isNegated = pattern.startsWith('!');
  const negatedPrefix = isNegated ? '!' : '';
  const patternToTest = (isNegated ? pattern.slice(1) : pattern).trimEnd();

  // special cases
  if (['', '**', '**/', '/**'].includes(patternToTest)) {
    return `${negatedPrefix}${patternToTest}`;
  }

  const firstIndexOfSlash = patternToTest.indexOf('/');

  const matchEverywherePrefix = firstIndexOfSlash === -1 || firstIndexOfSlash === patternToTest.length - 1 ? '**/' : '';

  const patternWithoutLeadingSlash = firstIndexOfSlash === 0 ? patternToTest.slice(1) : patternToTest;

  /*
   * Escape `{` and `(` because in gitignore patterns they are just
   * literal characters without any specific syntactic meaning,
   * while in minimatch patterns they can form brace expansion or ext glob syntax.
   */
  let escapedPatternWithoutLeadingSlash = '';
  let isEscaped = false;

  for (const char of patternWithoutLeadingSlash) {
    if (!isEscaped && (char === '{' || char === '(')) {
      escapedPatternWithoutLeadingSlash += '\\';
    }

    escapedPatternWithoutLeadingSlash += char;

    isEscaped = char === '\\' ? !isEscaped : false;
  }

  const matchInsideSuffix = patternToTest.endsWith('/**') ? '/*' : '';

  return `${negatedPrefix}${matchEverywherePrefix}${escapedPatternWithoutLeadingSlash}${matchInsideSuffix}`;
}
