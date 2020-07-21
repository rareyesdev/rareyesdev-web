import { FunctionComponent, h } from 'preact';
import style from './TwoColumnLayout.css';

const TwoColumnLayout: FunctionComponent = ({ children }) => {
  return <div class={style.root}>{children}</div>;
};

export default TwoColumnLayout;
