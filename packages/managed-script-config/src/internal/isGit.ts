import { existsSync, statSync } from 'node:fs';

export const isGit = existsSync('.git') && statSync('.git').isDirectory();
