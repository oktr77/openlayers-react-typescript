import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'; 
import LAYERS from 'data/layers';

const mock = new MockAdapter(axios);

mock.onGet('/layers').reply(200, LAYERS);
