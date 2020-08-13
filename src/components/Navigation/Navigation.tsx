import { FunctionComponent, h } from 'preact';
import style from './Navigation.css';
import InternalLink from '../InternalLink/InternalLink';
import { useLocation } from 'wouter-preact';
import { useEffect, useRef } from 'preact/hooks';
import HomeIcon from '../Icons/HomeIcon';

const Navigation: FunctionComponent = () => {
  const [location] = useLocation();
  const inputElement = useRef<HTMLInputElement>();
  const prevLocation = useRef<string | undefined>();

  const isHomePage = location === '/';

  // close the menu on any navigation
  useEffect(() => {
    if (prevLocation.current) {
      if (inputElement.current) inputElement.current.checked = false;
    } else {
      prevLocation.current = location;
    }
  }, [location]);

  // close the menu when clicking outside
  useEffect(() => {
    function onClick() {
      if (inputElement.current) inputElement.current.checked = false;
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <nav class={style.root} onClick={(e) => e.stopPropagation()}>
      {!isHomePage && (
        <InternalLink rootClass={style.home} href="/">
          <HomeIcon />
        </InternalLink>
      )}
      <div class={style.hamburger}>
        <input ref={inputElement} type="checkbox" id="menu" class={style.menuInput} />
        <label htmlFor="menu" class={style.menuLabel}>
          <div class={style.menuBars} />
        </label>
        <ul class={style.menuList}>
          <li>
            <InternalLink href="/favorite-readings">Favorite Readings</InternalLink>
          </li>
          <li>
            <InternalLink href="/favorite-quotes">Favorite Quotes</InternalLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
