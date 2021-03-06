import { FunctionComponent, h, JSX } from 'preact';
import { joinClasses } from '@rareyes/library';
import style from './Project.css';
import TwoColumnLayout from '../../../../components/TwoColumnLayout/TwoColumnLayout';
import ExternalLink from '../../../../components/ExternalLink/ExternalLink';
import ExternalLinkIcon from '../../../../components/Icons/ExternalLinkIcon';
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
    <div class={joinClasses(rootClass)}>
      <TwoColumnLayout>
        <div class={style.previewPictureContainer}>{previewPicture}</div>
        <div class={style.rightColumn}>
          <h2>
            <ExternalLink href={title.href}>
              {title.value} <ExternalLinkIcon class={style.externalLinkIcon} />
            </ExternalLink>
          </h2>
          {description}
          <BadgeCollection badges={badges} />
        </div>
      </TwoColumnLayout>
    </div>
  );
};

export default Project;
