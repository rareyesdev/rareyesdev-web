import { FunctionComponent, h } from 'preact';
import style from './Footer.css';
import { cx } from '../../utils/cx';
import LazyPicture from '../LazyPicture/LazyPicture';

const year = new Date().getFullYear();

interface Props {
  rootClass?: string;
}

const Footer: FunctionComponent<Props> = ({ rootClass }) => {
  return (
    <footer class={cx(style.root, rootClass)}>
      <ul class={style.list}>
        <li id="copyright">© Copyright {year} Ramón Alejandro Reyes Fajardo</li>
        <li>
          <a href="https://fontawesome.com/license" rel="noopener noreferrer" target="_blank">
            Icons by Font Awesome
          </a>
        </li>
        <li class={style.pageSpeedImage}>
          <a
            href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.rareyes.dev%2F&tab=mobile"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LazyPicture>
              <img
                data-srcset="https://www.gstatic.com/images/icons/material/product/2x/pagespeed_64dp.png"
                alt="PageSpeed Insights"
              />
            </LazyPicture>
          </a>
        </li>
        <li>
          <a href="https://www.netlify.com/" rel="noopener noreferrer" target="_blank">
            <LazyPicture>
              <img
                data-srcset="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
                alt="Deploys by netlify"
              />
            </LazyPicture>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
