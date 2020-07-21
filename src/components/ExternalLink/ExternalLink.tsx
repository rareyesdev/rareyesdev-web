import { FunctionComponent, h } from 'preact';
import { JSXInternal } from 'preact/src/jsx';

interface Props extends JSXInternal.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  ariaLabel?: string;
}

const ExternalLink: FunctionComponent<Props> = ({ ariaLabel, children, ...rest }) => {
  return (
    <a {...rest} aria-label={ariaLabel} rel="noopener noreferrer" target="_blank">
      {children}
    </a>
  );
};

export default ExternalLink;
