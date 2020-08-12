import { FunctionComponent, h } from 'preact';
import style from './Navigation.css';
import { cx } from '../../../utils/cx';
import InternalLink from '../../InternalLink/InternalLink';
import ArrowLeft from '../../Icons/ArrowLeft';

const Navigation: FunctionComponent = () => {
  return (
    <InternalLink rootClass={cx(style.root)} href="/">
      <ArrowLeft class={style.icon} />
    </InternalLink>
  );
};

export default Navigation;
