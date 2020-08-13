import { FunctionComponent, h } from 'preact';
import style from './Quote.css';
import { cx } from '../../utils/cx';

interface Props {
  rootClass?: string;
  quote: string;
  author?: string;
}

const Quote: FunctionComponent<Props> = ({ rootClass, quote, author }) => {
  return (
    <div class={cx(style.root, rootClass)}>
      <div>"{quote}"</div>
      {author && <div class={style.author}>{author}</div>}
    </div>
  );
};

export default Quote;
