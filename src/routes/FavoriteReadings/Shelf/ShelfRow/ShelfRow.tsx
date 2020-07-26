import { FunctionComponent, h } from 'preact';
import style from './ShelfRow.css';

interface Reading {
  title: string;
}

interface Props {
  icon: JSX.Element;
  color: string;
  readings: Reading[];
}

const ShelfRow: FunctionComponent<Props> = ({ icon, color, readings }) => {
  return (
    <div class={style.root} style={{ backgroundColor: color }}>
      <div>{icon}</div>
      <ul role="list">
        {readings.map(reading => (
          <li key={reading.title} class={style.title}>
            {reading.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShelfRow;
