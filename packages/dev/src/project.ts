export namespace Project {
  /**
   * Supported ECMA version
   *
   * @example
   * ```ts
   * Project.ecmaVersion() // 2022
   * ```
   */
  export function ecmaVersion() {
    return 2022 as const;
  }
}
