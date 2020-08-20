let sizeHeaderHeight = readSizeHeaderHeightFromDOM();

export function getSizeHeaderHeight() {
  return sizeHeaderHeight;
}

function readSizeHeaderHeightFromDOM() {
  return Number(
    getComputedStyle(document.documentElement)
      .getPropertyValue('--sizeHeaderHeight')
      .replace('px', '') ?? 48
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

window.addEventListener('resize', onResize);
