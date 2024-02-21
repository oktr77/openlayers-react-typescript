import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; 
import LAYERS from 'data/layers';
import MAPS from 'data/maps';

const mock = new MockAdapter(axios);

mock.onGet('/layers').reply(200, LAYERS);

mock.onGet('/maps').reply(200, MAPS);
