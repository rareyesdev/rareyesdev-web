import { FunctionComponent, h } from 'preact';
import { Route, Switch } from 'wouter-preact';

import Home from '../../routes/Home/Home';
import NotFoundPage from '../../routes/NotFound/NotFound';
import FavoriteReadingsAsync from '../../routes/FavoriteReadingsAsync';
import FavoriteQuotesAsync from '../../routes/FavoriteQuotesAsync';
// import style from './App.css';
import PageLayout from '../PageLayout/PageLayout';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug');
}

const App: FunctionComponent = () => {
  return (
    <div id="app">
      <Switch>
        <Route path="/" component={Home} />
        <PageLayout>
          <Switch>
            <Route path="/favorite-readings" component={FavoriteReadingsAsync} />
            <Route path="/favorite-quotes" component={FavoriteQuotesAsync} />
            <NotFoundPage />
          </Switch>
        </PageLayout>
      </Switch>
    </div>
  );
};

export default App;
