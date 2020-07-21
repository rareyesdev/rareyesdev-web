import { FunctionComponent, h } from 'preact';
import style from './BadgeCollection.css';
import Badge from '../Badge/Badge';

interface Props {
  badges: string[];
}

const BadgeCollection: FunctionComponent<Props> = ({ badges }) => {
  return (
    <div class={style.root}>
      {badges.map((badge) => (
        <Badge key={badge} rootClass={style.badge} text={badge} />
      ))}
    </div>
  );
};

export default BadgeCollection;
