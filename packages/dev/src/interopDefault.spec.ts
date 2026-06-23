import { describe, it, expect } from 'vitest';
import { interopDefault } from './interopDefault.js';

describe(interopDefault, () => {
  it('should return the default export if available', async () => {
    const moduleWithDefault = { default: 'defaultExport' };
    expect(interopDefault(moduleWithDefault)).toBe('defaultExport');
  });

  it('should return the module itself if no default export is available', async () => {
    const moduleWithoutDefault = { name: 'moduleWithoutDefault' };
    expect(interopDefault(moduleWithoutDefault)).toBe(moduleWithoutDefault);
  });

  it('should handle promises correctly', async () => {
    const promise = Promise.resolve({ default: 'promiseDefault' });
    await expect(interopDefault(promise)).resolves.toBe('promiseDefault');

    const promiseWithoutDefault = Promise.resolve({ name: 'promiseWithoutDefault' });
    await expect(interopDefault(promiseWithoutDefault)).resolves.toEqual({ name: 'promiseWithoutDefault' });
  });

  it('should handle promise like', async () => {
    // eslint-disable-next-line unicorn/no-thenable
    const modulePromise = { then: (callback: any) => callback({ default: 'modulePromiseDefault' }) };
    await expect(interopDefault(modulePromise)).resolves.toBe('modulePromiseDefault');
  });

  it('should handle null and undefined', () => {
    expect(interopDefault(null)).toBe(null);
    expect(interopDefault(undefined)).toBe(undefined);
  });
});
