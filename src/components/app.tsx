import { FunctionComponent, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import Home from '../routes/Home/Home';
import Profile from '../routes/profile';
import NotFoundPage from '../routes/notfound';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

const App: FunctionComponent = () => {
  const handleRoute = (e: RouterOnChangeArgs) => {
    false && console.log(e.url);
  };

  return (
    <div id="app">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/profile/" component={Profile} user="me" />
        <Route path="/profile/:user" component={Profile} />
        <NotFoundPage default />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
