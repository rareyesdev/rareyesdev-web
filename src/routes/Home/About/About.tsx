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
            started solving programming challenges using Pascal and later C++. After 3 years of
            training, I ranked #1 in my country's official contest to form the national team for the{' '}
            <ExternalLink href="https://ioinformatics.org/">
              International Olympiad in Informatics (IOI)
            </ExternalLink>
            . In 2009 I participated in the IOI and got a{' '}
            <ExternalLink href="https://stats.ioinformatics.org/search?q=Alejandro+Reyes&yf=2009&ys=2009">
              Bronze Medal
            </ExternalLink>
            .
          </p>
          <p>
            One year later I started my Computer Science college degree. While the IOI is the most
            important event for high school students; for universities with Computer Science
            programs, the{' '}
            <ExternalLink href="https://icpc.global/">ACM-ICPC World Finals</ExternalLink> is the
            most disputed event. This event unlike the IOI is organized by teams. So I joined two
            friends and after multiple local contests we got the first ticket to the 2012 ACM-ICPC
            World Finals. We did it again next year and got an{' '}
            <ExternalLink href="https://icpc.global/ICPCID/G5QG9UL9MV2P">
              Honorable Mention
            </ExternalLink>{' '}
            in both occasions.
          </p>
          <p>
            The ACM-ICPC event has a limit of two participations, after reaching the limit, I
            focused my attention back to college. During this time I also played a lot of{' '}
            <ExternalLink href="https://blog.dota2.com/">Dota 2</ExternalLink>.
          </p>
          <p>
            During my college stay I also did some Freelance work using C#, ASP.NET and Microsoft
            SQL Server. Then some mobile development, first using Xamarin and then Swift.
          </p>
          <p>
            After graduating I started focusing on the{' '}
            <ExternalLink href="https://github.com/facebook/react">React</ExternalLink> stack. I
            incorporated{' '}
            <ExternalLink href="https://github.com/microsoft/TypeScript">TypeScript</ExternalLink> a
            bit later and since then I haven't stopped learning about them.
          </p>
          <p>
            Even when I spend most of my time writing TypeScript, my second passion is Automation.
            Starting with{' '}
            <ExternalLink href="https://github.com/webpack/webpack">Webpack</ExternalLink> and{' '}
            <ExternalLink href="https://github.com/babel/babel">Babel</ExternalLink>, then combining{' '}
            <ExternalLink href="https://github.com/storybookjs/storybook">Storybook</ExternalLink>,
            <ExternalLink href="https://github.com/facebook/jest">Jest</ExternalLink> and{' '}
            <ExternalLink href="https://www.cypress.io/">Cypress</ExternalLink>. I like building
            CI/CD pipelines for every project I work on.{' '}
            <ExternalLink href="https://github.com/features/actions">Github Actions</ExternalLink>{' '}
            are my preferred way to go because I like to keep my list of dependencies short. I
            usually combine them with{' '}
            <ExternalLink href="https://github.com/lerna/lerna">Lerna</ExternalLink> or{' '}
            <ExternalLink href="https://github.com/semantic-release/semantic-release">
              Semantic Release
            </ExternalLink>
            .
          </p>
          <p>
            When I'm not writing code, I enjoy watching StaCraft 2 tournaments,{' '}
            <Link href="/favorite-readings">reading</Link>, and{' '}
            <ExternalLink href="https://brilliant.org/">exercising my brain</ExternalLink>.
          </p>
        </div>
      </TwoColumnLayout>
    </section>
  );
};

export default About;
