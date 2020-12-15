import { FunctionComponent, h } from 'preact';
import Quote from '../Quote/Quote';

import quotes from '../../assets/data/quotes.json';

// Only some quotes will appear in the Intro section
const introSectionQuotes = quotes.slice(0, 9);

interface Props {
  rootClass?: string;
}

const RandomQuote: FunctionComponent<Props> = ({ rootClass }) => {
  const randomIndex = Math.floor(Math.random() * introSectionQuotes.length);
  const { quote, author } = introSectionQuotes[randomIndex];
  return <Quote rootClass={rootClass} author={author} quote={quote} />;
};

export default RandomQuote;
