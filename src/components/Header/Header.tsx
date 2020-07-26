import { FunctionComponent, h } from 'preact';
import { Link } from 'wouter-preact';
import style from './Header.css';

const Header: FunctionComponent = () => {
  return (
    <header class={style.root}>
      <nav class={style.bar}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
