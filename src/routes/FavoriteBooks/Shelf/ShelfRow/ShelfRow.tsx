import { FunctionComponent, h } from 'preact';
import style from './ShelfRow.css';

interface Book {
  title: string;
}

interface Props {
  icon: JSX.Element;
  color: string;
  books: Book[];
}

const ShelfRow: FunctionComponent<Props> = ({ icon, color, books }) => {
  console.log(books);
  return (
    <div class={style.root} style={{ backgroundColor: color }}>
      <div class={style.container}>
        <div>{icon}</div>
        <ul>
          {books.map(book => (
            <li key={book.title}>{book.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShelfRow;
