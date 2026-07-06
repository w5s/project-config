export const TestEnum = Object.freeze({
  __internal__: 'internal',
  _protected: 'protected',
  default: 'default',
  MyValue1: 'MyValue1',
  MyValue2: 'MyValue2',
});

export const testDotNotation = TestEnum.default;

export class TestClass {
  value = TestEnum.default;
}
