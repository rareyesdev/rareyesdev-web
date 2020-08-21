import { FunctionComponent, h } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './Quote.css';

interface Props {
  rootClass?: string;
  quote: string;
  author?: string;
}

const Quote: FunctionComponent<Props> = ({ rootClass, quote, author }) => {
  return (
    <div class={joinClasses(style.root, rootClass)}>
      <div>"{quote}"</div>
      {author && <div class={style.author}>{author}</div>}
    </div>
  );
};

export default Quote;
