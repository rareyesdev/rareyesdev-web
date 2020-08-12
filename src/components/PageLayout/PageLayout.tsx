import { Fragment, FunctionComponent, h } from 'preact';
import Footer from '../../components/Footer/Footer';
import style from './PageLayout.css';
import Header from '../../routes/Home/Header/Header';

const PageLayout: FunctionComponent = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div class={style.mainAndFooter}>
        <main class={style.main}>{children}</main>
        <Footer rootClass={style.footer} />
      </div>
    </Fragment>
  );
};

export default PageLayout;
