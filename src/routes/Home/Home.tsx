import { FunctionComponent, h } from 'preact';
import { Intro } from './Intro/Intro';
import About from './About/About';
import Projects from './Projects/Projects';

const Home: FunctionComponent = () => {
  return (
    <main>
      <Intro />
      <About />
      <Projects />
    </main>
  );
};

export default Home;
