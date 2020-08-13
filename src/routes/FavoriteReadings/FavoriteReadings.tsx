import { FunctionComponent, h } from 'preact';
import Shelf from './Shelf/Shelf';
import { usePageTitle } from '../../utils/usePageTitle';

const FavoriteReadings: FunctionComponent = () => {
  usePageTitle('Favorite Readings');
  return (
    <div>
      <h1>Favorite Readings</h1>
      <p>
        This is a list of my favorite readings (most are books with a few exceptions). It is
        organized in platinum, gold, silver and bronze. I don't put every book that I read, only the
        best ones make it.
      </p>
      <Shelf />
    </div>
  );
};

export default FavoriteReadings;
