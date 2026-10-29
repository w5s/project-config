export function lazy<T>(fn: () => T): () => T {
  let cached: T | undefined;
  return () => {
    cached ??= fn();
    return cached;
  };
}
