import { FunctionComponent, h } from 'preact';
import Quote from '../Quote/Quote';

import quotes from '../../assets/data/quotes.json';

const introSectionQuotes = quotes.featured;

interface Props {
  rootClass?: string;
}

const RandomQuote: FunctionComponent<Props> = ({ rootClass }) => {
  const randomIndex = Math.floor(Math.random() * introSectionQuotes.length);
  const { quote, author } = introSectionQuotes[randomIndex];
  return <Quote rootClass={rootClass} author={author} quote={quote} />;
};

export default RandomQuote;
