import type { FileMode, FilePermissionSet } from './FileMode.js';

function toModeFlag(permissionSet: FilePermissionSet | undefined, read: number, write: number, execute: number): number {
  return (
    (permissionSet?.read === true ? read : 0)
    | (permissionSet?.write === true ? write : 0)
    | (permissionSet?.execute === true ? execute : 0)
  );
}

export function __toMode(mode: FileMode | undefined): number | undefined {
  return mode == null
    ? mode
    : (
        toModeFlag(mode.owner, 0o400, 0o200, 0o100)
        | toModeFlag(mode.group, 0o040, 0o020, 0o010)
        | toModeFlag(mode.other, 0o004, 0o002, 0o001)
      );
}
