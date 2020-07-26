export function addScrollEventListener(element: Element, listener: (this: Element) => void) {
  const targetElement =
    element instanceof HTMLHtmlElement || element instanceof HTMLBodyElement ? window : element;
  const boundListener = listener.bind(element);
  targetElement.addEventListener('scroll', boundListener);
  return () => targetElement.removeEventListener('scroll', boundListener);
}
