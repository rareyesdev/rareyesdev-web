import { FunctionComponent, h } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './ShelfRow.css';
import MedalIcon from '../../../../components/Icons/MedalIcon';
import BookIcon from '../../../../components/Icons/BookIcon';

interface Reading {
  title: string;
  url?: string;
}

interface Props {
  rootClass?: string;
  color: string;
  readings: Reading[];
}

const ShelfRow: FunctionComponent<Props> = ({ rootClass, color, readings }) => {
  return (
    <div class={joinClasses(style.root, rootClass)}>
      <MedalIcon class={style.medalIcon} style={{ color }} />
      <ul class={style.list} role="list">
        {readings.map((reading) => {
          const item = (
            <li key={reading.title}>
              <BookIcon class={style.bookIcon} />
              <div class={style.title}>{reading.title}</div>
            </li>
          );

          return reading.url ? (
            <a href={reading.url} target="_blank" rel="noopener noreferrer">
              {item}
            </a>
          ) : (
            item
          );
        })}
      </ul>
    </div>
  );
};

export default ShelfRow;
