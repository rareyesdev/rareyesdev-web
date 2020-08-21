import { FunctionComponent, h } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './Badge.css';

interface Props {
  rootClass?: string;
  text: string;
}

const Badge: FunctionComponent<Props> = ({ rootClass, text }) => {
  return <span class={joinClasses(style.root, rootClass)}>{text}</span>;
};

export default Badge;
