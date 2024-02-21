import { Feature } from 'geojson';

export interface IMapListItem {
  name: string;
  description: string;
  features: Feature[];
}

const MAPS: IMapListItem[] = [
  {
    name: 'dinagat_islands',
    description: 'Dinagat Islands',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [125.6, 10.1]
        },
        properties: {
          name: 'Dinagat Islands'
        },
      },
    ],
  },
  {
    name: 'real_size_of_africa',
    description: 'Real Size of Africa',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [1000000, 0]
        },
        properties: {
          name: ''
        },
      },
    ],
  },
];

export default MAPS;
