type Option = string | null | undefined;

export function cx(...classes: Option[]) {
  return classes.filter(Boolean).join(' ');
}
