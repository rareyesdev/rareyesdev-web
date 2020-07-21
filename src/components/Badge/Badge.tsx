import { FunctionComponent, h } from 'preact';
import style from './Badge.css';
import { cx } from '../../utils/cx';

interface Props {
  rootClass?: string;
  text: string;
}

const Badge: FunctionComponent<Props> = ({ rootClass, text }) => {
  return <span class={cx(style.root, rootClass)}>{text}</span>;
};

export default Badge;
