import { FunctionComponent, h } from 'preact';

import data from './shelf.json';
import ShelfRow from './ShelfRow/ShelfRow';
import style from './Shelf.css';

type Row = keyof typeof colors;

const rowNames = Object.keys(data) as Row[];

const colors = {
  platinum: '#ffffff',
  gold: '#ffd300',
  silver: '#9a9a9a',
  bronze: '#ab7627',
};

const Shelf: FunctionComponent = () => {
  return (
    <div>
      {rowNames.map((rowName) => (
        <ShelfRow
          key={rowName}
          rootClass={style.row}
          readings={data[rowName]}
          color={colors[rowName]}
        />
      ))}
    </div>
  );
};

export default Shelf;
