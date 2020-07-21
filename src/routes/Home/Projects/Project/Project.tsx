import { FunctionComponent, h } from 'preact';
import style from './Project.css';
import TwoColumnLayout from '../../../../components/TwoColumnLayout/TwoColumnLayout';
import ExternalLink from '../../../../components/ExternalLink/ExternalLink';
import ExternalLinkIcon from '../../../../components/ExternalLinkIcon/ExternalLinkIcon';
import BadgeCollection from '../../../../components/BadgeCollection/BadgeCollection';

interface Props {
  rootClass?: string;
  previewPicture: JSX.Element;
  title: {
    value: string;
    href: string;
  };
  description: JSX.Element;
  badges: string[];
}

const Project: FunctionComponent<Props> = ({
  rootClass,
  previewPicture,
  title,
  description,
  badges,
}) => {
  return (
    <div class={rootClass}>
      <TwoColumnLayout>
        <div class={style.previewPictureContainer}>{previewPicture}</div>
        <div>
          <h2>
            <ExternalLink href={title.href}>
              {title.value} <ExternalLinkIcon />
            </ExternalLink>
          </h2>
          {description}
          <BadgeCollection badges={badges} />
          <hr class={style.delimiter} />
        </div>
      </TwoColumnLayout>
    </div>
  );
};

export default Project;
