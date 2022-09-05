import commitlint from '@commitlint/lint';
import { describe, test, expect } from '@jest/globals';
import config from './index.js';

const lint = async (input: string) => commitlint(input, config.rules, config.parserPreset);

describe('Commitlint Config', () => {
  const generateValidSubject = (length: number) =>
    Array.from({ length })
      .map((_, index) => (index === 0 ? 'A' : 'a'))
      .join('');

  const anyGitmoji = '✨';
  const anyValidType = '';
  const anyValidScope = 'scope';
  const anyValidSubject = generateValidSubject(10);
  const anyValidBody = ['body1', 'body2'].join('\n');
  const anyValidFooter = ['BREAKING CHANGE: Z'];
  const anyValidHeader = `${anyGitmoji} ${anyValidType}(${anyValidScope}): ${anyValidSubject}`;

  describe('valid commit', () => {
    test('should validate a complete commit', async () => {
      const result = await lint(`${anyValidHeader}${'\n\n'}${anyValidBody}${'\n\n'}${anyValidFooter}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [],
        })
      );
    });
    test('should validate simple commit', async () => {
      const result = await lint(`${'✨'} ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [],
        })
      );
    });
    test('should not return error when gitmoji as emoji', async () => {
      const result = await lint(`${'✨'} ${anyValidType}(${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [],
        })
      );
    });
  });

  describe.skip('start-with-gitmoji', () => {
    test('should return error when no gitmoji found', async () => {
      const result = await lint(`${''} ${anyValidType}(${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'start-with-gitmoji',
            }),
          ]),
          warnings: [],
        })
      );
    });
    test('should return error when invalid gitmoji', async () => {
      const result = await lint(`${':foo_bar:'} ${anyValidType}(${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'start-with-gitmoji',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });

  describe('body-leading-blank', () => {
    test('should return error when no blank line between subject and body', async () => {
      const result = await lint(`${anyValidHeader}${'\n'}${anyValidBody}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [
            expect.objectContaining({
              name: 'body-leading-blank',
            }),
          ],
        })
      );
    });
  });

  describe('footer-leading-blank', () => {
    test('should return error when no blank line between body and footer', async () => {
      const result = await lint(`${anyValidHeader}${'\n\n'}${anyValidBody}${'\n'}${anyValidFooter}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [
            expect.objectContaining({
              name: 'footer-leading-blank',
            }),
          ],
        })
      );
    });
  });

  describe('header-max-length', () => {
    test('should return error when length > 72 characters', async () => {
      const longSubject = generateValidSubject(72 - `${anyValidType}: `.length + 1);
      const result = await lint(`${anyGitmoji} ${anyValidType}: ${longSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: [
            expect.objectContaining({
              name: 'header-max-length',
            }),
          ],
          warnings: [],
        })
      );
    });
  });

  describe('scope-case', () => {
    test('should return error if scope is not lower-case', async () => {
      const result = await lint(`${anyGitmoji} ${'chore(Type)'}: ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'scope-case',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });

  describe.skip('subject-empty', () => {
    // FIXME: subject-empty should be enabled but there is a bug :
    // https://github.com/conventional-changelog/commitlint/issues/2761
    test('should return error if subject is empty', async () => {
      const result = await lint(`${anyGitmoji} ${anyValidType}: ${''}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: [
            expect.objectContaining({
              name: 'subject-empty',
            }),
          ],
          warnings: [],
        })
      );
    });
  });

  describe('subject-full-stop', () => {
    test('should return error if ending with .', async () => {
      const result = await lint(`${anyValidHeader}.`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'subject-full-stop',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });

  describe('type-case', () => {
    test('should return error when type is not lowercase', async () => {
      const result = await lint(`${anyGitmoji} ${`Chore(${anyValidScope})`}: ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-case',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });

  describe('type-empty', () => {
    test('should return error if type is not empty', async () => {
      const result = await lint(`${anyGitmoji} ${'chore'}(${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-empty',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });
});
