export interface ILayer {
  name: string;
  type: 'XYZ' | 'GeoJSON';
  data_source: string;
}

const THUNDERFOREST_API_KEY = 'a4853816e5a94a20add52773dd75d15d';

const LAYERS: ILayer[] = [
  {
    name: 'ArcGIS World Imagery',
    type: 'XYZ',
    data_source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'ArcGIS Nat Geo',
    type: 'XYZ',
    data_source: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'ArcGIS Physical',
    type: 'XYZ',
    data_source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Google Maps',
    type: 'XYZ',
    data_source: 'http://mt{0-2}.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga',
  },
  {
    name: 'Thunderforest Pioneer',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'Thunderforest Spinal',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'Thunderforest Transport',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'Thunderforest Outdoors',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'Thunderforest Landscape',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'Thunderforest Atlas',
    type: 'XYZ',
    data_source: `https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=${THUNDERFOREST_API_KEY}`,
  },
  {
    name: 'MapTiler Outdoor',
    type: 'XYZ',
    data_source: 'https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB',
  },
  {
    name: 'OpenStreetMap',
    type: 'XYZ',
    data_source: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
];

export default LAYERS;
