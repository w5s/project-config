import { main } from '.';

describe('index', () => {
  test('main', () => {
    expect(typeof main).toBe('function');
  });
});
