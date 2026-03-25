export interface FilePermissionSet {
  /**
   * Read permission
   */
  readonly read?: boolean;

  /**
   * Write permission
   */
  readonly write?: boolean;

  /**
   * Execute permission
   */
  readonly execute?: boolean;
}

export interface FileMode {
  /**
   * Owner permissions
   */
  readonly owner?: FilePermissionSet;

  /**
   * Group permissions
   */
  readonly group?: FilePermissionSet;

  /**
   * Other permissions
   */
  readonly other?: FilePermissionSet;
}
