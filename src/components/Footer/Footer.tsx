import { FunctionComponent, h } from 'preact';
import style from './Footer.css';

const Footer: FunctionComponent = () => {
  return (
    <footer class={style.root}>
      <ul>
        <li id="copyright">© Copyright 2020 Ramón Alejandro Reyes Fajardo</li>
        <li>
          <a href="https://fontawesome.com/license" rel="noopener noreferrer" target="_blank">
            Icons by Font Awesome
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
