export interface FileMode {
  /**
   * Group permissions
   */
  readonly group?: FilePermissionSet;

  /**
   * Other permissions
   */
  readonly other?: FilePermissionSet;

  /**
   * Owner permissions
   */
  readonly owner?: FilePermissionSet;
}

export interface FilePermissionSet {
  /**
   * Execute permission
   */
  readonly execute?: boolean;

  /**
   * Read permission
   */
  readonly read?: boolean;

  /**
   * Write permission
   */
  readonly write?: boolean;
}
