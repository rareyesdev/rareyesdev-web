import { FunctionComponent, h } from 'preact';
import style from './Intro.css';
import ExternalLink from '../../../components/ExternalLink/ExternalLink';
import LinkedInIcon from '../../../components/Icons/LinkedInIcon';
import GitHubIcon from '../../../components/Icons/GitHubIcon';
import ArrowDownIcon from '../../../components/Icons/ArrowDownIcon';
import { assertValue } from '../../../utils/assertValue';
import { getRootScrollElement } from '../../../utils/getScrollElement';
import RandomQuote from '../../../components/RandomQuote/RandomQuote';
import CodeSandboxIcon from '../../../components/Icons/CodeSandboxIcon/CodeSandboxIcon';
import { getSizeHeaderHeight } from '../../../components/theme';

export const Intro: FunctionComponent = () => {
  return (
    <section id="intro" class={style.root}>
      <div class={style.content}>
        <div class={style.headlineAndDescription}>
          <h1 class={style.headline}>I'm Ramón Alejandro</h1>
          <h2 class={style.description}>
            A <span class={style.highlightText}>Senior Software Engineer</span>, focused on
            fullstack web development with <span class={style.highlightText}>React</span>,{' '}
            <span class={style.highlightText}>TypeScript</span>, and{' '}
            <span class={style.highlightText}>GraphQL</span>.
          </h2>
          <br />
          <ul class={style.iconList}>
            <li>
              <ExternalLink href="https://www.linkedin.com/in/rareyesdev" ariaLabel="LinkedIn">
                <LinkedInIcon class={style.platformIcon} />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://github.com/rareyesdev" ariaLabel="GitHub">
                <GitHubIcon class={style.platformIcon} />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://codesandbox.io/u/rareyesdev" ariaLabel="CodeSandbox">
                <CodeSandboxIcon />
              </ExternalLink>
            </li>
          </ul>
        </div>
        <RandomQuote rootClass={style.quote} />
      </div>
      <a
        class={style.arrowDownLink}
        href="#about"
        aria-label="arrow down"
        onClick={(e) => {
          e.preventDefault();
          const aboutSection = document.getElementById('about');
          if (assertValue(aboutSection)) {
            const scrollElement = getRootScrollElement();
            scrollElement.scrollTo({
              top: aboutSection.offsetTop - getSizeHeaderHeight(),
              behavior: 'smooth',
            });
          }
        }}
      >
        <ArrowDownIcon />
      </a>
    </section>
  );
};
