let sizeHeaderHeight = readSizeHeaderHeightFromDOM();

/** Client code should not cache this value, it's memoized */
export function getSizeHeaderHeight() {
  return sizeHeaderHeight;
}

function readSizeHeaderHeightFromDOM() {
  const defaultValue = 48;
  if (typeof window === 'undefined') return defaultValue;
  return Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--sizeHeaderHeight')
      .replace('px', '') ?? defaultValue
  );
}

// Observe resize and update variables that depend on breakpoints
let timeout = 0;
function onResize() {
  if (!timeout) {
    timeout = window.setTimeout(() => {
      sizeHeaderHeight = readSizeHeaderHeightFromDOM();
      timeout = 0;
    }, 1000);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}
