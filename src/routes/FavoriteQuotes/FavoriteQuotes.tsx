import { FunctionComponent, h } from 'preact';
import style from './FavoriteQuotes.css';

import quotes from '../../assets/data/quotes.json';
import Quote from '../../components/Quote/Quote';
import { usePageTitle } from '../../utils/usePageTitle';

const FavoriteQuotes: FunctionComponent = () => {
  usePageTitle('Favorite Quotes');
  return (
    <div>
      <h1>Favorite Quotes</h1>
      {quotes.map(({ quote, author }) => (
        <Quote key={quote} rootClass={style.quote} quote={quote} author={author} />
      ))}
    </div>
  );
};

export default FavoriteQuotes;
