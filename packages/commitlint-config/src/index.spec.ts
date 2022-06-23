import commitlint from '@commitlint/lint';
import { describe, test, expect } from '@jest/globals';
import config from './index.js';

const lint = async (input: string) => commitlint(input, config.rules, config.parserPreset);

describe('Commitlint Config', () => {
  const generateValidSubject = (length: number) =>
    Array.from({ length })
      .map((_, _index) => 'a')
      .join('');

  const anyValidType = 'chore';
  const anyValidScope = 'scope';
  const anyValidSubject = generateValidSubject(10);
  const anyValidBody = ['body1', 'body2'].join('\n');
  const anyValidFooter = ['BREAKING CHANGE: Z'];

  describe('valid commit', () => {
    test('should validate a complete commit', async () => {
      const result = await lint(
        `${anyValidType}(${anyValidScope}): ${anyValidSubject}${'\n\n'}${anyValidBody}${'\n\n'}${anyValidFooter}`
      );

      expect(result).toEqual(
        expect.objectContaining({
          valid: true,
          errors: [],
          warnings: [],
        })
      );
    });
  });

  describe('body-leading-blank', () => {
    test('should return error when no blank line between subject and body', async () => {
      const result = await lint(`${anyValidType}: ${anyValidSubject}${'\n'}${anyValidBody}`);

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
    // could not find a way to test it
    test('should return error when no blank line between body and footer', async () => {
      const result = await lint(`${anyValidType}: ${anyValidSubject}${'\n\n'}${anyValidBody}${'\n'}${anyValidFooter}`);

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
      const result = await lint(`${anyValidType}: ${longSubject}`);

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
      const result = await lint(`${'chore(Type)'}: ${anyValidSubject}`);

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

  describe('subject-empty', () => {
    test('should return error if subject is empty', async () => {
      const result = await lint(`${anyValidType}: ${''}`);

      expect(result).toEqual(
        expect.objectContaining({
          valid: false,
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'subject-empty',
            }),
          ]),
          warnings: [],
        })
      );
    });
  });

  describe('subject-full-stop', () => {
    test('should return error if ending with .', async () => {
      const result = await lint(`${anyValidType}: ${anyValidSubject}.`);

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
      const result = await lint(`${`Chore(${anyValidScope})`}: ${anyValidSubject}`);

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
    test('should return error if type is empty', async () => {
      const result = await lint(`${''}(${anyValidScope}): ${anyValidSubject}`);

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
