import { FunctionComponent, h } from 'preact';
import style from './FavoriteQuotes.css';

import quotes from './quotes.json';

const FavoriteQuotes: FunctionComponent = () => {
  return (
    <div class={style.root}>
      {quotes.map(({ title }) => (
        <div key={title} class={style.quote}>
          {title}
        </div>
      ))}
    </div>
  );
};

export default FavoriteQuotes;
