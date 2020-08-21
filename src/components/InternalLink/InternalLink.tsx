import { FunctionComponent, h } from 'preact';
import { useRoute, LinkProps, Link } from 'wouter-preact';
import { joinClasses } from '@rareyes/library';

type Props = LinkProps & {
  rootClass?: string;
};

const InternalLink: FunctionComponent<Props> = ({ rootClass, ...props }) => {
  const [isActive] = useRoute(props.href ?? props.to);

  return (
    <Link {...props}>
      <a class={joinClasses({ active: isActive }, rootClass)}>{props.children}</a>
    </Link>
  );
};

export default InternalLink;
