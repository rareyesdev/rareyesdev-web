import { FunctionComponent, h } from 'preact';
import style from './ShelfRow.css';
import MedalIcon from '../../../../components/Icons/MedalIcon';
import { cx } from '../../../../utils/cx';
import BookIcon from '../../../../components/Icons/BookIcon';

interface Reading {
  title: string;
}

interface Props {
  rootClass?: string;
  color: string;
  readings: Reading[];
}

const ShelfRow: FunctionComponent<Props> = ({ rootClass, color, readings }) => {
  return (
    <div class={cx(style.root, rootClass)}>
      <MedalIcon class={style.medalIcon} style={{ color }} />
      <ul class={style.list} role="list">
        {readings.map((reading) => (
          <li key={reading.title}>
            <BookIcon class={style.bookIcon} />
            <div class={style.title}>{reading.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShelfRow;
