import { FunctionComponent, h } from 'preact';
import { Link } from 'wouter-preact';

import style from './About.css';
import LazyPicture from '../../../components/LazyPicture/LazyPicture';
import TwoColumnLayout from '../../../components/TwoColumnLayout/TwoColumnLayout';
import ExternalLink from '../../../components/ExternalLink/ExternalLink';

const About: FunctionComponent = () => {
  return (
    <section id="about" class={style.root}>
      <TwoColumnLayout>
        <div class={style.photoContainer}>
          <LazyPicture>
            <source type="image/webp" data-srcset="/assets/images/home/profile-600-50-2x.webp 2x" />
            <source type="image/jpeg" data-srcset="/assets/images/home/profile-600-89-2x.jpg 2x" />
            <img
              width="600"
              height="600"
              data-srcset="/assets/images/home/profile-600-89-2x.jpg 2x"
              alt="profile"
            />
          </LazyPicture>
        </div>
        <div>
          <h2>About Me</h2>
          <p>
            I've been programming since I was 14. I joined a programming club in high school and
            started solving programming challenges using Pascal and later C++. This led me to
            participate once in the{' '}
            <ExternalLink href="https://ioinformatics.org/">
              International Olympiad in Informatics (IOI)
            </ExternalLink>{' '}
            [
            <ExternalLink href="https://stats.ioinformatics.org/search?q=Alejandro+Reyes&yf=2009&ys=2009">
              Bronze Medal
            </ExternalLink>
            ], and twice in the{' '}
            <ExternalLink href="https://icpc.global/">ACM-ICPC World Finals</ExternalLink> [
            <ExternalLink href="https://icpc.global/ICPCID/G5QG9UL9MV2P">
              Honorable Mention
            </ExternalLink>
            ].
          </p>
          <p>
            I studied Computer Science. During this time in college, I also did some Freelance work
            using C#, ASP.NET, and Microsoft SQL Server. Then some mobile development, first using
            Xamarin and then Swift.
          </p>
          <p>
            After graduating I started focusing on the{' '}
            <ExternalLink href="https://github.com/facebook/react">React</ExternalLink> stack. I
            incorporated{' '}
            <ExternalLink href="https://github.com/microsoft/TypeScript">TypeScript</ExternalLink> a
            bit later and since then I haven't stopped learning about them.
          </p>
          <p>
            I spend most of my time writing Frontend code using{' '}
            <ExternalLink href="https://github.com/facebook/react">React</ExternalLink> and{' '}
            <ExternalLink href="https://github.com/microsoft/TypeScript">TypeScript</ExternalLink>.
            I like to set up the best Developer Experience possible, combining VSCode, ESLint,
            Prettier, Husky, Lint Staged, Conventional Commits, Semantic Versioning, etc. When
            needed, I create custom builds using{' '}
            <ExternalLink href="https://github.com/webpack/webpack">Webpack</ExternalLink> and{' '}
            <ExternalLink href="https://github.com/babel/babel">Babel</ExternalLink>. I also like to
            use a combination of{' '}
            <ExternalLink href="https://github.com/storybookjs/storybook">Storybook</ExternalLink>,{' '}
            <ExternalLink href="https://github.com/facebook/jest">Jest</ExternalLink> and,{' '}
            <ExternalLink href="https://www.cypress.io/">Cypress</ExternalLink> in order to create a
            good testing experience. On top of that, I believe that a CI/CD pipeline is a must-have.{' '}
            <ExternalLink href="https://github.com/features/actions">Github Actions</ExternalLink>{' '}
            is my preferred way to go but I've also used GitLab CI, Jenkins, and Travis CI.
          </p>
          <p>
            When I'm not writing code, I <Link href="/favorite-readings">read</Link>, hike, travel,
            work out, and explore new food places. I can eat Mexican every day 🌮
          </p>
        </div>
      </TwoColumnLayout>
    </section>
  );
};

export default About;
