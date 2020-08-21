import { FunctionComponent, h } from 'preact';
import { Link } from 'wouter-preact';
import { joinClasses, assertValue } from '@rareyes/library';
import style from './Header.css';
import { getRootScrollElement } from '../../../utils/getScrollElement';
import { useEffect, useState } from 'preact/hooks';
import { addScrollEventListener } from '../../../utils/addScrollEventListener';
import { getSizeHeaderHeight } from '../../../components/theme';
import HomeIcon from '../../../components/Icons/HomeIcon';
import Hidden from '../../../components/Hidden/Hidden';
import AddressCardIcon from '../../../components/Icons/AddressCardIcon';
import TasksIcon from '../../../components/Icons/TasksIcon';
import Navigation from '../../../components/Navigation/Navigation';

const Header: FunctionComponent = () => {
  const [headerStyle, setHeaderStyle] = useState<string | undefined>(undefined);
  const [activeLink, setActiveLink] = useState<'home' | 'about' | 'projects'>('home');

  useEffect(() => {
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');

    function trackHeaderStyle(scrollTop: number) {
      const sizeHeaderHeight = getSizeHeaderHeight();
      if (scrollTop < sizeHeaderHeight) {
        setHeaderStyle(undefined);
      } else if (scrollTop < (aboutSection?.offsetTop ?? 0) - sizeHeaderHeight) {
        setHeaderStyle(style.fadeOut);
      } else {
        setHeaderStyle(style.solid);
      }
    }

    function trackActiveLink(scrollTop: number) {
      if (scrollTop < (aboutSection?.offsetTop ?? 0) - getSizeHeaderHeight()) {
        setActiveLink('home');
      } else if (scrollTop < (projectsSection?.offsetTop ?? 0) - window.innerHeight / 2) {
        setActiveLink('about');
      } else {
        setActiveLink('projects');
      }
    }

    function onScroll(this: Element) {
      trackHeaderStyle(this.scrollTop);
      trackActiveLink(this.scrollTop);
    }

    const scrollElement = getRootScrollElement();
    trackHeaderStyle(scrollElement.scrollTop);

    return addScrollEventListener(scrollElement, onScroll);
  }, []);

  return (
    <header class={joinClasses(style.root, headerStyle)}>
      <nav>
        <ul class={style.list}>
          <li>
            <Link
              class={joinClasses({ active: activeLink === 'home' })}
              href="/"
              aria-label="Home - Intro"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(0);
              }}
            >
              <Hidden media="SmUp">
                <HomeIcon />
              </Hidden>
              <Hidden media="Xs">
                <span>Home</span>
              </Hidden>
            </Link>
          </li>
          <li>
            <Link
              class={joinClasses({ active: activeLink === 'about' })}
              href="/#about"
              aria-label="Home - About"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('about');
              }}
            >
              <Hidden media="SmUp">
                <AddressCardIcon />
              </Hidden>
              <Hidden media="Xs">
                <span>About</span>
              </Hidden>
            </Link>
          </li>
          <li>
            <Link
              class={joinClasses({ active: activeLink === 'projects' })}
              href="/#projects"
              aria-label="Home - Projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              <Hidden media="SmUp">
                <TasksIcon />
              </Hidden>
              <Hidden media="Xs">
                <span>Projects</span>
              </Hidden>
            </Link>
          </li>
        </ul>
      </nav>
      <Navigation />
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
        top = targetElement.offsetTop - getSizeHeaderHeight();
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
