import parseGitignore from 'parse-gitignore';

export function ignoreFileParse(input: string): Array<string> {
  return parseGitignore.parse(input).patterns;
};
