import { FunctionComponent, h } from 'preact';
import { Route, Router } from 'preact-router';

import Home from '../../routes/Home/Home';
import NotFoundPage from '../../routes/NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import style from './App.css';
import FavoriteBooks from '../../routes/FavoriteBooks/FavoriteBooks';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

const App: FunctionComponent = () => {
  return (
    <div id="app">
      <Header />
      <div class={style.mainWithFooter}>
        <main class={style.main}>
          <Router>
            <Route path="/" component={Home} />
            <Route path="/favorite-books" component={FavoriteBooks} />
            <NotFoundPage default />
          </Router>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
