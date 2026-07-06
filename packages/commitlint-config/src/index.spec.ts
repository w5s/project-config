import commitlint from '@commitlint/lint';
import { describe, expect, it } from 'vitest';

import * as Module from './index.js';
import { gitmojiPlugin } from './plugin.js';

const config = Module.default;
const lint = async (input: string) =>
  commitlint(input, config.rules, { ...config.parserPreset, plugins: { gitmoji: gitmojiPlugin } });

describe('Commitlint Config', () => {
  it('has meta', () => {
    expect(Module.meta).toEqual({
      buildNumber: expect.any(Number),
      name: expect.any(String),
      version: expect.any(String),
    });
  });
  const generateValidSubject = (length: number) =>
    Array.from({ length }, (_, index) => (index === 0 ? 'A' : 'a'))
      .join('');

  const anyGitmoji = '✨';
  const anyValidScope = 'scope';
  const anyValidSubject = generateValidSubject(10);
  const anyValidBody = ['body1', 'body2'].join('\n');
  const anyValidFooter = ['BREAKING CHANGE: Z'];
  const anyValidHeader = `${anyGitmoji} (${anyValidScope}): ${anyValidSubject}`;

  describe('valid commit', () => {
    it('should validate a complete commit', async () => {
      const result = await lint(`${anyValidHeader}\n\n${anyValidBody}\n\n${anyValidFooter}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [],
        }),
      );
    });
    it('should validate simple commit', async () => {
      const result = await lint(`✨ ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [],
        }),
      );
    });
    it('should not return error when gitmoji as emoji', async () => {
      const result = await lint(`✨ (${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [],
        }),
      );
    });
    it.each([
      // Valid example
      ['⚡️ Do something'],
    ])('should validate examples', async (validExample) => {
      await expect(lint(validExample)).resolves.toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [],
        }),
      );
    });
  });

  describe('body-leading-blank', () => {
    it('should return error when no blank line between subject and body', async () => {
      const result = await lint(`${anyValidHeader}\n${anyValidBody}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [
            expect.objectContaining({
              name: 'body-leading-blank',
            }),
          ],
        }),
      );
    });
  });

  describe('footer-leading-blank', () => {
    it('should return error when no blank line between body and footer', async () => {
      const result = await lint(`${anyValidHeader}\n\n${anyValidBody}\n${anyValidFooter}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [],
          valid: true,
          warnings: [
            expect.objectContaining({
              name: 'footer-leading-blank',
            }),
          ],
        }),
      );
    });
  });

  describe('header-max-length', () => {
    it('should return error when length > 100 characters', async () => {
      const longSubject = generateValidSubject(100 - `: `.length + 1);
      const result = await lint(`${anyGitmoji} : ${longSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [
            expect.objectContaining({
              name: 'header-max-length',
            }),
          ],
          valid: false,
          warnings: [],
        }),
      );
    });
  });

  describe('scope-case', () => {
    it('should return error if scope is not lower-case', async () => {
      const result = await lint(`${anyGitmoji} (Scope): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'scope-case',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });

  describe('subject-empty', () => {
    // FIXME: subject-empty should be enabled but there is a bug :
    // https://github.com/conventional-changelog/commitlint/issues/2761
    it('should return error if subject is empty', async () => {
      const result = await lint(`${anyGitmoji} `);

      expect(result).toEqual(
        expect.objectContaining({
          errors: [
            expect.objectContaining({
              name: 'subject-empty',
            }),
          ],
          valid: false,
          warnings: [],
        }),
      );

      expect(await lint(`${anyGitmoji} (${anyValidScope}): `)).toEqual(
        expect.objectContaining({
          errors: [
            expect.objectContaining({
              name: 'subject-empty',
            }),
          ],
          valid: false,
          warnings: [],
        }),
      );
    });
  });

  describe('subject-full-stop', () => {
    it('should return error if ending with .', async () => {
      const result = await lint(`${anyValidHeader}.`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'subject-full-stop',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });

  describe('type-case', () => {
    it('should return error when type is not lowercase', async () => {
      const result = await lint(`:Bug: ${`(${anyValidScope})`}: ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-case',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });

  describe('type-empty', () => {
    it('should return error if type is not empty', async () => {
      const result = await lint(` (${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-empty',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });
  describe('type-gitmoji-style', () => {
    it('should return error if type is not an unicode', async () => {
      const result = await lint(`:bug: (${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-gitmoji-style',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });
  describe('type-valid-gitmoji', () => {
    it('should return error if type is not an unicode', async () => {
      const result = await lint(`🥶 (${anyValidScope}): ${anyValidSubject}`);

      expect(result).toEqual(
        expect.objectContaining({
          errors: expect.arrayContaining([
            expect.objectContaining({
              name: 'type-valid-gitmoji',
            }),
          ]),
          valid: false,
          warnings: [],
        }),
      );
    });
  });
});
