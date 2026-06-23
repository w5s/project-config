export const TestEnum = Object.freeze({
  MyValue1: 'MyValue1',
  MyValue2: 'MyValue2',
  default: 'default',
  __internal__: 'internal',
  _protected: 'protected',
});

export const testDotNotation = TestEnum.default;

export class TestClass {
  value = TestEnum.default;
}
