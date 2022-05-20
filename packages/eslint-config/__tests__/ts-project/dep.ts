/**
 * This is JSDoc comment.
 *
 * @param param - The parameter to be documented.
 */
export function dep<T>(param: T): T {
  return param;
}

export function dep2(): undefined {
  return undefined;
}
