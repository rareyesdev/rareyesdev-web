import { FunctionComponent, h } from 'preact';
import style from './Footer.css';
import { cx } from '../../utils/cx';

interface Props {
  rootClass?: string;
}

const Footer: FunctionComponent<Props> = ({ rootClass }) => {
  return (
    <footer class={cx(style.root, rootClass)}>
      <ul class={style.list}>
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
