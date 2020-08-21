import { FunctionComponent, h } from 'preact';
import { Route, Switch } from 'wouter-preact';

import Home from '../../routes/Home/Home';
import NotFoundPage from '../../routes/NotFound/NotFound';
import FavoriteReadingsAsync from '../../routes/FavoriteReadingsAsync';
import FavoriteQuotesAsync from '../../routes/FavoriteQuotesAsync';
import PageLayout from '../PageLayout/PageLayout';

if (module.hot) {
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
