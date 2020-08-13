export function assertValue<T>(value: T | null | undefined): value is T {
  if ((value !== null && value !== undefined) || process.env.NODE_ENV === 'production') return true;
  throw new Error(`Failed value assertion. Value is ${String(value)}`);
}
