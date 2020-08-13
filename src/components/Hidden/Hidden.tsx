import { FunctionComponent, cloneElement, VNode } from 'preact';
import { cx } from '../../utils/cx';
import style from './Hidden.css';

interface Props {
  media: 'Xs' | 'SmUp';
  children: VNode<unknown>;
}

const Hidden: FunctionComponent<Props> = ({ media, children }) => {
  return cloneElement(children, { class: cx(children.props.class, style[media]) });
};

export default Hidden;
