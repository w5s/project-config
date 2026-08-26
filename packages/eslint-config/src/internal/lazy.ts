export function lazy<T>(fn: () => T): () => T {
  let isSet = false;
  let value: T | undefined;
  return () => {
    if (!isSet) {
      value = fn();
      isSet = true;
    }
    // eslint-disable-next-line ts/no-non-null-assertion
    return value!;
  };
}
