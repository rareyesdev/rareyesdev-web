import { FunctionComponent, h } from 'preact';
import style from './LazyPicture.css';
import { useEffect, useRef } from 'preact/hooks';
import { assertValue } from '../../utils/assertValue';

const LazyPicture: FunctionComponent = ({ children }) => {
  const rootElement = useRef<HTMLPictureElement>();
  useEffect(() => {
    if (assertValue(rootElement.current)) {
      return observe(rootElement.current);
    }
  }, []);
  return (
    <picture ref={rootElement} class={style.root}>
      {children}
    </picture>
  );
};

export default LazyPicture;

let instanceCount = 0;
let observer: IntersectionObserver | undefined;

function observe(picture: HTMLElement) {
  // Not supported, load all images immediately
  if (!('IntersectionObserver' in window)) {
    loadNow(picture);
    return;
  }

  if (instanceCount === 0) {
    // Initialize shared observer
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const picture = entry.target;
          loadNow(picture as HTMLElement);
          observer?.unobserve(picture);
          picture.classList.remove(style.root);
        }
      });
    });
  }

  observer?.observe(picture);
  ++instanceCount;

  return () => {
    if (--instanceCount === 0) {
      observer?.disconnect();
      observer = undefined;
    }
  };
}

function loadNow(picture: HTMLElement) {
  picture.lastElementChild?.addEventListener('load', function onLoad(this: HTMLElement) {
    picture.lastElementChild?.classList.add(style.fadeIn);
    this.removeEventListener('load', onLoad);
  });
  for (let i = 0; i < picture.children.length; ++i) {
    const child = picture.children[i] as HTMLSourceElement | HTMLImageElement;
    if (child.dataset.srcset) child.srcset = child.dataset.srcset;
  }
}
