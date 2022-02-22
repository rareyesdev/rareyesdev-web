import { FunctionComponent, h } from 'preact';
import { memo } from 'preact/compat';
import { ComposableMap, ZoomableGroup, Geographies, Geography } from 'react-simple-maps';

import style from './Map.css';

const geoUrl = '/assets/data/world-110m.json';

const visited = [
  'CUB',
  'MEX',
  'POL',
  'BUL',
  'BGR',
  'RUS',
  'DEU',
  'ITA',
  'CZE',
  'CHE',
  'ESP',
  'UKR',
  'USA',
];

interface Props {
  setTooltipContent: (content: string) => void;
}

const MapInternal: FunctionComponent<Props> = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip="" className={style.root} projectionConfig={{ scale: 200 }}>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltipContent(geo.properties.NAME);
                }}
                onMouseLeave={() => {
                  setTooltipContent('');
                }}
                style={{
                  default: {
                    fill: visited.includes(geo.properties.ISO_A3)
                      ? 'hsl(258, 38%, 45%)'
                      : 'hsl(240, 5%, 85%)',
                    outline: 'none',
                  },
                  hover: {
                    fill: visited.includes(geo.properties.ISO_A3)
                      ? 'hsl(258, 38%, 30%)'
                      : 'hsl(240, 5%, 45%)',
                    outline: 'none',
                  },
                  pressed: {
                    fill: 'black',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export const Map = memo(MapInternal);
