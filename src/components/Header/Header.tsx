import { FunctionComponent, h } from 'preact';
import style from './Header.css';

const Header: FunctionComponent = () => {
  return (
    <header class={style.root}>
      <nav>
        <ul>
          <li>
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
