import { FunctionComponent, h } from 'preact';
import { Link } from 'wouter-preact';
import style from './Header.css';
import { assertValue } from '../../../utils/assertValue';
import { getRootScrollElement } from '../../../utils/getScrollElement';
import { useEffect, useState } from 'preact/hooks';
import { cx } from '../../../utils/cx';
import { addScrollEventListener } from '../../../utils/addScrollEventListener';
import { sizeHeaderHeight } from '../../../components/theme';
import InternalLink from '../../../components/InternalLink/InternalLink';

const Header: FunctionComponent = () => {
  const [state, setState] = useState<string | undefined>(undefined);

  useEffect(() => {
    const aboutSection = document.getElementById('about');

    function trackNavStyle(scrollTop: number) {
      if (scrollTop < sizeHeaderHeight) {
        setState(undefined);
      } else if (scrollTop < (aboutSection?.offsetTop ?? 0) - sizeHeaderHeight) {
        setState(style.fadeOut);
      } else {
        setState(style.solid);
      }
    }

    function onScroll(this: Element) {
      trackNavStyle(this.scrollTop);
    }

    const scrollElement = getRootScrollElement();
    trackNavStyle(scrollElement.scrollTop);

    return addScrollEventListener(scrollElement, onScroll);
  }, []);

  return (
    <header class={cx(style.root, state)}>
      <nav>
        <ul class={style.list}>
          <li>
            <InternalLink
              href="/"
              onClick={e => {
                e.preventDefault();
                scrollTo(0);
              }}
            >
              Home
            </InternalLink>
          </li>
          <li>
            <Link
              href="/#about"
              onClick={e => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              onClick={e => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

function scrollTo(target: string | number) {
  window.setTimeout(() => {
    let top = 0;
    if (typeof target === 'string') {
      const targetElement = document.getElementById(target);
      if (assertValue(targetElement)) {
        top = targetElement.offsetTop - sizeHeaderHeight;
      }
    } else {
      top = target;
    }

    const scrollElement = getRootScrollElement();
    scrollElement.scrollTo({
      top,
      behavior: 'smooth',
    });
  });
}
