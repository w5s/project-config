// @ts-nocheck
test('empty', () => {
  expect(true).toBe(true);
});
describe('1st', () => {
  context('with 1', () => {
    it('should do', () => {
      expect(true).toBe(true);
    });
  });
  context('with 2', () => {
    it('should do', () => {
      expect(true).toBe(true);
    });
  });
});
