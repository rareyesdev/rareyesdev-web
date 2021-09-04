import { Fragment, FunctionComponent, h } from 'preact';
import { useState } from 'preact/hooks';
import ReactTooltip from 'react-tooltip';

import { usePageTitle } from '../../utils/usePageTitle';
import { Map } from './Map/Map';

const VisitedCountries: FunctionComponent = () => {
  usePageTitle('Visited Countries');

  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <Fragment>
      <Map setTooltipContent={setTooltipContent} />
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </Fragment>
  );
};

export default VisitedCountries;
