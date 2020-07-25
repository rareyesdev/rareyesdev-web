import { FunctionComponent, h } from 'preact';

import data from './shelf.json';
import ShelfRow from './ShelfRow/ShelfRow';
import style from './Shelf.css';

type Row = keyof typeof colors;

const rowNames = Object.keys(data) as Row[];
const colors = {
  platinum: '#cccccc',
  gold: '#C9B037',
  silver: '#B4B4B4',
  bronze: '#AD8A56',
};

const Shelf: FunctionComponent = () => {
  return (
    <div>
      {rowNames.map(rowName => (
        <ShelfRow
          key={rowName}
          icon={<span>{rowName}</span>}
          books={data[rowName]}
          color={colors[rowName]}
        />
      ))}
    </div>
  );
};

export default Shelf;
