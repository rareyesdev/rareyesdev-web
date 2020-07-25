import { FunctionComponent, h } from 'preact';
import Shelf from './Shelf/Shelf';

const FavoriteBooks: FunctionComponent = () => {
  return (
    <div>
      <h1>Favorite Books</h1>
      <p>
        This is a list of my favorite books. It is organized in platinum, gold, silver and bronze. I
        don't put every book that I read, only the best ones make it.
      </p>
      <Shelf />
    </div>
  );
};

export default FavoriteBooks;
