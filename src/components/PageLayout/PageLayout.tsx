import { Fragment, FunctionComponent, h } from 'preact';
import Footer from '../../components/Footer/Footer';
import style from './PageLayout.css';
import Navigation from './Navigation/Navigation';

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      <div class={style.mainAndFooter}>
        <main class={style.main}>{children}</main>
        <Footer rootClass={style.footer} />
      </div>
    </Fragment>
  );
};

export default PageLayout;
