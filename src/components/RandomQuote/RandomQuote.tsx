import { FunctionComponent, h } from 'preact';
import Quote from '../Quote/Quote';

import quotes from '../../assets/data/quotes.json';

interface Props {
  rootClass?: string;
}

const RandomQuote: FunctionComponent<Props> = ({ rootClass }) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];
  return <Quote rootClass={rootClass} author={author} quote={quote} />;
};

export default RandomQuote;
