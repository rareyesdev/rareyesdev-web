export function assertValue<T>(value: T | null | undefined): value is T {
  if (value !== null && value !== undefined) return true;
  throw new Error(`Failed value assertion. Value is ${String(value)}`);
}
