import { FunctionComponent, cloneElement, VNode } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './Hidden.css';

interface Props {
  media: 'Xs' | 'SmUp';
  children: VNode<unknown>;
}

const Hidden: FunctionComponent<Props> = ({ media, children }) => {
  return cloneElement(children, { class: joinClasses(children.props.class, style[media]) });
};

export default Hidden;
