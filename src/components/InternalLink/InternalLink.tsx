import { FunctionComponent, h } from 'preact';
import { useRoute, LinkProps, Link } from 'wouter-preact';
import { cx } from '../../utils/cx';

const InternalLink: FunctionComponent<LinkProps> = props => {
  const [isActive] = useRoute(props.href ?? props.to);

  return (
    <Link {...props}>
      <a class={cx({ active: isActive })}>{props.children}</a>
    </Link>
  );
};

export default InternalLink;
