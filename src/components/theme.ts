export function getSizeHeaderHeight() {
  return Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--sizeHeaderHeight')
      .replace('px', '') ?? 48
  );
}
