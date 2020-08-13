import { Fragment, FunctionComponent, h } from 'preact';
import { Intro } from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';
import Footer from '../../components/Footer/Footer';
import Header from './Header/Header';
import { usePageTitle } from '../../utils/usePageTitle';

const Home: FunctionComponent = () => {
  usePageTitle('');
  return (
    <Fragment>
      <Header />
      <main>
        <Intro />
        <About />
        <Projects />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Home;
