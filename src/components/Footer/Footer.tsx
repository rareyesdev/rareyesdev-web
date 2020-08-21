import { FunctionComponent, h } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './Footer.css';
import LazyPicture from '../LazyPicture/LazyPicture';

const year = new Date().getFullYear();

interface Props {
  rootClass?: string;
}

const Footer: FunctionComponent<Props> = ({ rootClass }) => {
  return (
    <footer class={joinClasses(style.root, rootClass)}>
      <ul class={style.list}>
        <li id="copyright">© Copyright {year} Ramón Alejandro Reyes Fajardo</li>
        <li>
          <a href="https://fontawesome.com/license" rel="noopener noreferrer" target="_blank">
            Icons by Font Awesome
          </a>
        </li>
        <li class={style.perfLinks}>
          <a
            class={style.pageSpeedInsightsLink}
            href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fwww.rareyes.dev%2F&tab=mobile"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="PageSpeed Insights"
          >
            <LazyPicture>
              <img
                data-srcset="https://www.gstatic.com/images/icons/material/product/2x/pagespeed_64dp.png"
                alt="PageSpeed Insights"
                height="64"
                width="64"
              />
            </LazyPicture>
          </a>
          <a
            class={style.webDevMeasureLink}
            href="https://web.dev/measure/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="web.dev - Measure"
          >
            <LazyPicture>
              <img
                data-srcset="https://web.dev/images/lockup.svg"
                alt="web.dev"
                height="32"
                width="153"
              />
            </LazyPicture>
          </a>
        </li>
        <li>
          <a
            href="https://www.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Deploys by netlify"
          >
            <LazyPicture>
              <img
                data-srcset="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
                alt="Deploys by netlify"
                height="51"
                width="114"
              />
            </LazyPicture>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
